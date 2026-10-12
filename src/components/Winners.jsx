import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categoryWinners } from "../data/iriseData";

export default function Winners() {
  return (
    <section id="winners" className="py-16 sm:py-24 relative bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Category Winners
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Top student innovations recognized across the 6 thematic competition tracks evaluated during I-RISE 2026.
          </p>
        </div>

        {/* Clean, Flat Category Winners List */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/40 divide-y divide-slate-800">
          {categoryWinners.map((winner, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-900/70 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-emerald-400">
                    {winner.track}
                  </span>
                  {winner.honor && (
                    <span className="text-[10px] font-medium text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60">
                      {winner.honor}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {winner.team}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {winner.institution} • {winner.description}
                </p>
              </div>

              <div className="font-mono text-sm sm:text-base font-bold text-emerald-400 shrink-0 self-end sm:self-center">
                {winner.score.toFixed(2)} pts
              </div>
            </div>
          ))}
        </div>

        {/* Button to Open Dedicated Page with All Projects */}
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-colors cursor-pointer"
          >
            <span>View All 45 Projects</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
