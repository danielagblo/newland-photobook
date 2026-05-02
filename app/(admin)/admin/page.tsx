"use client";

import { useState, useEffect } from "react";
import { uploadGalleryImage, getInquiries, getProducts, saveProduct, deleteProduct, getGalleryImages, deleteGalleryImage } from "./actions";
import Image from "next/image";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'inquiries' | 'products'>('gallery');
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  // Gallery State
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [isLoadingGallery, setIsLoadingGallery] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  
  // Inquiries State
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [isLoadingInquiries, setIsLoadingInquiries] = useState(false);
  
  // Products State
  const [products, setProducts] = useState<any[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [productPreviews, setProductPreviews] = useState<string[]>([]);

  useEffect(() => {
    if (activeTab === 'gallery') fetchGallery();
    if (activeTab === 'inquiries') fetchInquiries();
    if (activeTab === 'products') fetchProducts();
  }, [activeTab]);

  const fetchGallery = async () => {
    setIsLoadingGallery(true);
    const result = await getGalleryImages();
    if (result.success) setGalleryImages(result.images);
    setIsLoadingGallery(false);
  };

  const fetchInquiries = async () => {
    setIsLoadingInquiries(true);
    const result = await getInquiries();
    if (result.success) setInquiries(result.inquiries);
    setIsLoadingInquiries(false);
  };

  const fetchProducts = async () => {
    setIsLoadingProducts(true);
    const result = await getProducts();
    if (result.success) setProducts(result.products);
    setIsLoadingProducts(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  const handleProductFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setProductPreviews(newPreviews);
  };

  async function handleGallerySubmit(formData: FormData) {
    setIsUploading(true);
    setMessage(null);
    const result = await uploadGalleryImage(formData);
    if (result.success) {
      setMessage({ type: 'success', text: `Archived ${result.urls?.length} new visual works.` });
      setPreviews([]);
      fetchGallery();
      (document.getElementById('gallery-form') as HTMLFormElement).reset();
    } else {
      setMessage({ type: 'error', text: result.error || "Laboratory error." });
    }
    setIsUploading(false);
  }

  async function handleDeleteGallery(id: string) {
    if (confirm("Remove this image from the archival gallery?")) {
      const result = await deleteGalleryImage(id);
      if (result.success) fetchGallery();
    }
  }

  async function handleProductSubmit(formData: FormData) {
    setIsUploading(true);
    const result = await saveProduct(formData);
    if (result.success) {
      setMessage({ type: 'success', text: "Product catalog updated." });
      setEditingProduct(null);
      setProductPreviews([]);
      fetchProducts();
      (document.getElementById('product-form') as HTMLFormElement).reset();
    } else {
      setMessage({ type: 'error', text: result.error || "Catalog error." });
    }
    setIsUploading(false);
  }

  async function handleDeleteProduct(id: string) {
    if (confirm("Permanently remove this product from the catalog?")) {
      const result = await deleteProduct(id);
      if (result.success) fetchProducts();
    }
  }

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 bg-(--background) text-(--foreground)">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[2px] bg-(--accent-primary)" />
                <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-(--accent-primary)">Laboratory Control</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display leading-tight">
                Studio <span className="vibrant-gradient-text italic">Command.</span>
              </h1>
              <p className="text-(--zinc-muted) text-lg font-light max-w-2xl leading-relaxed">
                Manage archival gallery assets, curate the product catalog, and review acquisition requests.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex bg-(--card-bg) p-1.5 rounded-2xl border border-(--border) shadow-xl">
              {(['gallery', 'products', 'inquiries'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab 
                    ? "bg-(--accent-primary) text-(--background) shadow-lg" 
                    : "text-(--zinc-muted) hover:text-(--accent-primary)"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {message && (
            <div className={`p-6 text-[10px] font-bold uppercase tracking-widest rounded-2xl border animate-in fade-in slide-in-from-top-2 ${
              message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}>
              {message.text}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-16 animate-in fade-in duration-700">
              <form
                id="gallery-form"
                action={handleGallerySubmit}
                className="bg-(--card-bg) p-8 md:p-16 space-y-12 rounded-[3rem] premium-card-shadow border border-(--border)"
              >
                <div className="space-y-6">
                  <span className="text-(--accent-primary) text-[10px] font-bold uppercase tracking-[0.4em]">Visual Ingestion</span>
                  <div className="relative group">
                    <input name="images" type="file" multiple accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <div className="border-2 border-dashed border-(--border) group-hover:border-(--accent-primary) rounded-[2rem] transition-all p-16 flex flex-col items-center justify-center space-y-6 bg-(--background)/50">
                      <div className="w-16 h-16 bg-(--accent-primary)/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-(--accent-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </div>
                      <p className="text-sm font-light text-(--zinc-muted) tracking-wide">Drag and drop high-res master files</p>
                    </div>
                  </div>
                </div>

                {previews.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-4">
                    {previews.map((url, i) => (
                      <div key={i} className="aspect-square relative overflow-hidden rounded-xl border border-(--border)">
                        <img src={url} alt="Preview" className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isUploading || previews.length === 0}
                    className={`px-12 py-5 font-bold text-[10px] uppercase tracking-[0.4em] rounded-full transition-all premium-card-shadow ${isUploading || previews.length === 0
                        ? 'bg-(--border) text-(--zinc-muted) cursor-not-allowed'
                        : 'modern-gradient text-white hover:scale-105 active:scale-95 shadow-lg shadow-(--accent-primary)/20'
                      }`}
                  >
                    {isUploading ? 'ARCHIVING...' : 'PUBLISH TO GALLERY'}
                  </button>
                </div>
              </form>

              {/* Gallery List */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-(--accent-primary) text-[10px] font-bold uppercase tracking-[0.4em]">Archived Works</span>
                  <div className="h-[1px] flex-grow bg-(--border)" />
                </div>
                
                {isLoadingGallery ? (
                  <div className="py-20 text-center"><div className="w-8 h-8 border-4 border-(--accent-primary)/20 border-t-(--accent-primary) rounded-full animate-spin mx-auto"></div></div>
                ) : galleryImages.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {galleryImages.map((img) => (
                      <div key={img._id} className="group relative aspect-square rounded-2xl overflow-hidden border border-(--border) premium-card-shadow">
                        <img src={img.url} alt="Gallery" className="object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-(--background)/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button onClick={() => handleDeleteGallery(img._id)} className="p-4 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-all">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 bg-(--card-bg) rounded-[2.5rem] border border-(--border) text-center text-(--zinc-muted) font-light">
                    No visual works archived yet.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-12 animate-in fade-in duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Form Column */}
                <div className="lg:col-span-5">
                  <form
                    id="product-form"
                    action={handleProductSubmit}
                    className="bg-(--card-bg) p-8 md:p-12 space-y-8 rounded-[2.5rem] border border-(--border) premium-card-shadow sticky top-40"
                  >
                    <span className="text-(--accent-primary) text-[10px] font-bold uppercase tracking-[0.4em]">
                      {editingProduct ? 'Edit Catalog Entry' : 'New Catalog Entry'}
                    </span>
                    
                    <input type="hidden" name="id" value={editingProduct?._id || ''} />
                    <input type="hidden" name="currentImages" value={JSON.stringify(editingProduct?.images || [])} />

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-(--zinc-muted)">Product Title</label>
                        <input name="title" defaultValue={editingProduct?.title} placeholder="Optional Title" className="w-full bg-(--background) border border-(--border) p-4 rounded-xl text-sm outline-none focus:ring-1 focus:ring-(--accent-primary)" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-(--zinc-muted)">Price Label</label>
                        <input name="price" defaultValue={editingProduct?.price} placeholder="Optional Price (e.g. From $120)" className="w-full bg-(--background) border border-(--border) p-4 rounded-xl text-sm outline-none focus:ring-1 focus:ring-(--accent-primary)" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-(--zinc-muted)">Description</label>
                        <textarea name="description" defaultValue={editingProduct?.description} placeholder="Optional Description" rows={3} className="w-full bg-(--background) border border-(--border) p-4 rounded-xl text-sm outline-none focus:ring-1 focus:ring-(--accent-primary) resize-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-widest text-(--zinc-muted)">Archival Images (Multiple)</label>
                        <input name="images" type="file" multiple accept="image/*" onChange={handleProductFileChange} className="w-full text-xs text-(--zinc-muted) file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-bold file:uppercase file:tracking-widest file:bg-(--accent-primary) file:text-(--background) hover:file:opacity-90" />
                        
                        {(productPreviews.length > 0 || (editingProduct?.images && editingProduct.images.length > 0)) && (
                          <div className="grid grid-cols-4 gap-2 pt-4">
                            {(productPreviews.length > 0 ? productPreviews : editingProduct?.images || []).map((url: string, i: number) => (
                              <div key={i} className="aspect-square relative rounded-lg overflow-hidden border border-(--border)">
                                <img src={url} alt="Preview" className="object-cover w-full h-full" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button type="submit" disabled={isUploading} className="flex-grow py-5 modern-gradient text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl shadow-lg">
                        {isUploading ? 'SAVING...' : editingProduct ? 'UPDATE ENTRY' : 'CREATE ENTRY'}
                      </button>
                      {editingProduct && (
                        <button type="button" onClick={() => { setEditingProduct(null); setProductPreviews([]); }} className="px-6 border border-(--border) text-(--zinc-muted) rounded-2xl hover:text-(--accent-primary)">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* List Column */}
                <div className="lg:col-span-7 space-y-6">
                  {isLoadingProducts ? (
                    <div className="p-20 text-center"><div className="w-8 h-8 border-4 border-(--accent-primary)/20 border-t-(--accent-primary) rounded-full animate-spin mx-auto"></div></div>
                  ) : products.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {products.map((p) => (
                        <div key={p._id} className="bg-(--card-bg) p-6 rounded-[2rem] border border-(--border) flex gap-6 items-center group">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-(--background)">
                            {p.images && p.images.length > 0 ? (
                              <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-(--zinc-muted) text-[8px] font-bold uppercase tracking-widest text-center px-2">No Image</div>
                            )}
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-lg font-display text-(--foreground)">{p.title || "Untitled Product"}</h4>
                            {p.price && <p className="text-[10px] font-bold text-(--accent-primary) uppercase tracking-widest mb-1">{p.price}</p>}
                            {p.description && <p className="text-xs text-(--zinc-muted) font-light line-clamp-2">{p.description}</p>}
                            {p.images && p.images.length > 1 && (
                              <p className="text-[8px] font-bold text-(--accent-primary) uppercase tracking-tighter mt-1">+{p.images.length - 1} More Images</p>
                            )}
                          </div>
                          <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => { setEditingProduct(p); setProductPreviews([]); }} className="p-3 bg-(--background) rounded-full hover:text-(--accent-primary) transition-colors shadow-sm border border-(--border)">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            </button>
                            <button onClick={() => handleDeleteProduct(p._id)} className="p-3 bg-(--background) rounded-full hover:text-red-400 transition-colors shadow-sm border border-(--border)">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-20 bg-(--card-bg) rounded-[2.5rem] border border-(--border) text-center text-(--zinc-muted) font-light">
                      No archival products defined.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-8 animate-in fade-in duration-700">
              {isLoadingInquiries ? (
                <div className="p-20 text-center">
                  <div className="w-8 h-8 border-4 border-(--accent-primary)/20 border-t-(--accent-primary) rounded-full animate-spin mx-auto"></div>
                </div>
              ) : inquiries.length > 0 ? (
                <div className="grid gap-8">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry._id} className="bg-(--card-bg) p-8 md:p-12 rounded-[2.5rem] border border-(--border) premium-card-shadow space-y-8">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-4">
                            <h3 className="text-2xl font-display text-(--foreground)">{inquiry.name}</h3>
                            <span className="px-5 py-2 bg-(--accent-primary) text-(--background) text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-(--accent-primary)/20">
                              {inquiry.projectType}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-6 text-(--zinc-muted) font-light text-sm tracking-wide">
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-(--accent-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                              <span>{inquiry.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-(--accent-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.172a3 3 0 01.828-2.12l.707-.707a1 1 0 011.414 0L8 4.414a1 1 0 010 1.414L6.414 7.414a1 1 0 000 1.414L8.586 11l.707.707a1 1 0 010 1.414l-2.12 2.12a3 3 0 01-4.244 0l-2.12-2.12a3 3 0 010-4.244l2.12-2.12z" /></svg>
                              <span>{inquiry.phone}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-left md:text-right space-y-1 bg-(--background) p-4 rounded-2xl border border-(--border)">
                          <p className="text-[10px] font-bold text-(--accent-primary) uppercase tracking-widest">
                            {new Date(inquiry.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </p>
                          <p className="text-[10px] font-bold text-(--zinc-muted) uppercase tracking-widest opacity-60">
                            {new Date(inquiry.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>

                      <div className="bg-(--background) p-8 rounded-[2rem] border border-(--border) relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-(--accent-primary)" />
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-(--zinc-muted) block mb-6">Archival Acquisition Brief</span>
                        <p className="text-(--foreground) text-lg font-light leading-relaxed whitespace-pre-wrap">
                          {inquiry.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-(--card-bg) p-20 rounded-[3rem] border border-(--border) text-center space-y-6">
                  <div className="w-16 h-16 bg-(--background) rounded-full flex items-center justify-center mx-auto border border-(--border)">
                    <svg className="w-8 h-8 text-(--zinc-muted)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 00-2 2H6a2 2 0 00-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                  </div>
                  <p className="text-(--zinc-muted) font-light tracking-wide">No acquisition requests recorded in the laboratory logs.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
