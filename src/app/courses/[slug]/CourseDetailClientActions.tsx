"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useModal } from "@/context/ModalContext";

interface CourseDetailClientActionsProps {
  courseTitle: string;
  slug: string;
}

export default function CourseDetailClientActions({
  courseTitle,
}: CourseDetailClientActionsProps) {
  const { openTrialModal } = useModal();

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `As-salamu alaykum! I am inquiring about the "${courseTitle}" course on Islamic Session. Could you please share available schedule slots?`
    );
    return `https://wa.me/923160250208?text=${text}`;
  };

  return (
    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
      <button
        onClick={() => openTrialModal(courseTitle)}
        className="w-full sm:w-auto btn-amber text-xs sm:text-sm font-bold px-7 py-3.5"
      >
        <Sparkles className="w-4 h-4 text-[#0B070A]" />
        <span>Book 3-Day Free Trial</span>
      </button>

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm transition-colors shadow-md"
      >
        <WhatsAppIcon className="w-4 h-4" />
        <span>Ask Tutor on WhatsApp</span>
      </a>
    </div>
  );
}
