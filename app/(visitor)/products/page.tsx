"use client";

import Image from "next/image";
import { useState } from "react";

const PRODUCTS = [
  {
    id: "photobook",
    title: "Signature Photobook",
    price: "From $120",
    description: "Hand-bound, archival quality photobooks with premium silk and matte finishes. Designed for lifelong durability.",
    image: "/images/service-photobook.png"
  },
  {
    id: "prints",
    title: "Giclée Art Prints",
    price: "From $45",
    description: "Museum-grade inkjet prints using 12-color pigment systems on archival cotton-rag papers.",
    image: "/images/service-printing.png"
  },
  {
    id: "framing",
    title: "Exhibition Frames",
    price: "From $85",
    description: "Precision-joined solid wood frames with museum-grade anti-reflective glass and acid-free mounting.",
    image: "/images/service-framing.png"
  },
  {
    id: "canvas",
    title: "Gallery Canvas",
    price: "From $65",
    description: "High-density canvas wraps with protective satin polymer coating and deep-edge gallery profiles.",
    image: "/images/service-canvas.png"
  },
  {
    id: "archival-box",
    title: "Archival Boxes",
    price: "From $35",
    description: "Acid-free, lignin-free storage solutions for long-term preservation of prints and negatives.",
    image: "/images/hero-printer.png"
  }
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = (product: typeof PRODUCTS[0]) => {
    setSelectedProduct(product);
    setIsOrdered(false);
  };

  const submitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsOrdered(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground) pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="mb-10 space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-(--accent-primary)" />
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-(--accent-primary)">Archival Catalog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display tracking-tighter leading-tight">
            The <span className="vibrant-gradient-text italic">Collection.</span>
          </h1>
          <p className="text-(--zinc-muted) max-w-2xl text-lg font-light leading-relaxed">
            Every piece is crafted in our laboratory with the highest standards of preservation. Selected by visualists, for visualists.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-(--card-bg) rounded-3xl border border-(--border) overflow-hidden premium-card-shadow transition-all duration-700 hover:-translate-y-4">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-(--background) via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 right-6">
                  <span className="glass-vibrant px-4 py-2 rounded-full text-[10px] font-bold text-(--accent-primary) tracking-widest uppercase">
                    {product.price}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-display text-(--foreground) group-hover:text-(--accent-primary) transition-colors">{product.title}</h3>
                  <p className="text-sm text-(--zinc-muted) leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full py-4 modern-gradient text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-(--accent-primary)/20"
                >
                  ORDER INQUIRY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-(--background)/90 backdrop-blur-2xl" onClick={() => setSelectedProduct(null)} />
          
          <div className="relative w-full max-w-2xl bg-(--card-bg) rounded-[2.5rem] border border-(--border) p-8 md:p-12 premium-card-shadow animate-float">
            {!isOrdered ? (
              <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-(--accent-primary) text-[10px] font-bold uppercase tracking-[0.4em]">Order Request</span>
                  <h2 className="text-3xl md:text-5xl font-display">{selectedProduct.title}</h2>
                  <p className="text-(--zinc-muted) text-sm font-light">Send us a request and our laboratory manager will contact you to finalize the details.</p>
                </div>

                <form onSubmit={submitOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[8px] font-bold uppercase tracking-widest text-(--zinc-muted)">Full Name</label>
                    <input required type="text" className="w-full bg-(--background) border border-(--border) p-4 rounded-xl outline-none focus:ring-2 focus:ring-(--accent-primary)" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] font-bold uppercase tracking-widest text-(--zinc-muted)">Email</label>
                    <input required type="email" className="w-full bg-(--background) border border-(--border) p-4 rounded-xl outline-none focus:ring-2 focus:ring-(--accent-primary)" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[8px] font-bold uppercase tracking-widest text-(--zinc-muted)">Special Instructions</label>
                    <textarea rows={3} className="w-full bg-(--background) border border-(--border) p-4 rounded-xl outline-none focus:ring-2 focus:ring-(--accent-primary) resize-none" placeholder="Quantity, specific dimensions, or material preferences..." />
                  </div>
                  <button className="md:col-span-2 py-5 modern-gradient text-white font-bold uppercase tracking-[0.5em] text-[10px] rounded-2xl shadow-xl shadow-(--accent-primary)/20">
                    SUBMIT REQUEST
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-20 space-y-8">
                <div className="w-20 h-20 bg-(--accent-primary)/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <svg className="w-10 h-10 text-(--accent-primary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-display">Thank You.</h2>
                  <p className="text-(--zinc-muted) font-light">Your order request for <span className="text-(--accent-primary) font-bold">{selectedProduct.title}</span> has been received.</p>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 text-(--zinc-muted) hover:text-(--accent-primary) transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
