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
import { SiEducative } from "react-icons/si";

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
  { name: "linkedin", icon: Linkedin, href: "https://linkedin.com" },
  { name: "youtube", icon: Youtube, href: "https://youtube.com" },
  { name: "x", icon: XLogo, href: "https://x.com" },
];

export default function Footerbar() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <SiEducative></SiEducative>
              <span className="text-2xl font-bold text-base-content">
                eTuition<span className="text-primary">Bd</span>
              </span>
            </Link>

            <p className="text-sm text-base-content/70 leading-relaxed">
              Bangladesh's leading tuition management platform connecting
              students with qualified tutors. We make finding the perfect tutor
              simple, reliable, and efficient.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-base-100 border border-base-300 hover:bg-primary hover:text-primary-content transition"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-base-content mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-base-content/70 hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-base-content mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-base-content/70 hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-base-content mb-6">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-base-content/70">
              <li>
                <a
                  href="mailto:support@etuitionbd.com"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <Mail className="h-4 w-4" />
                  support@etuitionbd.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <Phone className="h-4 w-4" />
                  +880 1234 567 890
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-base-300 text-center">
          <p className="text-sm text-base-content/60">
            © {currentYear} eTuitionBd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}