import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  ArrowUp
} from "lucide-react";
import { eventMeta } from "../data/iriseData";

export default function UniversityFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c2340] text-slate-300 border-t-4 border-emerald-600 mt-16">
      {/* University Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Col 1: University Identity & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logos/cuk_logo_transparent.png"
                alt="The Co-operative University of Kenya"
                className="h-14 sm:h-16 w-auto object-contain brightness-110"
              />
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base leading-tight">
                  The Co-operative University of Kenya
                </h4>
                <p className="text-xs text-emerald-400">Main Campus, Karen</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              A premier chartered public university offering market-responsive degree, diploma, and professional programmes anchored on co-operative development, computing, and research.
            </p>
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ushirika Road, Karen, P.O. Box 24814-00502, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+254 725 499 649 / 020 243 0127</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>enquiries@cuk.ac.ke</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Schools */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-blue-900 pb-2">
              Academic Schools
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="https://cuk.ac.ke/school-of-computing-and-mathematics" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>School of Computing and Mathematics (SCM)</span>
                </a>
              </li>
              <li>
                <a href="https://cuk.ac.ke/school-of-business-and-economics" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>School of Business & Economics (SBE)</span>
                </a>
              </li>
              <li>
                <a href="https://cuk.ac.ke/school-of-co-operative-and-community-development" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>School of Co-operative Development</span>
                </a>
              </li>
              <li>
                <a href="https://cuk.ac.ke/institute-of-tvet" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Institute of TVET</span>
                </a>
              </li>
              <li>
                <a href="https://cuk.ac.ke/board-of-postgraduate-studies" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Board of Postgraduate Studies (BPS)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Portals */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-blue-900 pb-2">
              Research & Portals
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="https://cuk.ac.ke/research" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Research & Innovation Division (ACDRI)</span>
                </a>
              </li>
              <li>
                <a href="https://studentportal.cuk.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Online Student Portal</span>
                </a>
              </li>
              <li>
                <a href="https://staffportal.cuk.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Staff Intranet Portal</span>
                </a>
              </li>
              <li>
                <a href="https://library.cuk.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>CUK Digital Library & Repository</span>
                </a>
              </li>
              <li>
                <a href={eventMeta.certificateFormUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>I-RISE 2026 Certificate Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Event Partners & Google Drive */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-blue-900 pb-2">
              I-RISE 2026 Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href={eventMeta.googleDrivePhotosUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Master Google Drive Archive</span>
                </a>
              </li>
              <li>
                <a href={eventMeta.day1DriveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Day 1 Photo Album (Drive)</span>
                </a>
              </li>
              <li>
                <a href={eventMeta.day2DriveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Day 2 Photo Album (Drive)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${eventMeta.email}`} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>{eventMeta.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom University Legal Bar */}
        <div className="pt-8 mt-8 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 The Co-operative University of Kenya (CUK). All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
