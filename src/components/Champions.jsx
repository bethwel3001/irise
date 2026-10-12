import React from "react";
import {
  Trophy,
  ShieldCheck,
  HeartPulse,
  Scale,
  Sparkles,
  PartyPopper,
  Award
} from "lucide-react";
import confetti from "canvas-confetti";
import { grandChampions } from "../data/iriseData";

const championIcons = {
  Crown: Trophy,
  ShieldCheck: ShieldCheck,
  HeartPulse: HeartPulse,
  Scale: Scale,
  Sparkles: Sparkles,
};

export default function Champions() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#10b981", "#06b6d4", "#f59e0b", "#8b5cf6"],
    });
  };

  return (
    <section id="champions" className="py-16 sm:py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Podium Champions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Following evaluation in Round 1 and grand final presentations in Round 2,
            the jury panel awarded top honors to these student innovations.
          </p>

          <div className="mt-5 sm:mt-6 flex justify-center">
            <button
              onClick={triggerConfetti}
              className="inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <PartyPopper className="w-4 h-4" />
              <span>Celebrate Champions</span>
            </button>
          </div>
        </div>

        {/* 1st Place Spotlight Card */}
        {grandChampions.length > 0 && (
          <div className="mb-8 sm:mb-10 max-w-4xl mx-auto">
            <div className="relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-amber-500/40 shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                <div className="space-y-2 sm:space-y-3">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>{grandChampions[0].badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {grandChampions[0].team}
                  </h3>

                  <div className="inline-block text-xs sm:text-sm font-semibold text-emerald-400">
                    Track: {grandChampions[0].track}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                    {grandChampions[0].description}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-950 border border-amber-500/30 min-w-[120px] sm:min-w-[150px] self-stretch md:self-auto">
                  <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                    Final Score
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono">
                    {grandChampions[0].score.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">out of 100</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Champions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {grandChampions.slice(1).map((champ, idx) => {
            const Icon = championIcons[champ.icon] || Award;
            return (
              <div
                key={idx}
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="p-2 sm:p-2.5 rounded-xl bg-slate-800 text-slate-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                    </span>
                    <span className="font-mono font-bold text-sm sm:text-base text-emerald-400">
                      {champ.score.toFixed(2)}
                    </span>
                  </div>

                  <div className="text-[10px] sm:text-[11px] uppercase font-bold text-slate-400 mb-1 tracking-wider">
                    {champ.badge}
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                    {champ.team}
                  </h4>

                  <div className="text-xs font-medium text-emerald-400/90 mb-2.5 sm:mb-3">
                    {champ.track}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {champ.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Grand Finalist</span>
                  <span className="text-emerald-400 font-semibold">Award Winner</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
