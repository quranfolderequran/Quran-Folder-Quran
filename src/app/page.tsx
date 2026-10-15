"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Award,
  Shield,
  Moon,
  Mic,
  Heart,
  Globe2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { coursesData } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import MakharijSoundboard from "@/components/MakharijSoundboard";
import TuitionCalculator from "@/components/TuitionCalculator";
import ReviewsSection from "@/components/ReviewsSection";
import { useModal } from "@/context/ModalContext";

export default function HomePage() {
  const { openTrialModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCourses =
    selectedCategory === "all"
      ? coursesData
      : coursesData.filter((c) => c.category === selectedCategory);

  return (
    <div className="space-y-20 pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="section-tag mx-auto lg:mx-0">
                <Moon className="w-4 h-4 text-[#E6A656]" />
                <span>The Golden Age of Quran Recitation</span>
              </div>

              <h1 className="andalus-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Reviving the Classical Elegance of Sacred Recitation
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-[#F7CA8B] font-normal mt-2.5 not-italic tracking-normal">
                  تِلَاوَةٌ بِالتَّرْتِيلِ وَالْإِحْسَانِ
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#C7B8BA] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Step into an era of deep spiritual devotion, refined Arabic linguistics, and melodic Tarteel. Guided by verified Hafiz-e-Quran scholars with 12+ years of pedagogical excellence, for children, youth, and adults worldwide.
              </p>

              {/* Multilingual Highlight Badge */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[#F7CA8B] bg-[rgba(230,166,86,0.08)] border border-[rgba(230,166,86,0.2)] px-4 py-2 rounded-xl">
                <Globe2 className="w-4 h-4 text-[#E6A656]" />
                <span>Multilingual Tutors Fluent In:</span>
                <span className="font-bold text-white">English</span> •
                <span className="font-bold text-white">Urdu (اردو)</span> •
                <span className="font-bold text-white">Pashto (پښتو)</span> •
                <span className="font-bold text-white">Arabic (العربية)</span>
              </div>

              {/* Hero CTA Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => openTrialModal("Learn Quran Reading Basics")}
                  className="w-full sm:w-auto btn-amber text-sm font-bold px-8 py-4"
                >
                  <Sparkles className="w-4 h-4 text-[#0B070A]" />
                  <span>Book 3-Day Free Trial</span>
                </button>
                <a
                  href="#soundboard"
                  className="w-full sm:w-auto btn-outline text-sm font-semibold px-7 py-4"
                >
                  <Mic className="w-4 h-4 text-[#E6A656]" />
                  <span>Try Makharij Lab</span>
                </a>
              </div>

              {/* Live Statistics Counter */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[rgba(230,166,86,0.15)] text-center lg:text-left">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    10,000+
                  </div>
                  <div className="text-xs text-[#C7B8BA]">Students Taught</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F7CA8B]">
                    12+ Years
                  </div>
                  <div className="text-xs text-[#C7B8BA]">Teaching Legacy</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    100%
                  </div>
                  <div className="text-xs text-[#C7B8BA]">Certified Huffaz</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Artwork Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Floating Badge Top */}
                <div className="absolute -top-4 -left-4 z-20 bg-[#160E14]/95 border border-[rgba(230,166,86,0.35)] shadow-xl rounded-2xl p-3 flex items-center gap-3 backdrop-blur-md animate-float">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(230,166,86,0.15)] flex items-center justify-center text-[#E6A656]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Classical Sanad Track</div>
                    <div className="text-[11px] text-[#F7CA8B]">Authentic Qira&apos;at Chains</div>
                  </div>
                </div>

                {/* Floating Badge Bottom */}
                <div className="absolute -bottom-4 -right-4 z-20 bg-[#160E14]/95 border border-[rgba(194,94,62,0.4)] shadow-xl rounded-2xl p-3 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(194,94,62,0.2)] flex items-center justify-center text-[#C25E3E]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Female Scholars Available</div>
                    <div className="text-[11px] text-[#C7B8BA]">For Sisters & Young Girls</div>
                  </div>
                </div>

                {/* Main 3D Artwork Image */}
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-2 border-[rgba(230,166,86,0.3)] shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                  <Image
                    src="/images/hero_andalus.webp"
                    alt="Holy Quran at Alhambra Andalusian Court"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B070A] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE MAKHARIJ SOUNDBOARD ================= */}
      <div id="soundboard">
        <MakharijSoundboard />
      </div>

      {/* ================= ABOUT & FOUNDER / REAL TEACHER SECTION ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Teacher Honored Card */}
            <div className="lg:col-span-5 text-center">
              <div className="relative inline-block mx-auto max-w-sm rounded-3xl p-3 bg-gradient-to-b from-[#2A1826] via-[#160E14] to-[#0B070A] border-2 border-[rgba(230,166,86,0.35)] shadow-[0_20px_45px_rgba(0,0,0,0.8)]">
                <div className="relative h-96 w-72 sm:w-80 rounded-2xl overflow-hidden bg-[#160E14]">
                  <Image
                    src="/images/Gemini_Generated_Image_idszlaidszlaidsz.webp"
                    alt="Hafiz M. Ali - Founder & Senior Quran Tutor"
                    fill
                    sizes="(max-width: 640px) 288px, 320px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-4 p-3 bg-[#0B070A]/90 rounded-xl border border-[rgba(230,166,86,0.2)]">
                  <h4 className="font-serif text-xl font-bold text-[#F7CA8B]">
                    Hafiz M. Ali
                  </h4>
                  <p className="text-xs text-[#C7B8BA] mt-0.5">
                    Founder & Master Quran Scholar • 12+ Years Teaching Legacy
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-[#E6A656]">
                    <span>Fluent in English • Urdu • Pashto • Arabic</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Story & 4 Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="section-tag">
                <GraduationCap className="w-4 h-4 text-[#E6A656]" />
                <span>Andalusian Adab & Pedagogy</span>
              </div>

              <h2 className="andalus-heading text-3xl sm:text-4xl font-bold">
                Sacred Knowledge Taught with Patience & Honor
              </h2>

              <p className="text-base text-[#C7B8BA] leading-relaxed">
                At <strong className="text-[#F7CA8B]">Islamic Session</strong>, we emulate the classical tradition of Cordoba and Granada, where Quranic instruction was synonymous with spiritual refinement, linguistic clarity, and boundless patience.
              </p>

              <p className="text-sm text-[#C7B8BA]/90 leading-relaxed">
                Over 12 years and across 10,000+ students worldwide, our certified Huffaz instructors ensure every learner develops a personal, heartfelt attachment to the Divine Words of Allah SWT.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#160E14] border border-[rgba(230,166,86,0.18)] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(230,166,86,0.15)] flex items-center justify-center text-[#E6A656] shrink-0">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-white">Tajweed Purity</h5>
                    <p className="text-xs text-[#C7B8BA] mt-1">Meticulous Makharij corrections preserving authentic prophetic recitation.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#160E14] border border-[rgba(230,166,86,0.18)] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(194,94,62,0.2)] flex items-center justify-center text-[#C25E3E] shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-white">Compassionate Care</h5>
                    <p className="text-xs text-[#C7B8BA] mt-1">Gentle 1-on-1 sessions where children and adults flourish without anxiety.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#160E14] border border-[rgba(230,166,86,0.18)] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(230,166,86,0.15)] flex items-center justify-center text-[#E6A656] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-white">Verified Huffaz</h5>
                    <p className="text-xs text-[#C7B8BA] mt-1">Instructors hold formal certifications in authentic Quranic recitation.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#160E14] border border-[rgba(230,166,86,0.18)] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(37,211,102,0.15)] flex items-center justify-center text-[#25D366] shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-white">Global Timezones</h5>
                    <p className="text-xs text-[#C7B8BA] mt-1">Tailored schedules seamlessly serving USA, UK, Canada & Europe.</p>
                  </div>
                </div>
              </div>

              {/* Teaching Platforms Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#160E14] border border-[rgba(230,166,86,0.22)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5 text-center sm:text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F7CA8B]">
                    1-on-1 Teaching Platforms
                  </div>
                  <div className="text-xs text-[#C7B8BA]">
                    Conducted live on your device of choice
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0B070A] border border-[rgba(230,166,86,0.2)] text-xs font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2D8CFF]" />
                    Zoom
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0B070A] border border-[rgba(230,166,86,0.2)] text-xs font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6264A7]" />
                    Microsoft Teams
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0B070A] border border-[rgba(230,166,86,0.2)] text-xs font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    WhatsApp
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F7CA8B] hover:text-white transition-colors"
                >
                  <span>Learn more about our methodology and Sanad</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES SHOWCASE ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="section-tag">
              <GraduationCap className="w-4 h-4 text-[#E6A656]" />
              <span>Comprehensive Curriculum</span>
            </div>
            <h2 className="andalus-heading text-3xl sm:text-4xl font-bold">
              Our Elite Quranic Courses
            </h2>
            <p className="text-sm sm:text-base text-[#C7B8BA]">
              Curated pathways from beginner Noorani Qaida to full Quran memorization with classical Ijazah.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { key: "all", label: "All Courses (8)" },
                { key: "youth", label: "Children & Youth" },
                { key: "tajweed", label: "Tajweed & Qirat" },
                { key: "hifz", label: "Hifz & Tafsir" },
                { key: "arabic", label: "Arabic & Islamic Adab" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === tab.key
                      ? "bg-gradient-to-r from-[#E6A656] to-[#D89547] text-[#0B070A] font-bold shadow-md"
                      : "bg-[#160E14] text-[#C7B8BA] border border-[rgba(230,166,86,0.2)] hover:border-[#E6A656] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/courses"
              className="btn-outline text-sm font-bold px-8 py-3.5 inline-flex items-center gap-2"
            >
              <span>Explore All 8 Detailed Curriculums</span>
              <ArrowRight className="w-4 h-4 text-[#E6A656]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TUITION & SIBLING CALCULATOR ================= */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TuitionCalculator />
        </div>
      </section>

      {/* ================= REVIEWS & TESTIMONIALS ================= */}
      <ReviewsSection />

      {/* ================= CONVERTING TRIAL CTA BANNER ================= */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#21141E] via-[#2D1826] to-[#1C121A] border-2 border-[rgba(230,166,86,0.35)] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
            <div className="arabic-bismillah text-lg sm:text-xl text-[#F7CA8B]">
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </div>

            <h2 className="andalus-heading text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
              Begin Your Sacred Quranic Journey Today
            </h2>

            <p className="text-sm sm:text-base text-[#C7B8BA] max-w-2xl mx-auto leading-relaxed">
              Experience 3 days of live one-on-one classes with an authorized Hafiz tutor. Zero payment required, no long-term commitments, and 100% satisfaction guaranteed.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openTrialModal("General Quran Evaluation")}
                className="w-full sm:w-auto btn-amber text-sm font-bold px-8 py-4"
              >
                <Sparkles className="w-4 h-4 text-[#0B070A]" />
                <span>Book 3-Day Free Trial</span>
              </button>

              <a
                href="https://wa.me/923160250208?text=As-salamu%20alaykum!%20I%20would%20like%20to%20inquire%20about%20a%20free%20trial%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-colors shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat with Tutor on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
