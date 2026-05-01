"use client";

import { useState } from "react";
import { uploadGalleryImage } from "./actions";
import { useTheme } from "../components/ThemeProvider";

export default function AdminPage() {
  const { theme } = useTheme();
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);

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
    <div className="min-h-screen pt-40 pb-24 px-12 bg-[var(--background)]">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-serif leading-tight">
              Gallery <span className="italic">Management</span>.
            </h1>
            <p className="text-[var(--zinc-muted)] text-lg font-light max-w-2xl">
              Upload new archival works to the public gallery. Images will be automatically optimized for high-definition clarity and stored securely.
            </p>
          </div>

          {/* Upload Form */}
          <form 
            id="upload-form"
            action={handleSubmit} 
            className="glass-panel p-12 space-y-10 border border-[var(--border)]"
          >
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Select High-Res Images</label>
              <div className="relative group">
                <input 
                  name="images"
                  type="file" 
                  multiple 
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="border-2 border-dashed border-[var(--border)] group-hover:border-gold transition-luxury p-16 flex flex-col items-center justify-center space-y-4">
                  <svg className="w-10 h-10 text-[var(--zinc-muted)] group-hover:text-gold transition-luxury" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <p className="text-sm font-light text-[var(--zinc-muted)]">Drag and drop or click to browse</p>
                </div>
              </div>
            </div>

            {/* Previews */}
            {previews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {previews.map((url, i) => (
                  <div key={i} className="aspect-square relative overflow-hidden border border-[var(--border)]">
                    <img src={url} alt="Preview" className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
            )}

            {/* Feedback Message */}
            {message && (
              <div className={`p-6 text-sm font-medium border ${message.type === 'success' ? 'bg-green-500/5 border-green-500/20 text-green-500' : 'bg-red-500/5 border-red-500/20 text-red-500'}`}>
                {message.text}
              </div>
            )}

            <div className="flex justify-end">
              <button 
                type="submit"
                disabled={isUploading || previews.length === 0}
                className={`px-12 py-5 font-black text-xs uppercase tracking-[0.3em] transition-luxury shadow-2xl ${
                  isUploading || previews.length === 0
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : 'bg-gold text-charcoal hover:bg-white hover:shadow-gold/20'
                }`}
              >
                {isUploading ? 'Processing...' : 'Publish to Gallery'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
