"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function ContactSlideshow() {
  const images = [
    "/images/hero-printer.png",
    "/images/service-photobook.png",
    "/images/hero-editorial.png",
    "/images/service-framing.png",
    "/images/service-canvas.png"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 bg-slate-50">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${i === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={img}
            alt="Archival Work"
            fill
            className={`object-cover ${i === current ? "animate-image-reveal" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

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
  }, []);

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
    <div className="min-h-screen bg-(--background) text-(--foreground) selection:bg-(--accent-primary) selection:text-white">

      {/* Hero Section - Viewport Optimized Full Height */}
      <section className="relative h-screen min-h-[550px] flex items-center pt-32 md:pt-24 lg:pt-32 overflow-hidden bg-white">
        {/* Animated Background Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[100%] lg:w-[70%] h-[90%] bg-indigo-500/10 rounded-full blur-[100px] lg:blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[80%] lg:w-[50%] h-[70%] bg-violet-500/10 rounded-full blur-[100px] lg:blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-6 space-y-4 lg:space-y-6 text-center lg:text-left">
            <div className={`space-y-3 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="w-8 h-[2px] bg-indigo-500" />
                <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-indigo-600">EST. 1955 • ACCRA GHANA</span>
              </div>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-display leading-[0.9] tracking-tighter">
                PURE <span className="text-(--accent-primary) italic">VISION.</span> <br />
                DIGITAL LAB.
              </h1>
            </div>

            <p className={`text-slate-500 max-w-sm mx-auto lg:mx-0 text-sm md:text-base font-light leading-relaxed transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Archival precision meets contemporary visual culture. We preserve the soul of the image.
            </p>

            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="#services" className="px-7 py-3.5 modern-gradient text-white font-bold text-[8px] uppercase tracking-[0.3em] rounded-full premium-card-shadow hover:scale-105 transition-all">
                START A PROJECT
              </a>
              <Link href="/gallery" className="group flex items-center gap-4 text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-all">
                EXPLORE GALLERY
                <div className="w-6 h-[2px] bg-slate-200 group-hover:w-12 group-hover:bg-indigo-500 transition-all duration-500" />
              </Link>
            </div>
          </div>

          {/* Layered Composition Hero Image - Compressed for Screen Safety */}
          <div className="lg:col-span-6 relative h-[350px] lg:h-[450px] flex items-center justify-center">
            {/* Main Image Layer */}
            <div className={`relative w-[80%] h-[85%] rounded-2xl overflow-hidden premium-card-shadow z-20 transition-all duration-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Image
                src="/images/hero-printer.png"
                alt="Studio High-End"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent mix-blend-overlay" />
            </div>

            {/* Accent Layer 1 */}
            <div className={`absolute top-2 -right-2 w-[40%] h-[35%] rounded-xl overflow-hidden premium-card-shadow z-30 animate-float transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Image src="/images/service-photobook.png" alt="Detail" fill className="object-cover" />
            </div>

            {/* Accent Layer 2 */}
            <div className={`absolute -bottom-2 -left-2 w-[35%] h-[30%] rounded-xl overflow-hidden premium-card-shadow z-30 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Image src="/images/hero-editorial.png" alt="Detail" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Contemporary Grid */}
      <section className="relative py-20 lg:py-32 px-6 lg:px-12 bg-slate-50/50">
        <div id="services" className="absolute top-24" />
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16 lg:mb-24">
            <span className="text-(--accent-primary) text-[11px] font-bold uppercase tracking-[0.8em]">Laboratory Services</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-display tracking-tight leading-tight">Contemporary <span className="text-slate-300">Output.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fine Art Books", desc: "Bespoke hand-bound monographs with silk and premium papers.", img: "/images/service-photobook.png" },
              { title: "Chromatic Prints", desc: "Museum-grade inkjet prints with high-dynamic range calibration.", img: "/images/service-printing.png" },
              { title: "Exhibition Framing", desc: "Precision-joined frames with anti-reflective visual clarity.", img: "/images/service-framing.png" },
              { title: "Gallery Canvas", desc: "Deep-edge canvas wraps with protective satin polymer coating.", img: "/images/service-canvas.png" }
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer bg-white p-4 rounded-3xl premium-card-shadow hover:-translate-y-4 transition-all duration-700">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-8">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="px-4 pb-4 space-y-3">
                  <h3 className="text-2xl font-display text-slate-800 group-hover:text-(--accent-primary) transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section - Contemporary Storytelling - About */}
      <section className="relative py-20 lg:py-32 px-6 lg:px-12">
        <div id="legacy" className="absolute top-24" />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden premium-card-shadow mt-12">
                  <Image src="/images/hero-editorial.png" alt="Studio" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden premium-card-shadow">
                  <Image src="/images/service-photobook.png" alt="Studio" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden premium-card-shadow">
                  <Image src="/images/hero-printer.png" alt="Studio" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden premium-card-shadow">
                  <Image src="/images/service-framing.png" alt="Studio" fill className="object-cover" />
                </div>
              </div>
            </div>
            {/* Year Tag */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 modern-gradient rounded-full flex items-center justify-center text-white p-8 text-center premium-card-shadow z-20">
              <span className="text-4xl font-display tracking-widest">1955</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <span className="text-(--accent-primary) text-[11px] font-bold uppercase tracking-[0.6em]">The Evolution</span>
              <h3 className="text-4xl md:text-7xl font-display leading-tight">Legacy Meets <br /><span className="italic">Future.</span></h3>
            </div>
            <div className="space-y-8 text-slate-500 text-xl font-light leading-relaxed">
              <p>
                Originating from the legendary Modern Photo Studio B, we have evolved into a powerhouse of contemporary digital imaging.
              </p>
              <p>
                We don't just look back; we push the boundaries of what's possible in archival science. Our lab is a playground for visualists who demand nothing but the absolute peak of quality.
              </p>
            </div>
            <button className="px-12 py-5 border-2 border-(--accent-primary) text-(--accent-primary) font-bold text-[11px] uppercase tracking-[0.4em] rounded-full hover:bg-(--accent-primary) hover:text-white transition-all duration-500">
              DISCOVER OUR PROCESS
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Highlight - Contemporary Masonry */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 lg:mb-20 gap-10">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-(--accent-primary) text-[11px] font-bold uppercase tracking-[0.8em]">Selected Work</span>
              <h2 className="text-4xl md:text-8xl font-display tracking-tighter">The <span className="vibrant-gradient-text italic">Gallery.</span></h2>
            </div>
            <Link href="/gallery" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-indigo-600 transition-all">
              EXPLORE FULL GALLERY
              <div className="w-8 h-[2px] bg-slate-200 group-hover:w-16 group-hover:bg-indigo-500 transition-all duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[900px]">
            {/* Main Feature */}
            <div className="md:col-span-7 relative group overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] premium-card-shadow aspect-[4/5] md:aspect-auto">
              <Image src="/images/hero-printer.png" alt="Work" fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute bottom-10 left-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Chromatic Mastery</span>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-rows-2 gap-8">
              <div className="relative group overflow-hidden rounded-[2rem] premium-card-shadow">
                <Image src="/images/service-photobook.png" alt="Work" fill className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-(--accent-primary)/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative group overflow-hidden rounded-[2rem] premium-card-shadow">
                  <Image src="/images/service-framing.png" alt="Work" fill className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                </div>
                <div className="relative group overflow-hidden rounded-[2rem] premium-card-shadow bg-slate-50 flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <span className="text-3xl font-display vibrant-gradient-text">25k+</span>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Prints Produced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Interaction */}
      <section className="relative py-20 lg:py-40 px-6 lg:px-12">
        <div id="contact" className="absolute top-24" />
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-[2rem] lg:rounded-[3rem] premium-card-shadow overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
              <ContactSlideshow />
              <div className="absolute inset-0 bg-indigo-600/10" />
              <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                <div className="glass-vibrant p-8 lg:p-12 rounded-[1.5rem] lg:rounded-[2rem] text-center space-y-6 max-w-md">
                  <h2 className="text-3xl lg:text-4xl font-display text-slate-800">Start Your <br />Project.</h2>
                  <div className="w-12 h-1 bg-(--accent-primary) mx-auto rounded-full" />
                  <p className="text-slate-600 font-light">Collaborate with our archival specialists to bring your vision to life.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-8 md:p-12 lg:p-24 space-y-10 lg:space-y-12">
              <h3 className="text-3xl font-display text-slate-800">Inquiry.</h3>
              <form onSubmit={handleInquirySubmit} className="space-y-8 lg:space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border-none outline-none p-5 lg:p-6 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-(--accent-primary) transition-all"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border-none outline-none p-6 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-(--accent-primary) transition-all"
                    placeholder="email@address.com"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border-none outline-none p-6 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-(--accent-primary) transition-all"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Tell us about your project</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border-none outline-none p-6 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-(--accent-primary) transition-all resize-none" 
                    placeholder="Describe your vision, requirements, or any specific details..." 
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Project Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Photobook', 'Printing', 'Framing', 'Other'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`py-4 px-6 rounded-xl text-sm font-semibold transition-all ${formData.projectType === type
                            ? "bg-(--accent-primary) text-white shadow-lg scale-105"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100"
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
