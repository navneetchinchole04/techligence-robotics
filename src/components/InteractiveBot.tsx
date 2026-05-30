"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, ChevronRight, MessageSquare, RefreshCw, Sparkles, Volume2 } from "lucide-react";

interface Dialogue {
  text: string;
  badge?: string;
}

export default function InteractiveBot() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Control minimized state
  const [showBubble, setShowBubble] = useState(true); // Control speech bubble visibility
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Dynamic dialogue dataset mapped directly to the current page route context
  const dialoguesMap: Record<string, Dialogue[]> = {
    "/": [
      { text: "Welcome to Techligence! Operational status is 100% nominal.", badge: "LOBBY_CORE" },
      { text: "I'm JOY-Bot, your site-systems copilot. We design secure, localized service robots.", badge: "SYSTEMS" },
      { text: "Hover over my head to see my optical LiDAR trackers align to your cursor!", badge: "OPTICS_SLAM" },
      { text: "Explore our products or schedule a systems demo to test a pilot unit in your lobby.", badge: "DEPLOYMENT" }
    ],
    "/products": [
      { text: "Scanning inventory lineup... Switch to 'Technical Blueprint' on product cards for hardware schematics!", badge: "DIAGNOSTICS" },
      { text: "Our flagship JOY A-01 receptionist robot features 3D depth sensors and mapping algorithms.", badge: "JOY_A01" },
      { text: "Need custom payload solutions? Our modular PIHU chassis supports custom logistics attachments.", badge: "PIHU_LOGISTICS" },
      { text: "Tap 'Request Specs' to download mechanical drawings and torque charts.", badge: "HARDWARE_CAD" }
    ],
    "/industries": [
      { text: "Analyzing performance data... Service automation yields up to an 85% boost in lobby efficiency.", badge: "ANALYTICS" },
      { text: "We customize chassis layouts and interaction protocols for hotels, malls, and hospitals.", badge: "ADAPTATION" },
      { text: "Hover over the metric indicators below to see automated vs. manual throughput logs.", badge: "TELEMETRY" }
    ],
    "/about": [
      { text: "Accessing chronological database... Trace our history from PIHU-1 to modern actuator designs.", badge: "CHRONOLOGY" },
      { text: "Every circuit and pathing algorithm is proudly engineered and assembled in India.", badge: "SECURE_LOCAL" },
      { text: "Check out the dynamic telemetry board below to review real-time stress and hardware temperature readouts.", badge: "TELEMETRY_LOG" }
    ],
    "/contact": [
      { text: "Ready to deploy a pilot unit? Fill out our detail capture sheet below.", badge: "LEAD_CAPTURE" },
      { text: "Our engineering operations team typically responds with a systems draft within 24 hours.", badge: "OPERATIONS" },
      { text: "Check out our systems FAQ list below for answers regarding deployment and network nodes.", badge: "INTEGRATION" }
    ]
  };

  // Fallback dialogues for any other path
  const fallbackDialogues: Dialogue[] = [
    { text: "System operational. How can I assist you with Techligence Robotics today?", badge: "SYSTEM" },
    { text: "Use the navigation menu to explore products, view efficiency metrics, or contact sales.", badge: "ROUTING" }
  ];

  // Get current page dialogues
  const currentDialogues = dialoguesMap[pathname] || fallbackDialogues;

  useEffect(() => {
    setMounted(true);
    setDialogueIndex(0);
    setShowBubble(true);
  }, [pathname]);

  // Typewriter effect logic
  useEffect(() => {
    if (!mounted) return;
    const targetText = currentDialogues[dialogueIndex]?.text || "";
    setDisplayedText("");
    setIsTyping(true);
    setIsSpeaking(true);

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + targetText.charAt(i));
      i++;
      if (i >= targetText.length) {
        clearInterval(interval);
        setIsTyping(false);
        setIsSpeaking(false);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [dialogueIndex, pathname, mounted]);

  if (!mounted) return null;

  const handleNextDialogue = () => {
    if (isTyping) return;
    setDialogueIndex((prev) => (prev + 1) % currentDialogues.length);
  };

  // Render minimized state
  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
          setShowBubble(true);
        }}
        className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 border border-cyan-400/30 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce cursor-pointer"
        aria-label="Expand Joy-Bot"
      >
        <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-purple-500 border-2 border-white dark:border-slate-900 rounded-full animate-ping" />
        <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-purple-500 border-2 border-white dark:border-slate-900 rounded-full" />
        <Volume2 className="w-6 h-6 text-white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Dynamic Glassmorphic Speech Bubble */}
      {showBubble && (
        <div className="mb-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-2xl max-w-[280px] sm:max-w-[320px] pointer-events-auto transition-all duration-500 scale-in select-none relative animate-robot-float">
          {/* Header Bar */}
          <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full uppercase">
                {currentDialogues[dialogueIndex]?.badge || "SYSTEMS_CORE"}
              </span>
            </div>
            <button
              onClick={() => setShowBubble(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              aria-label="Close bubble"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Typing Content */}
          <p className="text-xs font-semibold leading-relaxed text-slate-800 dark:text-slate-200 min-h-[50px]">
            {displayedText}
            {isTyping && <span className="inline-block w-1.5 h-3.5 bg-cyan-500 ml-0.5 animate-pulse" />}
          </p>

          {/* Controls */}
          <div className="flex justify-end gap-2 mt-3 items-center">
            {currentDialogues.length > 1 && (
              <button
                onClick={handleNextDialogue}
                disabled={isTyping}
                className={`flex items-center gap-1 text-[10px] font-bold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 px-2.5 py-1.5 rounded-lg transition-colors ${
                  isTyping ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <span>Systems Feed</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Speech Bubble Arrow */}
          <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white dark:bg-slate-900 border-r border-b border-slate-200 dark:border-slate-800 transform rotate-45" />
        </div>
      )}

      {/* cute 3D molded Joy-Bot Body */}
      <div className="relative group pointer-events-auto flex flex-col items-center">
        {/* Hover / Click minimize controls */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -left-2 z-10 w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-350 dark:border-slate-700 flex items-center justify-center text-[9px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md cursor-pointer"
          title="Minimize Joy-Bot"
        >
          ✕
        </button>

        {/* The Molded Head */}
        <div
          onClick={() => {
            if (!showBubble) {
              setShowBubble(true);
            } else {
              handleNextDialogue();
            }
          }}
          className="w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br from-white via-slate-100 to-slate-250 dark:from-slate-150 dark:via-slate-200 dark:to-slate-300 rounded-[36px] shadow-[inset_-2.5px_-2.5px_6px_rgba(0,0,0,0.14),_inset_2.5px_2.5px_6px_rgba(255,255,255,0.9),_0_8px_20px_rgba(0,0,0,0.18)] flex items-center justify-center relative cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 group-hover:rotate-2 animate-robot-float select-none"
        >
          {/* Top Sensor Node */}
          <div className="w-8 h-3.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-full absolute -top-1.5 left-1/2 transform -translate-x-1/2 shadow-[inset_0.5px_1px_2px_rgba(255,255,255,0.3)] border-b border-indigo-700" />

          {/* Left Audio Port / Ear */}
          <div className="w-2.5 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-l-xl absolute -left-2 top-1/2 transform -translate-y-1/2 shadow-md border-r border-indigo-700" />

          {/* Right Audio Port / Ear */}
          <div className="w-2.5 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-r-xl absolute -right-2 top-1/2 transform -translate-y-1/2 shadow-md border-l border-indigo-700" />

          {/* Inner OLED Glass Screen */}
          <div className="w-[82%] h-[74%] bg-slate-900 dark:bg-slate-950 rounded-[24px] flex flex-col justify-center items-center gap-1.5 p-2 shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.85),_inset_-1px_-1px_3px_rgba(255,255,255,0.08)] border border-slate-800">
            
            {/* Eye Sensors Row */}
            <div className="flex justify-between w-[70%] px-1">
              {/* Left Eye */}
              <div className="w-3.5 h-3.5 bg-cyan-400 dark:bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee] animate-robot-blink relative flex items-center justify-center">
                {/* Micro reflection highlight */}
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 left-0.5 opacity-60" />
              </div>

              {/* Right Eye */}
              <div className="w-3.5 h-3.5 bg-cyan-400 dark:bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee] animate-robot-blink relative flex items-center justify-center">
                {/* Micro reflection highlight */}
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 left-0.5 opacity-60" />
              </div>
            </div>

            {/* Glowing Smile Arc */}
            <div className={`mt-1 transition-all duration-300 ${isSpeaking ? "animate-robot-talk" : ""}`}>
              <svg
                className="w-7 h-2.5 text-cyan-400 dark:text-cyan-300 drop-shadow-[0_0_4px_rgba(34,211,238,0.9)]"
                viewBox="0 0 30 10"
                fill="none"
              >
                <path
                  d="M6 2 C 10 7.5, 20 7.5, 24 2"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Micro Shadow reflection under floating head */}
        <div className="w-14 h-1 bg-black/15 rounded-full blur-[1.5px] mt-1.5 animate-pulse opacity-60 group-hover:scale-95 transition-all duration-300" />
      </div>
    </div>
  );
}
