import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ExternalLink, Award } from "lucide-react";
import { eventMeta } from "../data/iriseData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "/#about", hash: "about" },
    { name: "Winners", to: "/#winners", hash: "winners" },
    { name: "Projects", to: "/projects", isRoute: true },
    { name: "Gallery", to: "/#gallery", hash: "gallery" },
    { name: "Partners", to: "/#partners", hash: "partners" },
  ];

  const handleLinkClick = (e, link) => {
    setIsOpen(false);
    if (link.isRoute) {
      return;
    }
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(link.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const target = document.getElementById(link.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
          : "bg-white/80 backdrop-blur-sm py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title with larger logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="/logos/irise_logo_transparent.png"
              alt="I-RISE Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
                I-RISE <span className="text-emerald-600">2026</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden md:block">
                The Co-operative University of Kenya
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={(e) => handleLinkClick(e, link)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  link.isRoute && location.pathname === link.to
                    ? "text-emerald-700 bg-emerald-50 font-semibold"
                    : "text-slate-600 hover:text-emerald-600 hover:bg-slate-100/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={eventMeta.certificateFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Claim Certificate</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 space-y-1 border-t border-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={(e) => handleLinkClick(e, link)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  link.isRoute && location.pathname === link.to
                    ? "text-emerald-700 bg-emerald-50 font-semibold"
                    : "text-slate-600 hover:text-emerald-600 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href={eventMeta.certificateFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Claim Certificate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
