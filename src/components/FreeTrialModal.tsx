"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useModal } from "@/context/ModalContext";

export default function FreeTrialModal() {
  const { isTrialOpen, closeTrialModal, selectedCourse } = useModal();
  const [course, setCourse] = useState(selectedCourse || "Learn Quran Reading Basics");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [learnerType, setLearnerType] = useState("Child (Ages 4-10)");
  const [timing, setTiming] = useState("Flexible");
  const [platform, setPlatform] = useState("Zoom");
  const [honeypot, setHoneypot] = useState(""); // Anti-bot honeypot
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [prevSelectedCourse, setPrevSelectedCourse] = useState(selectedCourse);
  if (selectedCourse !== prevSelectedCourse) {
    setPrevSelectedCourse(selectedCourse);
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeTrialModal();
      }
    };
    if (isTrialOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isTrialOpen, closeTrialModal]);

  if (!isTrialOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Spam bot detected - silently pretend success
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name,
          email,
          phone,
          course,
          subject: `3-Day Free Trial Booking: ${course}`,
          message: `Learner Type: ${learnerType} | Preferred Timing: ${timing} | Platform: ${platform} | Phone/WhatsApp: ${phone}`,
          honeypot,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Submission failed. Please try WhatsApp directly.");
      }
    } catch {
      setError("Network issue. Please book directly via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppBookingLink = () => {
    const text = encodeURIComponent(
      `As-salamu alaykum!\n\nI want to book a 3-Day Free Trial:\n• Course: ${course}\n• Name: ${name || "Prospective Student"}\n• Phone: ${phone || "Not provided"}\n• Learner: ${learnerType}\n• Platform: ${platform}\n• Timing: ${timing}`
    );
    return `https://wa.me/923160250208?text=${text}`;
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    closeTrialModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeTrialModal();
      }}
    >
      <div className="relative w-full max-w-xl max-h-[92dvh] sm:max-h-[90vh] bg-[#160E14] border border-[rgba(230,166,86,0.3)] rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto">
        {/* Sticky Header with Always-Visible Close Button */}
        <div className="sticky top-0 z-30 shrink-0 bg-gradient-to-r from-[#21141E] via-[#2A1826] to-[#21141E] px-4 py-3 sm:px-6 sm:py-4 border-b border-[rgba(230,166,86,0.25)] flex items-center justify-between gap-3 shadow-md backdrop-blur-md">
          <div className="min-w-0 pr-1">
            <div className="arabic-bismillah text-[11px] sm:text-xs text-[#F7CA8B]/90 hidden sm:block mb-0.5">
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </div>
            <h3 id="modal-title" className="font-serif text-lg sm:text-2xl font-bold text-white flex items-center gap-1.5 truncate">
              <span>Book Your 3-Day Free Trial</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#E6A656] shrink-0" />
            </h3>
            <p className="text-[11px] sm:text-xs text-[#C7B8BA] truncate">
              Zero commitment • No credit card required • Certified Hafiz Tutor
            </p>
          </div>
          <button
            type="button"
            onClick={closeTrialModal}
            aria-label="Close booking form"
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0B070A] hover:bg-[rgba(230,166,86,0.25)] border border-[rgba(230,166,86,0.35)] text-[#F7CA8B] hover:text-white flex items-center justify-center transition-all shadow-md active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 overscroll-contain">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[rgba(37,211,102,0.15)] flex items-center justify-center text-[#25D366]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">
                Free Trial Request Received!
              </h4>
              <p className="text-sm text-[#C7B8BA] max-w-md mx-auto">
                JazakAllah Khair! Our academic coordinator will contact you within a few hours to assign your tutor and confirm your scheduled class time.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-full inline-flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Instant Confirmation on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="btn-outline py-3 px-6 text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="user_nickname_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
                  Desired Course
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6A656]"
                >
                  <option value="Learn Quran Reading Basics">Learn Quran Reading Basics (Noorani Qaida)</option>
                  <option value="Online Quran Classes for Kids">Online Quran Classes for Kids</option>
                  <option value="Recitation with Tajweed">Recitation with Tajweed</option>
                  <option value="Quran Memorization (Hifz)">Quran Memorization (Hifz)</option>
                  <option value="Learn Tafsir Al Quran">Learn Tafsir Al Quran</option>
                  <option value="Learn Islam Online">Learn Islam Online (Islamic Studies)</option>
                  <option value="Learn Arabic Language">Learn Arabic Language</option>
                  <option value="Learn Qirat Mastery">Learn Qirat Mastery</option>
                  <option value="General Quran Evaluation">General Quran Evaluation Session</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
                  Student / Parent Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Brother Tariq / Sister Fatima"
                  className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#C7B8BA]/40 focus:outline-none focus:border-[#E6A656]"
                  />
                </div>
              </div>

              {/* Learner Category & Preferred Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
                    Learner Category
                  </label>
                  <select
                    value={learnerType}
                    onChange={(e) => setLearnerType(e.target.value)}
                    className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6A656]"
                  >
                    <option value="Child (Ages 4-10)">Child (Ages 4-10)</option>
                    <option value="Teenager (Ages 11-17)">Teenager (Ages 11-17)</option>
                    <option value="Adult Brother">Adult Brother</option>
                    <option value="Adult Sister (Female Tutor)">Adult Sister (Female Tutor)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
                    Preferred Timing
                  </label>
                  <select
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                    className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6A656]"
                  >
                    <option value="Flexible">Flexible Anytime</option>
                    <option value="Morning">Morning (8am - 12pm)</option>
                    <option value="Afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="Evening">Evening (5pm - 9pm)</option>
                    <option value="Weekends Only">Weekends Only</option>
                  </select>
                </div>
              </div>

              {/* Teaching Platform */}
              <div>
                <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-1.5">
                  Preferred Teaching Platform
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "Zoom", label: "Zoom" },
                    { id: "Microsoft Teams", label: "Teams" },
                    { id: "WhatsApp", label: "WhatsApp" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlatform(p.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        platform === p.id
                          ? "bg-[rgba(230,166,86,0.2)] border-[#E6A656] text-[#F7CA8B] shadow-sm font-bold"
                          : "bg-[#0B070A] border-[rgba(230,166,86,0.2)] text-[#C7B8BA] hover:border-[#E6A656]/50"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                  {error}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 btn-amber py-3.5 text-sm font-bold tracking-wide"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Free Trial Booking</span>
                    </>
                  )}
                </button>
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:w-auto px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={closeTrialModal}
                  className="text-xs text-[#C7B8BA] hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Cancel and close window
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
