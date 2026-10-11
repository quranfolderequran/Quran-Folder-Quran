"use client";

import React, { useState } from "react";
import {
  Coins,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Sparkles,
  Globe,
} from "lucide-react";
import { weekdayPlans, weekendPlans, Currency, supportedCurrencies } from "@/data/pricing";
import PricingCard from "@/components/PricingCard";
import TuitionCalculator from "@/components/TuitionCalculator";
import { useModal } from "@/context/ModalContext";

export default function FeePage() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [schedule, setSchedule] = useState<"weekdays" | "weekends">("weekdays");
  const { openTrialModal } = useModal();

  const activePlans = schedule === "weekdays" ? weekdayPlans : weekendPlans;

  return (
    <div className="space-y-16 pb-20 pt-8">
      {/* ================= HERO HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="section-tag mx-auto">
          <Coins className="w-4 h-4 text-[#E6A656]" />
          <span>Transparent &amp; Fair Tuition</span>
        </div>
        <h1 className="andalus-heading text-3xl sm:text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          Honest Monthly Tuition with Zero Long-Term Contracts
        </h1>
        <p className="text-base sm:text-lg text-[#C7B8BA] max-w-2xl mx-auto leading-relaxed">
          High-caliber one-on-one Quran instruction shouldn&apos;t be a financial burden. Choose a schedule that suits your family&apos;s routine, switch currency anytime, and test 3 days completely free.
        </p>

        {/* Currency & Schedule Toggles */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Currency Dropdown */}
          <div className="flex items-center gap-2.5 bg-[#160E14] px-4 py-2 rounded-full border border-[rgba(230,166,86,0.3)] shadow-md hover:border-[#E6A656] transition-colors">
            <Globe className="w-4 h-4 text-[#E6A656] shrink-0" />
            <label htmlFor="fee-currency-select" className="text-xs font-bold text-[#F7CA8B] uppercase tracking-wider">
              Currency:
            </label>
            <select
              id="fee-currency-select"
              aria-label="Select Tuition Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-transparent text-xs sm:text-sm font-bold text-white focus:outline-none cursor-pointer pr-1"
            >
              {supportedCurrencies.map((c) => (
                <option key={c.code} value={c.code} className="bg-[#160E14] text-white">
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Schedule Toggle */}
          <div className="bg-[#160E14] p-1.5 rounded-full border border-[rgba(230,166,86,0.25)] flex items-center">
            <button
              onClick={() => setSchedule("weekdays")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                schedule === "weekdays"
                  ? "bg-[rgba(230,166,86,0.18)] text-[#F7CA8B] border border-[rgba(230,166,86,0.4)]"
                  : "text-[#C7B8BA] hover:text-white"
              }`}
            >
              Weekday (Mon - Fri)
            </button>
            <button
              onClick={() => setSchedule("weekends")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                schedule === "weekends"
                  ? "bg-[rgba(230,166,86,0.18)] text-[#F7CA8B] border border-[rgba(230,166,86,0.4)]"
                  : "text-[#C7B8BA] hover:text-white"
              }`}
            >
              Weekend (Sat &amp; Sun)
            </button>
          </div>
        </div>
      </section>

      {/* ================= PRICING CARDS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activePlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} currency={currency} />
          ))}
        </div>
      </section>

      {/* ================= INTERACTIVE TUITION & SIBLING CALCULATOR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TuitionCalculator />
      </section>

      {/* ================= WHAT IS INCLUDED IN EVERY PLAN ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="andalus-card p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="andalus-heading text-2xl sm:text-3xl font-bold">
              Standard Benefits Included in Every Package
            </h2>
            <p className="text-sm text-[#C7B8BA]">
              Regardless of the package you choose, every student receives the same royal standard of education:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-2">
              <div className="flex items-center gap-2 text-[#E6A656] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>1-on-1 Dedicated Attention</span>
              </div>
              <p className="text-xs text-[#C7B8BA]">
                Your tutor teaches exclusively you or your child during the live session with zero distractions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-2">
              <div className="flex items-center gap-2 text-[#E6A656] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Free Digital Materials</span>
              </div>
              <p className="text-xs text-[#C7B8BA]">
                Complimentary digital copies of Noorani Qaida, Tajweed guides, and Mushaf PDF workbooks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-2">
              <div className="flex items-center gap-2 text-[#E6A656] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Monthly Parent Reports</span>
              </div>
              <p className="text-xs text-[#C7B8BA]">
                Structured evaluation cards sent at the end of each month outlining student milestones.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-2">
              <div className="flex items-center gap-2 text-[#E6A656] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Flexible Rescheduling</span>
              </div>
              <p className="text-xs text-[#C7B8BA]">
                Easily reschedule missed classes with 2-4 hours prior notice at no additional fee.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-2">
              <div className="flex items-center gap-2 text-[#E6A656] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Free Tutor Replacement</span>
              </div>
              <p className="text-xs text-[#C7B8BA]">
                Switch instructors anytime without questions if you feel another teaching style fits better.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.18)] space-y-2">
              <div className="flex items-center gap-2 text-[#E6A656] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>3-Day Free Trial</span>
              </div>
              <p className="text-xs text-[#C7B8BA]">
                Always begin with 3 full live trial lessons before making any payment commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PAYMENT GATEWAYS & GUARANTEE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Payment Methods */}
          <div className="andalus-card p-8 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(230,166,86,0.15)] flex items-center justify-center text-[#E6A656]">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Accepted International Payment Gateways
            </h3>
            <p className="text-sm text-[#C7B8BA] leading-relaxed">
              We provide smooth, secure, and encrypted payment options for families across North America, the UK, Europe, Australia, and the Middle East:
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#FAF6F0]">
              <div className="p-3 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF4800]" />
                <span className="font-semibold">Payoneer</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFDD00]" />
                <span className="font-semibold">Western Union</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span className="font-semibold">Bank Transfer</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B070A]/80 border border-[rgba(230,166,86,0.2)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                <span className="font-semibold">Remitly</span>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="andalus-card p-8 space-y-5 bg-gradient-to-br from-[#1C121A] to-[#160E14]">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(37,211,102,0.15)] flex items-center justify-center text-[#25D366]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-sm text-[#C7B8BA] leading-relaxed">
              We stand behind the spiritual and academic caliber of our scholars. If at any time during your first month you feel unsatisfied with your teacher or experience, we will happily assign another scholar immediately or refund your remaining unused lessons.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openTrialModal("General Quran Evaluation")}
                className="btn-amber text-xs sm:text-sm font-bold px-6 py-3"
              >
                <Sparkles className="w-4 h-4 text-[#0B070A]" />
                <span>Claim Your 3-Day Free Trial</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
