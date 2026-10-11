import type { Metadata } from "next";
import { Playfair_Display, Outfit, Amiri, Scheherazade_New } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FreeTrialModal from "@/components/FreeTrialModal";
import JsonLd from "@/components/JsonLd";
import { ModalProvider } from "@/context/ModalContext";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["arabic", "latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quranfolder.com"),
  title: {
    default: "Islamic Session | Al-Andalus Alhambra Royal Quran Academy",
    template: "%s | Islamic Session",
  },
  description:
    "Reviving the classical elegance of sacred Quran recitation. 1-on-1 online classes with certified Hafiz tutors worldwide in English, Urdu, Pashto, and Arabic. 3-day free trial.",
  keywords: [
    "Islamic Session",
    "Quran Folder",
    "Learn Quran Online",
    "Quran Academy",
    "Online Quran Classes for Kids",
    "Tajweed Classes",
    "Quran Memorization Hifz",
    "Arabic Language Online",
    "Female Quran Teacher",
    "Quran Tutor in Urdu",
    "Quran Tutor in Pashto",
    "Noorani Qaida Online",
  ],
  authors: [{ name: "Islamic Session" }],
  openGraph: {
    title: "Islamic Session | Al-Andalus Alhambra Royal Quran Academy",
    description:
      "Reviving the classical elegance of sacred Quran recitation. One-on-one live classes with certified Hafiz tutors worldwide.",
    url: "https://quranfolder.com",
    siteName: "Islamic Session",
    images: [
      {
        url: "/images/hero_andalus.jpg",
        width: 1200,
        height: 630,
        alt: "Islamic Session - Classical Quran Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Session | Online Quran Academy",
    description:
      "1-on-1 online classes with certified Hafiz tutors worldwide in English, Urdu, Pashto, and Arabic.",
    images: ["/images/hero_andalus.jpg"],
  },
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Islamic Session",
  "url": "https://quranfolder.com",
  "logo": "https://quranfolder.com/images/logo.png",
  "description": "International online Quran academy teaching Tajweed, Hifz, Tafsir, and Arabic with certified Huffaz.",
  "telephone": "+923160250208",
  "email": "quranfolderequran@gmail.com",
  "knowsLanguage": ["English", "Urdu", "Pashto", "Arabic"],
  "sameAs": [
    "https://wa.me/923160250208"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${playfair.variable} ${amiri.variable} ${scheherazade.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#0B070A] text-[#FAF6F0] antialiased selection:bg-[#E6A656] selection:text-[#0B070A] relative">
        <div className="bg-ambient-layer" aria-hidden="true" />
        <JsonLd data={orgSchema} />
        <ModalProvider>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <FreeTrialModal />
        </ModalProvider>
      </body>
    </html>
  );
}
