import React from "react";
import { Award, ExternalLink, FileText, CheckCircle2, MessageSquare, Mail, Phone } from "lucide-react";
import { eventMeta } from "../data/iriseData";

export default function CertificatesCTA() {
  return (
    <section id="certificates" className="py-16 sm:py-20 relative bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-slate-900/70 border border-emerald-500/30 shadow-xl overflow-hidden">
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
              Claim Your Official Certificate & Share Feedback
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
              All student innovators, whether or not you placed among the podium winners,
              are invited to apply for your official Certificate of Participation or Achievement.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 text-left">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Exact Official Name</span>
                </div>
                <p className="text-xs text-slate-400">
                  Provide your legal name exactly as you wish it printed on your certificate.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold mb-1">
                  <FileText className="w-4 h-4" />
                  <span>Project & University</span>
                </div>
                <p className="text-xs text-slate-400">
                  Include your project name and participating institution for verification.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center space-x-2 text-teal-400 text-xs font-bold mb-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>Valuable Feedback</span>
                </div>
                <p className="text-xs text-slate-400">
                  Share your impressions on mentoring, logistics, and facilities for future expos.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href={eventMeta.certificateFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Open Google Form Portal</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <a
                href={eventMeta.googleDrivePhotosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs sm:text-sm transition-colors"
              >
                <span>View Google Drive Photos</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>

            {/* Contact Contacts Strip */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{eventMeta.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{eventMeta.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
