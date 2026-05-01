"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Invalid archival credentials.");
      }
    } catch (err) {
      setError("Laboratory access denied.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-12">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-500/5 rounded-full blur-[120px]" />

      <div className="w-full max-w-md relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600">Secure Access</span>
          </div>
          <h1 className="text-5xl font-display tracking-tight">Studio <span className="italic">Login</span>.</h1>
          <p className="text-slate-400 font-light text-sm tracking-wide uppercase">Authorized Laboratory Personnel Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 premium-card-shadow">
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400 ml-2">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white border border-slate-100 outline-none p-5 rounded-2xl text-slate-800 placeholder:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                placeholder="Identification"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400 ml-2">Archival Key</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-slate-100 outline-none p-5 rounded-2xl text-slate-800 placeholder:text-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center animate-pulse">{error}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-6 modern-gradient text-white font-bold text-[10px] uppercase tracking-[0.5em] rounded-2xl premium-card-shadow transition-all ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {isLoading ? "Validating..." : "ENTER LABORATORY"}
          </button>
        </form>

        <div className="text-center">
          <p className="text-slate-300 text-[9px] font-bold uppercase tracking-[0.4em]">Newland Digital Lab • Est. 1955</p>
        </div>
      </div>
    </div>
  );
}
