import React from "react";
import { Building2, MapPin } from "lucide-react";
import { participatingInstitutions } from "../data/iriseData";

export default function Institutions() {
  return (
    <section id="institutions" className="py-16 sm:py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Participating Universities
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            I-RISE 2026 united top institutions across the nation. Student innovator delegations
            travelled to The Co-operative University of Kenya to showcase competitive, market-driven prototypes.
          </p>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {participatingInstitutions.map((inst, idx) => {
            const isHost = inst.badge === "Host";
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl transition-colors relative flex flex-col justify-between ${
                  isHost
                    ? "bg-slate-900 border-2 border-emerald-500/50"
                    : "bg-slate-900/60 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="p-2 sm:p-2.5 rounded-xl bg-slate-800 text-slate-300">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider ${
                        isHost
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          : "bg-slate-800 text-slate-400 border border-slate-700"
                      }`}
                    >
                      {inst.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-slate-400 mb-1">
                    {inst.code}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {inst.name}
                  </h3>

                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{inst.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 mt-4 text-[11px] text-slate-400">
                  <span className="text-slate-300 font-semibold">{inst.projectsCount}</span> projects showcased
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
