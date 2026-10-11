"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, Check, ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { Currency, getCurrencySymbol, supportedCurrencies, formatPrice } from "@/data/pricing";

export default function TuitionCalculator() {
  const [days, setDays] = useState<number>(3);
  const [students, setStudents] = useState<number>(1);
  const [currency, setCurrency] = useState<Currency>("USD");
  const { openTrialModal } = useModal();

  const basePrices: Record<Currency, Record<number, number>> = {
    USD: { 2: 35, 3: 40, 4: 46, 5: 52 },
    GBP: { 2: 25, 3: 30, 4: 35, 5: 39 },
    EUR: { 2: 31, 3: 35, 4: 41, 5: 46 },
    SAR: { 2: 131, 3: 150, 4: 172, 5: 195 },
    AED: { 2: 128, 3: 146, 4: 168, 5: 190 },
  };

  const baseRate = basePrices[currency]?.[days] ?? basePrices.USD[days];
  const symbol = getCurrencySymbol(currency);

  let total = 0;
  let savings = 0;

  if (students >= 3) {
    const fullPrice = baseRate * students;
    total = fullPrice * 0.7; // 30% discount when 3 or more siblings join
    savings = fullPrice * 0.3;
  } else {
    total = baseRate * students;
    savings = 0;
  }

  const finalTotal = Math.round(total);
  const finalSavings = Math.round(savings);

  return (
    <div className="bg-gradient-to-br from-[#1C121A] via-[#160E14] to-[#20131D] border border-[rgba(230,166,86,0.3)] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Configuration Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(230,166,86,0.1)] border border-[rgba(230,166,86,0.25)] text-[#F7CA8B] text-xs font-semibold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#E6A656]" />
              <span>Interactive Estimator</span>
            </div>
            <h3 className="andalus-heading text-2xl sm:text-3xl font-bold">
              Tuition & Family Savings Calculator
            </h3>
            <p className="text-sm text-[#C7B8BA] mt-2">
              Enrolling 3 or more children? Our academy automatically grants a <strong className="text-[#F7CA8B]">30% Sibling Discount</strong> when 3 or more brothers and sisters enroll together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Days per Week */}
            <div>
              <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-2">
                Days / Week
              </label>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6A656]"
              >
                <option value={2}>2 Days / Wk (8 lessons)</option>
                <option value={3}>3 Days / Wk (12 lessons)</option>
                <option value={4}>4 Days / Wk (16 lessons)</option>
                <option value={5}>5 Days / Wk (20 lessons)</option>
              </select>
            </div>

            {/* Students Enrolled */}
            <div>
              <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-2">
                Students
              </label>
              <select
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6A656]"
              >
                <option value={1}>1 Student</option>
                <option value={2}>2 Siblings (Standard Rate)</option>
                <option value={3}>3 Siblings (30% Discount)</option>
                <option value={4}>4 Siblings (30% Discount)</option>
                <option value={5}>5 Siblings (30% Discount)</option>
              </select>
            </div>

            {/* Currency */}
            <div>
              <label className="block text-xs font-bold text-[#F7CA8B] uppercase tracking-wider mb-2">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="w-full bg-[#0B070A] border border-[rgba(230,166,86,0.25)] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6A656]"
              >
                {supportedCurrencies.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#160E14] text-white">
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#C7B8BA]">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#25D366]" />
              <span>30 Min 1-on-1 Sessions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#25D366]" />
              <span>3-Day Free Trial Included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#25D366]" />
              <span>No Long-Term Contracts</span>
            </div>
          </div>
        </div>

        {/* Right: Live Result Display Box */}
        <div className="lg:col-span-5 bg-[#0B070A]/90 border border-[rgba(230,166,86,0.35)] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F7CA8B]">
            Estimated Monthly Tuition
          </span>

          <div className="flex items-baseline justify-center gap-1.5 whitespace-nowrap leading-none">
            {currency === "SAR" || currency === "AED" ? (
              <span className="text-lg sm:text-xl font-bold font-sans text-[#F7CA8B] tracking-wider uppercase mr-1">
                {currency}
              </span>
            ) : (
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                {symbol}
              </span>
            )}
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none">
              {finalTotal}
            </span>
            <span className="text-sm sm:text-base text-[#C7B8BA] font-sans font-normal ml-1">/mo</span>
          </div>

          {students >= 3 ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(37,211,102,0.12)] border border-[#25D366]/30 text-[#25D366] text-xs font-bold">
              <span>Includes 30% Sibling Discount! (Save {formatPrice(finalSavings, currency)}/mo)</span>
            </div>
          ) : students === 2 ? (
            <p className="text-xs text-[#C7B8BA]">Standard family package rate (Enroll 3+ for 30% off!)</p>
          ) : (
            <p className="text-xs text-[#C7B8BA]">Standard single student package rate</p>
          )}

          <button
            onClick={() =>
              openTrialModal(
                `Calculated Custom Plan: ${days} Days/Wk, ${students} Student(s) (${formatPrice(finalTotal, currency)}/mo)`
              )
            }
            className="w-full btn-amber text-xs sm:text-sm font-bold py-3.5"
          >
            <Sparkles className="w-4 h-4 text-[#0B070A]" />
            <span>Lock In Free Trial with this Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
