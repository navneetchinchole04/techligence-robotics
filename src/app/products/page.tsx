"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Bot, Layers, Sliders, Shield, Compass, Settings, 
  Heart, Monitor, Volume2, RefreshCw, Eye, Brain, 
  Zap, LineChart, Cpu, Smile, Cloud, Network 
} from "lucide-react";

// Helper to render high-tech feature icons elegantly
const renderFeatureIcon = (name: string) => {
  const props = { className: "w-6 h-6 text-cyan-400 flex-shrink-0" };
  switch (name) {
    case "smile": return <Smile {...props} />;
    case "cpu": return <Cpu {...props} />;
    case "shield": return <Shield {...props} />;
    case "compass": return <Compass {...props} />;
    case "settings": return <Settings {...props} />;
    case "heart": return <Heart {...props} />;
    case "monitor": return <Monitor {...props} />;
    case "volume2": return <Volume2 {...props} />;
    case "navigation": return <Compass {...props} />;
    case "monitor-play": return <Monitor {...props} />;
    case "volume1": return <Volume2 {...props} />;
    case "refresh": return <RefreshCw {...props} />;
    case "eye": return <Eye {...props} />;
    case "radar": return <Compass {...props} />;
    case "tv": return <Monitor {...props} />;
    case "bot": return <Bot {...props} />;
    case "brain": return <Brain {...props} />;
    case "zap": return <Zap {...props} />;
    case "chart": return <LineChart {...props} />;
    default: return <Bot {...props} />;
  }
};

// Helper to render fleet management feature icons
const renderFleetIcon = (name: string) => {
  const props = { className: "w-8 h-8 text-cyan-400" };
  switch (name) {
    case "mass": return <Layers {...props} />;
    case "routing": return <Compass {...props} />;
    case "networking": return <Network {...props} />;
    case "cloud": return <Cloud {...props} />;
    default: return <Layers {...props} />;
  }
};

