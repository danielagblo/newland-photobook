"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-7xl glass-vibrant py-3 md:py-4 px-6 md:px-10 flex justify-between items-center rounded-full border border-indigo-500/10 premium-card-shadow">
        <Link href="/" className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-indigo-500/10 shadow-sm group-hover:scale-110 transition-transform duration-500">
            <img src="/logo.png" alt="Newland" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-sm md:text-xl font-display tracking-[0.1em] text-(--foreground)">NEWLAND</span>
            <span className="text-[7px] md:text-[9px] font-bold tracking-[0.3em] md:tracking-[0.4em] opacity-40 uppercase text-(--accent-primary)">PhotoBook</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
          <Link href="/#services" className="hover:text-(--accent-primary) transition-all duration-300 relative group">
            SERVICES
          </Link>
          <Link href="/gallery" className="hover:text-(--accent-primary) transition-all duration-300 relative group">
            GALLERY
          </Link>
          <Link href="/#legacy" className="hover:text-(--accent-primary) transition-all duration-300 relative group">
            ABOUT
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <Link
            href="/#contact"
            className="hidden md:flex px-5 md:px-8 py-2.5 md:py-3.5 modern-gradient text-white text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full hover:scale-105 active:scale-95 transition-all duration-300 premium-card-shadow text-center"
          >
            START PROJECT
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass-vibrant rounded-full border border-slate-100"
          >
            <span className={`w-5 h-[2px] bg-slate-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-[2px] bg-slate-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[2px] bg-slate-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-[92%] glass-vibrant rounded-[2.5rem] border border-slate-100 p-12 transition-all duration-500 premium-card-shadow ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="space-y-8 text-sm font-bold tracking-[0.4em] uppercase text-slate-400">
              <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="block hover:text-(--accent-primary) transition-colors">Services</Link>
              <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="block hover:text-(--accent-primary) transition-colors">Gallery</Link>
              <Link href="/#legacy" onClick={() => setIsMenuOpen(false)} className="block hover:text-(--accent-primary) transition-colors">About</Link>
            </div>
            <div className="w-full pt-8 border-t border-slate-100">
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-6 modern-gradient text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-2xl shadow-xl shadow-indigo-500/20"
              >
                START PROJECT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
