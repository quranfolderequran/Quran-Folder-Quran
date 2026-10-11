"use client";

import React, { useState } from "react";
import { Feather, Volume2, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface LetterData {
  letter: string;
  name: string;
  point: string;
  tip: string;
}

const lettersData: Record<string, LetterData> = {
  qaf: {
    letter: "ق",
    name: "Letter Qāf (ق)",
    point: "Aqsa al-Lisaan (Deepest root of tongue against soft palate)",
    tip: "Pronounced with strong Qalqalah (echo) and heavy Isti'la (elevation of tongue root).",
  },
  taa: {
    letter: "ط",
    name: "Letter Ṭā’ (ط)",
    point: "Tip of the tongue touching the roots of upper front incisors",
    tip: "The strongest letter in the Arabic alphabet with heavy Ithbaq and robust Qalqalah.",
  },
  saad: {
    letter: "ص",
    name: "Letter Ṣād (ص)",
    point: "Tip of the tongue slightly above lower front incisors",
    tip: "Accompanied by Safeer (whistle) and heavy elevation without rounding the lips.",
  },
  daad: {
    letter: "ض",
    name: "Letter Ḍād (ض)",
    point: "Haffat al-Lisaan (One or both edges of tongue touching upper molars)",
    tip: "Known as the most unique letter in Arabic (Lughat al-Daad) with Istitalah (prolonged compression).",
  },
  ain: {
    letter: "ع",
    name: "Letter ‘Ayn (ع)",
    point: "Wast al-Halq (Middle of the throat / vocal cords)",
    tip: "Pronounced cleanly and deeply from the center of the throat without constricting breath.",
  },
  khaa: {
    letter: "خ",
    name: "Letter Khā’ (خ)",
    point: "Adna al-Halq (Top of the throat nearest to mouth)",
    tip: "Possesses natural rasping friction and heavy elevation (Isti'la).",
  },
};

export default function MakharijSoundboard() {
  const [selectedKey, setSelectedKey] = useState<string>("qaf");
  const { openTrialModal } = useModal();
  const current = lettersData[selectedKey] || lettersData.qaf;

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1C121A] via-[#160E14] to-[#20131D] border border-[rgba(230,166,86,0.3)] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(230,166,86,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(230,166,86,0.1)] border border-[rgba(230,166,86,0.25)] text-[#F7CA8B] text-xs font-semibold uppercase tracking-wider mb-4">
          <Feather className="w-3.5 h-3.5 text-[#E6A656]" />
          <span>Interactive Articulation Mastery Lab</span>
        </div>

        <h3 className="andalus-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
          Explore Classical Arabic Makhārij
        </h3>
        <p className="text-sm sm:text-base text-[#C7B8BA] max-w-xl mx-auto mb-8">
          Click any heavy or throat letter below to inspect its precise anatomical articulation point and classical Tajweed rules:
        </p>

        {/* Letter Selector Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {Object.entries(lettersData).map(([key, item]) => {
            const isActive = selectedKey === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl font-serif text-2xl sm:text-3xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-[#E6A656] to-[#D89547] text-[#0B070A] font-bold shadow-[0_0_25px_rgba(230,166,86,0.5)] scale-110 -translate-y-1"
                    : "bg-[#0B070A]/80 text-[#FAF6F0] border border-[rgba(230,166,86,0.2)] hover:border-[#E6A656] hover:bg-[rgba(230,166,86,0.1)]"
                }`}
              >
                {item.letter}
              </button>
            );
          })}
        </div>

        {/* Active Letter Inspection Card */}
        <div className="bg-[#0B070A]/85 border border-[rgba(230,166,86,0.25)] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#E6A656]" />
              <h4 className="font-serif text-xl sm:text-2xl text-[#F7CA8B] font-bold">
                {current.name}
              </h4>
            </div>
            <p className="text-sm sm:text-base text-white font-medium">
              {current.point}
            </p>
            <p className="text-xs sm:text-sm text-[#C7B8BA] leading-relaxed">
              {current.tip}
            </p>
          </div>

          <button
            onClick={() => openTrialModal("Recitation with Tajweed")}
            className="btn-amber text-xs sm:text-sm whitespace-nowrap px-6 py-3 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0B070A]" />
            <span>Practice with Tutor</span>
          </button>
        </div>
      </div>
    </section>
  );
}