const robots = [
  {
    id: 1,
    name: "Joy A-01",
    tagline: "Flagship AI Receptionist Platform",
    height: "135 cm (4.4 ft)",
    category: "Reception & Assistance",
    description: "Specialized AI platform for intelligent receptionist and customer engagement. Seamless integration with existing hospitality infrastructure and advanced mapping algorithms for autonomous guidance.",
    image: "/Joy A-01.png",
    badge: "Flagship",
    badgeColor: "bg-cyan-550 text-white shadow-cyan-500/30",
    features: [
      { icon: "smile", label: "Expressive Digital Face", desc: "AI-driven human-centric interaction engine displaying warm facial expressions." },
      { icon: "cpu", label: "2-6 DoF Articulated Arms", desc: "Enhanced animations and physical gestures for human-centric collaboration." },
      { icon: "shield", label: "Rigid Fiber Outer Shell", desc: "Premium impact-resistant frame for high-traffic public spaces." },
      { icon: "compass", label: "SLAM Chassis", desc: "Mobility base with advanced multi-sensor spatial intelligence and obstacle avoidance." },
      { icon: "settings", label: "High Friction Wheels", desc: "High-precision autonomous control on carpets, tiles, and polished floors." },
    ],
    blueprintSpecs: {
      battery: "48V 20Ah LiFePO4",
      runTime: "8-10 Hours",
      lidar: "Solid-State 3D LiDAR (15m range)",
      torque: "32Nm Core Actuators",
      payload: "15 kg",
    }
  },
  {
    id: 2,
    name: "Andy R1",
    tagline: "Interactive Guide & Assistant Robot",
    height: "130 cm (4.2 ft)",
    category: "Guide & Directory",
    description: "Friendly and highly expressive with glowing blue LED eyes. Features an interactive full-color touchscreen and hi-fi audio system for seamless guide services.",
    image: "/Andy R1.png",
    badge: "Popular",
    badgeColor: "bg-blue-500 text-white shadow-blue-500/30",
    features: [
      { icon: "heart", label: "Friendly LED Face", desc: "Highly expressive face with glowing blue LED eyes that engage guests immediately." },
      { icon: "monitor", label: "Interactive Touch Screen", desc: "Large HD display for maps, directories, and check-ins." },
      { icon: "volume2", label: "Hi-Fi Speakers", desc: "High-quality directional sound for voice interaction in crowded malls and offices." },
      { icon: "navigation", label: "Omnidirectional Mobile Base", desc: "Smooth and stable mobility base for tight pathways." },
    ],
    blueprintSpecs: {
      battery: "24V 25Ah Li-Ion",
      runTime: "6-8 Hours",
      lidar: "2D LiDAR (12m range)",
      torque: "24Nm Stepper Drives",
      payload: "10 kg",
    }
  },
  {
    id: 3,
    name: "T2-Mini",
    tagline: "Compact Smart Service Robot",
    height: "122 cm (4.0 ft)",
    category: "Compact Delivery & Interaction",
    description: "Compact yet powerful. Features an interactive LED face, built-in dual speakers, and 360-degree high mobility designed for navigating narrow office hallways and busy hospital clinics.",
    image: "/T-2 Mini.png",
    badge: "Compact",
    badgeColor: "bg-green-500 text-white shadow-green-500/30",
    features: [
      { icon: "monitor-play", label: "Interactive LED Face", desc: "Expressive and responsive LED face representing state notifications." },
      { icon: "volume1", label: "Built-In Speaker", desc: "Clear audio system for announcements and customer queries." },
      { icon: "refresh", label: "360° Maneuverability", desc: "Zero-turn radius base to rotate and squeeze through tight spots." },
    ],
    blueprintSpecs: {
      battery: "24V 15Ah Li-Ion",
      runTime: "5-7 Hours",
      lidar: "Single Beam LiDAR (8m range)",
      torque: "18Nm Modular Actuators",
      payload: "8 kg",
    }
  },
  {
    id: 4,
    name: "Tella S",
    tagline: "Full-Feature Service & Greeting Robot",
    height: "130 cm (4.0 ft)",
    category: "Greeting & Escort",
    description: "A full-featured service robot with multi-joint articulated arms, expressive LED eyes, and smooth 360° mobility. Specifically optimized for hospitality guest greeting.",
    image: "/Tella S.png",
    badge: "Versatile",
    badgeColor: "bg-purple-500 text-white shadow-purple-500/30",
    features: [
      { icon: "cpu", label: "Articulated Arms", desc: "Dual multi-joint arms capable of waving and pointing directions." },
      { icon: "eye", label: "Emotive LED Eyes", desc: "Expressive, animated eyes to display emotions and build quick customer trust." },
      { icon: "refresh", label: "360° Smart Mobility", desc: "Smooth navigation with real-time dynamic rerouting." },
    ],
    blueprintSpecs: {
      battery: "48V 18Ah LiFePO4",
      runTime: "8-10 Hours",
      lidar: "3D LiDAR + Sonar (15m)",
      torque: "28Nm Core Actuators",
      payload: "12 kg",
    }
  },
  {
    id: 5,
    name: "T2-Max",
    tagline: "Advanced Smart Navigation Robot",
    height: "138 cm (4.5 ft)",
    category: "Autonomous Logistics & Delivery",
    description: "Top-of-the-line service robot packed with dual Lidar/Sonar sensors, dual-camera AI vision, and high-performance computing to handle complex multi-room delivery tasks.",
    image: "/T-2 Max.png",
    badge: "Advanced",
    badgeColor: "bg-orange-500 text-white shadow-orange-500/30",
    features: [
      { icon: "radar", label: "Dual Lidar & Sonar Sensors", desc: "Full-range spatial mapping for reliable operation in challenging layouts." },
      { icon: "tv", label: "Full Color Touchscreen", desc: "Interactive display for dynamic forms, patient check-ins, or order listings." },
      { icon: "bot", label: "Dual-Camera AI Vision", desc: "Facial recognition and object classification for personalized greetings." },
    ],
    blueprintSpecs: {
      battery: "48V 30Ah LiFePO4",
      runTime: "10-12 Hours",
      lidar: "Dual Solid-State 3D LiDAR (20m range)",
      torque: "40Nm Industrial Actuators",
      payload: "25 kg",
    }
  },
  {
    id: 6,
    name: "Nova M1",
    tagline: "Enterprise Interactive Signage Platform",
    height: "130 cm (4.2 ft)",
    category: "Enterprise Display",
    description: "Designed specifically for corporate offices and shopping centers. Combines business intelligence analytics with a large screen for interactive marketing, check-ins, and analytics.",
    image: "/Nova M1.png",
    badge: "Enterprise",
    badgeColor: "bg-slate-650 text-white shadow-slate-600/30",
    features: [
      { icon: "brain", label: "Predictive AI Models", desc: "Integrated LLM-based engine for highly natural customer responses." },
      { icon: "zap", label: "Automated Decisions", desc: "Autonomous task dispatching and customer check-in approvals." },
      { icon: "chart", label: "Data-Driven Insights", desc: "Real-time logging of visitor statistics and interaction reports." },
    ],
    blueprintSpecs: {
      battery: "24V 20Ah Li-Ion",
      runTime: "8 Hours",
      lidar: "2D LiDAR (10m range)",
      torque: "20Nm Actuator Motors",
      payload: "5 kg",
    }
  },
];

