"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { Course } from "@/data/courses";
import { useModal } from "@/context/ModalContext";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { openTrialModal } = useModal();

  return (
    <div className="andalus-card flex flex-col h-full overflow-hidden group">
      {/* Thumbnail */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#160E14]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160E14] via-transparent to-black/40" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0B070A]/85 text-[#F7CA8B] border border-[rgba(230,166,86,0.3)] shadow-md backdrop-blur-sm">
            {course.categoryLabel}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#C25E3E]/90 text-white shadow-md">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#E6A656] mb-1.5 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F7CA8B] transition-colors leading-snug">
            {course.title}
          </h3>

          <p className="text-xs text-[#F7CA8B]/80 font-serif italic mt-0.5 line-clamp-1">
            {course.arabicTitle}
          </p>

          <p className="text-sm text-[#C7B8BA] mt-2.5 line-clamp-3 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[rgba(230,166,86,0.15)] flex flex-col sm:flex-row items-center gap-2.5">
          <Link
            href={`/courses/${course.slug}`}
            className="w-full sm:flex-1 py-2.5 px-4 rounded-full text-xs font-semibold text-[#FAF6F0] bg-[rgba(230,166,86,0.08)] hover:bg-[rgba(230,166,86,0.18)] hover:text-[#F7CA8B] border border-[rgba(230,166,86,0.25)] flex items-center justify-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => openTrialModal(course.title)}
            className="w-full sm:w-auto btn-amber py-2 px-4 text-xs font-bold whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0B070A]" />
            <span>Free Trial</span>
          </button>
        </div>
      </div>
    </div>
  );
}
