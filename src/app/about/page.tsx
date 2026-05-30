"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const stats = [
  { value: "2017", label: "R&D Commenced" },
  { value: "100%", label: "Indigenous IP & Engineering" },
  { value: "2 Gen", label: "Humanoid Prototypes (PIHU)" },
  { value: "12+", label: "Regional Languages Supported" },
];

const timelineSteps = [
  {
    year: "2017 - 2020",
    title: "Modular Actuators & Foundations",
    description: "Conducted fundamental research in modular robotics, simplified robotic systems, and custom smart robotic actuators, building a base for custom hardware automation.",
    features: ["Developed modular actuator blocks", "Established central embedded firmware architecture", "Initiated India-centric design drafts"],
  },
  {
    year: "2021 - 2023",
    title: "Humanoid PIHU-1 (Bipedal Launch)",
    description: "Engineered and launched PIHU-1, our first 4.3 feet tall bipedal smart humanoid robot, implementing active walking gaits, robust remote control systems, and hands-free interaction.",
    features: ["4.3-ft bipedal physical framework", "Real-time remote tele-operation core", "Audio-visual hands-free greeting software"],
  },
  {
    year: "2024 - 2026",
    title: "Cognitive PIHU-2 & Smart Lobbies",
    description: "Unveiled PIHU-2, integrating deep neural network learning, remembering modes, imitation gestures, and active replay. Successfully deployed lobby greeting robots across dynamic high-footfall sites.",
    features: ["Advanced learning & remembering modes", "Gestural imitation & replay mechanics", "Commercial smart receptionist launch"],
  },
  {
    year: "2026 & Beyond",
    title: "Mass Manufacturing & Custom Actuators",
    description: "Scaling domestic manufacturing of smart robotic actuators to power agricultural, heavy industrial, and logistics robotics locally in India.",
    features: ["Localized parts assembly line", "Next-gen modular robotic arms", "Widespread enterprise deployments"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-all duration-500 bg-tech-grid">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-28 px-6 text-white border-b border-cyan-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-400/20 shadow-sm">
            Engineering Indigenous Future
          </div>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
            About
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent glow-cyan"> Techligence Robotics </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Eliminating dependencies on expensive, supply-chain-vulnerable, and insecure imported robotics, we design and engineer smart platforms tailored for India&apos;s high-footfall environments.
          </p>
        </div>
      </section>

      {/* WHY INDIGENOUS CORE SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        {/* Visual Frame with corner brackets blueprint HUD */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute w-[320px] h-[320px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[80px] rounded-full"></div>
          <div className="relative z-10 w-full max-w-[380px] rounded-[28px] overflow-hidden border-blueprint corner-bracket shadow-2xl bg-white p-1">
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src="/Joy A-01.png"
                alt="Techligence R&D Lab"
                className="w-full h-auto rounded-[24px] hover:scale-[1.01] transition duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur border border-cyan-500/25 rounded-xl p-3 text-white text-[10px] font-mono flex justify-between items-center">
                <span>R&D LAB CONTEXT</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-hud-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Block */}
        <div className="lg:col-span-7">
          <span className="text-cyan-500 dark:text-cyan-400 text-xs font-black uppercase tracking-wider mb-2 block">
            Our Raison D&apos;Être
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            The Problem with Imported Robotics
          </h2>
          <div className="mt-6 space-y-4 text-slate-650 dark:text-slate-350 text-sm sm:text-base leading-relaxed">
            <p>
              Nearly 100% of the service robots deployed in Indian hotels, corporate offices, and hospitals today are imported. This reliance creates major vulnerabilities: high deployment overheads, supply-chain dependencies, and severe concerns regarding foreign data security.
            </p>
            <p>
              Furthermore, imported robots are optimized for structured, quiet environments and uniform layouts. They struggle in India&apos;s highly dynamic, high-footfall hallways and varied languages.
            </p>
            <p className="font-semibold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-500 pl-4 bg-cyan-500/5 py-2.5 rounded-r-xl">
              Techligence Robotics bridges this gap. Our software, spatial SLAM navigation, structural designs, and local servers are built fully in-house.
            </p>
          </div>
        </div>
      </section>

      {/* STATS COUNT */}
      <section className="py-16 px-6 bg-slate-100 dark:bg-slate-900/40 border-t border-b border-slate-200/50 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-white dark:bg-slate-900/50 p-6 rounded-[24px] border border-slate-200/50 dark:border-slate-800 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-cyan-500 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm font-bold text-slate-550 dark:text-slate-400 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP TIMELINE */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
            Chronology of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Our Robotics <span className="text-cyan-500">R&D Journey</span>
          </h2>
          <p className="mt-4 text-slate-550 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From basic modular actuators to state-of-the-art cognitive bipedal humanoid robots.
          </p>
        </div>

        {/* Timeline circuit trace lines */}
        <div className="relative border-l-2 border-cyan-500/35 pl-6 sm:pl-10 space-y-16">
          {timelineSteps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Timeline Indicator microchip node */}
              <div className="absolute -left-[32px] sm:-left-[49px] top-1 w-6 h-6 rounded-lg bg-slate-900 border border-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <span className="w-2.5 h-2.5 bg-cyan-400 rounded-sm animate-hud-pulse"></span>
              </div>

              <div>
                <span className="inline-block text-cyan-500 dark:text-cyan-450 font-bold text-sm tracking-wider font-mono bg-cyan-500/5 px-3 py-1 rounded-lg border border-cyan-500/10">
                  {step.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-3 group-hover:text-cyan-500 transition duration-300">
                  {step.title}
                </h3>
                <p className="mt-3 text-slate-650 dark:text-slate-350 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Sub Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.features.map((feat, j) => (
                    <span key={j} className="bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800 text-slate-650 dark:text-slate-400 px-3 py-1 rounded-xl text-xs font-semibold leading-relaxed font-mono">
                      &gt; {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800/80">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
          Want to Learn More About PIHU Humans?
        </h2>
        <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Request detailed whitepapers on our bipedal navigation actuators and cognitive learning networks.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all"
          >
            Get Research Specs
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
