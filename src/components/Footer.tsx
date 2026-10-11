"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, Globe2, ShieldCheck, Heart } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { coursesData } from "@/data/courses";

export default function Footer() {
  return (
    <footer className="bg-[#120B10] border-t border-[rgba(230,166,86,0.18)] pt-16 pb-10 text-[#C7B8BA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Islamic Session Logo"
              width={180}
              height={46}
              className="h-11 w-auto object-contain max-h-[46px]"
            />
            <p className="text-sm leading-relaxed text-[#C7B8BA]/90">
              Reviving the classical elegance of sacred Quran recitation, Tajweed, and prophetic adab inspired by the heritage of Al-Andalus. Personalized 1-on-1 classes for children and adults worldwide.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[#F7CA8B]">
              <Globe2 className="w-4 h-4 text-[#E6A656]" />
              <span>Languages: English • Urdu • Pashto • Arabic</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-[#FAF6F0] text-lg font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E6A656]"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#F7CA8B] transition-colors">
                  Home Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F7CA8B] transition-colors">
                  About Us & Pedagogy
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#F7CA8B] transition-colors">
                  All Quran Courses
                </Link>
              </li>
              <li>
                <Link href="/fee" className="hover:text-[#F7CA8B] transition-colors">
                  Fee Structure & Calculator
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F7CA8B] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F7CA8B] transition-colors">
                  Contact Advisory Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Courses */}
          <div>
            <h4 className="font-serif text-[#FAF6F0] text-lg font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E6A656]"></span>
              Quranic Tracks
            </h4>
            <ul className="space-y-2.5 text-sm">
              {coursesData.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="hover:text-[#F7CA8B] transition-colors line-clamp-1"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 className="font-serif text-[#FAF6F0] text-lg font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E6A656]"></span>
              Direct Inquiries
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="mailto:quranfolderequran@gmail.com"
                  className="flex items-center gap-3 hover:text-[#F7CA8B] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(230,166,86,0.1)] flex items-center justify-center text-[#E6A656] group-hover:bg-[#E6A656] group-hover:text-[#0B070A] transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>quranfolderequran@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923160250208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#F7CA8B] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(37,211,102,0.15)] flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <span>+92 316 0250208 (WhatsApp)</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs text-[#C7B8BA]/80 pt-1">
                <Clock className="w-4 h-4 text-[#E6A656] shrink-0" />
                <span>24/7 Global Timezone Support (USA, UK, Canada, Australia)</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-[#C7B8BA]/80">
                <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Certified Huffaz & Female Scholars Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(230,166,86,0.15)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#C7B8BA]/70">
          <p>© {new Date().getFullYear()} quranfolder.com — All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 text-[#F7CA8B]">
            <span>Taught with Prophetic Adab, Compassion & Sincerity</span>
            <Heart className="w-3.5 h-3.5 text-[#C25E3E] fill-[#C25E3E]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
