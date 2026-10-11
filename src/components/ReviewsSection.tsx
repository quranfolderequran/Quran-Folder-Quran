"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { reviewsData } from "@/data/reviews";

interface ReviewsSectionProps {
  initialLimit?: number;
  showFilters?: boolean;
}

export default function ReviewsSection({
  initialLimit = 3,
  showFilters = true,
}: ReviewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "kids" | "tajweed" | "hifz" | "adults"
  >("all");
  const [expanded, setExpanded] = useState(false);

  const filterTabs = [
    { id: "all", label: "All Reviews (10)" },
    { id: "kids", label: "Kids & Qaida" },
    { id: "tajweed", label: "Tajweed & Qira'at" },
    { id: "hifz", label: "Hifz Memorization" },
    { id: "adults", label: "Adult Learners" },
  ] as const;

  const filteredReviews =
    selectedCategory === "all"
      ? reviewsData
      : reviewsData.filter(
          (r) =>
            r.category === selectedCategory ||
            (selectedCategory === "tajweed" && r.course.includes("Tajweed")) ||
            (selectedCategory === "hifz" && r.course.includes("Hifz")) ||
            (selectedCategory === "kids" &&
              (r.category === "kids" || r.role.toLowerCase().includes("parent")))
        );

  const displayedReviews = expanded
    ? filteredReviews
    : filteredReviews.slice(0, initialLimit);

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="section-tag mx-auto">
            <Star className="w-4 h-4 text-[#E6A656] fill-[#E6A656]" />
            <span>Global Diaspora Testimonials</span>
          </div>

          <h2 className="andalus-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trusted by Families Worldwide
          </h2>

          <p className="text-sm sm:text-base text-[#C7B8BA] leading-relaxed">
            Read authentic experiences from Muslim parents, children, and adult students learning across the UK, USA, Canada, Australia, and the UAE.
          </p>

          {/* Aggregate Rating Badge */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[rgba(230,166,86,0.12)] border border-[rgba(230,166,86,0.25)] text-[#F7CA8B] font-semibold">
              <span className="text-white font-bold">5.0</span>
              <div className="flex items-center gap-0.5 text-[#E6A656]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E6A656]" />
                ))}
              </div>
              <span className="text-[#C7B8BA] ml-1">Over 150+ Verified Students</span>
            </div>

            <div className="inline-flex items-center gap-1 text-xs text-[#25D366] font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Authentic Feedback</span>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs (shown when expanded or when filters requested) */}
        {showFilters && expanded && (
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 animate-fadeIn">
            {filterTabs.map((tab) => {
              const count =
                tab.id === "all"
                  ? reviewsData.length
                  : reviewsData.filter(
                      (r) =>
                        r.category === tab.id ||
                        (tab.id === "tajweed" && r.course.includes("Tajweed")) ||
                        (tab.id === "hifz" && r.course.includes("Hifz")) ||
                        (tab.id === "kids" &&
                          (r.category === "kids" ||
                            r.role.toLowerCase().includes("parent")))
                    ).length;

              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#E6A656] text-[#0B070A] shadow-md shadow-[#E6A656]/20 font-bold"
                      : "bg-[#180E16] text-[#C7B8BA] border border-[rgba(230,166,86,0.2)] hover:border-[#E6A656] hover:text-white"
                  }`}
                >
                  {tab.label} {tab.id !== "all" && `(${count})`}
                </button>
              );
            })}
          </div>
        )}

        {/* Reviews Grid (Initially 3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="andalus-card p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[rgba(230,166,86,0.45)] transition-all group"
            >
              {/* Header inside Card */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#E6A656]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E6A656]" />
                    ))}
                  </div>

                  {/* Verified Badge */}
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#25D366] bg-[rgba(37,211,102,0.1)] px-2 py-0.5 rounded-full border border-[rgba(37,211,102,0.2)]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Highlight Tagline */}
                <div className="text-xs font-semibold text-[#F7CA8B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6A656]"></span>
                  <span>{review.highlight}</span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#C7B8BA] leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author & Course Meta Footer */}
              <div className="pt-4 border-t border-[rgba(230,166,86,0.15)] space-y-3">
                <div className="flex items-center gap-3">
                  {/* Monogram Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C25E3E] to-[#E6A656] text-[#0B070A] font-bold text-xs flex items-center justify-center shrink-0 shadow-md">
                    {review.avatarInitials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-sm font-bold text-white truncate group-hover:text-[#F7CA8B] transition-colors">
                      {review.name}
                    </div>
                    <div className="text-xs text-[#C7B8BA] truncate">
                      {review.role} • {review.location}
                    </div>
                  </div>
                </div>

                {/* Course Badge & Date */}
                <div className="flex items-center justify-between text-[11px] text-[#C7B8BA]/70 pt-1">
                  <span className="bg-[rgba(230,166,86,0.08)] border border-[rgba(230,166,86,0.18)] text-[#F7CA8B] px-2 py-0.5 rounded-full truncate max-w-[200px]">
                    {review.course}
                  </span>
                  <span className="shrink-0">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center pt-2">
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="btn-outline px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2.5 hover:bg-[#E6A656] hover:text-[#0B070A] transition-all shadow-lg group"
            >
              <span>View All Reviews ({reviewsData.length})</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          ) : (
            <button
              onClick={() => {
                setExpanded(false);
                setSelectedCategory("all");
              }}
              className="btn-outline px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2.5 hover:bg-[#E6A656] hover:text-[#0B070A] transition-all shadow-lg group"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
