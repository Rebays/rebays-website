// app/services/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ServicesPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040a] text-white relative overflow-hidden">
      {/* Fixed background elements – mouse glow + subtle grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.08), transparent 80%)`,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      </div>

      {/* Header / Hero */}
      <header className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
          Building the Pacific's <span className="text-teal-500">Next-Gen</span> Digital Backbone
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
          From cloud-native infrastructure to custom product platforms — we architect solutions that thrive in high-latency, distributed, island-to-island environments.
        </p>
        <button className="group relative px-10 py-5 text-lg font-bold uppercase tracking-wider text-white bg-gradient-to-r from-teal-600 to-teal-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30">
          <span className="relative z-10">Initiate Partnership</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
      </header>

      {/* Intro Paragraph */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 max-w-6xl mx-auto z-10">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-slate-300 leading-relaxed mb-8">
            At Rebays, we don’t build generic software. We engineer digital architecture purpose-built for the Pacific — where connectivity is intermittent, bandwidth is precious, and downtime costs more than money.
          </p>
          <p className="text-slate-300 leading-relaxed mb-8">
            Our services combine enterprise-grade cloud engineering, regional latency optimization, and deep understanding of Pacific business realities to deliver systems that are:
          </p>
          <ul className="list-none space-y-3 text-slate-300 mb-8">
            <li className="flex items-start">
              <span className="text-teal-500 mr-3 text-xl">•</span>
              Resilient under variable network conditions
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3 text-xl">•</span>
              Scalable from pilot to regional dominance
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3 text-xl">•</span>
              Secure by design, compliant by necessity
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3 text-xl">•</span>
              Fast to deploy, easy to maintain
            </li>
          </ul>
          <p className="text-slate-300 leading-relaxed">
            We partner with forward-thinking enterprises across telecom, logistics, finance, government, and agribusiness to turn complex challenges into competitive advantage.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 z-10">
        {[
          {
            title: "Cloud Scale & Infrastructure",
            desc: "We design and operate the invisible foundation your business runs on.",
            points: [
              "Multi-region / multi-cloud architectures optimized for Pacific latency and failover",
              "Hybrid & edge deployments for remote islands and low-connectivity sites",
              "Zero-downtime migrations from legacy on-prem to modern cloud-native",
              "Cost-optimized scaling (auto-scaling, reserved capacity, spot instances)",
              "Observability & monitoring stacks tuned for distributed Pacific operations",
            ],
            outcome: "40–70% reduction in infrastructure costs, 99.99%+ uptime even during outages, dramatically faster regional rollouts.",
          },
          {
            title: "Product Development & Custom Platforms",
            desc: "Turning business logic into intuitive, high-performance digital products.",
            points: [
              "Full-stack product engineering (frontend, backend, mobile, APIs)",
              "Real-time dashboards, supply-chain visibility, customer portals",
              "Workflow automation & internal tools that replace spreadsheets & email",
              "Progressive web apps (PWAs) that work offline-first for field teams",
              "Integration with existing ERP, CRM, financial, and logistics systems",
            ],
            tech: "We use: Next.js / React, Node.js / TypeScript, serverless & containers, GraphQL or gRPC where performance matters.",
          },
          {
            title: "Security & Compliance Architecture",
            desc: "Security isn’t an add-on — it’s the bedrock.",
            points: [
              "Zero-trust design from identity to data at rest/transit",
              "End-to-end encryption, key management, secrets rotation",
              "Regional data sovereignty & compliance (GDPR-equivalent, local regs)",
              "Penetration testing, red-team exercises, continuous vulnerability scanning",
              "Incident response playbooks tailored to Pacific connectivity constraints",
            ],
            outcome: "Enterprises that pass audits faster and sleep better knowing breaches are prevented, not just detected.",
          },
          {
            title: "Pacific Edge Optimization",
            desc: "Solutions that understand distance, weather, and bandwidth reality.",
            points: [
              "Content delivery & caching strategies for subsea cable dependencies",
              "Offline-first / sync-later architectures for remote operations",
              "Low-bandwidth UX patterns (progressive loading, compressed assets)",
              "Multi-SIM / failover routing for critical field applications",
              "Disaster-recovery planning for cyclones, cable cuts, power instability",
            ],
            note: "We solve problems most global vendors don’t even think about.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-300 mb-6 text-lg">{service.desc}</p>

            <ul className="space-y-3 mb-6">
              {service.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-slate-400">
                  <span className="text-teal-500 mr-3 mt-1">→</span>
                  {point}
                </li>
              ))}
            </ul>

            {service.outcome && (
              <p className="text-teal-400 font-medium italic">Typical outcome: {service.outcome}</p>
            )}
            {service.tech && (
              <p className="text-slate-400 mt-4">{service.tech}</p>
            )}
            {service.note && (
              <p className="text-slate-500 mt-4 italic">{service.note}</p>
            )}
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 max-w-5xl mx-auto text-center z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
          Why <span className="text-teal-500">Clients Choose</span> Rebays.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Teams that live and work in the Pacific — not just theorize about it",
            "No bloated agencies — direct access to senior architects & engineers",
            "Transparent pricing: fixed scopes or agile retainers, no surprises",
            "Obsessed with uptime & performance under real Pacific conditions",
            "Fast iteration: prototypes in weeks, production in months",
          ].map((reason, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-slate-300 text-lg leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 text-center z-10 bg-gradient-to-b from-transparent to-teal-950/30">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
          Don’t build for yesterday’s internet.<br />
          Build for tomorrow’s <span className="text-teal-500">Pacific</span>.
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12">
          Whether you’re modernizing core systems, launching a new platform, or preparing for regional expansion — we’re ready when you are.
        </p>
        <button className="group relative px-12 py-6 text-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-teal-600 to-teal-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/40">
          <span className="relative z-10">Initiate Partnership</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
      </section>
    </div>
  );
}