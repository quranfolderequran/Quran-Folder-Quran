import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  Award,
  Globe2,
  Users,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "About Us & Pedagogical Heritage",
  description:
    "Learn about Islamic Session, our Andalusian educational heritage, founder Hafiz M. Ali, and our multilingual tutors fluent in English, Urdu, Pashto, and Arabic.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 pt-8">
      {/* ================= HERO HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="section-tag mx-auto">
          <Globe2 className="w-4 h-4 text-[#E6A656]" />
          <span>Andalusian Heritage & Pedagogy</span>
        </div>
        <h1 className="andalus-heading text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          Honoring the Classical Tradition of Sacred Quranic Transmission
        </h1>
        <p className="text-base sm:text-lg text-[#C7B8BA] max-w-2xl mx-auto leading-relaxed">
          Inspired by the intellectual and spiritual renaissance of Cordoba and Granada, we bring authentic, patient, and personalized Quran education to Muslim families across the globe.
        </p>
      </section>

      {/* ================= FOUNDER SPOTLIGHT & SANAD ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="andalus-card p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Founder Visual */}
            <div className="lg:col-span-5 text-center">
              <div className="relative inline-block mx-auto rounded-3xl p-3 bg-gradient-to-b from-[#2A1826] via-[#160E14] to-[#0B070A] border-2 border-[rgba(230,166,86,0.35)] shadow-2xl">
                <div className="relative h-96 w-72 sm:w-80 rounded-2xl overflow-hidden bg-[#160E14]">
                  <Image
                    src="/images/Gemini_Generated_Image_idszlaidszlaidsz.webp"
                    alt="Hafiz M. Ali - Senior Instructor & Founder"
                    fill
                    sizes="(max-width: 640px) 288px, 320px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-4 p-3 bg-[#0B070A]/90 rounded-xl border border-[rgba(230,166,86,0.2)]">
                  <h3 className="font-serif text-xl font-bold text-[#F7CA8B]">
                    Hafiz M. Ali
                  </h3>
                  <p className="text-xs text-[#C7B8BA] mt-0.5">
                    Founder & Master Quran Tutor • 12+ Years Teaching Legacy
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Biography & Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(230,166,86,0.1)] border border-[rgba(230,166,86,0.25)] text-[#F7CA8B] text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#E6A656]" />
                <span>Founder Profile & Sanad</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                A Decade of Devotion to the Words of Allah SWT
              </h2>

              <p className="text-sm sm:text-base text-[#C7B8BA] leading-relaxed">
                Hafiz M. Ali established <strong className="text-[#F7CA8B]">Islamic Session</strong> with a single noble purpose: to make authentic Quranic recitation accessible to every Muslim household worldwide without linguistic friction or geographical barriers.
              </p>

              <p className="text-sm sm:text-base text-[#C7B8BA] leading-relaxed">
                Having memorized the Holy Quran at an early age and studied under master reciters, he possesses an unbroken recitation chain (Sanad) traced back to the Messenger of Allah ﷺ. Over the past 12 years, Hafiz M. Ali has personally taught and mentored more than 10,000 children and adult learners in the UK, USA, Canada, Australia, and Europe.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)]">
                  <h4 className="font-serif text-sm font-bold text-[#F7CA8B]">
                    Classical Sanad Track
                  </h4>
                  <p className="text-xs text-[#C7B8BA] mt-1">
                    Licensed in Hafs &apos;an &apos;Asim recitation rules with meticulous emphasis on anatomical Makharij.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)]">
                  <h4 className="font-serif text-sm font-bold text-[#F7CA8B]">
                    Zero-Harshness Pedagogy
                  </h4>
                  <p className="text-xs text-[#C7B8BA] mt-1">
                    A calm, compassionate teaching environment where children feel cherished and inspired.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MULTILINGUAL EXCELLENCE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#21141E] via-[#160E14] to-[#1C121A] border border-[rgba(230,166,86,0.3)] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-tag mx-auto">
              <Globe2 className="w-4 h-4 text-[#E6A656]" />
              <span>Multilingual Capability</span>
            </div>
            <h2 className="andalus-heading text-2xl sm:text-3xl md:text-4xl font-bold">
              Bridging Generations with Multilingual Fluency
            </h2>
            <p className="text-sm sm:text-base text-[#C7B8BA]">
              Our tutors speak <strong className="text-white">English</strong>, <strong className="text-white">Urdu (اردو)</strong>, <strong className="text-white">Pashto (پښتو)</strong>, and <strong className="text-white">Arabic (العربية)</strong> fluently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-2">
              <div className="text-xl font-bold text-[#F7CA8B]">English</div>
              <p className="text-xs text-[#C7B8BA]">
                Clear, native-level instruction for children and teenagers born and raised in Western countries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-2">
              <div className="text-xl font-bold text-[#F7CA8B]">Urdu (اردو)</div>
              <p className="text-xs text-[#C7B8BA]">
                Warm, polite communication allowing parents and elders to discuss child progress effortlessly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-2">
              <div className="text-xl font-bold text-[#F7CA8B]">Pashto (پښتو)</div>
              <p className="text-xs text-[#C7B8BA]">
                Direct native communication for Pashtun families across the diaspora seeking authentic tutors.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-2">
              <div className="text-xl font-bold text-[#F7CA8B]">Arabic (العربية)</div>
              <p className="text-xs text-[#C7B8BA]">
                Classical Fusha phonetics, vocabulary analysis, and direct understanding of the Quranic text.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[rgba(230,166,86,0.06)] border border-[rgba(230,166,86,0.2)] flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm text-[#FAF6F0]">
            <HeartHandshake className="w-8 h-8 text-[#E6A656] shrink-0" />
            <p>
              <strong className="text-[#F7CA8B]">Why this matters for diaspora families:</strong> Western Muslim youth often struggle when teachers cannot explain concepts clearly in English. Meanwhile, immigrant parents often prefer speaking in their mother tongue (Urdu or Pashto). Our polyglot tutors bridge this exact generational gap seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TEACHER VETTING & FEMALE SCHOLARS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="andalus-card p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(230,166,86,0.15)] flex items-center justify-center text-[#E6A656]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Rigorous Tutor Vetting Process
            </h3>
            <p className="text-sm text-[#C7B8BA] leading-relaxed">
              We accept only the top 5% of applicant teachers. Each tutor must pass strict recitation auditions, verification of their memorization and Tajweed credentials, background checks, and pedagogy training on child safety and interactive online instruction.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF6F0] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>100% Certified Huffaz &amp; Islamic Studies Scholars</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Experienced in teaching Western timezones and curricula</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Continuous quality monitoring and student progress audits</span>
              </li>
            </ul>
          </div>

          <div className="andalus-card p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(194,94,62,0.2)] flex items-center justify-center text-[#C25E3E]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Certified Female Tutors for Sisters
            </h3>
            <p className="text-sm text-[#C7B8BA] leading-relaxed">
              We deeply respect the sacred Islamic Adab and modesty of our learners. Adult sisters, teenage girls, and young children can study privately with certified female Huffaz and scholars in a secure and respectful virtual environment.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF6F0] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Dedicated one-on-one sessions with female scholars</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Private audio or video options according to family preference</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Specialized tracks in Tajweed, Hifz, and female Fiqh</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= VIRTUAL CLASSROOM & METHODOLOGY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="andalus-card p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="section-tag mx-auto">
              <BookOpen className="w-4 h-4 text-[#E6A656]" />
              <span>Modern Pedagogy</span>
            </div>
            <h2 className="andalus-heading text-2xl sm:text-3xl font-bold">
              The Virtual Classroom Experience
            </h2>
            <p className="text-sm text-[#C7B8BA]">
              How our one-on-one sessions make Quran learning engaging and effective:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-3">
              <div className="font-serif text-3xl font-extrabold text-[#E6A656]">01</div>
              <h4 className="font-serif text-lg font-bold text-white">Live Screen Markup</h4>
              <p className="text-xs sm:text-sm text-[#C7B8BA] leading-relaxed">
                Tutor and student view the high-definition Mushaf or Qaida simultaneously via Microsoft Teams, Zoom, or WhatsApp, highlighting letters and vowel marks in real-time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-3">
              <div className="font-serif text-3xl font-extrabold text-[#E6A656]">02</div>
              <h4 className="font-serif text-lg font-bold text-white">Micro-Repetition &amp; Adab</h4>
              <p className="text-xs sm:text-sm text-[#C7B8BA] leading-relaxed">
                Prophetic pedagogical repetition ensures that pronunciation errors are fixed gently before turning into ingrained habits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-3">
              <div className="font-serif text-3xl font-extrabold text-[#E6A656]">03</div>
              <h4 className="font-serif text-lg font-bold text-white">Monthly Progress Tracking</h4>
              <p className="text-xs sm:text-sm text-[#C7B8BA] leading-relaxed">
                Parents receive monthly report cards detailing completed Surahs, Tajweed milestones, attendance, and areas of focus.
              </p>
            </div>
          </div>

          {/* Supported Platforms Strip */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-[#FAF6F0]">
            <span className="text-[#C7B8BA]">Virtual Classrooms Conducted Via:</span>
            <span className="px-3 py-1 rounded-full bg-[#160E14] border border-[rgba(230,166,86,0.2)] text-white font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#6264A7]" />
              Microsoft Teams
            </span>
            <span className="px-3 py-1 rounded-full bg-[#160E14] border border-[rgba(230,166,86,0.2)] text-white font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2D8CFF]" />
              Zoom
            </span>
            <span className="px-3 py-1 rounded-full bg-[#160E14] border border-[rgba(230,166,86,0.2)] text-white font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* ================= TRIAL BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-[#21141E] via-[#2A1826] to-[#1C121A] border border-[rgba(230,166,86,0.3)] rounded-3xl p-8 sm:p-12 space-y-5">
          <h3 className="andalus-heading text-2xl sm:text-3xl font-bold">
            Experience Our Teaching Standard for 3 Days Free
          </h3>
          <p className="text-sm text-[#C7B8BA] max-w-xl mx-auto">
            Book your child&apos;s free evaluation session today and observe our gentle, patient instruction firsthand.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="btn-amber text-sm font-bold px-8 py-3.5 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#0B070A]" />
              <span>Explore All Courses</span>
            </Link>
            <a
              href="https://wa.me/923160250208?text=As-salamu%20alaykum!%20I%20would%20like%20to%20learn%20more%20about%20your%20tutors."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-colors shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ask a Question on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
