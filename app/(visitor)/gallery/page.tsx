import { getGalleryImages } from "@/app/(admin)/admin/actions";

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
  let images: any[] = [];

  const result = await getGalleryImages();
  if (result.success && result.images) {
    images = result.images.map((img: any) => ({
      src: img.url,
      title: img.title || "",
      id: img._id
    }));
  }

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground) pb-32">

      <main className="pt-24 md:pt-32 px-6 md:px-12">
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

          {images.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {images.map((img: { src: string; title: string }, i: number) => (
                <div key={i} className="break-inside-avoid group cursor-pointer mb-4">
                  <img
                    src={img.src}
                    alt={img.title || "Archival Work"}
                    className="w-full h-auto object-contain transition-opacity duration-1000 hover:opacity-80"
                  />
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
