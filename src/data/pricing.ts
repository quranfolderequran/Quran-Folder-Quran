export type Currency = "USD" | "GBP" | "EUR" | "SAR" | "AED";

export interface CurrencyOption {
  code: Currency;
  label: string;
  symbol: string;
  name: string;
}

export const supportedCurrencies: CurrencyOption[] = [
  { code: "USD", symbol: "$", label: "USD ($) — Americas & Global", name: "US Dollar" },
  { code: "GBP", symbol: "£", label: "GBP (£) — United Kingdom", name: "British Pound" },
  { code: "EUR", symbol: "€", label: "EUR (€) — Europe", name: "Euro" },
  { code: "SAR", symbol: "SAR ", label: "SAR (SAR) — Saudi Arabia", name: "Saudi Riyal" },
  { code: "AED", symbol: "AED ", label: "AED (AED) — UAE Dirham", name: "UAE Dirham" },
];

export interface PricingPlan {
  id: string;
  category: "weekdays" | "weekends";
  days: string;
  usdPrice: number;
  gbpPrice: number;
  eurPrice: number;
  sarPrice: number;
  aedPrice: number;
  duration: string;
  lessonsPerMonth: number;
  popular?: boolean;
  bestValue?: boolean;
  features: string[];
}

export function getPlanPrice(plan: PricingPlan, currency: Currency): number {
  switch (currency) {
    case "USD":
      return plan.usdPrice;
    case "GBP":
      return plan.gbpPrice;
    case "EUR":
      return plan.eurPrice;
    case "SAR":
      return plan.sarPrice;
    case "AED":
      return plan.aedPrice;
    default:
      return plan.usdPrice;
  }
}

export function getCurrencySymbol(currency: Currency): string {
  switch (currency) {
    case "USD":
      return "$";
    case "GBP":
      return "£";
    case "EUR":
      return "€";
    case "SAR":
      return "SAR ";
    case "AED":
      return "AED ";
    default:
      return "$";
  }
}

export function formatPrice(price: number, currency: Currency): string {
  switch (currency) {
    case "USD":
      return `$${price}`;
    case "GBP":
      return `£${price}`;
    case "EUR":
      return `€${price}`;
    case "SAR":
      return `SAR ${price}`;
    case "AED":
      return `AED ${price}`;
    default:
      return `$${price}`;
  }
}

export const weekdayPlans: PricingPlan[] = [
  {
    id: "w-2days",
    category: "weekdays",
    days: "2 Days / Per Week",
    usdPrice: 35,
    gbpPrice: 25,
    eurPrice: 31,
    sarPrice: 131,
    aedPrice: 128,
    duration: "30 Minutes Each Lesson",
    lessonsPerMonth: 8,
    features: [
      "8 Live one-on-one sessions per month",
      "Flexible weekday schedules",
      "Certified Hafiz / Scholar tutor",
      "Monthly progress evaluation",
      "Free learning materials included"
    ]
  },
  {
    id: "w-3days",
    category: "weekdays",
    days: "3 Days / Per Week",
    usdPrice: 40,
    gbpPrice: 30,
    eurPrice: 35,
    sarPrice: 150,
    aedPrice: 146,
    duration: "30 Minutes Each Lesson",
    lessonsPerMonth: 12,
    popular: true,
    features: [
      "12 Live one-on-one sessions per month",
      "Balanced weekly routine",
      "Tajweed & Noorani Qaida guidance",
      "Regular homework & parent review",
      "24/7 tutor support via WhatsApp"
    ]
  },
  {
    id: "w-4days",
    category: "weekdays",
    days: "4 Days / Per Week",
    usdPrice: 46,
    gbpPrice: 35,
    eurPrice: 41,
    sarPrice: 172,
    aedPrice: 168,
    duration: "30 Minutes Each Lesson",
    lessonsPerMonth: 16,
    features: [
      "16 Live one-on-one sessions per month",
      "Rapid progress for kids and adults",
      "Daily recitation revision",
      "Comprehensive Islamic Studies add-on",
      "Dedicated coordinator support"
    ]
  },
  {
    id: "w-5days",
    category: "weekdays",
    days: "5 Days / Per Week",
    usdPrice: 52,
    gbpPrice: 39,
    eurPrice: 46,
    sarPrice: 195,
    aedPrice: 190,
    duration: "30 Minutes Each Lesson",
    lessonsPerMonth: 20,
    bestValue: true,
    features: [
      "20 Live one-on-one sessions per month",
      "Daily immersion in Quranic learning",
      "Fast-track Hifz / Tajweed progression",
      "Free Tajweed audio recordings",
      "Certificate of completion"
    ]
  }
];

export const weekendPlans: PricingPlan[] = [
  {
    id: "we-standard",
    category: "weekends",
    days: "2 Days / Week (Sat & Sun)",
    usdPrice: 23,
    gbpPrice: 19,
    eurPrice: 20,
    sarPrice: 86,
    aedPrice: 84,
    duration: "30 Minutes Each Lesson",
    lessonsPerMonth: 8,
    features: [
      "8 Weekend live lessons per month",
      "Saturday & Sunday convenient timing",
      "Great for school children & busy workers",
      "One-on-one personalized attention",
      "Free 3-Day Trial included"
    ]
  },
  {
    id: "we-extended",
    category: "weekends",
    days: "2 Days / Week (Sat & Sun)",
    usdPrice: 35,
    gbpPrice: 24,
    eurPrice: 31,
    sarPrice: 131,
    aedPrice: 128,
    duration: "45 Minutes Each Lesson",
    lessonsPerMonth: 8,
    popular: true,
    features: [
      "8 Extended 45-minute live lessons",
      "More recitation & revision time",
      "In-depth Tajweed rule correction",
      "Dual focus: Quran + Islamic Studies",
      "Free 3-Day Trial included"
    ]
  }
];

export const paymentMethods = [
  { name: "Payoneer", description: "Convenient global transfers, credit/debit card, or Payoneer balance", icon: "CreditCard" },
  { name: "Western Union", description: "Quick worldwide cash pickup or direct-to-bank international transfer", icon: "Globe" },
  { name: "Bank Transfer", description: "Direct wire transfer & local IBAN account deposit", icon: "Landmark" },
  { name: "Remitly", description: "Fast, low-cost international remittance directly into bank account", icon: "Send" }
];
