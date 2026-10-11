"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  Compass,
} from "lucide-react";
import { coursesData } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import { useModal } from "@/context/ModalContext";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { openTrialModal } = useModal();

  const filteredCourses =
    selectedCategory === "all"
      ? coursesData
      : coursesData.filter((c) => c.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20 pt-8">
      {/* ================= HERO HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="section-tag mx-auto">
          <GraduationCap className="w-4 h-4 text-[#E6A656]" />
          <span>Complete Quranic Curriculum</span>
        </div>
        <h1 className="andalus-heading text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          Eight Progressive Tracks from Noorani Qaida to Classical Ijazah
        </h1>
        <p className="text-base sm:text-lg text-[#C7B8BA] max-w-2xl mx-auto leading-relaxed">
          Structured pathways tailored for young children, teenagers, and adult learners. Every course includes 1-on-1 private instruction, dedicated syllabus modules, and a 3-Day Free Trial.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {[
            { key: "all", label: "All 8 Courses" },
            { key: "youth", label: "Children & Youth" },
            { key: "tajweed", label: "Tajweed & Qirat" },
            { key: "hifz", label: "Hifz & Tafsir" },
            { key: "arabic", label: "Arabic & Islamic Adab" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === tab.key
                  ? "bg-gradient-to-r from-[#E6A656] to-[#D89547] text-[#0B070A] font-bold shadow-lg shadow-[rgba(230,166,86,0.25)]"
                  : "bg-[#160E14] text-[#C7B8BA] border border-[rgba(230,166,86,0.2)] hover:border-[#E6A656] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= COURSES GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* ================= PROGRESSION ROADMAP ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="andalus-card p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="section-tag mx-auto">
              <Compass className="w-4 h-4 text-[#E6A656]" />
              <span>Learning Roadmap</span>
            </div>
            <h2 className="andalus-heading text-2xl sm:text-3xl font-bold">
              The Student Progression Journey
            </h2>
            <p className="text-sm text-[#C7B8BA]">
              How a student transitions from first Arabic letters to fluent recitation and memorization:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#E6A656] text-[#0B070A] font-bold text-sm flex items-center justify-center">
                1
              </span>
              <h4 className="font-serif text-lg font-bold text-white">Stage 1: Qaida</h4>
              <p className="text-xs text-[#C7B8BA] leading-relaxed">
                Letter phonetics, vowel marks, Tanween, Sukoon, and connecting letters.
              </p>
              <div className="text-[11px] text-[#F7CA8B] font-medium pt-1">
                Course: Reading Basics
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#E6A656] text-[#0B070A] font-bold text-sm flex items-center justify-center">
                2
              </span>
              <h4 className="font-serif text-lg font-bold text-white">Stage 2: Fluency</h4>
              <p className="text-xs text-[#C7B8BA] leading-relaxed">
                Nazra reading from Juz Amma to full Quran with smooth pacing and rhythm.
              </p>
              <div className="text-[11px] text-[#F7CA8B] font-medium pt-1">
                Course: Kids & Adults Track
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#E6A656] text-[#0B070A] font-bold text-sm flex items-center justify-center">
                3
              </span>
              <h4 className="font-serif text-lg font-bold text-white">Stage 3: Tajweed</h4>
              <p className="text-xs text-[#C7B8BA] leading-relaxed">
                Deep Makharij, Sifaat, Noon/Meem Saakin rules, Madd, and stopping rules.
              </p>
              <div className="text-[11px] text-[#F7CA8B] font-medium pt-1">
                Course: Tajweed Recitation
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#E6A656] text-[#0B070A] font-bold text-sm flex items-center justify-center">
                4
              </span>
              <h4 className="font-serif text-lg font-bold text-white">Stage 4: Hifz &amp; Ijazah</h4>
              <p className="text-xs text-[#C7B8BA] leading-relaxed">
                Full memorization with Sabaq/Manzil routine, Tafsir comprehension, and Ijazah.
              </p>
              <div className="text-[11px] text-[#F7CA8B] font-medium pt-1">
                Course: Hifz & Qirat Mastery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRIAL BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-[#21141E] via-[#2D1826] to-[#1C121A] border-2 border-[rgba(230,166,86,0.35)] rounded-3xl p-8 sm:p-12 space-y-5">
          <h3 className="andalus-heading text-2xl sm:text-3xl font-bold">
            Unsure Which Course is Right for You or Your Child?
          </h3>
          <p className="text-sm text-[#C7B8BA] max-w-xl mx-auto">
            Book our complimentary 3-Day Free Trial. Our master Hafiz instructor will evaluate your current recitation and recommend the exact best starting course.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openTrialModal("General Quran Evaluation")}
              className="btn-amber text-sm font-bold px-8 py-4 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#0B070A]" />
              <span>Book Complimentary Evaluation</span>
            </button>
            <Link
              href="/fee"
              className="btn-outline text-sm font-semibold px-7 py-4 inline-flex items-center gap-2"
            >
              <span>View Tuition Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
