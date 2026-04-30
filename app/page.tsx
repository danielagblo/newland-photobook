import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal text-off-white selection:bg-gold selection:text-charcoal">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full glass-panel py-5 px-12 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 gold-bg-gradient flex items-center justify-center rounded-sm transition-luxury group-hover:rotate-12">
            <span className="text-charcoal font-black text-xl">N</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter gold-gradient">NEWLAND</span>
            <span className="text-[9px] font-bold tracking-[0.4em] opacity-50 uppercase">Photobook</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase">
          <a href="#" className="hover:text-gold transition-luxury relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
          </a>
          <a href="#printing" className="hover:text-gold transition-luxury relative group">
            Printing
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
          </a>
          <a href="#album-design" className="hover:text-gold transition-luxury relative group">
            Design
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
          </a>
          <a href="#portfolio" className="hover:text-gold transition-luxury relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
          </a>
        </div>
        <button className="gold-bg-gradient text-charcoal px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-luxury hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          Start Project
        </button>
      </nav>

      {/* Hero Section - Polished Side Layout */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        {/* Background Image with Enhanced Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-printer.png"
            alt="Professional Printer"
            fill
            className="object-cover opacity-50 scale-105 animate-ken-burns"
            priority
          />
          {/* Multi-layered Vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-12 relative z-20 max-w-7xl animate-fade-left pt-20">
          <div className="max-w-4xl space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <span className="h-[1px] w-12 bg-gold/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold/80">Legacy of Excellence • Since 1955</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-off-white leading-[1.2] tracking-tight">
                The Art of <br />
                <span className="italic gold-gradient">Preserving</span> <br className="lg:hidden" />
                Memories.
              </h1>

              <p className="text-zinc-400 text-base md:text-lg font-light tracking-wide max-w-xl leading-relaxed border-l border-gold/20 pl-8">
                Professional digital lab and bespoke album design. <br className="hidden md:block" />
                Elevating your photography into a timeless legacy with archival precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10 pt-4">
              <button className="group relative gold-bg-gradient text-charcoal px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-luxury hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:scale-105">
                Start Your Project
              </button>
              <a href="#portfolio" className="group flex items-center gap-4 text-off-white text-[10px] font-black uppercase tracking-[0.4em] transition-luxury">
                <span className="border-b border-white/20 group-hover:border-gold transition-luxury pb-1">View Portfolio</span>
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-luxury text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 animate-bounce">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-t from-gold to-transparent" />
        </div>
      </section>

      {/* Expertise Section - Boutique Minimalist Redesign */}
      <section id="printing" className="py-40 px-12 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
            <div className="space-y-6">
              <h2 className="text-gold text-[10px] font-black uppercase tracking-[0.5em]">The Services</h2>
              <h3 className="text-5xl md:text-7xl font-serif text-off-white leading-tight">
                Our <span className="italic">Expertise</span>.
              </h3>
            </div>
            <p className="text-zinc-500 max-w-sm text-lg font-light leading-relaxed">
              Archival quality and precision in every service, from the lab to your walls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
              <Image
                src="/images/service-photobook.png"
                alt="Custom Photobooks"
                fill
                className="object-cover transition-luxury duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-luxury group-hover:via-black/40" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <h4 className="text-3xl font-serif text-off-white tracking-tight">Custom <br />Photobooks</h4>
                <p className="text-zinc-300 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-luxury translate-y-4 group-hover:translate-y-0">
                  Bespoke, hand-bound albums crafted with archival materials to preserve your most precious memories.
                </p>
                <div className="w-8 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-700" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
              <Image
                src="/images/service-printing.png"
                alt="Digital Printing"
                fill
                className="object-cover transition-luxury duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-luxury group-hover:via-black/40" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <h4 className="text-3xl font-serif text-off-white tracking-tight">Digital <br />Printing</h4>
                <p className="text-zinc-300 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-luxury translate-y-4 group-hover:translate-y-0">
                  High-fidelity digital prints using museum-grade inkjet technology and professional archival paper.
                </p>
                <div className="w-8 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-700" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
              <Image
                src="/images/service-framing.png"
                alt="Professional Framing"
                fill
                className="object-cover transition-luxury duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-luxury group-hover:via-black/40" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <h4 className="text-3xl font-serif text-off-white tracking-tight">Professional <br />Framing</h4>
                <p className="text-zinc-300 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-luxury translate-y-4 group-hover:translate-y-0">
                  Expertly joined museum frames and archival mounting solutions to protect and elevate your photography.
                </p>
                <div className="w-8 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-700" />
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
              <Image
                src="/images/service-canvas.png"
                alt="Canvas Printing"
                fill
                className="object-cover transition-luxury duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-luxury group-hover:via-black/40" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <h4 className="text-3xl font-serif text-off-white tracking-tight">Canvas <br />Printing</h4>
                <p className="text-zinc-300 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-luxury translate-y-4 group-hover:translate-y-0">
                  Premium 100% cotton canvas material with vibrant pigment inks, providing a gallery-ready finish.
                </p>
                <div className="w-8 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="py-40 px-12 bg-[#050505]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-10 h-[1px] bg-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Curated Works</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-off-white leading-tight">
                The <span className="italic">Gallery</span>.
              </h2>
            </div>
            <Link 
              href="/gallery" 
              className="group flex items-center gap-6 px-10 py-5 border border-white/10 hover:border-gold transition-luxury relative overflow-hidden"
            >
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-off-white group-hover:text-charcoal transition-luxury">View Full Gallery</span>
              <div className="absolute inset-0 gold-bg-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <svg className="w-5 h-5 relative z-10 group-hover:text-charcoal transition-luxury" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-square overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src="/images/hero-printer.png"
                alt="Gallery work"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden bg-zinc-900 md:row-span-2 md:h-full border border-white/5">
              <Image
                src="/images/service-photobook.png"
                alt="Gallery work"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src="/images/hero-editorial.png"
                alt="Gallery work"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src="/images/service-framing.png"
                alt="Gallery work"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src="/images/service-canvas.png"
                alt="Gallery work"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 bg-black relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square">
            <div className="absolute inset-0 border-[20px] border-charcoal translate-x-10 translate-y-10 z-0" />
            <Image src="/images/hero-printer.png" alt="Advanced Equipment" fill className="object-cover relative z-10 grayscale hover:grayscale-0 transition-luxury" />
            <div className="absolute -bottom-10 -right-10 glass-panel p-10 z-20 max-w-xs space-y-4">
              <span className="text-4xl font-bold gold-gradient">20+</span>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Years of Innovation in Print Technology</p>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-gold uppercase tracking-[0.4em]">Innovation</h2>
              <h3 className="text-5xl font-black tracking-tighter leading-none">A New Land <br />for Photography.</h3>
            </div>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
              <p>
                Operating out of the historic <span className="text-off-white font-medium">Modern Photo Studio B</span> at New Town Lane, we carry forward a legacy that began in <span className="text-gold font-medium">1955</span>.
              </p>
              <p>
                While our roots are deep in traditional photography, <span className="text-off-white font-medium">Newland Photobook</span> emerged in 2014 to lead the digital revolution in Ghana. We blend decades of expertise with the world's most advanced digital printing technology to ensure your memories are preserved with archival excellence.
              </p>
            </div>
            <button className="flex items-center gap-4 text-gold font-bold uppercase tracking-widest group">
              Learn Our Process
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-luxury" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8 bg-charcoal">
        <div className="container mx-auto max-w-5xl glass-panel p-12 md:p-20 premium-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-gold uppercase tracking-[0.4em]">Get in Touch</h2>
                <h3 className="text-5xl font-black tracking-tighter">Ready to Start?</h3>
              </div>
              <p className="text-zinc-400">
                Reach out for a custom inquiry. Our creative team is ready to bring your vision to life with precision and care.
              </p>
              <div className="space-y-4 pt-4">
                <p className="text-sm font-medium tracking-widest uppercase text-zinc-500">Our Studio</p>
                <div className="space-y-1">
                  <p className="text-lg text-off-white">Modern Photos Studio B</p>
                  <p className="text-lg text-off-white">14 New Town Ln, Circle</p>
                  <p className="text-lg text-off-white">Accra, Ghana</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/q172Jny2sduqTg7V6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest border-b border-gold/30 hover:border-gold transition-luxury pb-1"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <p className="text-sm font-medium tracking-widest uppercase text-zinc-500">Operating Hours</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-zinc-400 font-light">
                    <span>Mon - Thu</span> <span className="text-off-white">8:00 AM – 5:00 PM</span>
                    <span>Fri</span> <span className="text-gold">Closed</span>
                    <span>Sat</span> <span className="text-off-white">9:00 AM – 5:00 PM</span>
                    <span>Sun</span> <span className="text-gold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-luxury" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-luxury" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-luxury" />
              </div>
              <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-gold pb-2 hover:text-gold transition-luxury">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-white/5 text-zinc-600">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="text-xl font-bold tracking-tighter">
              <span className="text-zinc-300">NEWLAND</span>
              <span className="text-xs font-light tracking-[0.3em] ml-2">PHOTOBOOK</span>
            </div>
            <p className="text-xs max-w-xs leading-relaxed opacity-60">
              Modern Photos Studio B, 14 New Town Ln, Circle, Accra, Ghana. Professional digital lab and bespoke album design.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Navigation</span>
            <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-off-white transition-colors">Home</a>
              <a href="#printing" className="hover:text-off-white transition-colors">Printing</a>
              <a href="#album-design" className="hover:text-off-white transition-colors">Album Design</a>
              <a href="#portfolio" className="hover:text-off-white transition-colors">Portfolio</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Social</span>
            <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest">
              <a href="https://www.facebook.com/modernphotolab/" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">Facebook</a>
              <a href="https://www.linkedin.com/in/opoku-newland-37596b265" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-off-white transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto pt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 mt-20">
          <p className="text-[10px] uppercase tracking-widest">© 2026 NEWLAND PHOTOBOOK. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-off-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-off-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

