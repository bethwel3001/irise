import React from "react";
import { Award, ExternalLink, Mail, Phone } from "lucide-react";
import { eventMeta } from "../data/iriseData";

export default function CertificatesCTA() {
  return (
    <section id="certificates" className="py-16 sm:py-24 relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Claim Your Certificate
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          All participating student innovators are invited to apply for their official Certificate of Participation or Achievement and share feedback on the expo.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={eventMeta.certificateFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-sm cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>Open Certificate Form</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          <a
            href={eventMeta.googleDrivePhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-medium text-sm transition-colors cursor-pointer"
          >
            <span>View Google Drive Photos</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 border-t border-slate-200 pt-8">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-emerald-700" />
            <span>{eventMeta.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-emerald-700" />
            <span>{eventMeta.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
