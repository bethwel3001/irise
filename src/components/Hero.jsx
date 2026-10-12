import React from "react";
import { Link } from "react-router-dom";
import {
  Images,
  Trophy,
  ArrowRight,
  Award,
  ExternalLink,
} from "lucide-react";
import { keyStats, eventMeta } from "../data/iriseData";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 md:min-h-[calc(100vh-4rem)] md:flex md:flex-col md:justify-center overflow-hidden bg-slate-950"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Clean Logo Row without background box or shadow, fitting cleanly */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-12 mb-3 sm:mb-4">
          <img
            src="/logos/cuk_logo_transparent.png"
            alt="The Co-operative University of Kenya Crest"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
          <img
            src="/logos/irise_logo_transparent.png"
            alt="I-RISE 2026 Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
          <img
            src="/logos/cuk_club_logo_transparent.png"
            alt="CUK Innovation Club Logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 sm:mb-3 leading-tight">
            WHERE IDEAS <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              RISE TO IMPACT
            </span>
          </h1>

          {/* Theme Quote */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-300 italic max-w-2xl mx-auto mb-2 sm:mb-3 px-2">
            “Youth-Led Solutions for a Sustainable and Inclusive Nation: Where Ideas Rise to Impact”
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-5 sm:mb-6 leading-relaxed px-2">
            Bringing together student innovators, university leadership, industry pioneers, and investors
            across 8 premier Kenyan universities. Over 45 ground-breaking solutions showcased and celebrated.
          </p>

          {/* Action Button Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
            <button
              onClick={() => scrollTo("gallery")}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Images className="w-3.5 h-3.5 text-cyan-400" />
              <span>Event Gallery</span>
            </button>

            <Link
              to="/projects"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => scrollTo("winners")}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Podium Champions</span>
            </button>

            <a
              href={eventMeta.certificateFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Claim Certificate</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Clean, Flat Stats Strip - Seamless, compact, visible at once */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-2 sm:gap-x-4 max-w-4xl mx-auto pt-2 text-center">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 max-w-[120px] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
