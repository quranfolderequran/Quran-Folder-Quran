"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    course: "General Inquiry",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Bot detected
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to submit inquiry. Please contact us on WhatsApp.");
      }
    } catch {
      setError("Network error occurred. Please try reaching us directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppFollowupLink = () => {
    const text = encodeURIComponent(
      `As-salamu alaykum!\n\nI just submitted an inquiry on the Islamic Session website:\n• Name: ${formData.firstName} ${formData.lastName}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Subject: ${formData.subject}\n• Course: ${formData.course}\n• Message: ${formData.message}`
    );
    return `https://wa.me/923160250208?text=${text}`;
  };

  if (submitted) {
    return (
      <div className="andalus-card p-8 sm:p-12 text-center space-y-5">
        <div className="w-16 h-16 mx-auto rounded-full bg-[rgba(37,211,102,0.15)] flex items-center justify-center text-[#25D366]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-[#C7B8BA] max-w-md mx-auto">
          JazakAllah Khair for reaching out. Our academic advisory team will respond to your email within 4 to 6 hours.
        </p>
        <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppFollowupLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-colors shadow-lg"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Follow Up on WhatsApp</span>
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                subject: "",
                course: "General Inquiry",
                message: "",
                honeypot: "",
              });
            }}
            className="btn-outline px-6 py-3 text-sm"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="andalus-card p-6 sm:p-10">
      <h3 className="font-serif text-2xl font-bold text-white mb-2">
        Send Us an Inquiry
      </h3>
      <p className="text-sm text-[#C7B8BA] mb-6">
        Fill out your details below and our coordinator will respond promptly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
              WhatsApp / Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Class timings for my children"
              className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
              Course of Interest
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6A656]"
            >
              <option value="General Inquiry">General Inquiry / Consultation</option>
              <option value="Learn Quran Reading Basics">Learn Quran Reading Basics</option>
              <option value="Online Quran Classes for Kids">Online Quran Classes for Kids</option>
              <option value="Recitation with Tajweed">Recitation with Tajweed</option>
              <option value="Quran Memorization (Hifz)">Quran Memorization (Hifz)</option>
              <option value="Learn Tafsir Al Quran">Learn Tafsir Al Quran</option>
              <option value="Learn Islam Online">Learn Islam Online</option>
              <option value="Learn Arabic Language">Learn Arabic Language</option>
              <option value="Learn Qirat Mastery">Learn Qirat Mastery</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
            Your Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about student age, current recitation level, preferred days, or specific tutor requests..."
            className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
          />
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-amber py-3.5 text-sm font-bold tracking-wide"
        >
          {loading ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
