"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { PricingPlan, Currency, getPlanPrice, getCurrencySymbol, formatPrice } from "@/data/pricing";
import { useModal } from "@/context/ModalContext";

interface PricingCardProps {
  plan: PricingPlan;
  currency: Currency;
}

export default function PricingCard({ plan, currency }: PricingCardProps) {
  const { openTrialModal } = useModal();
  const price = getPlanPrice(plan, currency);
  const symbol = getCurrencySymbol(currency);

  return (
    <div
      className={`andalus-card relative p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        plan.popular
          ? "border-[#E6A656] shadow-[0_0_35px_rgba(230,166,86,0.25)] ring-1 ring-[#E6A656]/50"
          : ""
      }`}
    >
      {/* Featured Ribbon */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#E6A656] to-[#C25E3E] text-[#0B070A] shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {plan.bestValue && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#D89547] to-[#E6A656] text-[#0B070A] shadow-md">
            Best Value
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-serif text-xl font-bold text-white">
            {plan.days}
          </h3>
          <span className="text-xs text-[#F7CA8B] font-medium">
            {plan.lessonsPerMonth} Lessons/mo
          </span>
        </div>

        <p className="text-xs text-[#C7B8BA] mb-6">{plan.duration}</p>

        {/* Price Display */}
        <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-[rgba(230,166,86,0.15)] whitespace-nowrap">
          {currency === "SAR" || currency === "AED" ? (
            <span className="text-sm sm:text-base font-bold font-sans text-[#F7CA8B] tracking-wider uppercase">
              {currency}
            </span>
          ) : (
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F7CA8B]">
              {symbol}
            </span>
          )}
          <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F7CA8B] tracking-tight">
            {price}
          </span>
          <span className="text-xs text-[#C7B8BA]">/ month</span>
        </div>

        {/* Feature List */}
        <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#FAF6F0]">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[rgba(230,166,86,0.15)] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-[#E6A656]" />
              </div>
              <span className="text-[#C7B8BA]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => openTrialModal(`${plan.days} (${formatPrice(price, currency)}/month)`)}
        className={`w-full py-3 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
          plan.popular
            ? "btn-amber"
            : "btn-outline"
        }`}
      >
        <Sparkles className="w-4 h-4" />
        <span>Book 3-Day Free Trial</span>
      </button>
    </div>
  );
}
