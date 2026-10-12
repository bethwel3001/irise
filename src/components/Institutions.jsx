import React from "react";
import { participatingInstitutions } from "../data/iriseData";

export default function Institutions() {
  return (
    <section id="institutions" className="py-16 sm:py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Participating Universities
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Student delegations from 8 premier public and private universities across Kenya travelled to The Co-operative University of Kenya to showcase competitive innovations.
          </p>
        </div>

        {/* Clean, Unboxed Universities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {participatingInstitutions.map((inst, idx) => {
            const isHost = inst.badge === "Host";
            return (
              <div key={idx} className="space-y-1.5 border-l-2 border-slate-800 pl-4 py-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {inst.code}
                  </span>
                  {isHost && (
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      Host
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {inst.name}
                </h3>

                <div className="text-xs text-slate-400">
                  {inst.city}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
