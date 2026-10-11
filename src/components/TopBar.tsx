"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#120B10] border-b border-[rgba(230,166,86,0.15)] text-[13px] text-[#C7B8BA] py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Contact Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:quranfolderequran@gmail.com"
            className="flex items-center gap-2 hover:text-[#F7CA8B] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#E6A656]" />
            <span>quranfolderequran@gmail.com</span>
          </a>
          <a
            href="https://wa.me/923160250208"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#F7CA8B] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#25D366]" />
            <span>+92 316 0250208</span>
          </a>
        </div>

        {/* Bismillah and Transmission Tag */}
        <div className="flex items-center gap-3 text-center">
          <span className="arabic-bismillah text-sm md:text-base font-semibold">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
          <span className="opacity-30 hidden sm:inline">•</span>
          <span className="text-[#F7CA8B] text-xs hidden sm:inline tracking-wide">
            Classical Quranic Transmission • 1-on-1 Worldwide
          </span>
        </div>
      </div>
    </div>
  );
}
