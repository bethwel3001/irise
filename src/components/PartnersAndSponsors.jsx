import React from "react";
import { ExternalLink } from "lucide-react";
import { sponsorsAndPartners } from "../data/iriseData";

export default function PartnersAndSponsors() {
  return (
    <section id="partners" className="py-16 sm:py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
            Partners & Sponsors
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            The inaugural I-RISE Expo was made possible through the collaboration and mentorship of our host institution and industry partners.
          </p>
        </div>

        {/* Host Institution Feature - Clean with increased logo size */}
        <div className="max-w-4xl mx-auto mb-12 border-b border-slate-200 pb-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
          <img
            src="/logos/cuk_logo_transparent.png"
            alt="The Co-operative University of Kenya"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain shrink-0"
          />
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-emerald-700">
              Host Institution & Main Sponsor
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              The Co-operative University of Kenya (CUK)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Provided the campus facilities, logistics coordination, faculty jury mentorship, and backing for the 7th Innovation Week and inaugural I-RISE Expo.
            </p>
            <div className="pt-1">
              <a
                href="https://cuk.ac.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                <span>Visit CUK Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Sponsors Clean Grid - Names formatted cleanly without unnecessary boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sponsorsAndPartners.map((partner, idx) => (
            <div key={idx} className="space-y-1 border-l-2 border-slate-200 pl-4 py-1">
              <div className="text-xs font-semibold text-emerald-700">
                {partner.role}
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {partner.name}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {partner.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
