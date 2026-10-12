import React from "react";
import { Link } from "react-router-dom";
import {
  Images,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { keyStats } from "../data/iriseData";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Logo Row without background box or shadow, fully fitting on mobile */}
        <div className="flex items-center justify-center gap-5 sm:gap-10 md:gap-14 my-4 sm:my-6">
          <img
            src="/logos/cuk_logo_transparent.png"
            alt="The Co-operative University of Kenya Crest"
            className="h-10 sm:h-13 md:h-16 w-auto object-contain"
          />
          <img
            src="/logos/irise_logo_transparent.png"
            alt="I-RISE 2026 Logo"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain"
          />
          <img
            src="/logos/cuk_club_logo_transparent.png"
            alt="CUK Innovation Club Logo"
            className="h-9 sm:h-12 md:h-15 w-auto object-contain"
          />
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mt-4 sm:mt-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
            WHERE IDEAS <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              RISE TO IMPACT
            </span>
          </h1>

          {/* Theme Quote */}
          <p className="text-sm sm:text-lg md:text-xl font-medium text-slate-300 italic max-w-2xl sm:max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
            “Youth-Led Solutions for a Sustainable and Inclusive Nation: Where Ideas Rise to Impact”
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Bringing together student innovators, university leadership, industry pioneers, and investors
            across 8 premier Kenyan universities. Over 45 ground-breaking solutions showcased and celebrated.
          </p>

          {/* Action Button Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16 px-2">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <span>Explore All 45 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => scrollTo("winners")}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-emerald-400" />
              <span>Category Winners</span>
            </button>

            <button
              onClick={() => scrollTo("gallery")}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Images className="w-4 h-4 text-cyan-400" />
              <span>Event Gallery</span>
            </button>
          </div>
        </div>

        {/* Clean, Flat Stats Strip - Seamless without separator line */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 max-w-5xl mx-auto pt-8 text-center">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 max-w-[130px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
