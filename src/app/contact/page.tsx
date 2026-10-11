import React from "react";
import { Metadata } from "next";
import {
  Headset,
  Mail,
  Clock,
  Globe2,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact Us & Global Student Support",
  description:
    "Get in touch with Islamic Session via WhatsApp or email. Multilingual consultations in English, Urdu, Pashto, and Arabic available 24/7.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20 pt-8">
      {/* ================= HERO HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="section-tag mx-auto">
          <Headset className="w-4 h-4 text-[#E6A656]" />
          <span>24/7 Quran Advisory Team</span>
        </div>
        <h1 className="andalus-heading text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          We Are Here to Assist Your Quranic Journey
        </h1>
        <p className="text-base sm:text-lg text-[#C7B8BA] max-w-2xl mx-auto leading-relaxed">
          Whether you need advice on your child&apos;s level, scheduling across timezones, or requesting a female instructor, our team responds promptly with utmost sincerity.
        </p>
      </section>

      {/* ================= CONTACT TILES & FORM ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Tile */}
            <a
              href="https://wa.me/923160250208?text=As-salamu%20alaykum!%20I%20am%20interested%20in%20online%20Quran%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="andalus-card p-6 flex items-start gap-4 group transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[rgba(37,211,102,0.15)] flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#F7CA8B] transition-colors">
                  Official WhatsApp (Fastest)
                </h4>
                <p className="text-xs text-[#C7B8BA]">
                  +92 316 0250208 / 03160250208
                </p>
                <div className="text-xs text-[#25D366] font-bold flex items-center gap-1 pt-1">
                  <span>Instant 24/7 live response &rarr;</span>
                </div>
              </div>
            </a>

            {/* Email Tile */}
            <a
              href="mailto:quranfolderequran@gmail.com"
              className="andalus-card p-6 flex items-start gap-4 group transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[rgba(230,166,86,0.15)] flex items-center justify-center text-[#E6A656] group-hover:bg-[#E6A656] group-hover:text-[#0B070A] transition-colors shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#F7CA8B] transition-colors">
                  Direct Email Inbox
                </h4>
                <p className="text-xs text-[#C7B8BA]">
                  quranfolderequran@gmail.com
                </p>
                <div className="text-xs text-[#F7CA8B] font-bold flex items-center gap-1 pt-1">
                  <span>Guaranteed response within 4–6 hours &rarr;</span>
                </div>
              </div>
            </a>

            {/* Global Timezones Tile */}
            <div className="andalus-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[rgba(230,166,86,0.15)] flex items-center justify-center text-[#E6A656] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-white">
                  24/7 Global Timezone Support
                </h4>
                <p className="text-xs text-[#C7B8BA] leading-relaxed">
                  Serving families seamlessly across the United States, United Kingdom, Canada, Australia, Europe, and the Middle East.
                </p>
              </div>
            </div>

            {/* Multilingual Support Card */}
            <div className="andalus-card p-6 flex items-start gap-4 border-[rgba(230,166,86,0.3)] bg-gradient-to-br from-[#1C121A] to-[#160E14]">
              <div className="w-12 h-12 rounded-2xl bg-[rgba(230,166,86,0.2)] flex items-center justify-center text-[#E6A656] shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif text-lg font-bold text-[#F7CA8B]">
                  Multilingual Consultations
                </h4>
                <p className="text-xs text-[#C7B8BA] leading-relaxed">
                  Our coordinators communicate fluently in <strong className="text-white">English</strong>, <strong className="text-white">Urdu (اردو)</strong>, <strong className="text-white">Pashto (پښتو)</strong>, and <strong className="text-white">Arabic (العربية)</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
