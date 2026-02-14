import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import UseAuth from "../../hooks/UseAuth";

function Headerbar() {
  const { currentUser, LoggOut } = UseAuth();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tuitions", path: "/tuitions" },
    { name: "Tutors", path: "/tutors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-md border-b border-slate-200"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            eTuition
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Bd
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-slate-700 font-medium hover:text-indigo-600 transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {currentUser ? (
              <div className="relative hidden lg:block group">

    {/* Avatar */}
    <img
      src={
        currentUser.photoURL ||
        "https://ui-avatars.com/api/?name=User&background=0f172a&color=fff"
      }
      alt="avatar"
      className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer transition-transform duration-300 group-hover:scale-105"
    />

    {/* Dropdown */}
    <div className="absolute right-0 mt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">

      <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl overflow-hidden">

        <Link
          to="/dashboard"
          className="block px-4 hover:cursor-pointer py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
        >
          Dashboard
        </Link>

        <button
          onClick={LoggOut}
          className="w-full hover:cursor-pointer text-left px-4 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
        >
          Logout
        </button>

      </div>
    </div>

  </div>
            ) : (
              <Link
                to="/signin"
                className="hidden lg:inline-flex items-center justify-center h-11 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all"
              >
                Get Started
              </Link>
            )}

            {/* Burger */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Right Glass Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-white/70 backdrop-blur-2xl border-l border-white/30 shadow-2xl relative overflow-hidden">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative p-8 flex flex-col h-full">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <span className="text-lg font-bold text-slate-800">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="relative text-slate-700 hover:text-indigo-600 transition group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="flex-1"></div>

            {/* Auth */}
            <div className="pt-8 border-t border-slate-200">
              {currentUser ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm text-slate-700 hover:text-indigo-600"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm text-slate-700 hover:text-indigo-600"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      LoggOut();
                      setMobileOpen(false);
                    }}
                    className="block py-3 text-sm text-left w-full text-slate-700 hover:text-indigo-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/signin"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center h-12 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Headerbar;
