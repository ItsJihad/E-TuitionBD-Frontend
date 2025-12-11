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
    <footer className="bg-[#1d2530] text-white mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
           
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary"></div>
              <span className="font-display text-xl font-bold">
                e-Tuition<span className="text-primary">Bd</span>
              </span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              eTuitionBd is Bangladesh's leading tuition management platform
              connecting students with qualified tutors. We make finding the
              perfect tutor simple, reliable, and efficient.
            </p>
  
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <XLogo className="h-4 w-4" />
              </a>
            </div>
          </div>

        
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@etuitionbd.com"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  support@etuitionbd.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +880 1234 567 890
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-sm text-background/60">
            © {currentYear} eTuitionBd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
