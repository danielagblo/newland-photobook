"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getProducts } from "@/app/(admin)/admin/actions";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await getProducts();
    if (result.success && result.products) {
      setProducts(result.products);
    }
    setIsLoading(false);
  };

  const handleOrder = (product: any) => {
    setSelectedProduct(product);
    setIsOrdered(false);
  };

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectType: `Product Order: ${selectedProduct.title || "Untitled"}`,
          message: `Product: ${selectedProduct.title || "Untitled"}\nPrice: ${selectedProduct.price || "N/A"}\n\nClient Message:\n${formData.message}`
        })
      });

      if (response.ok) {
        setIsOrdered(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setSelectedProduct(null);
          setIsOrdered(false);
        }, 3000);
      } else {
        alert("Failed to send order request. Please try again.");
      }
    } catch (error) {
      console.error("Order error:", error);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground) pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="mb-10 space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-(--accent-primary)" />
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-(--accent-primary)">Archival Catalog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display tracking-tighter leading-tight">
            The <span className="vibrant-gradient-text italic">Collection.</span>
          </h1>
          <p className="text-(--zinc-muted) max-w-2xl text-lg font-light leading-relaxed">
            Every piece is crafted in our laboratory with the highest standards of preservation. Selected by visualists, for visualists.
          </p>
        </header>

        {isLoading ? (
          <div className="py-40 text-center">
            <div className="w-12 h-12 border-4 border-(--accent-primary)/20 border-t-(--accent-primary) rounded-full animate-spin mx-auto"></div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product._id} className="group relative bg-(--card-bg) rounded-3xl border border-(--border) overflow-hidden premium-card-shadow transition-all duration-700 hover:-translate-y-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-(--background)">
                  {product.images && product.images.length > 0 ? (
                    <>
                      <Image
                        src={product.images[0]}
                        alt={product.title || "Product"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                      />
                      {product.images.length > 1 && (
                        <div className="absolute bottom-4 right-4 glass-vibrant px-3 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest text-(--accent-primary) z-10">
                          +{product.images.length - 1} More
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-(--zinc-muted) uppercase tracking-widest text-[10px]">No Image Available</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-(--background) via-transparent to-transparent opacity-60" />
                  {product.price && (
                    <div className="absolute top-6 right-6">
                      <span className="glass-vibrant px-4 py-2 rounded-full text-[10px] font-bold text-(--accent-primary) tracking-widest uppercase">
                        {product.price}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display text-(--foreground) group-hover:text-(--accent-primary) transition-colors">
                      {product.title || "Untitled Work"}
                    </h3>
                    {product.description && (
                      <p className="text-sm text-(--zinc-muted) font-light leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleOrder(product)}
                    className="w-full py-4 modern-gradient text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-(--accent-primary)/20"
                  >
                    ORDER INQUIRY
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center bg-(--card-bg) rounded-[3rem] border border-(--border)">
            <p className="text-(--zinc-muted) font-light tracking-widest uppercase text-xs">Catalog is currently undergoing curation.</p>
          </div>
        )}
      </div>

      {/* Order Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-(--background)/90 backdrop-blur-2xl" onClick={() => !isSubmitting && setSelectedProduct(null)} />
          
          <div className="relative w-full max-w-4xl bg-(--card-bg) rounded-[2.5rem] border border-(--border) p-8 md:p-12 premium-card-shadow animate-float flex flex-col lg:flex-row gap-12 max-h-[90vh] overflow-y-auto">
            {!isOrdered ? (
              <>
                {/* Images Preview in Modal */}
                <div className="lg:w-1/2 space-y-6">
                   <div className="relative aspect-square rounded-2xl overflow-hidden border border-(--border)">
                      {selectedProduct.images && selectedProduct.images.length > 0 ? (
                        <Image src={selectedProduct.images[0]} alt={selectedProduct.title || "Product"} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-(--background) text-(--zinc-muted) text-[10px] uppercase tracking-widest">No Image</div>
                      )}
                   </div>
                   {selectedProduct.images && selectedProduct.images.length > 1 && (
                     <div className="grid grid-cols-4 gap-4">
                        {selectedProduct.images.slice(1, 5).map((img: string, i: number) => (
                          <div key={i} className="aspect-square relative rounded-xl overflow-hidden border border-(--border)">
                            <Image src={img} alt="Thumbnail" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity" />
                          </div>
                        ))}
                     </div>
                   )}
                </div>

                <div className="lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <span className="text-(--accent-primary) text-[10px] font-bold uppercase tracking-[0.4em]">Order Request</span>
                    <h2 className="text-3xl md:text-5xl font-display">{selectedProduct.title || "Untitled Work"}</h2>
                    {selectedProduct.price && <p className="text-(--accent-primary) font-bold tracking-widest uppercase text-sm">{selectedProduct.price}</p>}
                    {selectedProduct.description && <p className="text-(--zinc-muted) text-sm font-light leading-relaxed">{selectedProduct.description}</p>}
                  </div>

                  <form onSubmit={submitOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[8px] font-bold uppercase tracking-widest text-(--zinc-muted)">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-(--background) border border-(--border) p-4 rounded-xl outline-none focus:ring-2 focus:ring-(--accent-primary) text-sm" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[8px] font-bold uppercase tracking-widest text-(--zinc-muted)">Email</label>
                      <input 
                        required 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-(--background) border border-(--border) p-4 rounded-xl outline-none focus:ring-2 focus:ring-(--accent-primary) text-sm" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[8px] font-bold uppercase tracking-widest text-(--zinc-muted)">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-(--background) border border-(--border) p-4 rounded-xl outline-none focus:ring-2 focus:ring-(--accent-primary) text-sm" 
                        placeholder="+233 XX XXX XXXX" 
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[8px] font-bold uppercase tracking-widest text-(--zinc-muted)">Special Instructions</label>
                      <textarea 
                        rows={3} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-(--background) border border-(--border) p-4 rounded-xl outline-none focus:ring-2 focus:ring-(--accent-primary) resize-none text-sm" 
                        placeholder="Quantity, specific dimensions, or material preferences..." 
                      />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="md:col-span-2 py-5 modern-gradient text-white font-bold uppercase tracking-[0.5em] text-[10px] rounded-2xl shadow-xl shadow-(--accent-primary)/20 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? 'PROCESSING...' : 'SUBMIT REQUEST'}
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="w-full text-center py-20 space-y-8 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-display text-green-400">Request Sent.</h2>
                  <p className="text-(--zinc-muted) font-light">Our lab manager will contact you shortly regarding <br /><span className="text-(--accent-primary) font-bold">{selectedProduct.title || "Untitled Work"}</span>.</p>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => !isSubmitting && setSelectedProduct(null)}
              className="absolute top-8 right-8 text-(--zinc-muted) hover:text-(--accent-primary) transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