const woodgenRobots = [
  {
    name: "Joy A-01 Wooden Variant",
    height: "135 cm (4.4 ft)",
    description: "The flagship Joy A-01 receptionist robot reimagined with a hand-polished, eco-friendly wooden chassis. The absolute pinnacle of natural elegance combined with high-tech robotics.",
    features: ["AI-Powered Display", "Polished Premium Wood Shell", "2-6 DoF Articulated Arms", "SLAM Chassis Navigation"],
    image: "/Joy A-01.png",
  },
  {
    name: "WoodGen Standard",
    height: "130 cm (4.2 ft)",
    description: "Artisan-crafted modular robot body with an integrated Techligence navigation platform. Sustainable, visually stunning, and highly engaging for reception desk lobbies.",
    features: ["Hand-Crafted Wood Shell", "Interactive Display Panel", "Articulated Gestures", "Eco-Friendly Architecture"],
    image: "/T-2 Mini.png",
  },
];

const fleetFeatures = [
  { icon: "mass", title: "Mass Dispatch Engine", desc: "Seamlessly control and dispatch up to 100 robots simultaneously within a single large environment without collision." },
  { icon: "routing", title: "Complex Traffic Routing", desc: "Advanced spatial coordination adapting to complex scenarios like intersecting office corridors, narrow doorways, and roundabouts." },
  { icon: "networking", title: "Ad Hoc Mesh Networking", desc: "Maintains a highly resilient ad-hoc network between individual robot units to coordinate movement and prevent traffic bottlenecks." },
  { icon: "cloud", title: "Techligence IoT Cloud Hub", desc: "Monitor business data, check active robot operation status, review battery analytics, and execute remote software upgrades (OTA) instantly." },
];

