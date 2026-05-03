"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getGalleryImages } from "@/app/(admin)/admin/actions";

function ContactSlideshow() {
  const images = [
    "/images/hero-printer.png",
    "/images/service-photobook.png",
    "/images/hero-editorial.png"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 bg-(--background)">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1500 ${i === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={img}
            alt="Archival Work"
            className={`w-full h-full object-cover ${i === current ? "animate-image-reveal" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    setIsLoaded(true);
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const result = await getGalleryImages();
    if (result.success && result.images) {
      setGalleryImages(result.images.map((img: any) => ({
        src: img.url,
        title: img.title || "Visual Archive"
      })));
    }
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message || !formData.projectType) {
      alert("Please fill in all fields and select a project type.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", projectType: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-studio-bg text-studio-text selection:bg-accent-primary selection:text-white">

      {/* Hero Section */}
      <section className="relative h-screen min-h-[550px] flex items-center pt-32 md:pt-32 lg:pt-32 overflow-hidden bg-studio-bg">
        <div className="absolute top-[-20%] right-[-10%] w-full lg:w-[70%] h-[90%] bg-accent-primary/10 rounded-full blur-[100px] lg:blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[80%] lg:w-[50%] h-[70%] bg-accent-secondary/10 rounded-full blur-[100px] lg:blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-6 space-y-4 lg:space-y-6 text-center lg:text-left">
            <div className={`space-y-3 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="w-8 h-[2px] bg-accent-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-primary">Welcome to Our Studio</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-display leading-[0.9] tracking-tighter">
                CAPTURE <span className="text-(--accent-primary) italic">&</span> CREATE. <br />
                ALL-IN-ONE STUDIO.
              </h1>
            </div>

            <p className={`text-zinc-muted max-w-md mx-auto lg:mx-0 text-sm md:text-base font-light leading-relaxed transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              We are a creative photo and video studio dedicated to capturing life’s most important moments with clarity, style, and emotion. Whether it’s a personal shoot or a large event, we bring your vision to life.
            </p>

            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="/#services" className="px-7 py-3.5 modern-gradient text-white font-bold text-[8px] uppercase tracking-[0.3em] rounded-full premium-card-shadow hover:scale-105 transition-all">
                START A PROJECT
              </a>
              <Link href="/gallery" className="group flex items-center gap-4 text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-muted hover:text-accent-primary transition-all">
                EXPLORE GALLERY
                <div className="w-6 h-[2px] bg-white/10 group-hover:w-12 group-hover:bg-accent-primary transition-all duration-500" />
              </Link>
            </div>
          </div>

          {/* Hero Images Grid - Using Static Assets */}
          <div className="lg:col-span-6 relative h-[350px] lg:h-[450px] flex items-center justify-center">
            <div className={`relative w-[80%] h-[85%] rounded-2xl overflow-hidden premium-card-shadow z-20 transition-all duration-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <img
                src="/images/hero-printer.png"
                alt="Studio High-End"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-(--accent-primary)/10 to-transparent mix-blend-overlay" />
            </div>
            <div className={`absolute top-2 -right-2 w-[40%] h-[35%] rounded-xl overflow-hidden premium-card-shadow z-30 animate-float transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img src="/images/service-photobook.png" alt="Detail" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute -bottom-2 -left-2 w-[35%] h-[30%] rounded-xl overflow-hidden premium-card-shadow z-30 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img src="/images/hero-editorial.png" alt="Detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 lg:py-32 px-6 lg:px-12 bg-(--card-bg)/50">
        <div id="services" className="absolute top-24" />
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16 lg:mb-24">
            <span className="text-accent-primary text-[12px] font-bold uppercase tracking-[0.8em]">What We Do</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-display tracking-tight leading-tight">Specialized <span className="text-zinc-muted">Services.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Photoshoots", desc: "Professional portraits, fashion, and lifestyle photography in-studio or on-location.", img: "/images/service-photobook.png" },
              { title: "Video Production", desc: "High-end commercials, interviews, and promos tailored to your brand story.", img: "/images/service-printing.png" },
              { title: "Event Coverage", desc: "Capturing weddings, birthdays, and corporate events with cinematic precision.", img: "/images/service-framing.png" },
              { title: "Post-Production", desc: "Expert editing and color grading to ensure every frame meets the highest standards.", img: "/images/service-canvas.png" }
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer bg-card-bg p-4 rounded-3xl border border-white/10 premium-card-shadow hover:-translate-y-4 transition-all duration-700">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-8">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="px-4 pb-4 space-y-3">
                  <h3 className="text-lg font-display text-studio-text group-hover:text-accent-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-zinc-muted font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section - Using Static Assets */}
      <section className="relative py-20 lg:py-32 px-6 lg:px-12">
        <div id="legacy" className="absolute top-24" />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden premium-card-shadow mt-12">
                  <img src="/images/hero-editorial.png" alt="Studio" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden premium-card-shadow">
                  <img src="/images/service-photobook.png" alt="Studio" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden premium-card-shadow">
                  <img src="/images/hero-printer.png" alt="Studio" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden premium-card-shadow">
                  <img src="/images/service-framing.png" alt="Studio" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 modern-gradient rounded-full flex items-center justify-center text-white p-8 text-center premium-card-shadow z-20">
              <span className="text-4xl font-display tracking-widest">1955</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <span className="text-(--accent-primary) text-[12px] font-bold uppercase tracking-[0.6em]">OUR MISSION</span>
              <h3 className="text-4xl md:text-5xl font-display leading-tight">Why Choose <br /><span className="italic">Us.</span></h3>
            </div>
            <div className="space-y-8 text-(--zinc-muted) text-lg font-light leading-relaxed">
              <p>
                We combine creativity with modern equipment to deliver high-quality visuals that stand out. Our team pays attention to detail, ensuring every shot tells a story.
              </p>
              <p>
                Whether it’s a personal shoot or a large event, we are here to make your ideas a reality and ensure every project meets your expectations.
              </p>
            </div>
            <button className="px-12 py-5 border-2 border-(--accent-primary) text-(--accent-primary) font-bold text-[11px] uppercase tracking-[0.4em] rounded-full hover:bg-(--accent-primary) hover:text-white transition-all duration-500">
              DISCOVER OUR PROCESS
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Highlight - REMAINING DYNAMIC */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 lg:mb-20 gap-10">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-accent-primary text-[12px] font-bold uppercase tracking-[0.8em]">Selected Work</span>
              <h2 className="text-4xl md:text-7xl font-display tracking-tighter">The <span className="vibrant-gradient-text italic">Gallery.</span></h2>
            </div>
            <Link href="/gallery" className="group flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.4em] text-zinc-muted hover:text-accent-primary transition-all">
              EXPLORE FULL GALLERY
              <div className="w-8 h-[2px] bg-white/10 group-hover:w-16 group-hover:bg-accent-primary transition-all duration-500" />
            </Link>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.length > 0 ? galleryImages.slice(0, 6).map((img, i) => (
              <div key={i} className="break-inside-avoid group relative mb-8">
                <img
                  src={img.src}
                  alt={img.title || "Archival Work"}
                  className="w-full h-auto object-contain transition-opacity duration-1000 group-hover:opacity-80"
                />
              </div>
            )) : (
              <div className="col-span-full py-20 text-center bg-(--card-bg) rounded-[3rem] border border-(--border)">
                <p className="text-(--zinc-muted) font-light tracking-widest uppercase text-[10px]">Curation in progress...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section - Using Static Assets for Slideshow */}
      <section className="relative py-20 lg:py-40 px-6 lg:px-12">
        <div id="contact" className="absolute top-24" />
        <div className="container mx-auto max-w-7xl">
          <div className="bg-(--card-bg) rounded-4xl lg:rounded-[3rem] border border-(--border) premium-card-shadow overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
              <ContactSlideshow />
              <div className="absolute inset-0 bg-(--accent-primary)/10" />
              <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                <div className="glass-vibrant p-8 lg:p-12 rounded-3xl lg:rounded-4xl text-center space-y-6 max-w-md">
                  <h2 className="text-3xl lg:text-4xl font-display text-(--foreground)">Book a <br />Session.</h2>
                  <div className="w-12 h-1 bg-(--accent-primary) mx-auto rounded-full" />
                  <p className="text-(--zinc-muted) font-light">Ready to capture your moments? Get in touch with us today to discuss your project.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-8 md:p-12 lg:p-24 space-y-10 lg:space-y-12">
              <h3 className="text-3xl font-display text-(--foreground)">Inquiry.</h3>
              <form onSubmit={handleInquirySubmit} className="space-y-8 lg:space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-(--zinc-muted)">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-(--background) border border-(--border) outline-none p-5 lg:p-6 rounded-2xl text-(--foreground) placeholder:text-(--zinc-muted)/30 focus:ring-2 focus:ring-(--accent-primary) transition-all"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-(--zinc-muted)">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-(--background) border border-(--border) outline-none p-6 rounded-2xl text-(--foreground) placeholder:text-(--zinc-muted)/30 focus:ring-2 focus:ring-(--accent-primary) transition-all"
                    placeholder="email@address.com"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-(--zinc-muted)">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-(--background) border border-(--border) outline-none p-6 rounded-2xl text-(--foreground) placeholder:text-(--zinc-muted)/30 focus:ring-2 focus:ring-(--accent-primary) transition-all"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-(--zinc-muted)">Tell us about your project</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-(--background) border border-(--border) outline-none p-6 rounded-2xl text-(--foreground) placeholder:text-(--zinc-muted)/30 focus:ring-2 focus:ring-(--accent-primary) transition-all resize-none" 
                    placeholder="Describe your vision, requirements, or any specific details..." 
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-(--zinc-muted)">Project Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Photobook', 'Printing', 'Framing', 'Other'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`py-4 px-6 rounded-xl text-sm font-semibold transition-all border border-(--border) ${formData.projectType === type
                            ? "bg-(--accent-primary) text-(--background) shadow-lg scale-105"
                            : "bg-(--background) text-(--zinc-muted) hover:bg-(--card-bg)"
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    disabled={isSubmitting}
                    className={`w-full py-6 modern-gradient text-white font-bold text-[11px] uppercase tracking-[0.5em] rounded-2xl premium-card-shadow transition-all ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"
                      }`}
                  >
                    {isSubmitting ? "SENDING..." : "SEND REQUEST"}
                  </button>

                  {submitStatus === "success" && (
                    <p className="text-green-500 text-center text-xs font-bold uppercase tracking-widest animate-pulse">Request sent successfully!</p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-500 text-center text-xs font-bold uppercase tracking-widest">Failed to send. Please try again.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
