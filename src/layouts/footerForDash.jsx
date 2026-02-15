import { Link } from "react-router";
import { Mail, Phone, Facebook, Linkedin } from "lucide-react";

export default function DashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16">

      {/* Glass Card */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg px-6 py-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900">
              eTuition<span className="text-indigo-600">Bd</span>
            </h3>
            <p className="text-sm text-slate-500">
              Smart tuition management platform
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className="text-slate-500 hover:text-indigo-600 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-slate-500 hover:text-indigo-600 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-500 hover:text-indigo-600 transition"
            >
              Support
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            <a
              href="mailto:support@etuitionbd.com"
              className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition"
            >
              <Mail size={16} className="text-indigo-600" />
            </a>

            <a
              href="tel:+8801234567890"
              className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition"
            >
              <Phone size={16} className="text-indigo-600" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition"
            >
              <Facebook size={16} className="text-indigo-600" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition"
            >
              <Linkedin size={16} className="text-indigo-600" />
            </a>

          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs text-slate-400">
          © {currentYear} eTuitionBd — All rights reserved.
        </div>

      </div>

    </footer>
  );
}
