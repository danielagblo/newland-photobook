import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal text-off-white selection:bg-gold selection:text-charcoal">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full glass-panel py-6 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="gold-gradient">NEWLAND</span>
          <span className="text-sm font-light tracking-[0.3em] opacity-80">PHOTOBOOK</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase">
          <a href="#" className="hover:text-gold transition-colors">Home</a>
          <a href="#printing" className="hover:text-gold transition-colors">Printing</a>
          <a href="#album-design" className="hover:text-gold transition-colors">Album Design</a>
          <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a>
        </div>
        <button className="gold-bg-gradient text-charcoal px-6 py-2 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-luxury">
          Start Project
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-printer.png"
            alt="Professional printing process"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl space-y-8 animate-fade-left">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.4em]">Premium Digital Lab</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
              Excellence in <br />
              <span className="gold-gradient">Every Pixel.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-light">
              The advanced destination for professional-grade printing, precision cutting, and bespoke album design. Elevating your vision with archival quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="gold-bg-gradient text-charcoal px-10 py-5 font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-luxury">
                Start Your Project
              </button>
              <button className="border border-white/20 hover:border-gold/50 px-10 py-5 font-bold uppercase tracking-widest transition-luxury backdrop-blur-sm">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="printing" className="py-32 px-8 bg-[#0a0a0a]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-gold uppercase tracking-[0.4em]">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Crafting Perfection.</h3>
            </div>
            <p className="text-zinc-500 max-w-md text-right">
              Utilizing state-of-the-art technology to deliver unmatched precision in every print and every cut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1: Photobooks */}
            <div className="group glass-panel p-8 space-y-6 hover:translate-y-[-10px] transition-luxury premium-border">
              <div className="w-14 h-14 gold-bg-gradient rounded-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight">Custom Photobooks</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Specialized in creating bespoke, high-end storybooks and wedding albums designed to last generations.
              </p>
            </div>

            {/* Service 2: Photo Printing */}
            <div className="group glass-panel p-8 space-y-6 hover:translate-y-[-10px] transition-luxury premium-border">
              <div className="w-14 h-14 gold-bg-gradient rounded-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight">Digital Printing</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                High-fidelity color grading and archival quality prints for professional photographers and enthusiasts.
              </p>
            </div>

            {/* Service 3: Framing */}
            <div className="group glass-panel p-8 space-y-6 hover:translate-y-[-10px] transition-luxury premium-border">
              <div className="w-14 h-14 gold-bg-gradient rounded-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 8h8v8H8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight">Professional Framing</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Expert framing services to protect and showcase your most precious moments with museum-grade quality.
              </p>
            </div>

            {/* Service 4: Canvas */}
            <div className="group glass-panel p-8 space-y-6 hover:translate-y-[-10px] transition-luxury premium-border border-gold/30">
              <div className="w-14 h-14 gold-bg-gradient rounded-sm flex items-center justify-center">
                <svg className="w-7 h-7 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold tracking-tight">Canvas Printing</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Premium 100% canvas material prints that bring a gallery-like feel to any space.
              </p>
              <span className="inline-block px-3 py-1 border border-gold/40 text-[10px] font-bold uppercase tracking-widest text-gold">100% Canvas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-8 bg-charcoal overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-bold text-gold uppercase tracking-[0.4em]">Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter">Our Craft in Print.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden premium-border">
              <Image src="/images/album-design.png" alt="Portfolio 1" fill className="object-cover transition-luxury group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                <span className="border-b-2 border-gold text-lg font-bold tracking-widest uppercase py-2">Wedding Albums</span>
              </div>
            </div>
            <div className="relative group overflow-hidden premium-border">
               <Image src="/images/print-cut.png" alt="Portfolio 2" fill className="object-cover transition-luxury group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                <span className="text-sm font-bold tracking-widest uppercase">Custom Decals</span>
              </div>
            </div>
            <div className="relative group overflow-hidden premium-border">
               <Image src="/images/hero-printer.png" alt="Portfolio 3" fill className="object-cover transition-luxury group-hover:scale-110 grayscale" />
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center">
                <span className="text-sm font-bold tracking-widest uppercase">Large Format</span>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden premium-border">
              <div className="absolute inset-0 gold-bg-gradient opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <p className="text-xl italic font-serif text-zinc-300">"Every photograph tells a story. We ensure that story is told with the clarity and depth it deserves."</p>
              </div>
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
              <a href="#" className="hover:text-off-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-off-white transition-colors">LinkedIn</a>
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

