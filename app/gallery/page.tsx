"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../components/ThemeProvider";

export default function GalleryPage() {
  const { theme, toggleTheme } = useTheme();
  const images = [
    { src: "/images/hero-printer.png", title: "Master Print" },
    { src: "/images/service-photobook.png", title: "Wedding Album" },
    { src: "/images/service-framing.png", title: "Exhibition Frame" },
    { src: "/images/service-canvas.png", title: "Abstract Canvas" },
    { src: "/images/hero-editorial.png", title: "Bespoke Book" },
    { src: "/images/print-cut.png", title: "Precision Cut" },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[var(--background)] text-[var(--foreground)] selection:bg-gold selection:text-charcoal">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full glass-panel py-5 px-12 flex justify-between items-center border-b border-[var(--border)] bg-[var(--nav-bg)]">
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 gold-bg-gradient flex items-center justify-center rounded-sm transition-luxury group-hover:rotate-12">
            <span className="text-charcoal font-black text-xl">N</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter gold-gradient">NEWLAND</span>
            <span className="text-[9px] font-bold tracking-[0.4em] opacity-50 uppercase">Photobook</span>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <button 
            onClick={toggleTheme}
            className="p-3 bg-[var(--border)] rounded-full hover:scale-110 transition-luxury"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
            ) : (
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>
          <Link href="/" className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-gold transition-luxury">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-12">
        <div className="container mx-auto max-w-7xl space-y-16">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">
              The <span className="italic">Gallery</span>.
            </h1>
            <p className="text-[var(--zinc-muted)] max-w-xl text-lg font-light leading-relaxed">
              A curated collection of our finest work, showcasing the intersection of art and archival precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-[var(--card-bg)] border border-[var(--border)]">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-luxury duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-luxury">
                  <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2">0{i + 1}</p>
                  <h3 className="text-xl font-serif">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-24 px-12 border-t border-[var(--border)] bg-[var(--background)]">
        <div className="container mx-auto max-w-7xl text-center space-y-8">
          <p className="text-[var(--zinc-muted)] text-xs tracking-widest uppercase">© 2024 Newland Photobook. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
