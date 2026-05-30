"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Compass, Brain, Zap, Shield } from "lucide-react";

export default function Home() {
  const [telemetry, setTelemetry] = useState({
    posX: 12.4,
    posY: 87.1,
    laserScan: 0,
    radarRange: 14.8,
    slamStatus: "MAPPING",
    systemCheck: "NOMINAL",
    cpuTemp: 38.4,
  });

  const [logs, setLogs] = useState<string[]>([
    "[SYS] Core systems initialized. 100% Secure Nodes.",
    "[SLAM] Spatial mapping module locked. Corridor 4B active.",
    "[NAV] Dynamic path planner loaded. Grid size: 1000x1000",
  ]);

  // Simulate active telemetry logs for robotics hud
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        posX: +(prev.posX + (Math.random() - 0.5) * 0.3).toFixed(2),
        posY: +(prev.posY + (Math.random() - 0.5) * 0.3).toFixed(2),
        laserScan: +(Math.random() * 360).toFixed(1),
        radarRange: +(14.2 + Math.random() * 0.6).toFixed(2),
        slamStatus: Math.random() > 0.05 ? "TRACKING" : "CORRECTING",
        cpuTemp: +(38.0 + Math.random() * 1.5).toFixed(1),
      }));
    }, 1200);

    const logList = [
      "[SLAM] Mapping point cloud updated. 4.2M triangles/sec.",
      "[IoT] Synced encrypted logs to localized domestic servers.",
      "[NAV] Dynamic route recalculation passed. 0 collision threats.",
      "[SYS] Actuator joint temperature checks complete. Status: NOMINAL.",
      "[UI] Multilingual voice parser active. Regional accent match: 98%.",
    ];

    const logInterval = setInterval(() => {
      const newLog = logList[Math.floor(Math.random() * logList.length)];
      const timestamp = new Date().toLocaleTimeString();
      setLogs((prev) => [`[${timestamp}] ${newLog}`, prev[0], prev[1]].slice(0, 3));
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-slate-100 transition-all duration-500 bg-tech-grid relative overflow-hidden">
      {/* GLOWING ORB */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar />

      {/* HERO SECTION - CYBER BLUEPRINT ACCENTS */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900/80 border border-cyan-500/25 rounded-full px-4 py-1.5 text-xs font-mono font-bold tracking-wider text-cyan-500 dark:text-cyan-400 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-hud-pulse"></span>
            SYS: CORE_DEPLOYMENT_ONLINE
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
            The Future of
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent glow-cyan"> Intelligent </span>
            Service Robotics
          </h1>

          <p className="text-slate-650 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Designing and manufacturing India&apos;s first fully secure, localized service robots. Engineered specifically to navigate high-footfall hospitality reception desks, healthcare hallways, and enterprise lobbies.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <Link
              href="/products"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-all"
            >
              Explore Products &rarr;
            </Link>
            <Link
              href="/contact"
              className="border border-cyan-500/25 bg-white dark:bg-slate-900/50 text-cyan-500 dark:text-cyan-400 hover:text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide hover:bg-cyan-500/10 hover:scale-[1.02] transition-all shadow-sm"
            >
              Book Systems Demo
            </Link>
          </div>
        </div>

        {/* Right Column: Premium Robot Card */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[80px] rounded-full"></div>
          <div className="w-full max-w-[380px] rounded-[24px] overflow-hidden border border-slate-200 dark:border-cyan-500/20 shadow-2xl relative z-10 p-1 bg-white">
            <img
              src="/Joy A-01.png"
              alt="Joy A-01"
              className="w-full h-auto rounded-[20px] transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* SYSTEMS HUD LIVE TELEMETRY LOGS GRID */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-white/80 dark:bg-[#080d1c]/80 backdrop-blur rounded-[36px] border border-slate-200 dark:border-cyan-500/20 corner-bracket p-8 sm:p-10 shadow-2xl transition-colors">
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping"></span>
              Live Systems Diagnostic Hub
            </h3>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Telemetry Core & Pathing Matrix
            </h2>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            {/* Live Parameter Meters */}
            <div className="bg-slate-50 dark:bg-[#030712]/90 rounded-2xl p-6 border border-slate-200 dark:border-cyan-500/15 shadow-sm font-mono text-xs space-y-4 transition-colors">
              <h4 className="font-bold text-cyan-500 dark:text-cyan-400 uppercase tracking-wider mb-2 pb-2 border-b border-slate-200 dark:border-cyan-500/10 flex justify-between items-center">
                <span>⚡ CORE SENSORS</span>
                <span className="text-[9px] text-emerald-400">NOMINAL</span>
              </h4>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-600 dark:text-slate-350">
                  <span>LiDAR Scan Angle:</span>
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold">{telemetry.laserScan}°</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-[#020617] h-2 rounded-full overflow-hidden border border-slate-300 dark:border-cyan-500/10 p-0.5">
                  <div className="bg-cyan-500 h-full rounded-full transition-all duration-300" style={{ width: `${(telemetry.laserScan / 360) * 100}%` }}></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-600 dark:text-slate-350">
                  <span>LiDAR Proximity Sweep:</span>
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold">{telemetry.radarRange}m</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-[#020617] h-2 rounded-full overflow-hidden border border-slate-300 dark:border-cyan-500/10 p-0.5">
                  <div className="bg-cyan-500 h-full rounded-full transition-all duration-300" style={{ width: `${(telemetry.radarRange / 25) * 100}%` }}></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-600 dark:text-slate-350">
                  <span>Compute Core Temp:</span>
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold">{telemetry.cpuTemp}°C</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-[#020617] h-2 rounded-full overflow-hidden border border-slate-300 dark:border-cyan-500/10 p-0.5">
                  <div className="bg-cyan-500 h-full rounded-full transition-all duration-300" style={{ width: `${(telemetry.cpuTemp / 80) * 100}%` }}></div>
                </div>
              </div>
            </div>

            {/* Radar Coordinates Sweeping */}
            <div className="bg-slate-50 dark:bg-[#030712]/90 rounded-2xl p-6 border border-slate-200 dark:border-cyan-500/15 shadow-sm relative overflow-hidden flex items-center justify-center min-h-[180px] transition-colors">
              {/* Radar Coordinate Grid */}
              <div className="absolute inset-0 bg-tech-grid opacity-35 z-0"></div>
              
              {/* Radar Grid Axes */}
              <div className="absolute inset-0 axis-indicator axis-x opacity-20"></div>
              <div className="absolute inset-0 axis-indicator axis-y opacity-20"></div>

              {/* Sonar Radar Rings */}
              <div className="absolute w-24 h-24 border border-cyan-500/10 rounded-full"></div>
              <div className="absolute w-40 h-40 border border-cyan-500/10 rounded-full"></div>

              {/* Radar Sweep Line */}
              <div className="absolute inset-x-0 h-0.5 bg-cyan-500/50 animate-slam-scan shadow-[0_0_12px_rgba(6,182,212,0.6)]"></div>
              
              {/* Target Dot */}
              <div className="relative z-10 text-center space-y-1">
                <div className="w-6 h-6 rounded-full border-2 border-cyan-500 flex items-center justify-center mx-auto animate-pulse bg-cyan-500/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                </div>
                <span className="font-mono text-[9px] text-cyan-500 uppercase tracking-widest block font-bold">SLAM Radar Active</span>
              </div>
            </div>

            {/* Premium Code Terminal logs */}
            <div className="bg-[#030712]/95 rounded-2xl border border-cyan-500/20 overflow-hidden flex flex-col justify-between h-full font-mono text-[10px]">
              {/* Terminal Title Bar */}
              <div className="bg-[#080d1c] px-4 py-2 border-b border-cyan-500/10 flex justify-between items-center text-slate-400">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
                </div>
                <span className="text-[9px] text-cyan-500/80 uppercase font-bold tracking-wider">iot_terminal.sh</span>
              </div>
              
              <div className="p-5 flex-grow space-y-2.5 text-slate-400">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2 items-start leading-relaxed text-[9px] sm:text-[10px] break-all truncate">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
              
              <div className="px-4 py-2 bg-[#080d1c]/40 border-t border-cyan-500/10 text-right text-[8px] text-cyan-500/60 tracking-wider">
                DOMESTIC_SERVERS_HOSTED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section className="bg-slate-100/50 dark:bg-slate-900/30 py-24 px-6 border-t border-b border-slate-200 dark:border-cyan-500/10 relative z-10 transition-colors">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Robotics Demo
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
            See Our Robots
            <span className="text-cyan-500 glow-cyan"> In Action</span>
          </h2>

          <p className="mt-6 text-slate-650 dark:text-slate-355 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore how Techligence Robotics is transforming public-facing reception desks and clinical assistance.
          </p>

          {/* VIDEO FRAME */}
          <div className="mt-16 bg-white dark:bg-[#080d1c]/80 rounded-[36px] shadow-2xl overflow-hidden border border-slate-200 dark:border-blueprint corner-bracket p-3 box-glow-cyan transition-colors">
            <div className="aspect-video rounded-[28px] overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0Ljw9ha42YQ"
                title="Robot Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* STATS COUNT */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white dark:bg-[#080d1c]/80 rounded-[28px] p-8 shadow-lg border border-slate-200 dark:border-cyan-500/15 box-glow-cyan transition-colors">
              <h3 className="text-4xl font-black text-cyan-500 glow-cyan">50+</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm font-semibold">
                Robotics Deployments
              </p>
            </div>

            <div className="bg-white dark:bg-[#080d1c]/80 rounded-[28px] p-8 shadow-lg border border-slate-200 dark:border-cyan-500/15 box-glow-cyan transition-colors">
              <h3 className="text-4xl font-black text-cyan-500 glow-cyan">20+</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm font-semibold">
                Enterprise Lobbies
              </p>
            </div>

            <div className="bg-white dark:bg-[#080d1c]/80 rounded-[28px] p-8 shadow-lg border border-slate-200 dark:border-cyan-500/15 box-glow-cyan transition-colors">
              <h3 className="text-4xl font-black text-cyan-500 glow-cyan">100%</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm font-semibold">
                Secure Local Hosting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TECHLIGENCE */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          Engineering Excellence
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Why Choose Techligence
        </h2>

        <p className="mt-6 text-slate-650 dark:text-slate-355 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Designed, engineered, and manufactured indigenously in India.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-white dark:bg-[#080d1c]/60 p-8 rounded-[32px] shadow-lg border border-slate-200 dark:border-cyan-500/15 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 text-left relative overflow-hidden">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Compass className="w-6 h-6 text-cyan-550 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Advanced SLAM</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Highly responsive multi-sensor spatial navigation mapping through challenging layouts.
            </p>
          </div>

          <div className="bg-white dark:bg-[#080d1c]/60 p-8 rounded-[32px] shadow-lg border border-slate-200 dark:border-cyan-500/15 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 text-left relative overflow-hidden">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Brain className="w-6 h-6 text-cyan-550 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Cognitive Core</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Integrated LLM conversational engine for natural speech interaction.
            </p>
          </div>

          <div className="bg-white dark:bg-[#080d1c]/60 p-8 rounded-[32px] shadow-lg border border-slate-200 dark:border-cyan-500/15 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 text-left relative overflow-hidden">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Zap className="w-6 h-6 text-cyan-550 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Real-Time Core</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              High-performance compute platforms responding immediately to visual cues.
            </p>
          </div>

          <div className="bg-white dark:bg-[#080d1c]/60 p-8 rounded-[32px] shadow-lg border border-slate-200 dark:border-cyan-500/15 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 text-left relative overflow-hidden">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <Shield className="w-6 h-6 text-cyan-550 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Secure Data Nodes</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Encryption models locally hosted on domestic servers for military-grade protection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 text-white text-center border-t border-cyan-500/15 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black leading-tight">
            Ready to Deploy Your Fleet?
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact our systems integration team today for a spatial facilities audit and customize mapping layouts.
          </p>
          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <Link
              href="/products"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-all"
            >
              Browse Full Selection
            </Link>
            <Link
              href="/contact"
              className="border border-cyan-500/30 text-cyan-400 hover:text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide hover:bg-cyan-500/15 hover:scale-[1.02] transition-all"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}