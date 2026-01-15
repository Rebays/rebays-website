"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: unknown; clientY: unknown; }) => {
      setMousePos({ x: e.clientX as number, y: e.clientY as number });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#02040a] text-slate-300 overflow-hidden font-sans">
      
      {/* 0. BASE BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/code-pc2.jpg" 
          alt="Network Background"
          className="h-full w-full object-cover opacity-20 grayscale transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02040a]/40 to-[#02040a]" />
      </div>

      {/* 1. INTERACTIVE LIGHTING LAYER */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.12), transparent 80%)`
        }}
      />

      {/* 2. MINIMAL NAVIGATION */}
      <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-10 py-8">
        <div className="text-white font-bold tracking-tighter text-xl">
          REBAYS<span className="text-teal-500">.</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="#" className="hover:text-teal-400 transition-colors">Services</a>
          <a href="#" className="hover:text-teal-400 transition-colors">About</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* 3. CORE INTERFACE */}
      <main className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        
        {/* Subtle Tagline */}
        <div className="mb-6 overflow-hidden">
          <span className="block text-teal-500 font-mono text-xs tracking-[0.4em] uppercase animate-reveal">
            Next-Gen Digital Architecture
          </span>
        </div>

        {/* Cinematic Branding */}
        <div className="relative group">
          <div className="absolute -inset-8 bg-teal-500/10 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
          <h1 className="relative text-8xl md:text-[12rem] font-black tracking-tighter text-white leading-none">
            REBAYS<span className="text-teal-500">.</span>
          </h1>
        </div>

        {/* Minimal Sub-headline */}
        <p className="mt-8 max-w-lg text-center text-slate-400 text-lg md:text-xl font-light leading-relaxed">
          Engineering scalable software solutions for the 
          <span className="text-white"> modern Pacific enterprise.</span>
        </p>

        {/* CTA Section */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <button className="group relative px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full overflow-hidden transition-all hover:border-teal-500/50">
            <span className="relative z-10 flex items-center gap-2 tracking-widest text-xs">
              INITIATE PARTNERSHIP
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <div className="flex gap-4 items-center opacity-20 hover:opacity-50 transition-opacity cursor-default">
             <div className="h-[1px] w-8 bg-slate-500"></div>
             <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Explore</span>
             <div className="h-[1px] w-8 bg-slate-500"></div>
          </div>
        </div>
      </main>

      {/* 4. BACKGROUND GRID (Moved to bottom of stack) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

    </div>
  );
}