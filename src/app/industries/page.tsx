"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, AlertTriangle, Sparkles } from "lucide-react";

const industries = [
  {
    id: "hospitality",
    title: "Hospitality & Luxury Hotels",
    tagline: "The Future of Guest Experience",
    description: "Step into a new era of hospitality. Techligence robots act as intelligent, multilingual lobby receptionists, greeting guests, providing digital check-in queues, guiding visitors to amenities, and managing guest queries 24/7.",
    image: "/Joy A-01.png",
    painPoints: ["High receptionist staff turnover rates.", "Multilingual greeting demands from international guests.", "Inconsistent guest greeting experiences during late-night shifts."],
    solution: "Joy A-01 offers a consistent, warm greeting, supports 12+ regional & international languages, and integrates with PMS systems for streamlined checkout.",
    efficiencyLabel: "Front Desk Queue Bottlenecks Reduced",
    efficiencyValue: 85,
  },
  {
    id: "healthcare",
    title: "Healthcare & Smart Hospitals",
    tagline: "Contactless Assistance & Patient Routing",
    description: "Navigate high-footfall clinics and hospital lobbies with ease. Our robots assist patients with secure contactless registration, answer hospital policy questions, and provide dynamic directions to specific wards or diagnostics labs.",
    image: "/T-2 Max.png",
    painPoints: ["Front-desk bottlenecks and long wait queues.", "Risk of cross-contamination at physical check-in counters.", "Anxious patients struggling to navigate sprawling clinical blocks."],
    solution: "Contactless digital check-ins, automated multi-floor mapping and escorting, and instant answers to hospital directory details.",
    efficiencyLabel: "Patient Registration Waiting Time Saved",
    efficiencyValue: 70,
  },
  {
    id: "retail",
    title: "Retail & High-Traffic Malls",
    tagline: "Interactive Directories & Promotional Signage",
    description: "Capture visitor attention and boost brand engagement. Techligence robots serve as interactive digital signage guides, pointing customers to store locations, listing current sales, and using LLM models for customized voice-assisted shopping.",
    image: "/Andy R1.png",
    painPoints: ["High operational cost of manual directory booths.", "Missed advertisement impressions in high-footfall hallways.", "Difficulties in delivering real-time promotional updates to shoppers."],
    solution: "Andy R1 provides high-definition visual signs, tracks mall analytics, and interactive directory searches for instant navigation.",
    efficiencyLabel: "Visitor Interaction Engagement Boosted",
    efficiencyValue: 90,
  },
  {
    id: "corporate",
    title: "Corporate Offices & Enterprises",
    tagline: "Automated Lobby Reception & Analytics",
    description: "Transform your corporate headquarters lobby. Manage employee badge check-ins, automate visitor badge printing, log courier notifications, and integrate real-time operations dashboard with our enterprise fleet control.",
    image: "/T-2 Mini.png",
    painPoints: ["Security delays at visitor logbook desks.", "Lack of consolidated data on daily visitor traffic.", "Excessive manual hours spent coordinating guest arrivals."],
    solution: "Expressive front-desk greeting, immediate host SMS notifications via custom API hooks, and fully consolidated IoT admin logs.",
    efficiencyLabel: "Lobby Security Dispatch Clearance Speed",
    efficiencyValue: 95,
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-all duration-500 bg-tech-grid">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-28 px-6 text-white border-b border-cyan-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-400/20 shadow-sm">
            Target Industry Applications
          </div>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
            Transforming
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent glow-cyan"> Service Sectors </span>
            with AI
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Eliminating operational friction, streamlining visitor traffic, and offering a premium, secure customer experience across India&apos;s hospitality, retail, and corporate hubs.
          </p>
        </div>
      </section>

      {/* INDUSTRIES SPOTLIGHT LIST */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-28">
        {industries.map((ind, index) => (
          <div
            key={ind.id}
            id={ind.id}
            className={`grid lg:grid-cols-12 gap-16 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Frame with Corner Bracket Blueprint HUD */}
            <div className={`lg:col-span-5 relative flex justify-center ${index % 2 === 1 ? "lg:order-last" : ""}`}>
              <div className="absolute w-[320px] h-[320px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[80px] rounded-full"></div>
              <div className="relative z-10 w-full max-w-[380px] rounded-[28px] overflow-hidden border-blueprint corner-bracket shadow-2xl bg-white p-1">
                <div className="relative overflow-hidden rounded-[24px]">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-auto rounded-[24px] hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur border border-cyan-500/25 rounded-xl p-3 text-white text-[10px] font-mono flex justify-between items-center">
                    <span>DEPLOYED STATUS</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-hud-pulse"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Specs */}
            <div className="lg:col-span-7">
              <span className="text-cyan-500 dark:text-cyan-400 text-xs font-black uppercase tracking-wider mb-2 block">
                Sector Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                {ind.title}
              </h2>
              <p className="text-slate-550 dark:text-slate-400 font-semibold text-sm sm:text-base mt-1.5">
                {ind.tagline}
              </p>
              <p className="mt-6 text-slate-655 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {ind.description}
              </p>

              {/* Dynamic Technical Performance Bar */}
              <div className="mt-6 font-mono text-[10px] space-y-2">
                <div className="flex justify-between text-slate-500 dark:text-slate-450 uppercase tracking-wider font-bold items-center gap-1.5">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> 
                    {ind.efficiencyLabel}:
                  </span>
                  <span className="text-cyan-500">{ind.efficiencyValue}% Efficiency Gain</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-100 dark:border-slate-800">
                  <div className="bg-cyan-500 h-full animate-hud-pulse" style={{ width: `${ind.efficiencyValue}%` }}></div>
                </div>
              </div>

              {/* Pain Point Analysis */}
              <div className="mt-8 grid sm:grid-cols-2 gap-6 bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-[28px] border border-slate-150 dark:border-slate-800 shadow-sm">
                <div>
                  <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    Sector Pain Points
                  </h4>
                  <ul className="space-y-2.5">
                    {ind.painPoints.map((p, i) => (
                      <li key={i} className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-red-500 font-bold">&bull;</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-800 pt-6 sm:pt-0 sm:pl-6">
                  <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    Techligence Solution
                  </h4>
                  <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">
                    {ind.solution}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block text-xs font-bold text-cyan-500 hover:text-cyan-400 mt-4 transition-colors"
                  >
                    Discuss Deployment &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* COMPARATIVE ANALYSIS SECTION */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/40 border-t border-b border-slate-200/50 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Conventional Staffing vs. <span className="text-cyan-500">Techligence AI</span>
            </h2>
            <p className="mt-4 text-slate-550 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Analyzing efficiency, security, and ROI differences in public facing support roles.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[32px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-850/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="p-6">Performance Dimension</th>
                  <th className="p-6">Conventional Manual Front-Desk</th>
                  <th className="p-6 text-cyan-500 font-extrabold">Techligence Robotics AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 dark:divide-slate-800 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-850/10 text-slate-700 dark:text-slate-350">
                  <td className="p-6 font-bold text-slate-900 dark:text-white">Operational Availability</td>
                  <td className="p-6">Limited shifts, high holiday turnover, late-night coverage premium fees.</td>
                  <td className="p-6 font-semibold text-cyan-600 dark:text-cyan-400">24/7/365 Continuous Availability, zero downtime.</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-850/10 text-slate-700 dark:text-slate-350">
                  <td className="p-6 font-bold text-slate-900 dark:text-white">Multilingual Ability</td>
                  <td className="p-6">Rarely speaks more than 2-3 languages fluently per site staff.</td>
                  <td className="p-6 font-semibold text-cyan-600 dark:text-cyan-400">Supports 12+ Indian Regional & International languages out-of-the-box.</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-850/10 text-slate-700 dark:text-slate-350">
                  <td className="p-6 font-bold text-slate-900 dark:text-white">Data Security & Logs</td>
                  <td className="p-6">Manual logbooks vulnerable to physical leaks, zero digital analytics.</td>
                  <td className="p-6 font-semibold text-cyan-600 dark:text-cyan-400">100% Secure local data hosting, encrypted logs, dynamic cloud metrics.</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-850/10 text-slate-700 dark:text-slate-350">
                  <td className="p-6 font-bold text-slate-900 dark:text-white">Cost of Operation</td>
                  <td className="p-6">High recurring monthly salary, onboarding costs, benefit packages.</td>
                  <td className="p-6 font-semibold text-cyan-600 dark:text-cyan-400">One-time initial capital investment, minimal monthly cloud hosting.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Ready to Upgrade Your Corporate Lobbies?
        </h2>
        <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Request a specialized physical on-site audit of your facilities to customize dynamic mapping layouts.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all"
          >
            Consult Systems Integrators
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
