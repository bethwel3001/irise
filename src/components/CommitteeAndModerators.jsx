import React from "react";
import { Users, Mic } from "lucide-react";
import { committeeAndModerators } from "../data/iriseData";

export default function CommitteeAndModerators() {
  return (
    <section className="py-16 sm:py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Organizing Committee & Moderators
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Honoring the dedicated university administrators, track moderators, and organizing committee
            members who ensured fair judging and seamless operations across both days.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {committeeAndModerators.map((person, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-slate-800 text-slate-300">
                    {person.badge === "MC" ? (
                      <Mic className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Users className="w-4 h-4 text-emerald-400" />
                    )}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                    {person.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {person.name}
                </h3>

                <div className="text-xs font-medium text-emerald-400 mb-2">
                  {person.role}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {person.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 mt-4 text-[11px] text-slate-500 font-mono">
                {person.organization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
