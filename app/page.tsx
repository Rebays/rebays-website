"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const buildSteps = [
    {
      title: "Discovery & Strategy",
      desc: "Deep dive into your business goals, Pacific-specific challenges, and success metrics.",
    },
    {
      title: "Architecture & Design",
      desc: "Create scalable, resilient blueprints optimized for regional latency and connectivity.",
    },
    {
      title: "Build & Iterate",
      desc: "Rapid development with continuous feedback loops and real-world testing.",
    },
    {
      title: "Deploy & Optimize",
      desc: "Seamless rollout, monitoring, and ongoing performance tuning across the Pacific.",
    },

  ];

  const projects = [
    {
      title: "Pacific Cloud Migration",
      desc: "Migrated legacy systems to scalable cloud infra for a major regional telco — 40% cost reduction, 99.99% uptime.",
      tags: ["Cloud", "AWS", "Migration"],
      image: "/projects/cloud-mig.jpg", // replace with your actual paths
      link: "#", // or real case study URL
    },
    {
      title: "Enterprise Logistics Platform",
      desc: "Built real-time tracking & supply chain dashboard tailored for island-hopping operations.",
      tags: ["Next.js", "Realtime", "Logistics"],
      image: "/projects/logistics.jpg",
      link: "#",
    },
    {
      title: "Secure FinTech Gateway",
      desc: "Zero-trust payment processing API with regional compliance — handles 10k+ TPS.",
      tags: ["Security", "FinTech", "API"],
      image: "/projects/fintech.jpg",
      link: "#",
    },
    {
      title: "Secure FinTech Gateway",
      desc: "Zero-trust payment processing API with regional compliance — handles 10k+ TPS.",
      tags: ["Security", "FinTech", "API"],
      image: "/projects/fintech.jpg",
      link: "#",
    },
    // Add 1–3 more as needed (keep 3–6 total for performance)
  ];

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  // Add fetch to your endpoint here
  alert("Message sent!"); // placeholder
  setIsContactOpen(false);
  };


  return (
    // THE SNAP CONTAINER: Locks the scroll to full screen sections
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[#02040a]">

      {/* GLOBAL BACKGROUNDS & LIGHTING (Fixed so they stay put) */}
      <div className="fixed inset-0 z-0 pointer-events-none">

        {/* <Image
        src="/code-pc2.jpg"
        alt="bg-image"
        width={300}
        height={300}
        className='w-full h-full object-cover object-center opacity-10 '
        /> */}
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
          <a href="/services" className="hover:text-teal-400 transition-colors">WHAT YOU GET</a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-500/20 backdrop-blur-lg border border-teal-400/30 text-teal-300 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:bg-teal-500/40 hover:scale-110 hover:shadow-xl hover:shadow-teal-500/40 active:scale-95"
            aria-label="Let's talk"
          >
            <svg
              className="w-7 h-7 transition-transform duration-300 group-hover:rotate-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </a>
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
          <button onClick={() => setIsContactOpen(true)} className="group relative px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full overflow-hidden transition-all hover:border-teal-500/50">
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

      {/* OUR BUILD PROCESS */}
      <section id="process" className="relative h-screen snap-start flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-6xl font-black text-center mb-20">Our <span className="text-teal-500">Build</span> Flow</h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Add connecting lines via pseudo-elements or SVG */}
            {buildSteps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-500/10 flex items-center justify-center text-3xl font-black text-teal-400">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FEATURED WORKS */}
      <section id="projects" className="relative h-screen w-full snap-start flex items-center justify-center z-10 px-6">
        <div className="max-w-7xl w-full">  {/* Slightly wider container to fit 4 cols comfortably */}
          {/* Title – kept exactly the same */}
          <div className="flex items-baseline gap-4 mb-10 md:mb-14 justify-center md:justify-start">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Featured Works<span className="text-teal-500">.</span>
            </h2>
            <div className="h-[1px] flex-grow bg-white/10 hidden md:block" />
          </div>

          <p className="text-center md:text-left text-slate-400 text-base md:text-lg max-w-3xl mx-auto md:mx-0 mb-10 md:mb-12">
            Real-world solutions built for Pacific-scale challenges — resilient, scalable, and enterprise-ready.
          </p>

          {/* Updated grid: 1 → 2 → 3 → 4 columns progressively */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.015] backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/10"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#02040a]/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br from-teal-500/20 to-transparent pointer-events-none" />
                </div>

                {/* Content – kept compact */}
                <div className="p-5 md:p-6 relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2.5 group-hover:text-teal-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-teal-500/8 text-teal-400/90 border border-teal-500/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-teal-400 text-xs md:text-sm font-medium hover:text-teal-300 transition-colors"
                  >
                    View Case Study
                    <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mouse gradient */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(700px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.05), transparent 80%)`,
          }}
        />
      </section>

      {/* OUR EDGE */}
      <section id="why-us" className="relative h-screen w-full snap-start flex items-center justify-center z-10 px-6">
        <div className="max-w-6xl w-full">
          {/* Title matching Capabilities style – same as Featured Works */}
          <div className="flex items-baseline gap-4 mb-10 md:mb-14 justify-center md:justify-start">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Why Rebays<span className="text-teal-500">.</span>
            </h2>
            <div className="h-[1px] flex-grow bg-white/10 hidden md:block" />
          </div>

          <p className="text-center md:text-left text-slate-400 text-base md:text-lg max-w-3xl mx-auto md:mx-0 mb-10 md:mb-12">
            Built for the Pacific — resilient infrastructure, local understanding, and enterprise-grade execution.
          </p>

          {/* Grid with smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Ultra-Resilient Infra",
                desc: "Designed for island latency, intermittent connectivity, and mission-critical uptime demands."
              },
              {
                num: "02",
                title: "Local-First Mindset",
                desc: "Deep understanding of Pacific business rhythms, regulations, and regional growth realities."
              },
              {
                num: "03",
                title: "Scalable from Day 1",
                desc: "Cloud-native foundations that grow seamlessly without costly rewrites or downtime."
              },
              {
                num: "04",
                title: "Security at Core",
                desc: "Zero-trust architecture, strong encryption, and compliance built in from the start."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-6 md:p-7 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/10"
              >
                {/* Number badge – smaller */}
                <span className="font-mono text-teal-500 text-xs md:text-sm tracking-widest block mb-3 md:mb-4">
                  {item.num}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Optional subtle accent line or dot */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Consistent mouse radial gradient – softer here */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(700px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.05), transparent 80%)`,
          }}
        />
      </section>



      {/* CTA */}

      <section className="relative h-screen w-full snap-start flex items-center justify-center z-20 px-6 bg-gradient-to-b from-[#02040a] via-[#02040a] to-teal-950/20">
        <div className="text-center max-w-3xl w-full relative z-10">
          {/* Much smaller headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-5 md:mb-8">
            Ready to <span className="text-teal-500">Rebay</span>s?
          </h2>

          {/* Compact supporting text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
            Partner with a team building scalable, secure, Pacific-optimized digital solutions.
          </p>

          {/* Smaller buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button
              onClick={() => setIsContactOpen(true)}
              className="group relative px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-teal-600 to-teal-500 rounded-full overflow-hidden transition-all duration-400 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 border border-teal-400/30 hover:border-teal-400/50"
            >
              {/* Subtle shine */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <span className="relative z-10">Initiate Partnership</span>
            </button>


          </div>

          {/* Tiny reassurance text */}
          <p className="mt-8 text-slate-500 text-xs md:text-sm font-light tracking-wide">
            No long sales cycles. Real conversations. Fast starts.
          </p>
        </div>

        {/* Softer mouse radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.07), transparent 80%)`,
          }}
        />

        {/* Very subtle bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-teal-950/20 to-transparent pointer-events-none" />
      </section>


      <footer className="relative bg-gradient-to-b from-[#02040a] to-black border-t border-teal-500/10 pt-12 pb-10 px-6 md:px-12 lg:px-24 z-10">
  {/* Optional subtle mouse glow – very light */}
  <div
    className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-40"
    style={{
      background: `radial-gradient(1000px at ${mousePos?.x || 0}px ${mousePos?.y || 0}px, rgba(20, 184, 166, 0.03), transparent 80%)`,
    }}
  />

  <div className="relative max-w-5xl mx-auto text-center md:text-left z-10">
    {/* Branding */}
    <div className="text-2xl md:text-3xl font-black tracking-tighter mb-6">
      REBAYS<span className="text-teal-500">.</span>
    </div>

    {/* Contact details only */}
    <div className="space-y-4 text-slate-300 text-base md:text-lg">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 justify-center md:justify-start">
        <a 
          href="mailto:hello@rebays.com" 
          className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          hello@rebays.com
        </a>

        {/* Optional phone – uncomment if you have one */}
        {/* <a href="tel:+6771234567" className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +677 123 4567
        </a> */}

        {/* Message / Contact form trigger */}
        <button
          onClick={() => setIsContactOpen?.(true)} // connects to your modal state
          className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors md:ml-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Message us
        </button>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-8 text-slate-500 text-sm">
      © {new Date().getFullYear()} Rebays. All rights reserved.
    </div>
  </div>
</footer>


      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsContactOpen(false)} // close on backdrop click
        >
          {/* Modal content – centered, dark/teal themed */}
          <div
            className="relative bg-[#0a0f1a] border border-teal-500/20 rounded-2xl shadow-2xl shadow-teal-500/10 max-w-lg w-full mx-4 p-8 overflow-hidden"
            onClick={e => e.stopPropagation()} // prevent close on content click
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-teal-400 transition-colors"
              onClick={() => setIsContactOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6">
              Let's <span className="text-teal-500">Partner</span>.
            </h2>

            <p className="text-slate-400 mb-8">
              Tell us about your project or partnership idea — we'll get back fast.
            </p>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                  required
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold uppercase tracking-wider rounded-lg hover:from-teal-500 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30"
              >
                Send Message
              </button>
            </form>

            <p className="text-center text-slate-500 text-sm mt-6">
              We'll reply within 1–2 business days.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}