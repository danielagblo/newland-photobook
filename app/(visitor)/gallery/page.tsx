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

    </div>
  );
}
