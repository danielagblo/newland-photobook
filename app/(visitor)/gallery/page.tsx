import dbConnect from "@/lib/db";
import GalleryImage from "@/lib/models/GalleryImage";

export default async function GalleryPage() {
  let images: any[] = [];

  try {
    await dbConnect();
    const dbImages = await GalleryImage.find({}).sort({ createdAt: -1 });

    if (dbImages && dbImages.length > 0) {
      images = dbImages.map((img: any) => ({
        src: img.url,
        title: img.title || ""
      }));
    }
  } catch (error) {
    console.error("Failed to fetch gallery images from DB:", error);
  }

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground) pb-32">

      <main className="pt-24 md:pt-32 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl space-y-8 md:space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 lg:gap-12 text-center lg:text-left">
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

          {images.length > 0 ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {images.map((img: { src: string; title: string }, i: number) => (
                <div key={i} className="break-inside-avoid group cursor-pointer space-y-6 bg-(--card-bg) p-4 rounded-3xl border border-(--border) premium-card-shadow transition-all duration-500 hover:-translate-y-2 mb-8">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  {(img.title || true) && (
                    <div className="flex justify-between items-center px-2 pb-2">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold tracking-[0.4em] text-(--zinc-muted)">#0{i + 1}</span>
                        <h3 className="text-xl font-display text-(--foreground) group-hover:text-(--accent-primary) transition-colors duration-300">{img.title}</h3>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-(--background) flex items-center justify-center group-hover:bg-(--accent-primary) group-hover:text-(--background) transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  )}
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

    </div>
  );
}
