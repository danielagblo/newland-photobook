"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const [isExpertiseVisible, setIsExpertiseVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpertiseVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (expertiseRef.current) {
      observer.observe(expertiseRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 bg-[var(--background)] text-[var(--foreground)] selection:bg-gold selection:text-charcoal`}>
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full glass-panel py-5 px-12 flex justify-between items-center border-b border-[var(--border)] bg-[var(--nav-bg)]">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 gold-bg-gradient flex items-center justify-center rounded-sm transition-luxury group-hover:rotate-12">
            <span className="text-charcoal font-black text-xl">N</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter gold-gradient">NEWLAND</span>
            <span className="text-[9px] font-bold tracking-[0.4em] opacity-50 uppercase">Photobook</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-12 text-[11px] font-black tracking-[0.3em] uppercase text-[var(--foreground)]">
          <a href="#printing" className="hover:text-gold transition-luxury relative group">
            Expertise
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#portfolio" className="hover:text-gold transition-luxury relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#about" className="hover:text-gold transition-luxury relative group">
            History
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
          </a>
          <a href="#contact" className="hover:text-gold transition-luxury relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
          </a>
        </div>
        <div className="flex items-center gap-6">
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
          <button className="hidden md:block px-8 py-3 bg-white/5 border border-[var(--border)] text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-luxury">
            Start Project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center px-12 overflow-hidden bg-black">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-printer.png"
            alt="Professional Photography Equipment"
            fill
            priority
            className="object-cover opacity-80 animate-ken-burns brightness-[0.8]"
          />
          {/* Refined theme-aware overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/75 via-[var(--background)]/20 to-transparent backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 pt-24">
          <div className="max-w-4xl space-y-10">
            <div className="flex items-center gap-4 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              <span className="w-12 h-[1px] bg-gold" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">The Legacy of Excellence • Since 1955</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              Artistry in <br />
              <span className="italic font-light">Every Frame.</span>
            </h1>

            <p className="text-[var(--zinc-muted)] max-w-xl text-lg font-normal leading-relaxed animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
              Harnessing over six decades of heritage to deliver the pinnacle of digital printing and archival framing solutions. We don't just print; we preserve your legacy.
            </p>

            <div className="flex flex-wrap gap-8 pt-4 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
              <button className="px-12 py-5 bg-gold text-charcoal font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-luxury shadow-2xl shadow-gold/20">
                Explore Services
              </button>
              <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-[var(--foreground)] hover:text-gold transition-luxury">
                <span className="w-12 h-[1px] bg-gold/30 group-hover:bg-gold transition-luxury" />
                See Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Centered Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent animate-bounce-subtle" />
        </div>
      </section>

      {/* Expertise Section - Boutique Minimalist Redesign */}
      <section id="printing" className="py-40 px-12 bg-[var(--background)] transition-colors duration-500" ref={expertiseRef}>
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
            <div className="space-y-6">
              <h2 className="text-gold text-[10px] font-black uppercase tracking-[0.5em]">The Services</h2>
              <h3 className="text-5xl md:text-7xl font-serif leading-tight">
                Our <span className="italic">Expertise</span>.
              </h3>
            </div>
            <p className="text-[var(--zinc-muted)] max-w-sm text-lg font-normal leading-relaxed">
              Archival quality and precision in every service, from the lab to your walls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-black cursor-pointer border border-[var(--border)]">
              <Image
                src="/images/service-photobook.png"
                alt="Custom Photobooks"
                fill
                className={`object-cover transition-luxury duration-1000 scale-105 group-hover:scale-100 ${isExpertiseVisible ? 'animate-reveal-color' : 'grayscale brightness-[0.4]'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-luxury" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <h4 className="text-3xl font-serif text-white tracking-tight">Custom <br />Photobooks</h4>
                <div className="max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden space-y-4">
                  <p className="text-zinc-200 text-xs font-light leading-relaxed">
                    Bespoke, hand-bound albums crafted with archival materials to preserve your most precious memories.
                  </p>
                  <div className="w-full h-[1px] bg-gold/50" />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-black cursor-pointer border border-[var(--border)]">
              <Image
                src="/images/service-printing.png"
                alt="Digital Printing"
                fill
                className={`object-cover transition-luxury duration-1000 scale-105 group-hover:scale-100 ${isExpertiseVisible ? 'animate-reveal-color' : 'grayscale brightness-[0.4]'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-luxury" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <h4 className="text-3xl font-serif text-white tracking-tight">Digital <br />Printing</h4>
                <div className="max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden space-y-4">
                  <p className="text-zinc-200 text-xs font-light leading-relaxed">
                    High-fidelity digital prints using museum-grade inkjet technology and professional archival paper.
                  </p>
                  <div className="w-full h-[1px] bg-gold/50" />
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-black cursor-pointer border border-[var(--border)]">
              <Image
                src="/images/service-framing.png"
                alt="Professional Framing"
                fill
                className={`object-cover transition-luxury duration-1000 scale-105 group-hover:scale-100 ${isExpertiseVisible ? 'animate-reveal-color' : 'grayscale brightness-[0.4]'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-luxury" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <h4 className="text-3xl font-serif text-white tracking-tight">Professional <br />Framing</h4>
                <div className="max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden space-y-4">
                  <p className="text-zinc-200 text-xs font-light leading-relaxed">
                    Expertly joined museum frames and archival mounting solutions to protect and elevate your photography.
                  </p>
                  <div className="w-full h-[1px] bg-gold/50" />
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-black cursor-pointer border border-[var(--border)]">
              <Image
                src="/images/service-canvas.png"
                alt="Canvas Printing"
                fill
                className={`object-cover transition-luxury duration-1000 scale-105 group-hover:scale-100 ${isExpertiseVisible ? 'animate-reveal-color' : 'grayscale brightness-[0.4]'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-luxury" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <h4 className="text-3xl font-serif text-white tracking-tight">Canvas <br />Printing</h4>
                <div className="max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden space-y-4">
                  <p className="text-zinc-200 text-xs font-light leading-relaxed">
                    Premium 100% cotton canvas material with vibrant pigment inks, providing a gallery-ready finish.
                  </p>
                  <div className="w-full h-[1px] bg-gold/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="py-40 px-12 bg-[var(--background)] transition-colors duration-500">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-10 h-[1px] bg-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Curated Works</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                The <span className="italic">Gallery</span>.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="group flex items-center gap-6 px-10 py-5 bg-gold text-charcoal hover:bg-off-white transition-luxury relative overflow-hidden"
            >
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">View Full Gallery</span>
              <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-square overflow-hidden bg-[var(--card-bg)] border border-[var(--border)]">
              <Image
                src="/images/hero-printer.png"
                alt="Gallery work"
                fill
                className="object-cover transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden bg-zinc-900 md:row-span-2 md:h-full border border-white/5">
              <Image
                src="/images/service-photobook.png"
                alt="Gallery work"
                fill
                className="object-cover transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden bg-[var(--card-bg)] border border-[var(--border)]">
              <Image
                src="/images/hero-editorial.png"
                alt="Gallery work"
                fill
                className="object-cover transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden bg-[var(--card-bg)] border border-[var(--border)]">
              <Image
                src="/images/service-framing.png"
                alt="Gallery work"
                fill
                className="object-cover transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-square overflow-hidden bg-[var(--card-bg)] border border-[var(--border)]">
              <Image
                src="/images/service-canvas.png"
                alt="Gallery work"
                fill
                className="object-cover transition-luxury duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 bg-[var(--background)] transition-colors duration-500 relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square">
            <div className="absolute inset-0 border-[20px] border-[var(--border)] translate-x-10 translate-y-10 z-0" />
            <Image src="/images/hero-printer.png" alt="Advanced Equipment" fill className="object-cover relative z-10 transition-luxury" />
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
            <div className="space-y-6 text-[var(--zinc-muted)] leading-relaxed text-lg font-light">
              <p>
                Operating out of the historic <span className="text-[var(--foreground)] font-medium">Modern Photo Studio B</span> at New Town Lane, we carry forward a legacy that began in <span className="text-gold font-medium">1955</span>.
              </p>
              <p>
                While our roots are deep in traditional photography, <span className="text-[var(--foreground)] font-medium">Newland Photobook</span> emerged in 2014 to lead the digital revolution in Ghana. We blend decades of expertise with the world's most advanced digital printing technology to ensure your memories are preserved with archival excellence.
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

      {/* Contact Section - Compact Editorial */}
      <section id="contact-form" className="py-0 px-0 bg-[var(--background)] overflow-hidden border-t border-[var(--border)] transition-colors duration-500">
        <div className="flex flex-col lg:flex-row h-full min-h-[500px]">
          {/* Left Side: Imagery */}
          <div className="lg:w-1/3 relative min-h-[300px]">
            <Image 
              src="/images/service-photobook.png" 
              alt="The Artisan Craft" 
              fill 
              className="object-cover brightness-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/40 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-4">
              <h2 className="text-4xl font-serif text-[var(--foreground)] leading-tight">
                Let's <span className="italic">Create</span>.
              </h2>
              <div className="w-10 h-[1px] bg-gold" />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3 p-12 md:p-16 flex flex-col justify-center space-y-10 bg-[var(--card-bg)]">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div className="space-y-2 border-b border-[var(--border)] focus-within:border-gold transition-luxury pb-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--zinc-muted)]">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent text-[var(--foreground)] text-base outline-none placeholder:text-[var(--zinc-muted)]/50" 
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2 border-b border-[var(--border)] focus-within:border-gold transition-luxury pb-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--zinc-muted)]">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent text-[var(--foreground)] text-base outline-none placeholder:text-[var(--zinc-muted)]/50" 
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-2 border-b border-[var(--border)] focus-within:border-gold transition-luxury pb-2 md:col-span-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--zinc-muted)]">Message</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent text-[var(--foreground)] text-base outline-none placeholder:text-[var(--zinc-muted)]/50" 
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="md:col-span-2 flex justify-end pt-4">
                <button className="px-12 py-4 gold-bg-gradient text-charcoal font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-luxury">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 px-0 bg-[var(--background)] relative h-[500px] border-t border-[var(--border)] transition-colors duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9695935644336!2d-0.2152888!3d5.5715137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b7af0b6b147%3A0xef062b6aba8ecc68!2sNEWLAND%20PHOTOBOOK%20(modern%20photos)!5e0!3m2!1sen!2sgh!4v1777585294425!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.4) contrast(1.2) brightness(0.9)' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-luxury"
        ></iframe>
        <div className="absolute bottom-12 left-12 bg-[var(--card-bg)]/80 backdrop-blur-md p-8 max-w-sm space-y-4 z-20 border border-[var(--border)]">
          <h3 className="text-xl font-serif text-[var(--foreground)]">Visit Our Studio.</h3>
          <p className="text-zinc-500 text-xs font-light leading-relaxed">
            Experience our archival laboratory in person at New Town Lane. We are located in the historic Modern Photo Studio B.
          </p>
          <div className="w-12 h-[1px] bg-gold" />
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-[var(--background)] pt-16 pb-12 px-12 border-t border-[var(--border)] relative overflow-hidden transition-colors duration-500">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gold-bg-gradient flex items-center justify-center rounded-sm">
                  <span className="text-charcoal font-black text-2xl">N</span>
                </div>
                <div className="flex flex-col -space-y-1">
                  <span className="text-2xl font-black tracking-tighter text-[var(--foreground)]">NEWLAND</span>
                  <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase">Photobook</span>
                </div>
              </div>
              <p className="text-[var(--zinc-muted)] text-sm leading-relaxed font-light">
                Preserving Ghanaian heritage through archival precision and digital innovation since 1955.
              </p>
              <div className="flex gap-6">
                <a href="https://www.facebook.com/modernphotolab/" target="_blank" className="text-[var(--zinc-muted)] hover:text-gold transition-luxury">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/opoku-newland-37596b265" target="_blank" className="text-[var(--zinc-muted)] hover:text-gold transition-luxury">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-8">
              <h4 className="text-[var(--foreground)] text-[10px] font-black uppercase tracking-[0.4em]">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[var(--zinc-muted)] text-sm hover:text-gold transition-luxury">Expertise</a></li>
                <li><Link href="/gallery" className="text-[var(--zinc-muted)] text-sm hover:text-gold transition-luxury">Full Gallery</Link></li>
                <li><a href="#" className="text-[var(--zinc-muted)] text-sm hover:text-gold transition-luxury">Our History</a></li>
                <li><a href="#" className="text-[var(--zinc-muted)] text-sm hover:text-gold transition-luxury">Contact Lab</a></li>
              </ul>
            </div>

            {/* Hours Column */}
            <div className="space-y-8">
              <h4 className="text-[var(--foreground)] text-[10px] font-black uppercase tracking-[0.4em]">Operating Hours</h4>
              <ul className="space-y-3 text-[var(--zinc-muted)] text-sm font-light">
                <li className="flex justify-between"><span>Mon - Thu</span> <span className="text-[var(--foreground)]">8:00 - 17:00</span></li>
                <li className="flex justify-between"><span>Friday</span> <span className="text-gold font-bold">Closed</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="text-[var(--foreground)]">9:00 - 17:00</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="opacity-50">Closed</span></li>
              </ul>
            </div>

            {/* Location Column */}
            <div className="space-y-8">
              <h4 className="text-[var(--foreground)] text-[10px] font-black uppercase tracking-[0.4em]">Location</h4>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <svg className="w-5 h-5 text-gold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[var(--zinc-muted)] text-sm leading-relaxed">
                    Modern Photo Studio B,<br />
                    New Town Lane, Accra,<br />
                    Ghana
                  </p>
                </div>
                <button className="w-full py-4 border border-[var(--border)] text-[10px] font-bold uppercase tracking-widest hover:border-gold transition-luxury text-[var(--foreground)]">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[var(--zinc-muted)] text-[10px] font-bold uppercase tracking-widest">
              © 2024 Newland Photobook. Handcrafted with Precision.
            </p>
            <div className="flex gap-10 text-[9px] font-black uppercase tracking-widest text-[var(--zinc-muted)]">
              <a href="#" className="hover:text-gold transition-luxury">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--foreground)] transition-luxury">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

