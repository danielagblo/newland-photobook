import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const images = [
    { src: "/images/hero-printer.png", title: "Master Print" },
    { src: "/images/service-photobook.png", title: "Wedding Album" },
    { src: "/images/service-framing.png", title: "Exhibition Frame" },
    { src: "/images/service-canvas.png", title: "Abstract Canvas" },
    { src: "/images/hero-editorial.png", title: "Bespoke Book" },
    { src: "/images/print-cut.png", title: "Precision Cut" },
  ];

  return (
    <div className="min-h-screen bg-charcoal text-off-white selection:bg-gold selection:text-charcoal">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full glass-panel py-5 px-12 flex justify-between items-center border-b border-white/5">
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 gold-bg-gradient flex items-center justify-center rounded-sm">
            <span className="text-charcoal font-black text-xl">N</span>
          </div>
          <span className="text-xl font-black tracking-tighter gold-gradient">NEWLAND</span>
        </Link>
        <Link href="/" className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-gold transition-luxury">
          Back to Home
        </Link>
      </nav>

      <main className="pt-40 pb-24 px-12">
        <div className="container mx-auto max-w-7xl space-y-16">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-serif text-off-white leading-tight">
              The <span className="italic">Gallery</span>.
            </h1>
            <p className="text-zinc-500 max-w-xl text-lg font-light leading-relaxed">
              A curated collection of our finest work, showcasing the intersection of art and archival precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-luxury duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-luxury">
                  <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2">0{i + 1}</p>
                  <h3 className="text-xl font-serif text-off-white">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-24 px-12 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto max-w-7xl text-center space-y-8">
          <p className="text-zinc-500 text-xs tracking-widest uppercase">© 2024 Newland Photobook. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
