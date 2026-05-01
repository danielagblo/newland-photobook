"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl glass-vibrant py-4 px-10 flex justify-between items-center rounded-full border border-indigo-500/10 premium-card-shadow">
      <Link href="/" className="flex items-center gap-4 group cursor-pointer">
        <div className="flex flex-col -space-y-1">
          <span className="text-xl font-display tracking-[0.1em] text-(--foreground)">NEWLAND</span>
          <span className="text-[9px] font-bold tracking-[0.4em] opacity-40 uppercase text-(--accent-primary)">PhotoBook</span>
        </div>
      </Link>

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

      <div className="flex items-center gap-6">
        <Link
          href="/#contact"
          className="px-8 py-3.5 modern-gradient text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:scale-105 active:scale-95 transition-all duration-300 premium-card-shadow"
        >
          START PROJECT
        </Link>
      </div>
    </nav>
  );
}
