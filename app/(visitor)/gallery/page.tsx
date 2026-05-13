"use client";

import { useEffect, useState } from "react";
import { getGalleryImages } from "@/app/(admin)/admin/actions";
import Image from "next/image";

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    setIsLoading(true);
    const result = await getGalleryImages();
    if (result.success && result.images) {
      setImages(result.images.map((img: any) => ({
        src: img.url,
        title: img.title || "",
        id: img._id
      })));
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground) pb-32">
      <main className="pt-32 md:pt-40 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl space-y-8 md:space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 lg:gap-12 text-center lg:text-left mb-12">
            <div className="space-y-3">
              <span className="text-(--accent-primary) text-[11px] font-bold uppercase tracking-[0.8em]">Gallery</span>
              <h1 className="text-3xl md:text-6xl font-display tracking-tighter leading-tight">
                Visual <br /><span className="vibrant-gradient-text italic">Chronicles.</span>
              </h1>
            </div>
            <p className="text-(--zinc-muted) max-w-sm text-lg md:text-xl font-light leading-relaxed">
              A dynamic showcase of our laboratory's commitment to high-fidelity color and contemporary archival standards.
            </p>
          </div>

          {isLoading ? (
            <div className="py-40 text-center">
              <div className="w-12 h-12 border-4 border-(--accent-primary)/20 border-t-(--accent-primary) rounded-full animate-spin mx-auto"></div>
            </div>
          ) : images.length > 0 ? (
            <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className="break-inside-avoid group cursor-pointer mb-4 relative overflow-hidden rounded-xl border border-(--border) premium-card-shadow"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.title || "Archival Work"}
                    className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-(--accent-primary)/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-40 text-center bg-(--card-bg) rounded-[3rem] border border-(--border)">
               <p className="text-(--zinc-muted) font-light tracking-widest uppercase text-xs">Laboratory gallery is currently being curated.</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-(--background)/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in duration-500" 
            />
            <button 
              className="absolute top-0 right-0 m-4 p-4 text-(--zinc-muted) hover:text-(--accent-primary) transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
