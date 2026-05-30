import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-xl p-2 shadow-sm flex-shrink-0">
              <img src="/techligence-full-logo.png" alt="Techligence Logo" className="w-8 h-8 object-contain dark:invert" />
            </div>
            <span className="text-[24px] font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Techligence
            </span>
          </div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-6">
            Intelligent. Sustainable. Your Future Partner.
          </p>
          <div className="mt-6 space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <p>📧 info@techligence.net</p>
            <p>📞 +91 70208 12247</p>
            <p>🌐 www.techligencerobotics.com</p>
            <p>📍 Lokdhara Phase 3, Near Ganesh Nagar,<br />Kalyan, Maharashtra</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6 text-slate-900 dark:text-white">Company</h3>
          <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 text-sm">
            <Link href="/about" className="hover:text-cyan-500 transition">About Us</Link>
            <Link href="/industries" className="hover:text-cyan-500 transition">Industries</Link>
            <Link href="/contact" className="hover:text-cyan-500 transition">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6 text-slate-900 dark:text-white">Products</h3>
          <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 text-sm">
            <Link href="/products" className="hover:text-cyan-500 transition">Joy A-01</Link>
            <Link href="/products" className="hover:text-cyan-500 transition">Andy R1</Link>
            <Link href="/products" className="hover:text-cyan-500 transition">T2-Mini</Link>
            <Link href="/products" className="hover:text-cyan-500 transition">Tella S</Link>
            <Link href="/products" className="hover:text-cyan-500 transition">T2-Max</Link>
            <Link href="/products" className="hover:text-cyan-500 transition">Nova M1</Link>
            <Link href="/products" className="hover:text-cyan-500 transition">WoodGen Series</Link>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6 text-slate-900 dark:text-white">Legal</h3>
          <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 text-sm">
            <a href="#" className="hover:text-cyan-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-500 transition">Terms of Service</a>
            <a href="#" className="hover:text-cyan-500 transition">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        © 2026 Techligence Robotics. All rights reserved.
      </div>
    </footer>
  );
}