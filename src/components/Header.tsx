"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhizzyMascot } from "./WhizzyMascot";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/features#how" },
  { label: "Countries", href: "/countries" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/help" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleHash = () => {
      setActiveHash(window.location.hash);
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);

    // Observe #how section on /features to update active nav link on scroll
    const howSection = document.getElementById("how");
    if (howSection && pathname === "/features") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHash("#how");
            } else if (window.scrollY < (howSection.offsetTop - 200)) {
              setActiveHash("");
            }
          });
        },
        { rootMargin: "-100px 0px -50% 0px", threshold: 0.1 }
      );
      observer.observe(howSection);
      return () => {
        observer.disconnect();
        window.removeEventListener("hashchange", handleHash);
      };
    }

    return () => window.removeEventListener("hashchange", handleHash);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const currentBase = pathname === "/" ? "" : pathname;
      const targetBase = path === "/" ? "" : path;

      if (currentBase === targetBase) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
          setActiveHash(`#${hash}`);
        }
      } else {
        setActiveHash(`#${hash}`);
      }
    } else {
      setActiveHash("");
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#E3EDD6] bg-[#FBFDF6]/90 backdrop-blur transition-all">
      <div className="ow-wrap flex h-[72px] items-center justify-between">
        {/* Brand & Mascot */}
        <Link
          className="flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          aria-label="oohwheels home"
          href="/"
          onClick={() => setMobileMenuOpen(false)}
        >
          <WhizzyMascot size={36} />
          <span className="font-[Fredoka] text-[22px] font-bold tracking-tight text-[#12261A] sm:text-[28px]">
            oohwheels
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="ow-navlinks" aria-label="Main">
          {navItems.map((item) => {
            const isFeaturesPage = pathname === "/features";
            const isCountriesPage = pathname === "/countries";
            const isPricingPage = pathname === "/pricing";
            const isHelpPage = pathname === "/help" || pathname === "/faq";
            const isActive =
              (isFeaturesPage && item.href === "/features" && !activeHash) ||
              (isCountriesPage && item.href === "/countries") ||
              (isPricingPage && item.href === "/pricing") ||
              (isHelpPage && (item.href === "/help" || item.href === "/faq")) ||
              (item.href.includes("#") &&
                activeHash &&
                item.href.endsWith(activeHash));

            return (
              <Link
                key={item.label}
                className={`font-bold text-base text-[#12261A] border-b-[3px] py-1 transition-colors ${
                  isActive
                    ? "border-[#58CC02]"
                    : "border-transparent hover:border-[#CFE8B0]"
                }`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            className="ow-btn ow-green !hidden md:!inline-flex"
          >
            Get the app
          </a>
          <button
            className="ow-navburger ow-btn ow-white !min-h-[40px] !w-[40px] !p-0 sm:!min-h-[44px] sm:!w-[44px] !inline-flex md:!hidden !items-center !justify-center"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          className="ow-wrap flex flex-col gap-1 border-t-2 border-[#E3EDD6] pb-5 pt-3 md:hidden animate-in slide-in-from-top-2 duration-200"
          aria-label="Mobile"
        >
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="ow-btn ow-green mb-2 text-center justify-center w-full"
          >
            Get the app
          </a>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-xl px-3 py-3 text-lg font-bold text-[#12261A] hover:bg-[#EAF8D6] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
