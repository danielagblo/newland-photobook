"use client";

import { useState, useEffect } from "react";
import { uploadGalleryImage, getInquiries } from "./actions";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'inquiries'>('gallery');
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [isLoadingInquiries, setIsLoadingInquiries] = useState(false);

  useEffect(() => {
    if (activeTab === 'inquiries') {
      fetchInquiries();
    }
  }, [activeTab]);

  const fetchInquiries = async () => {
    setIsLoadingInquiries(true);
    const result = await getInquiries();
    if (result.success) {
      setInquiries(result.inquiries);
    }
    setIsLoadingInquiries(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  async function handleSubmit(formData: FormData) {
    setIsUploading(true);
    setMessage(null);

    const result = await uploadGalleryImage(formData);

    if (result.success) {
      setMessage({ type: 'success', text: `Successfully uploaded ${result.urls?.length} images to the gallery.` });
      setPreviews([]);
      (document.getElementById('upload-form') as HTMLFormElement).reset();
    } else {
      setMessage({ type: 'error', text: result.error || "Something went wrong." });
    }

    setIsUploading(false);
  }

  return (
    <div className="min-h-screen pt-40 pb-24 px-12 bg-white text-slate-800">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-display leading-tight">
                Studio <span className="italic">Laboratory</span>.
              </h1>
              <p className="text-slate-500 text-lg font-light max-w-2xl">
                Archival management and laboratory controls. Manage gallery assets and review client inquiries.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-2xl">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'gallery' ? "bg-white shadow-sm text-indigo-600" : "text-slate-400 hover:text-slate-600"
                  }`}
              >
                Gallery
              </button>
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'inquiries' ? "bg-white shadow-sm text-indigo-600" : "text-slate-400 hover:text-slate-600"
                  }`}
              >
                Inquiries
              </button>
            </div>
          </div>

          {activeTab === 'gallery' ? (
            <div className="space-y-10 animate-in fade-in duration-700">
              <form
                id="upload-form"
                action={handleSubmit}
                className="bg-slate-50 p-12 space-y-10 rounded-[2.5rem] premium-card-shadow border border-slate-100"
              >
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600">Select High-Res Images</label>
                  <div className="relative group">
                    <input
                      name="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="border-2 border-dashed border-slate-200 group-hover:border-indigo-400 rounded-3xl transition-all p-16 flex flex-col items-center justify-center space-y-4 bg-white/50">
                      <svg className="w-10 h-10 text-slate-300 group-hover:text-indigo-400 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <p className="text-sm font-light text-slate-400">Drag and drop or click to browse archival works</p>
                    </div>
                  </div>
                </div>

                {previews.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                    {previews.map((url, i) => (
                      <div key={i} className="aspect-square relative overflow-hidden rounded-2xl shadow-md">
                        <img src={url} alt="Preview" className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                )}

                {message && (
                  <div className={`p-6 text-sm font-medium rounded-2xl border ${message.type === 'success' ? 'bg-green-50 border-green-100 text-green-600' : 'bg-red-50 border-red-100 text-red-600'}`}>
                    {message.text}
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isUploading || previews.length === 0}
                    className={`px-12 py-5 font-bold text-[10px] uppercase tracking-[0.3em] rounded-full transition-all premium-card-shadow ${isUploading || previews.length === 0
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'modern-gradient text-white hover:scale-105 active:scale-95 shadow-indigo-500/20'
                      }`}
                  >
                    {isUploading ? 'Processing...' : 'Publish to Gallery'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {isLoadingInquiries ? (
                <div className="p-20 text-center">
                  <div className="inline-block w-8 h-8 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                </div>
              ) : inquiries.length > 0 ? (
                <div className="grid gap-6">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry._id} className="bg-slate-50 p-6 md:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 premium-card-shadow space-y-6 md:space-y-8">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
                        <div className="space-y-3 w-full md:w-auto">
                          <div className="flex flex-col md:flex-row md:items-center gap-3">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 break-words">{inquiry.name}</h3>
                            <span className="inline-block w-fit px-4 py-1.5 bg-indigo-500 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-indigo-500/20">
                              {inquiry.projectType}
                            </span>
                          </div>
                          <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 text-slate-500 font-light text-sm">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span className="break-all">{inquiry.email}</span>
                            </div>
                            <span className="hidden md:block text-slate-200">|</span>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.172a3 3 0 01.828-2.12l.707-.707a1 1 0 011.414 0L8 4.414a1 1 0 010 1.414L6.414 7.414a1 1 0 000 1.414L8.586 11l.707.707a1 1 0 010 1.414l-2.12 2.12a3 3 0 01-4.244 0l-2.12-2.12a3 3 0 010-4.244l2.12-2.12z" />
                              </svg>
                              {inquiry.phone}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-left md:text-right space-y-1 shrink-0">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {new Date(inquiry.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </p>
                          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                            {new Date(inquiry.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 group-hover:w-2 transition-all" />
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 block mb-4">Project Brief</span>
                        <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed whitespace-pre-wrap">
                          {inquiry.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-50 p-20 rounded-[2.5rem] border border-slate-100 text-center space-y-4">
                  <svg className="w-12 h-12 text-slate-200 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 00-2 2H6a2 2 0 00-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p className="text-slate-400 font-light">No inquiries found in the laboratory logs.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
