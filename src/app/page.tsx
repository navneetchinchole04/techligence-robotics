"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#020617] dark:text-white transition-all duration-500">

      {/* NAVBAR */}

      <nav className="w-full border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur sticky top-0 z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="bg-white rounded-xl p-2 shadow-sm flex-shrink-0">
  <img
    src="/techligence-full-logo.png"
    alt="Techligence Logo"
    className="w-8 h-8 object-contain dark:invert"
  />
</div>

<span className="text-[28px] font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  Techligence
</span>
</div>

          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Industries</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex gap-4 items-center">

            {/* THEME BUTTON */}

            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="w-12 h-12 rounded-xl border border-gray-300 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-900 hover:scale-105 transition"
            >
              {mounted ? (theme === "dark" ? "☀️" : "🌙"): "🌙"}
            </button>

            <button className="border border-gray-300 dark:border-slate-700 px-5 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition">
              Sign In
            </button>

            <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2 rounded-xl transition shadow-lg shadow-cyan-500/30">
              Book Demo
            </button>

          </div>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <div className="inline-block bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Next-Gen Robotics
          </div>

          <h1 className="text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
            The Future of
            <span className="text-cyan-500"> Intelligent </span>
            Robotics
          </h1>

          <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-8 max-w-xl">
            Revolutionizing industries with AI-powered robotics solutions
            designed for hospitality, healthcare, retail, enterprises and
            automation systems.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-2xl shadow-cyan-500/30">
              Explore Products
            </button>

            <button className="border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 dark:hover:bg-slate-700 transition">
              Watch Demo
            </button>

          </div>

        </div>

        {/* HERO IMAGE */}

        <div className="flex justify-center relative">

          <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

          <div className="w-full max-w-lg h-[500px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700 relative z-10">

            <img
              src="/pihu-robot.png"
              alt="PIHU-1 Robot"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* VIDEO SECTION */}

      <section className="bg-[#f8fbfd] dark:bg-slate-900 py-28 px-6 transition-all duration-500">

        <div className="max-w-6xl mx-auto text-center">

          <div className="inline-block bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Robotics Demo
          </div>

          <h2 className="text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
            See Our Robots
            <span className="text-cyan-500"> In Action</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-8">
            Explore how Techligence Robotics is transforming industries
            through intelligent AI-powered automation.
          </p>

          {/* VIDEO */}

          <div className="mt-16 bg-white dark:bg-slate-800 rounded-[32px] shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700">

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0Ljw9ha42YQ"
                title="Robot Video"
                allowFullScreen
              ></iframe>

            </div>

          </div>

          {/* STATS */}

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
              <h3 className="text-4xl font-black text-cyan-500">50+</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Robotics Solutions
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
              <h3 className="text-4xl font-black text-cyan-500">20+</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Industry Integrations
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
              <h3 className="text-4xl font-black text-cyan-500">
                AI Powered
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Smart Automation Systems
              </p>
            </div>

          </div>

        </div>

      </section>

{/* PRODUCTS SECTION */}

<section className="py-28 px-6 bg-white dark:bg-slate-950">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-5xl font-black">
      Our Robotics Products
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-bold">PIHU-1</h3>
        <p>Humanoid Robot with AI interaction capabilities.</p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-bold">Robot Controller</h3>
        <p>Advanced control platform for robotics automation.</p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-bold">AI Solutions</h3>
        <p>Intelligent automation powered by machine learning.</p>
      </div>

    </div>

  </div>
</section>

    {/* ENGINEERING SECTION */}

<section className="py-28 px-6 bg-white dark:bg-slate-950 transition-all duration-500">

  <div className="max-w-7xl mx-auto text-center">

    <div className="inline-block bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
      Why Choose Techligence
    </div>

    <h2 className="text-5xl font-black text-slate-900 dark:text-white">
      Engineering Excellence
      <span className="text-cyan-500"> Meets Innovation</span>
    </h2>

    <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
      Our robotics solutions combine decades of engineering expertise with cutting-edge AI technology.
    </p>

    <div className="grid md:grid-cols-4 gap-8 mt-20">

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          🤖 Advanced Robotics
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          AI-powered automation systems with intelligent navigation and decision-making.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          🧠 Intelligent Processing
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          High-performance computing cores optimized for real-time robotics control.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          ⚡Lightning Fast
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Ultra-responsive systems with microsecond precision for critical robotics operations.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          🛡️ Built for Reliability
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Enterprise-grade reliability with fail-safe mechanisms and smart recovery systems.
        </p>
      </div>

    </div>

  </div>

</section>

{/* SOFTWARE SERVICES */}

<section className="py-28 px-6 bg-[#f8fbfd] dark:bg-slate-900 transition-all duration-500">

  <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-[40px] p-14 shadow-2xl border border-gray-200 dark:border-slate-700">

    <div className="inline-block bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
      Software Services
    </div>

    <h2 className="text-5xl font-black text-slate-900 dark:text-white">
      Explore Our Software Services
    </h2>

    <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-4xl">
      Looking for software solutions? Explore DevPulsz — our branch specializing in software development and AI automation.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-14">

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
        🛒 Ecommerce
        Complete online store solutions
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
        🤖 AI Agents
        Custom AI assistants and automation
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
        ⚙️ Automation
        Business process automation
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
        🏢 Company Pages
        Modern corporate websites
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
        💻 Custom Apps
        Tailored web applications
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
        🚀 Software Development
        End-to-end software solutions
      </div>

    </div>

  </div>

</section>

{/* CTA SECTION */}

<section className="py-28 px-6 bg-gradient-to-r from-cyan-500 to-blue-700 text-white text-center">

  <div className="max-w-4xl mx-auto">

    <h2 className="text-6xl font-black leading-tight">
      Ready To Shape The Future?
    </h2>

    <p className="mt-8 text-xl text-white/90">
      Join the robotics revolution and experience next-generation intelligent automation systems.
    </p>

    <div className="mt-12 flex justify-center gap-6 flex-wrap">

      <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
        View All Products
      </button>

      <button className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition">
        Get Started
      </button>

    </div>

  </div>

</section>

{/* FOOTER */}

{/* FOOTER */}
<footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 py-20 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">

    <div>
     <div className="flex items-center gap-2">
<div className="bg-white rounded-xl p-2 shadow-sm flex-shrink-0">
  <img
    src="/techligence-full-logo.png"
    alt="Techligence Logo"
    className="w-8 h-8 object-contain dark:invert"
  />
</div>

<span className="text-[28px] font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  Techligence
</span>
</div>

      <div className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
        <p>📧 info@techligence.net</p>
        <p>📞 +91 70208 12247</p>
        <p>
          📍 Lokdhara Phase 3,<br />
          Near Ganesh Nagar,<br />
          Kalyan, Maharashtra
        </p>
      </div>

      <p className="mt-6 text-slate-600 dark:text-slate-300">
        Revolutionizing industries with advanced AI-powered robotics solutions.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-6">Company</h3>

      <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-300">
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-6">Products</h3>

      <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-300">
        <a href="#">Robotics Products</a>
        <a href="#">AI Solutions</a>
        <a href="#">Enterprise</a>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-6">Legal</h3>

      <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-300">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>

  </div>

  <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center text-slate-500">
    © 2026 Techligence. All rights reserved.
  </div>

</footer>

    </main>
  );
}