import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Clock,
  BookOpen,
  CheckCircle2,
  Users,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Globe2,
  Sparkles,
} from "lucide-react";
import { coursesData, getCourseBySlug } from "@/data/courses";
import CourseDetailClientActions from "./CourseDetailClientActions";
import JsonLd from "@/components/JsonLd";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const course = getCourseBySlug(resolvedParams.slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | Islamic Session`,
    description: course.description,
    openGraph: {
      title: `${course.title} | Islamic Session`,
      description: course.description,
      images: [
        {
          url: course.image,
          width: 800,
          height: 600,
          alt: course.title,
        },
      ],
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const resolvedParams = await params;
  const course = getCourseBySlug(resolvedParams.slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = coursesData
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Islamic Session",
      "sameAs": "https://quranfolder.com",
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "duration": course.duration,
    },
  };

  return (
    <div className="space-y-16 pb-20 pt-8">
      <JsonLd data={courseSchema} />

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="andalus-card p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Course Information */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[rgba(230,166,86,0.15)] text-[#F7CA8B] border border-[rgba(230,166,86,0.3)]">
                  {course.categoryLabel}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#C25E3E]/80 text-white">
                  {course.level}
                </span>
              </div>

              <h1 className="andalus-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {course.title}
              </h1>

              <div className="arabic-bismillah text-xl sm:text-2xl text-[#F7CA8B]">
                {course.arabicTitle}
              </div>

              <p className="text-sm sm:text-base text-[#C7B8BA] leading-relaxed">
                {course.subtitle}
              </p>

              {/* Quick Specs */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#FAF6F0]">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)]">
                  <Clock className="w-4 h-4 text-[#E6A656]" />
                  <span><strong>Duration:</strong> {course.duration}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)]">
                  <Users className="w-4 h-4 text-[#E6A656]" />
                  <span><strong>Target:</strong> {course.targetAudience}</span>
                </div>
              </div>

              {/* Multilingual Support Pill */}
              <div className="flex items-center gap-2 text-xs text-[#F7CA8B] pt-1">
                <Globe2 className="w-4 h-4 text-[#E6A656]" />
                <span>Instruction Available In: English • Urdu • Pashto • Arabic</span>
              </div>

              {/* Teaching Platforms Supported */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#FAF6F0] pt-0.5">
                <span className="text-[#C7B8BA]">Live 1-on-1 Via:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0B070A] border border-[rgba(230,166,86,0.2)] text-[11px] text-white">Zoom</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0B070A] border border-[rgba(230,166,86,0.2)] text-[11px] text-white">Microsoft Teams</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0B070A] border border-[rgba(230,166,86,0.2)] text-[11px] text-white">WhatsApp</span>
              </div>

              {/* Special Pricing Notice (e.g. for Learn Qirat Mastery) */}
              {course.pricingNotice && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[rgba(230,166,86,0.14)] via-[rgba(194,94,62,0.12)] to-[rgba(230,166,86,0.06)] border border-[rgba(230,166,86,0.35)] flex items-start gap-3 shadow-md">
                  <div className="w-8 h-8 rounded-xl bg-[#E6A656]/20 border border-[#E6A656]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#F7CA8B]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#F7CA8B] uppercase tracking-wider">
                      Specialized Instruction Notice
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EAD8BF] leading-relaxed">
                      {course.pricingNotice}
                    </p>
                  </div>
                </div>
              )}

              {/* Client CTA Actions (Free Trial Modal + WhatsApp) */}
              <CourseDetailClientActions
                courseTitle={course.title}
                slug={course.slug}
              />
            </div>

            {/* Right Course Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden border-2 border-[rgba(230,166,86,0.3)] shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B070A] via-transparent to-transparent opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED OVERVIEW & FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Description */}
          <div className="lg:col-span-8 space-y-6">
            <div className="andalus-card p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#E6A656]" />
                <span>Course Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-[#C7B8BA] leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* Modules / Curriculum Breakdown */}
            <div className="andalus-card p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Curriculum &amp; Syllabus Modules
                </h3>
                <p className="text-xs sm:text-sm text-[#C7B8BA]">
                  Comprehensive module-by-module breakdown covered in live 1-on-1 sessions:
                </p>
              </div>

              <div className="space-y-4">
                {course.modules.map((module) => (
                  <div
                    key={module.moduleNumber}
                    className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] space-y-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#E6A656] to-[#D89547] text-[#0B070A] font-bold text-xs flex items-center justify-center shrink-0">
                        {module.moduleNumber}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                        {module.title}
                      </h4>
                    </div>

                    <ul className="space-y-1.5 pl-10 text-xs sm:text-sm text-[#C7B8BA]">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#E6A656] mt-0.5">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="andalus-card p-8 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-white">
                What You Will Confidently Master
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0B070A]/70 border border-[rgba(230,166,86,0.15)] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#FAF6F0] leading-snug">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Specific FAQs */}
            <div className="andalus-card p-8 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#E6A656]" />
                <span>Frequently Asked Questions for this Course</span>
              </h3>

              <div className="space-y-3">
                {course.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-1.5"
                  >
                    <h5 className="font-serif text-sm font-bold text-[#F7CA8B]">
                      {faq.question}
                    </h5>
                    <p className="text-xs sm:text-sm text-[#C7B8BA] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Highlights Card */}
            <div className="andalus-card p-6 sm:p-8 space-y-5 sticky top-28">
              <h4 className="font-serif text-lg font-bold text-white pb-3 border-b border-[rgba(230,166,86,0.15)]">
                Course Features &amp; Standards
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-[#FAF6F0]">
                {course.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E6A656] shrink-0 mt-0.5" />
                    <span className="text-[#C7B8BA]">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[rgba(230,166,86,0.15)] space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#25D366]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Female Scholars Available Upon Request</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#F7CA8B]">
                  <Globe2 className="w-4 h-4" />
                  <span>24/7 Global Timezone Scheduling</span>
                </div>
              </div>

              <div className="pt-3">
                {course.pricingNotice && (
                  <div className="mb-3 p-3 rounded-xl bg-[#0B070A] border border-[rgba(230,166,86,0.25)] text-xs text-[#C7B8BA] space-y-1">
                    <span className="font-semibold text-[#F7CA8B] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#E6A656]" />
                      Custom Tuition Track
                    </span>
                    <p className="text-[11px] leading-relaxed">
                      This specialized course is taught by senior certified Qaris and carries custom tuition fees beyond our standard rates.
                    </p>
                  </div>
                )}
                <Link
                  href="/fee"
                  className="w-full btn-outline py-3 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>View Standard Tuition Rates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RELATED COURSES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="font-serif text-2xl font-bold text-white">
          Explore Related Learning Tracks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCourses.map((rel) => (
            <div
              key={rel.id}
              className="andalus-card p-6 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-[11px] font-semibold text-[#F7CA8B] uppercase tracking-wide">
                  {rel.categoryLabel}
                </span>
                <h4 className="font-serif text-lg font-bold text-white mt-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#C7B8BA] mt-2 line-clamp-2">
                  {rel.description}
                </p>
              </div>
              <Link
                href={`/courses/${rel.slug}`}
                className="text-xs font-semibold text-[#F7CA8B] hover:text-white inline-flex items-center gap-1.5 transition-colors pt-2 border-t border-[rgba(230,166,86,0.15)]"
              >
                <span>View Full Curriculum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
