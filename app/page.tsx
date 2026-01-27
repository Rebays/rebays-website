"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // THE SNAP CONTAINER: Locks the scroll to full screen sections
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[#02040a]">
      
      {/* GLOBAL BACKGROUNDS & LIGHTING (Fixed so they stay put) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        
        <Image
        src="/code-pc2.jpg"
        alt="bg-image"
        />
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.08), transparent 80%)`
          }}
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      {/* NAVIGATION (Fixed at top) */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-8">
        <div className="text-white font-bold tracking-tighter text-xl">
          REBAYS<span className="text-teal-500">.</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-slate-400">
          <button onClick={() => document.getElementById('services')?.scrollIntoView()} className="hover:text-teal-400 transition-colors">Services</button>
          <a href="#" className="hover:text-teal-400 transition-colors">About</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center z-10 px-6">
        <div className="mb-6 overflow-hidden">
          <span className="block text-teal-500 font-mono text-xs tracking-[0.4em] uppercase">
            Next-Gen Digital Architecture
          </span>
        </div>

        <div className="relative group text-center">
          <div className="absolute -inset-8 bg-teal-500/10 blur-[100px] rounded-full opacity-30" />
          <h1 className="relative text-7xl md:text-[10rem] font-black tracking-tighter text-white leading-none">
            REBAYS<span className="text-teal-500">.</span>
          </h1>
        </div>

        <p className="mt-8 max-w-lg text-center text-slate-400 text-lg md:text-xl font-light leading-relaxed">
          Building cool, functional, scalable products for the
          <span className="text-white"> modern Pacific enterprise.</span>
        </p>

        <div className="mt-12 flex flex-col items-center gap-12">
          <button className="group relative px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full overflow-hidden transition-all hover:border-teal-500/50">
            <span className="relative z-10 tracking-widest text-xs">INITIATE PARTNERSHIP</span>
          </button>
          
          <div className="animate-bounce flex flex-col items-center gap-2 opacity-30">
             <span className="text-[9px] font-mono tracking-widest uppercase">Scroll</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-teal-500 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES */}
      <section id="services" className="relative h-screen w-full snap-start flex flex-col items-center justify-center z-10 px-6 bg-[#02040a]/80 backdrop-blur-3xl">
        <div className="max-w-6xl w-full">
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Capabilities<span className="text-teal-500">.</span></h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cloud Scale", desc: "Enterprise-grade infrastructure designed for the high-bandwidth future.", icon: "01" },
              { title: "Product Dev", desc: "Turning complex business logic into intuitive, functional digital products.", icon: "02" },
              { title: "Pacific Edge", desc: "Tailored tech stacks optimized for regional connectivity and scale.", icon: "03" }
            ].map((s, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:-translate-y-2">
                <span className="font-mono text-teal-500 text-xs mb-4 block tracking-widest">{s.icon} {'//'}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative background element for Services */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

    </div>
  );
}