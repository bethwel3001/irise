import React from "react";
import { ExternalLink } from "lucide-react";
import { sponsorsAndPartners } from "../data/iriseData";

export default function PartnersAndSponsors() {
  return (
    <section id="partners" className="py-16 sm:py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Partners & Sponsors
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            The inaugural I-RISE Expo was made possible through the generosity and mentorship
            of our host institution and industry partners.
          </p>
        </div>

        {/* Main Host Feature Card */}
        <div className="mb-10 sm:mb-12 max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <img
              src="/logos/cuk_logo_transparent.png"
              alt="The Co-operative University of Kenya"
              className="h-16 sm:h-20 w-auto object-contain shrink-0"
            />
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase">
                <span>Host Institution & Main Sponsor</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                The Co-operative University of Kenya (CUK)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As host and primary sponsor, CUK provided the campus facilities, logistical coordination,
                faculty jury mentorship, and backing for the 7th Innovation Week and 1st I-RISE Expo.
              </p>
              <div className="pt-1">
                <a
                  href="https://cuk.ac.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Visit CUK Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {sponsorsAndPartners.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {partner.type}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {partner.role}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 leading-snug">
                  {partner.name}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {partner.contribution}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span>Ecosystem Partner</span>
                <span className="text-emerald-400 font-semibold">Recognized</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
