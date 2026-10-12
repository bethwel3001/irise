import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { eventMeta } from "../data/iriseData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 relative overflow-hidden text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Logos with larger sizes */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logos/irise_logo_transparent.png"
                alt="I-RISE Logo"
                className="h-11 sm:h-12 w-auto object-contain"
              />
              <span className="font-extrabold text-xl bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                I-RISE 2026
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Interuniversity Research & Innovation Student Expo & 7th CUK Innovation Week.
              Where ideas rise to impact.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <img
                src="/logos/cuk_logo_transparent.png"
                alt="CUK Crest"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <img
                src="/logos/cuk_club_logo_transparent.png"
                alt="CUK Club"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/#about" className="hover:text-emerald-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#winners" className="hover:text-emerald-700 transition-colors">
                  Category Winners
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-emerald-700 transition-colors">
                  All 45 Projects Directory
                </Link>
              </li>
              <li>
                <Link to="/#institutions" className="hover:text-emerald-700 transition-colors">
                  Participating Universities
                </Link>
              </li>
              <li>
                <Link to="/#gallery" className="hover:text-emerald-700 transition-colors">
                  Photo Archive
                </Link>
              </li>
              <li>
                <Link to="/#partners" className="hover:text-emerald-700 transition-colors">
                  Sponsors & Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Official Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a
                  href={eventMeta.certificateFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-800 transition-colors flex items-center space-x-1 text-emerald-700 font-semibold cursor-pointer"
                >
                  <span>Certificate & Feedback Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={eventMeta.googleDrivePhotosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Google Drive Archive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://cuk.ac.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>The Co-operative University of Kenya</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Official Contact
            </h4>
            <div className="flex items-start space-x-2.5 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                The Co-operative University of Kenya <br />
                Ushirika Road, Karen, Nairobi
              </span>
            </div>
            <div className="flex items-center space-x-2.5 text-xs text-slate-600">
              <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
              <a href={`mailto:${eventMeta.email}`} className="hover:text-emerald-700">
                {eventMeta.email}
              </a>
            </div>
            <div className="flex items-center space-x-2.5 text-xs text-slate-600">
              <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
              <a href={`tel:${eventMeta.phone}`} className="hover:text-emerald-700">
                {eventMeta.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom credits & back to top */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 I-RISE Organizing Committee & The Co-operative University of Kenya.
            All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-emerald-700 border border-slate-200 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
