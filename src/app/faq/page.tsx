"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  Mail,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { faqsData } from "@/data/faqs";
import { useModal } from "@/context/ModalContext";
import JsonLd from "@/components/JsonLd";

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("trial-1");
  const { openTrialModal } = useModal();

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "trial", label: "Trial & Enrollment" },
    { key: "schedule", label: "Classes & Timezones" },
    { key: "tutors", label: "Tutors & Languages" },
    { key: "tuition", label: "Tuition & Discounts" },
    { key: "tech", label: "Technical Setup" },
  ];

  return (
    <div className="space-y-16 pb-20 pt-8">
      <JsonLd data={faqSchema} />

      {/* ================= HERO HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="section-tag mx-auto">
          <HelpCircle className="w-4 h-4 text-[#E6A656]" />
          <span>Help &amp; Knowledge Base</span>
        </div>
        <h1 className="andalus-heading text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#C7B8BA] max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our trial classes, schedules, multilingual instructors, and software requirements.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto pt-4 relative">
          <Search className="w-5 h-5 text-[#E6A656] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. Teams, Zoom, WhatsApp, female teacher)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#160E14] border border-[rgba(230,166,86,0.25)] text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656] shadow-lg"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-[#E6A656] to-[#D89547] text-[#0B070A] font-bold shadow-md"
                  : "bg-[#160E14] text-[#C7B8BA] border border-[rgba(230,166,86,0.2)] hover:border-[#E6A656] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= FAQ ACCORDION LIST ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="andalus-card p-12 text-center space-y-3">
            <p className="text-[#C7B8BA]">
              No questions found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="text-xs text-[#E6A656] hover:underline"
            >
              Clear filters and search
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`andalus-card overflow-hidden transition-all duration-300 ${
                    isExpanded
                      ? "border-[#E6A656]/50 shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                      : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : faq.id)
                    }
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[rgba(230,166,86,0.1)] flex items-center justify-center text-[#E6A656] shrink-0 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 bg-[#E6A656] text-[#0B070A]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#C7B8BA] leading-relaxed border-t border-[rgba(230,166,86,0.12)]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ================= STILL HAVE QUESTIONS SUPPORT BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#21141E] via-[#2A1826] to-[#1C121A] border border-[rgba(230,166,86,0.3)] rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="andalus-heading text-2xl sm:text-3xl font-bold">
              Still Have a Question We Haven&apos;t Answered?
            </h3>
            <p className="text-sm text-[#C7B8BA] max-w-xl mx-auto">
              Our academic advisory team is available 24/7 on WhatsApp and email to assist you with scheduling, custom curriculum, or family inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923160250208?text=As-salamu%20alaykum!%20I%20have%20a%20question%20regarding%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-colors shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ask on WhatsApp (Instant Reply)</span>
            </a>

            <a
              href="mailto:quranfolderequran@gmail.com"
              className="btn-outline px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#E6A656]" />
              <span>Email: quranfolderequran@gmail.com</span>
            </a>

            <button
              onClick={() => openTrialModal("General Quran Evaluation")}
              className="btn-amber px-7 py-3.5 text-sm font-bold inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#0B070A]" />
              <span>Book Free Trial</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
