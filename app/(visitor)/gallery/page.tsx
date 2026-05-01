import Image from "next/image";
import dbConnect from "@/lib/db";
import GalleryImage from "@/lib/models/GalleryImage";

export default async function GalleryPage() {
  let images = [
    { src: "/images/hero-printer.png", title: "Chromatic Master" },
    { src: "/images/service-photobook.png", title: "Modern Album" },
    { src: "/images/service-framing.png", title: "Vibrant Frame" },
    { src: "/images/service-canvas.png", title: "Neon Canvas" },
    { src: "/images/hero-editorial.png", title: "Studio Series" },
    { src: "/images/print-cut.png", title: "Precision Output" },
  ];

  try {
    await dbConnect();
    const dbImages = await GalleryImage.find({}).sort({ createdAt: -1 });

    if (dbImages && dbImages.length > 0) {
      images = dbImages.map((img: any) => ({
        src: img.url,
        title: img.title
      }));
    }
  } catch (error) {
    console.error("Failed to fetch gallery images from DB, using fallbacks:", error);
  }

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground) pb-32">

      <main className="pt-32 md:pt-48 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl space-y-16 md:space-y-24">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 lg:gap-12 text-center lg:text-left">
            <div className="space-y-6">
              <span className="text-(--accent-primary) text-[11px] font-bold uppercase tracking-[0.8em]">Gallery</span>
              <h1 className="text-4xl md:text-9xl font-display tracking-tighter leading-tight">
                Visual <br /><span className="vibrant-gradient-text italic">Chronicles.</span>
              </h1>
            </div>
            <p className="text-slate-500 max-w-sm text-lg md:text-xl font-light leading-relaxed">
              A dynamic showcase of our laboratory's commitment to high-fidelity color and contemporary archival standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {images.map((img: { src: string; title: string }, i: number) => (
              <div key={i} className="group cursor-pointer space-y-8 bg-white p-4 rounded-3xl premium-card-shadow transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="flex justify-between items-center px-4 pb-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.4em] text-slate-300">#0{i + 1}</span>
                    <h3 className="text-2xl font-display text-slate-800 group-hover:text-(--accent-primary) transition-colors duration-300">{img.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-(--accent-primary) group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}
