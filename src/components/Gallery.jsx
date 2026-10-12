import React from "react";
import { ExternalLink, FolderArchive, ArrowUpRight } from "lucide-react";
import { eventMeta } from "../data/iriseData";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
            Event Gallery
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Browse high-resolution photographs from Day 1 and Day 2 of I-RISE 2026 on Google Drive.
          </p>
        </div>

        {/* 2 Clean Cards for Day 1 and Day 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Day 1 */}
          <a
            href={eventMeta.day1DriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500/50 shadow-sm transition-colors"
          >
            <div className="aspect-video w-full overflow-hidden bg-slate-100">
              <img
                src="/gallery/day1/day1_1_AHP_3227.JPG"
                alt="Day 1 Showcase - I-RISE 2026"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] sm:text-xs font-semibold text-emerald-700 mb-0.5 sm:mb-1">Day 1</div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Day 1 Photos
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 sm:mt-1">
                  Keynotes, opening ceremony & breakout pitch sessions
                </p>
              </div>

              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                <span>View Drive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>

          {/* Card 2: Day 2 */}
          <a
            href={eventMeta.day2DriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-cyan-500/50 shadow-sm transition-colors"
          >
            <div className="aspect-video w-full overflow-hidden bg-slate-100">
              <img
                src="/gallery/day2/day2_1_AHP_3665.JPG"
                alt="Day 2 Showcase - I-RISE 2026"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] sm:text-xs font-semibold text-cyan-700 mb-0.5 sm:mb-1">Day 2</div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  Day 2 Photos
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 sm:mt-1">
                  Grand finals, prototype exhibitions & awards ceremony
                </p>
              </div>

              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-700 bg-cyan-50 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
                <span>View Drive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        </div>

        {/* Central Drive Archive Button */}
        <div className="text-center mt-8 sm:mt-10">
          <a
            href={eventMeta.googleDrivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            <FolderArchive className="w-4 h-4 text-emerald-600" />
            <span>Open Complete Google Drive Archive</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
