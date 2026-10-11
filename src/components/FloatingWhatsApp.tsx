"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = "923160250208";
  const defaultMessage = encodeURIComponent(
    "As-salamu alaykum! I am interested in online Quran classes with Islamic Session."
  );

  return (
    <aside
      aria-label="WhatsApp live chat support"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Typing Status Card */}
      {showTooltip && (
        <div className="relative bg-[#160E14] border border-[rgba(230,166,86,0.3)] shadow-[0_10px_25px_rgba(0,0,0,0.8)] rounded-2xl p-3 max-w-[240px] flex items-center gap-3 animate-float">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss chat status tooltip"
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#0B070A] border border-[rgba(230,166,86,0.3)] text-[#C7B8BA] hover:text-white rounded-full flex items-center justify-center text-xs"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Quran Advisor Online</div>
            <div className="text-[11px] text-[#F7CA8B]">Available now on WhatsApp</div>
          </div>
        </div>
      )}

      {/* Pulsating Floating Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <WhatsAppIcon className="w-7 h-7 text-white fill-white group-hover:rotate-12 transition-transform duration-300 relative z-10" />
      </a>
    </aside>
  );
}
