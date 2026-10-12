import React from "react";
import { committeeAndModerators } from "../data/iriseData";

export default function CommitteeAndModerators() {
  return (
    <section className="py-16 sm:py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
            Organizing Committee & Moderators
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Honoring the university administrators, track moderators, and organizing committee
            members who ensured fair judging and operations.
          </p>
        </div>

        {/* Clean Unboxed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {committeeAndModerators.map((person, idx) => (
            <div key={idx} className="space-y-1 border-l-2 border-slate-200 pl-4 py-1">
              <div className="text-xs font-semibold text-emerald-700">
                {person.role}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {person.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {person.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
