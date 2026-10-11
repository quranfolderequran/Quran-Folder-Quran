"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useModal } from "@/context/ModalContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openTrialModal } = useModal();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Fee Structure", href: "/fee" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B070A]/95 backdrop-blur-md border-b border-[rgba(230,166,86,0.2)] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-[#0B070A]/80 backdrop-blur-sm border-b border-[rgba(230,166,86,0.12)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Islamic Session Logo"
                width={180}
                height={46}
                className="h-11 w-auto object-contain max-h-[46px]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive(link.href)
                      ? "text-[#F7CA8B] bg-[rgba(230,166,86,0.12)] border border-[rgba(230,166,86,0.3)] shadow-[0_0_12px_rgba(230,166,86,0.15)]"
                      : "text-[#FAF6F0]/80 hover:text-[#F7CA8B] hover:bg-[rgba(230,166,86,0.06)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => openTrialModal("General Quran Evaluation")}
                className="hidden sm:inline-flex btn-amber text-xs md:text-sm font-bold tracking-wide"
              >
                <Sparkles className="w-4 h-4 text-[#0B070A]" />
                <span>Book Free Trial</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl text-[#F7CA8B] hover:bg-[rgba(230,166,86,0.1)] transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-[85%] max-w-[340px] h-full bg-[#160E14] border-l border-[rgba(230,166,86,0.25)] shadow-[-10px_0_40px_rgba(0,0,0,0.9)] z-50 p-6 flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[rgba(230,166,86,0.15)]">
            <Image
              src="/images/logo.png"
              alt="Islamic Session"
              width={150}
              height={38}
              className="h-9 w-auto object-contain max-h-[38px]"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-[#C7B8BA] hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive(link.href)
                    ? "text-[#F7CA8B] bg-[rgba(230,166,86,0.15)] border border-[rgba(230,166,86,0.3)]"
                    : "text-[#FAF6F0] hover:text-[#F7CA8B] hover:bg-[rgba(230,166,86,0.06)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="pt-6 border-t border-[rgba(230,166,86,0.15)] flex flex-col gap-3">
          <button
            onClick={() => {
              setIsOpen(false);
              openTrialModal("General Quran Evaluation");
            }}
            className="w-full btn-amber text-sm font-bold"
          >
            <Sparkles className="w-4 h-4 text-[#0B070A]" />
            <span>Book 3-Day Free Trial</span>
          </button>

          <a
            href="https://wa.me/923160250208?text=As-salamu%20alaykum!%20I%20would%20like%20to%20learn%20more%20about%20Quran%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-colors shadow-lg"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
