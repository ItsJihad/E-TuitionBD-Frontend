import { Link } from "react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  X as XLogo,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Find Tuitions", href: "/tuitions" },
  { name: "Browse Tutors", href: "/tutors" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const supportLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "FAQs", href: "/faqs" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  { name: "facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "linkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "youTube", icon: Youtube, href: "https://youtube.com" },
];

export default function Footerbar() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-slate-300  overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg"></div>
              <span className="text-2xl font-bold text-white">
                eTuition<span className="text-indigo-400">Bd</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Bangladesh's leading tuition management platform connecting
              students with qualified tutors. We make finding the perfect tutor
              simple, reliable, and efficient.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[...socialLinks, { name: "x", icon: XLogo, href: "https://x.com" }]
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow hover:shadow-lg"
                  >
                    <social.icon className="h-4 w-4 text-slate-300 group-hover:text-white transition" />
                  </a>
                ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@etuitionbd.com"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <Mail className="h-4 w-4 text-indigo-400" />
                  support@etuitionbd.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-indigo-400" />
                  +880 1234 567 890
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-indigo-400 mt-0.5" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} eTuitionBd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
