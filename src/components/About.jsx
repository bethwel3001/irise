import React from "react";

export default function About() {
  const pillars = [
    {
      title: "Research to Reality",
      desc: "Transforming university student research, capstone projects, and software innovations into market-ready national solutions.",
    },
    {
      title: "Interuniversity Network",
      desc: "Forging partnerships across 8 public and private Kenyan universities to build an active youth innovation ecosystem.",
    },
    {
      title: "Industry & Mentorship",
      desc: "Connecting student founders directly with incubation hubs, technical mentors, industry leaders, and university administration.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            About I-RISE 2026
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The Interuniversity Research & Innovation Student Expo (I-RISE) was co-hosted alongside the
            7th CUK Innovation Week at The Co-operative University of Kenya in Karen, Nairobi.
            The event bridged the gap between academic innovation and practical industry implementation.
          </p>
        </div>

        {/* Clean 3 Pillars without card containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-2 border-l-2 border-emerald-500/60 pl-4 sm:pl-5">
              <h3 className="text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