export default function ProductsPage() {
  const [activeRobot, setActiveRobot] = useState(robots[0]);
  const [activeTab, setActiveTab] = useState<"smart" | "woodgen" | "fleet" | "compare">("smart");
  const [blueprintMode, setBlueprintMode] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-slate-100 transition-all duration-500 bg-tech-grid relative overflow-hidden">
      {/* GLOW ORBS */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-955 py-28 px-6 text-white border-b border-cyan-500/10 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-400/20 shadow-sm">
            Techligence Fleet Selection
          </div>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
            Meet Your New
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent glow-cyan"> Robotic </span>
            Workforce
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From smart receptionists to eco-friendly wooden statements, our lineup is indigenously engineered for India&apos;s high-footfall, multilingual, and dynamic environments.
          </p>

          {/* Navigation Tabs */}
          <div className="mt-12 flex justify-center gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={() => setActiveTab("smart")}
              className={`px-5 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 shadow-md ${
                activeTab === "smart"
                  ? "bg-cyan-500 text-white shadow-cyan-500/25 scale-[1.03]"
                  : "bg-slate-900/60 border border-slate-800 text-slate-355 hover:text-white hover:bg-slate-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <Bot className="w-4 h-4" /> Smart Robots
              </span>
            </button>
            <button
              onClick={() => setActiveTab("woodgen")}
              className={`px-5 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 shadow-md ${
                activeTab === "woodgen"
                  ? "bg-amber-500 text-white shadow-amber-500/25 scale-[1.03]"
                  : "bg-slate-900/60 border border-slate-800 text-slate-355 hover:text-white hover:bg-slate-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4" /> WoodGen Series
              </span>
            </button>
            <button
              onClick={() => setActiveTab("fleet")}
              className={`px-5 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 shadow-md ${
                activeTab === "fleet"
                  ? "bg-cyan-500 text-white shadow-cyan-500/25 scale-[1.03]"
                  : "bg-slate-900/60 border border-slate-800 text-slate-355 hover:text-white hover:bg-slate-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <Network className="w-4 h-4" /> Fleet Management
              </span>
            </button>
            <button
              onClick={() => setActiveTab("compare")}
              className={`px-5 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 shadow-md ${
                activeTab === "compare"
                  ? "bg-indigo-650 text-white shadow-indigo-600/25 scale-[1.03]"
                  : "bg-slate-900/60 border border-slate-800 text-slate-355 hover:text-white hover:bg-slate-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <LineChart className="w-4 h-4" /> Compare Specs
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SMART ROBOTS SECTION */}
      {activeTab === "smart" && (
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
          {/* Quick Picker */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-16">
            {robots.map((robot) => (
              <button
                key={robot.id}
                onClick={() => setActiveRobot(robot)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  activeRobot.id === robot.id
                    ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080d1c] hover:border-cyan-400 text-slate-700 dark:text-slate-300 shadow-sm"
                }`}
              >
                {robot.name}
              </button>
            ))}
          </div>

          {/* Interactive Spotlights */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Frame with Blueprint Toggling */}
            <div className="relative flex flex-col items-center">
              <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[80px] rounded-full"></div>
              
              <div className={`relative z-10 w-full max-w-[380px] rounded-[32px] overflow-hidden border-blueprint corner-bracket shadow-2xl bg-white p-1 box-glow-cyan transition-all duration-500 ${blueprintMode ? "border-cyan-500/60 bg-slate-950" : ""}`}>
                {/* Sonar sweep overlay */}
                {blueprintMode && (
                  <div className="sonar-ring w-64 h-64 top-1/4 left-12 z-0"></div>
                )}
                
                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src={activeRobot.image}
                    alt={activeRobot.name}
                    className={`w-full h-auto rounded-[28px] z-10 transition-all duration-500 relative ${blueprintMode ? "opacity-25 scale-[1.01] sepia-[0.3] drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] bg-slate-950" : "hover:scale-[1.01]"}`}
                  />
                  
                  {/* Dotted HUD overlay when blueprintMode is active */}
                  {blueprintMode && (
                    <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-40 z-10"></div>
                  )}

                  {/* Blueprint Tech Details Overlay */}
                  {blueprintMode && (
                    <div className="absolute inset-4 border border-cyan-500/40 rounded-2xl p-4 flex flex-col justify-between font-mono text-[9px] text-cyan-400 bg-slate-950/80 backdrop-blur-sm z-20">
                      <div className="border-b border-cyan-500/30 pb-1 mb-2 flex justify-between">
                        <span className="font-bold uppercase">📊 TELEMETRY CHECK</span>
                        <span className="animate-hud-pulse text-emerald-400">NOMINAL</span>
                      </div>
                      
                      <div className="space-y-1.5 flex-grow pt-2">
                        <div>&bull; POWER CORE: {activeRobot.blueprintSpecs.battery}</div>
                        <div>&bull; DISCHARGE CYCLE: {activeRobot.blueprintSpecs.runTime}</div>
                        <div>&bull; ACTIVE LIDAR: {activeRobot.blueprintSpecs.lidar}</div>
                        <div>&bull; CORE ACTUATOR TORQUE: {activeRobot.blueprintSpecs.torque}</div>
                        <div>&bull; MAXIMUM PAYLOAD: {activeRobot.blueprintSpecs.payload}</div>
                      </div>

                      <div className="border-t border-cyan-500/30 pt-1.5 mt-2 text-right">
                        SYS: 19.21 N // 73.13 E
                      </div>
                    </div>
                  )}
                  
                  <div className={`absolute top-4 right-4 z-20 ${activeRobot.badgeColor} text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg`}>
                    {activeRobot.badge}
                  </div>
                </div>
              </div>

              {/* Blueprint Toggle Button */}
              <button
                onClick={() => setBlueprintMode(!blueprintMode)}
                className={`mt-6 px-6 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 border shadow-md relative z-20 ${
                  blueprintMode
                    ? "bg-cyan-500 border-cyan-500 text-white shadow-cyan-500/25"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080d1c] text-cyan-500 dark:text-cyan-400 hover:text-white dark:hover:text-white hover:border-cyan-400"
                }`}
              >
                {blueprintMode ? "🖥️ View Photo" : "📐 View Technical Blueprint"}
              </button>
            </div>

            {/* Spec / Anatomy Panel */}
            <div>
              <span className="inline-block bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4">
                {activeRobot.category} &middot; Height: {activeRobot.height}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {activeRobot.name}
              </h2>
              <p className="text-cyan-655 dark:text-cyan-400 font-bold text-lg mt-1 tracking-wide">
                {activeRobot.tagline}
              </p>
              <p className="mt-6 text-slate-650 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {activeRobot.description}
              </p>

              {/* Anatomy Checklist */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Anatomy & Key Systems</h3>
                {activeRobot.features.map((f, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white dark:bg-[#080d1c]/80 rounded-2xl p-4 border border-slate-200 dark:border-cyan-500/10 shadow-sm hover:border-cyan-500/25 transition-all duration-300">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 flex-shrink-0">
                      {renderFeatureIcon(f.icon)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{f.label}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all"
                >
                  Book Demo
                </Link>
                <Link
                  href="/contact"
                  className="border border-cyan-500/25 bg-white dark:bg-slate-900/50 text-cyan-500 dark:text-cyan-400 hover:text-white px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-cyan-500/10 hover:scale-[1.02] transition-all shadow-sm"
                >
                  Request Specs
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Lineup Grid */}
          <div className="mt-28 border-t border-slate-200 dark:border-slate-800 pt-20">
            <h3 className="text-3xl font-black text-center mb-4 text-slate-900 dark:text-white">
              Full Smart Robotics <span className="text-cyan-500">Lineup</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-center max-w-xl mx-auto mb-12">
              Browse through our modular receptionist and logistics models designed to support and scale operations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {robots.map((robot) => (
                <div
                  key={robot.id}
                  onClick={() => {
                    setActiveRobot(robot);
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="bg-white dark:bg-[#080d1c]/80 rounded-[32px] overflow-hidden border border-slate-200 dark:border-cyan-500/10 shadow-lg hover:shadow-cyan-500/15 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col h-full box-glow-cyan"
                >
                  <div className="h-60 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#020617] to-[#080d1c] relative overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={robot.image}
                      alt={robot.name}
                      className="h-[85%] object-contain rounded-2xl group-hover:scale-[1.03] transition duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                    />
                    <div className={`absolute top-4 left-4 ${robot.badgeColor} text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md`}>
                      {robot.badge}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <p className="text-[10px] text-cyan-500 font-bold uppercase tracking-wider mb-1">{robot.height} &middot; {robot.category}</p>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition duration-300">{robot.name}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 leading-relaxed">{robot.tagline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WOODGEN SECTION */}
      {activeTab === "woodgen" && (
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
              Sustainable Engineering
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              WoodGen <span className="text-amber-500 glow-amber">Series</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Merging organic hand-crafted woodwork with advanced AI mapping algorithms. Created specifically for luxury hospitality and sustainable corporate settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {woodgenRobots.map((robot, i) => (
              <div key={i} className="bg-[#080d1c]/80 rounded-[36px] p-8 sm:p-10 border border-amber-500/15 shadow-xl flex flex-col justify-between h-full hover:scale-[1.01] transition-transform duration-300 box-glow-amber">
                <div>
                  <div className="w-full h-64 bg-[#020617] rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-amber-500/10">
                    <img src={robot.image} alt={robot.name} className="h-[85%] object-contain p-4" />
                  </div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Height: {robot.height}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">{robot.name}</h3>
                  <p className="mt-4 text-slate-350 text-sm sm:text-base leading-relaxed">{robot.description}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {robot.features.map((f, j) => (
                      <span key={j} className="bg-amber-500/10 text-amber-450 px-3.5 py-1 rounded-full text-xs font-semibold border border-amber-550/15">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-amber-500/10">
                  <Link
                    href="/contact"
                    className="inline-block bg-amber-550 hover:bg-amber-500 text-white px-7 py-3 rounded-xl font-bold text-sm tracking-wide transition shadow-lg shadow-amber-550/20"
                  >
                    Custom Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FLEET MANAGEMENT TAB */}
      {activeTab === "fleet" && (
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
              Enterprise Cloud Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Enterprise Fleet Management <span className="text-cyan-500 glow-cyan">& IoT</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Connect, monitor, and dispatch up to 100 service robots seamlessly under a unified IoT control mesh network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fleetFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-[#080d1c]/80 rounded-[32px] p-8 border border-cyan-500/15 shadow-lg hover:border-cyan-500/35 hover:scale-[1.01] transition-all duration-300 box-glow-cyan"
              >
                <div className="w-16 h-16 bg-[#020617] rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/10 flex-shrink-0">
                  {renderFleetIcon(f.icon)}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">{f.title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* IoT CTA Block */}
          <div className="mt-20 relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] p-10 sm:p-14 text-white text-center shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_70%)]"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-black">Deploy Your Smart Robotics Fleet Today</h3>
              <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                End-to-end custom systems integration, local server setup for military-grade data security, and ongoing over-the-air firmware upgrades.
              </p>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="bg-white text-slate-950 px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide hover:scale-105 transition-all shadow-lg shadow-black/10"
                >
                  Consult Systems Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* COMPARATIVE SPECS TAB */}
      {activeTab === "compare" && (
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/20">
              Comparative Analysis
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Model Specifications <span className="text-indigo-500 glow-indigo">Comparison</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-305 max-w-2xl mx-auto leading-relaxed">
              Detailed technical specification sheet outlining sizing, optimal deployment settings, and key software integrations.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[32px] border border-cyan-500/15 bg-[#080d1c]/80 shadow-2xl box-glow-cyan">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#020617] border-b border-cyan-500/10 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="p-6">Model Name</th>
                  <th className="p-6">Category</th>
                  <th className="p-6">Physical Height</th>
                  <th className="p-6">Optimal Environment</th>
                  <th className="p-6">AI Architecture</th>
                  <th className="p-6">Primary Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm text-slate-300">
                {robots.map((robot) => (
                  <tr key={robot.id} className="hover:bg-[#020617]/50 transition-colors">
                    <td className="p-6 font-bold text-white flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                      {robot.name}
                    </td>
                    <td className="p-6">{robot.category}</td>
                    <td className="p-6 font-mono text-cyan-400">{robot.height}</td>
                    <td className="p-6">
                      {robot.id === 1 ? "Hotels, Luxury Lobbies" : 
                       robot.id === 2 ? "Shopping Malls, Museums" : 
                       robot.id === 3 ? "Office Corridors, Clinics" : 
                       robot.id === 4 ? "Hospitality Greeting Gates" : 
                       robot.id === 5 ? "Hospitals, Dynamic Warehouses" : 
                       "Corporate Office Signage"}
                    </td>
                    <td className="p-6 font-semibold text-cyan-400">
                      {robot.id === 6 ? "Integrated LLM / Analytics" : "Multi-Sensor SLAM Core"}
                    </td>
                    <td className="p-6">
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-indigo-400 hover:underline"
                      >
                        Request Quote &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
