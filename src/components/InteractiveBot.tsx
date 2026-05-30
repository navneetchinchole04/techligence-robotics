"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, ChevronRight, Sparkles, Volume2 } from "lucide-react";

interface Dialogue {
  text: string;
  badge?: string;
}

type BotExpression = "normal" | "happy" | "focused" | "scan" | "wink";

export default function InteractiveBot() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [showBubble, setShowBubble] = useState(true);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Custom states for expressions and click reactions
  const [baseExpression, setBaseExpression] = useState<BotExpression>("normal");
  const [activeExpression, setActiveExpression] = useState<BotExpression>("normal");
  const [isReacting, setIsReacting] = useState(false);

  // Dialogues mapped to each page
  const dialoguesMap: Record<string, Dialogue[]> = {
    "/": [
      { text: "Welcome to Techligence! All core systems are operational and fully secure.", badge: "LOBBY_CORE" },
      { text: "I'm JOY-Bot, your virtual copilot. Tap me to trigger an automated optical sensor calibration scan!", badge: "COGNITIVE" },
      { text: "We design and assemble high-footfall receptionist robots right here in India.", badge: "LOCALIZED" },
      { text: "Check out our products page or request a physical systems pilot for your space!", badge: "SYSTEMS" }
    ],
    "/products": [
      { text: "Inventory systems loaded. Toggle 'Technical Blueprint' on products to inspect motor specs!", badge: "HARDWARE" },
      { text: "Flagship JOY A-01 features modular bionic hulls and 3D LiDAR spatial mapping depth sensors.", badge: "JOY_A01" },
      { text: "Our custom PIHU logistics units handle payloads up to 150kg with micro-precision drive blocks.", badge: "PIHU_LOG" },
      { text: "Tap 'Request Specs' to get immediate engineering layouts and discharge logs.", badge: "CAD_SHEET" }
    ],
    "/industries": [
      { text: "Telemetry databases active. Our service robots yield over an 85% boost in client response rates.", badge: "ANALYTICS" },
      { text: "We adapt chassis dynamics and speech systems for hotels, healthcare corridors, and corporate lobbies.", badge: "ADAPTABILITY" },
      { text: "Check out the performance value matrix below to review ROI and staffing comparisons.", badge: "METRICS" }
    ],
    "/about": [
      { text: "Actuating history logs... Trace our developmental history from early research to modular drives.", badge: "TIMELINE" },
      { text: "Every circuit board, drive actuator, and spatial algorithm is developed and tested in-house.", badge: "SECURE_LOG" },
      { text: "Hover over the R&D metric panel below to see thermal metrics and structural stress telemetry.", badge: "TELEMETRY" }
    ],
    "/contact": [
      { text: "Ready to deploy a pilot unit in your facility? Let's connect and draft a mapping grid.", badge: "DEPLOYMENT" },
      { text: "Our physical operations division usually contacts you with draft proposals in under 24 hours.", badge: "COMMUNICATIONS" },
      { text: "Check our system integration FAQ section below for quick developer readouts.", badge: "FAQ_ACCORDION" }
    ]
  };

  const fallbackDialogues: Dialogue[] = [
    { text: "System operational. Browse our sections to explore intelligent service robotics.", badge: "NAVIGATOR" }
  ];

  const currentDialogues = dialoguesMap[pathname] || fallbackDialogues;

  // 1. Establish unique expressions per route
  useEffect(() => {
    setMounted(true);
    setDialogueIndex(0);
    setShowBubble(true);

    // Map specific cute expressions matching the theme of each page
    let pageExpression: BotExpression = "normal";
    if (pathname === "/") {
      pageExpression = "happy"; // Excited to welcome users!
    } else if (pathname === "/products") {
      pageExpression = "focused"; // Highly analytical for specifications!
    } else if (pathname === "/industries") {
      pageExpression = "scan"; // Scanning metrics and performance arrays!
    } else if (pathname === "/about") {
      pageExpression = "wink"; // Playful and friendly history guide!
    } else if (pathname === "/contact") {
      pageExpression = "normal"; // Professional and helpful desk attendant!
    }

    setBaseExpression(pageExpression);
    if (!isReacting) {
      setActiveExpression(pageExpression);
    }
  }, [pathname, isReacting]);

  // Typewriter effect
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

  // Click reaction trigger: trigger high-interaction blink/wink and physical bounce
  const triggerClickReaction = () => {
    if (isReacting) return;
    setIsReacting(true);

    // Select a cute reaction expression different from current one
    const reactionExpr: BotExpression = activeExpression === "wink" ? "happy" : "wink";
    setActiveExpression(reactionExpr);

    // Revert back to page base state after 1.2 seconds of animation
    setTimeout(() => {
      setIsReacting(false);
      setActiveExpression(baseExpression);
    }, 1200);
  };

  if (!mounted) return null;

  const handleNextDialogue = () => {
    if (isTyping) return;
    triggerClickReaction();
    setDialogueIndex((prev) => (prev + 1) % currentDialogues.length);
  };

  // Helper to render eyes depending on dynamic state
  const renderEyes = () => {
    switch (activeExpression) {
      case "happy":
        // Curved happy arcs (^ ^)
        return (
          <div className="flex justify-between w-[72%] px-1 items-center h-4">
            <svg className="w-4 h-3.5 text-cyan-400 dark:text-cyan-300 drop-shadow-[0_0_4px_rgba(34,211,238,0.9)] animate-pulse" viewBox="0 0 20 12" fill="none">
              <path d="M3 9 C 6 3, 14 3, 17 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <svg className="w-4 h-3.5 text-cyan-400 dark:text-cyan-300 drop-shadow-[0_0_4px_rgba(34,211,238,0.9)] animate-pulse" viewBox="0 0 20 12" fill="none">
              <path d="M3 9 C 6 3, 14 3, 17 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "focused":
        // Squinted horizontal analysis bars (- -)
        return (
          <div className="flex justify-between w-[72%] px-1 items-center h-4">
            <div className="w-4 h-1.5 bg-cyan-400 dark:bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee] relative">
              <div className="w-1.5 h-0.5 bg-white rounded-full absolute top-0 left-0.5 opacity-60" />
            </div>
            <div className="w-4 h-1.5 bg-cyan-400 dark:bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee] relative">
              <div className="w-1.5 h-0.5 bg-white rounded-full absolute top-0 left-0.5 opacity-60" />
            </div>
          </div>
        );
      case "scan":
        // Technical radar sensor circles
        return (
          <div className="flex justify-between w-[72%] px-1 items-center h-4">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-cyan-400 dark:border-cyan-300 shadow-[0_0_8px_#22d3ee] relative flex items-center justify-center animate-ping duration-1000">
              <div className="w-1 h-1 bg-cyan-400 dark:bg-cyan-300 rounded-full" />
            </div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-cyan-400 dark:border-cyan-300 shadow-[0_0_8px_#22d3ee] relative flex items-center justify-center animate-ping duration-1000">
              <div className="w-1 h-1 bg-cyan-400 dark:bg-cyan-300 rounded-full" />
            </div>
          </div>
        );
      case "wink":
        // Left eye normal, right eye happy wink arc
        return (
          <div className="flex justify-between w-[72%] px-1 items-center h-4">
            <div className="w-3.5 h-3.5 bg-cyan-400 dark:bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee] relative flex items-center justify-center animate-robot-blink">
              <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 left-0.5 opacity-60" />
            </div>
            <svg className="w-4 h-3.5 text-cyan-400 dark:text-cyan-300 drop-shadow-[0_0_4px_rgba(34,211,238,0.9)]" viewBox="0 0 20 12" fill="none">
              <path d="M3 9 C 6 3, 14 3, 17 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "normal":
      default:
        // Glowing circular eyes blinking
        return (
          <div className="flex justify-between w-[72%] px-1 items-center h-4">
            <div className="w-3.5 h-3.5 bg-cyan-400 dark:bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee] relative flex items-center justify-center animate-robot-blink">
              <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 left-0.5 opacity-60" />
            </div>
            <div className="w-3.5 h-3.5 bg-cyan-400 dark:bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee] relative flex items-center justify-center animate-robot-blink">
              <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 left-0.5 opacity-60" />
            </div>
          </div>
        );
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          setIsOpen(true);
          setShowBubble(true);
          triggerClickReaction();
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
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
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
                <span>Next Entry</span>
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
        {/* Minimize Hover Control */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -left-2 z-10 w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-350 dark:border-slate-700 flex items-center justify-center text-[9px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md cursor-pointer"
          title="Minimize Joy-Bot"
        >
          ✕
        </button>

        {/* The Molded Head Container */}
        <div
          onClick={() => {
            triggerClickReaction();
            if (!showBubble) {
              setShowBubble(true);
            } else {
              handleNextDialogue();
            }
          }}
          className={`w-20 h-20 sm:w-22 sm:h-22 bg-gradient-to-br from-white via-slate-100 to-slate-250 dark:from-slate-150 dark:via-slate-200 dark:to-slate-300 rounded-[36px] shadow-[inset_-2.5px_-2.5px_6px_rgba(0,0,0,0.14),_inset_2.5px_2.5px_6px_rgba(255,255,255,0.9),_0_8px_20px_rgba(0,0,0,0.18)] flex items-center justify-center relative cursor-pointer active:scale-90 transition-all duration-300 select-none ${
            isReacting ? "animate-bounce hover:scale-100 scale-100" : "hover:scale-105 hover:rotate-2 animate-robot-float"
          }`}
        >
          {/* Top Sensor Node */}
          <div className="w-8 h-3.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-full absolute -top-1.5 left-1/2 transform -translate-x-1/2 shadow-[inset_0.5px_1px_2px_rgba(255,255,255,0.3)] border-b border-indigo-700" />

          {/* Left Audio Port / Ear */}
          <div className="w-2.5 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-l-xl absolute -left-2 top-1/2 transform -translate-y-1/2 shadow-md border-r border-indigo-700" />

          {/* Right Audio Port / Ear */}
          <div className="w-2.5 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-r-xl absolute -right-2 top-1/2 transform -translate-y-1/2 shadow-md border-l border-indigo-700" />

          {/* Inner OLED Glass Screen */}
          <div className="w-[82%] h-[74%] bg-slate-900 dark:bg-slate-950 rounded-[24px] flex flex-col justify-center items-center gap-1.5 p-2 shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.85),_inset_-1px_-1px_3px_rgba(255,255,255,0.08)] border border-slate-800">
            
            {/* Render Context & Reaction Sensitive Eyes */}
            {renderEyes()}

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

        {/* Shadow floor under head */}
        <div className="w-14 h-1 bg-black/15 rounded-full blur-[1.5px] mt-1.5 animate-pulse opacity-60 group-hover:scale-95 transition-all duration-300" />
      </div>
    </div>
  );
}
