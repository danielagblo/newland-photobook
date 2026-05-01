"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full glass-panel py-5 px-12 flex justify-between items-center border-b border-(--border) bg-(--nav-bg)">
      <Link href="/" className="flex items-center gap-4 group cursor-pointer">
        <div className="w-10 h-10 gold-bg-gradient flex items-center justify-center rounded-sm transition-luxury group-hover:rotate-12">
          <span className="text-charcoal font-black text-xl">N</span>
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-xl font-black tracking-tighter gold-gradient">NEWLAND</span>
          <span className="text-[9px] font-bold tracking-[0.4em] opacity-50 uppercase">Photobook</span>
        </div>
      </Link>

      <div className="hidden lg:flex gap-12 text-[11px] font-black tracking-[0.3em] uppercase text-(--foreground)">
        <Link href="/#printing" className="hover:text-gold transition-luxury relative group">
          Expertise
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
        </Link>
        <Link href="/gallery" className="hover:text-gold transition-luxury relative group">
          Gallery
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
        </Link>
        <Link href="/#innovation" className="hover:text-gold transition-luxury relative group">
          History
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={toggleTheme}
          className="p-3 bg-(--border) rounded-full hover:scale-110 transition-luxury"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
          ) : (
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
          )}
        </button>
        <Link href="/#contact" className="hidden md:block px-8 py-3 bg-white/5 border border-(--border) text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-luxury">
          Start Project
        </Link>
      </div>
    </nav>
  );
}
