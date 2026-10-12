import React from "react";
import {
  Target,
  Network,
  Briefcase,
  Cpu,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: "Research to Market Reality",
      desc: "Transforming university student research, capstones, and software experiments into commercially viable, deployable solutions.",
    },
    {
      icon: Network,
      title: "Interuniversity Collaboration",
      desc: "Forging lasting bonds among 8 public and private Kenyan universities to build an active youth innovation ecosystem.",
    },
    {
      icon: Briefcase,
      title: "Direct Ecosystem Linkages",
      desc: "Connecting student founders directly with angel investors, incubation hubs, tech sponsors, and university enterprise leadership.",
    },
    {
      icon: Cpu,
      title: "Next-Gen Infrastructure",
      desc: "Empowering developers to tackle high-performance compute, AI model training, GPU cloud scaling, and data security.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            About I-RISE 2026
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            The Interuniversity Research & Innovation Student Expo (I-RISE) was co-hosted with the
            7th CUK Innovation Week on 8–9 October 2026 at The Co-operative University of Kenya.
            The event bridged the gap between academic research and commercial reality.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 sm:mb-5">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Box */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-slate-800 max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              “Where Ideas Rise to Impact”
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              From climate-smart agriculture and healthcare technologies to cybersecurity, robotics, and social innovation,
              I-RISE demonstrated that university students across Kenya are actively building answers to national challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
