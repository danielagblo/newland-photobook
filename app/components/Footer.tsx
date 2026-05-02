import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-(--background) pt-20 pb-12 px-6 md:px-12 border-t border-(--border)">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-(--card-bg) rounded-[2rem] lg:rounded-[2.5rem] border border-(--border) p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src="/logo.png" alt="Newland Logo" className="w-12 h-12 rounded-full border border-(--border) shadow-sm" />
                <span className="text-2xl font-display tracking-[0.1em] text-(--foreground)">NEWLAND</span>
              </div>
              <p className="text-(--zinc-muted) text-lg font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
                Engineering visual legacies since 1955. High-fidelity output for the contemporary creator.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-6">
              <a href="https://www.facebook.com/modernphotolab/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-(--background) border border-(--border) flex items-center justify-center text-(--zinc-muted) hover:text-(--accent-primary) hover:border-(--accent-primary) transition-all premium-card-shadow">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/opoku-newland-37596b265/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-(--background) border border-(--border) flex items-center justify-center text-(--zinc-muted) hover:text-(--accent-primary) hover:border-(--accent-primary) transition-all premium-card-shadow">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] text-(--accent-primary)">LABORATORY</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.3em] text-(--zinc-muted)">
              <li><Link href="/#services" className="hover:text-(--accent-primary) transition-colors">Services</Link></li>
              <li><Link href="/products" className="hover:text-(--accent-primary) transition-colors">Products</Link></li>
              <li><Link href="/#legacy" className="hover:text-(--accent-primary) transition-colors">About</Link></li>
              <li><Link href="/gallery" className="hover:text-(--accent-primary) transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] text-(--accent-primary)">VISIT</h4>
            <div className="space-y-6">
              <p className="text-xl font-display text-(--foreground) leading-tight">
                Modern Photo Studio B,<br />
                New Town Lane, Accra.
              </p>
              <div className="pt-2">
                <a href="https://maps.app.goo.gl/2sSz52KUpgJQHRnp9" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-(--border) rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-(--accent-primary) hover:border-(--accent-primary) hover:text-(--background) transition-all duration-300">
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-12 text-center md:text-left">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-(--zinc-muted)">
            © 2024 NEWLAND STUDIOS. DESIGNED BY <a href="https://skytechghana.com" className="text-(--accent-primary)">SKYTECH</a>
          </p>
          <div className="flex gap-12 text-[9px] font-bold uppercase tracking-[0.4em] text-(--zinc-muted)">
            <a href="#" className="hover:text-(--foreground)">Privacy</a>
            <a href="#" className="hover:text-(--foreground)">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
