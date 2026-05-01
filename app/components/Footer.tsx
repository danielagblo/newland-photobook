import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--background)] pt-8 pb-4 px-12 border-t border-[var(--border)] relative overflow-hidden transition-colors duration-500">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
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
          <div className="space-y-4">
            <h4 className="text-[var(--foreground)] text-[10px] font-black uppercase tracking-[0.4em]">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/#printing" className="text-[var(--zinc-muted)] text-sm hover:text-gold transition-luxury">Expertise</Link></li>
              <li><Link href="/gallery" className="text-[var(--zinc-muted)] text-sm hover:text-gold transition-luxury">Full Gallery</Link></li>
              <li><Link href="/#innovation" className="text-[var(--zinc-muted)] text-sm hover:text-gold transition-luxury">Our History</Link></li>
              <li><Link href="/#contact" className="text-[var(--zinc-muted)] text-sm hover:text-gold transition-luxury">Contact Lab</Link></li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="space-y-4">
            <h4 className="text-[var(--foreground)] text-[10px] font-black uppercase tracking-[0.4em]">Operating Hours</h4>
            <ul className="space-y-3 text-[var(--zinc-muted)] text-sm font-light">
              <li className="flex justify-between"><span>Mon - Thu</span> <span className="text-[var(--foreground)]">8:00 - 17:00</span></li>
              <li className="flex justify-between"><span>Friday</span> <span className="text-gold font-bold">Closed</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span className="text-[var(--foreground)]">9:00 - 17:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="opacity-50">Closed</span></li>
            </ul>
          </div>

          {/* Location Column */}
          <div className="space-y-4">
            <h4 className="text-(--foreground) text-[10px] font-black uppercase tracking-[0.4em]">Location</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <svg className="w-5 h-5 text-gold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-(--zinc-muted) text-sm leading-relaxed">
                  Modern Photo Studio B,<br />
                  New Town Lane, Accra,<br />
                  Ghana
                </p>
              </div>
              <button className="w-full py-4 border border-(--border) text-[10px] font-bold uppercase tracking-widest hover:border-gold transition-luxury text-(--foreground)">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-(--border) flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-(--zinc-muted) text-[10px] font-bold uppercase tracking-widest">
            © 2024 Newland Photobook. Designed by <a href="https://skytechghana.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-luxury">SkytechGhana</a>
          </p>
          <div className="flex gap-10 text-[9px] font-black uppercase tracking-widest text-(--zinc-muted)">
            <a href="#" className="hover:text-gold transition-luxury">Privacy Policy</a>
            <a href="#" className="hover:text-(--foreground) transition-luxury">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
