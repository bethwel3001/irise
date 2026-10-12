import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { eventMeta } from "../data/iriseData";

export default function UniversityHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top University Utility Bar */}
      <div className="bg-[#0c2340] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+254 725 499 649 / 020 243 0127</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>enquiries@cuk.ac.ke</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>Ushirika Road, Karen, Nairobi</span>
            </span>
          </div>

          {/* Quick University Portals */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <a
              href="https://studentportal.cuk.ac.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Student Portal
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://staffportal.cuk.ac.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Staff Portal
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://library.cuk.ac.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors hidden sm:inline"
            >
              Library
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={eventMeta.certificateFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <span>Certificate Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main University Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* University Identity */}
          <a
            href="https://cuk.ac.ke"
            className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
          >
            <img
              src="/logos/cuk_logo_transparent.png"
              alt="The Co-operative University of Kenya Crest"
              className="h-12 sm:h-16 md:h-18 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-xl md:text-2xl font-bold text-[#0c2340] tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
                The Co-operative University of Kenya
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide hidden sm:block">
                Quality Co-operative Training, Research, Innovation and Community Outreach
              </span>
            </div>
          </a>

          {/* Desktop University Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a
              href="https://cuk.ac.ke"
              className="hover:text-emerald-700 transition-colors"
            >
              Home
            </a>
            <a
              href="https://cuk.ac.ke/about-cuk"
              className="hover:text-emerald-700 transition-colors"
            >
              About CUK
            </a>
            <a
              href="https://cuk.ac.ke/academics"
              className="hover:text-emerald-700 transition-colors"
            >
              Academics
            </a>
            <a
              href="https://cuk.ac.ke/admissions"
              className="hover:text-emerald-700 transition-colors"
            >
              Admissions
            </a>
            <a
              href="https://cuk.ac.ke/research"
              className="hover:text-emerald-700 transition-colors"
            >
              Research
            </a>
            <span className="text-emerald-700 font-bold border-b-2 border-emerald-600 pb-0.5">
              News & Events
            </span>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile University Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 text-sm font-medium text-slate-700">
          <a
            href="https://cuk.ac.ke"
            className="block py-2 text-slate-700 hover:text-emerald-700"
          >
            Home
          </a>
          <a
            href="https://cuk.ac.ke/about-cuk"
            className="block py-2 text-slate-700 hover:text-emerald-700"
          >
            About CUK
          </a>
          <a
            href="https://cuk.ac.ke/academics"
            className="block py-2 text-slate-700 hover:text-emerald-700"
          >
            Academics
          </a>
          <a
            href="https://cuk.ac.ke/admissions"
            className="block py-2 text-slate-700 hover:text-emerald-700"
          >
            Admissions
          </a>
          <a
            href="https://cuk.ac.ke/research"
            className="block py-2 text-slate-700 hover:text-emerald-700"
          >
            Research & Innovation
          </a>
          <div className="py-2 text-emerald-700 font-bold border-l-2 border-emerald-600 pl-2">
            News & Events: I-RISE 2026 Recap
          </div>
        </div>
      )}
    </header>
  );
}
