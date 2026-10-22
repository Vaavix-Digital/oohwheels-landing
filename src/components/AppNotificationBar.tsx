"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Star } from "lucide-react";
import { WhizzyMascot } from "./WhizzyMascot";

export const AppNotificationBar: React.FC = () => {
  const pathname = usePathname();
  const [isDismissed, setIsDismissed] = useState(false);
  const [storeUrl, setStoreUrl] = useState("https://play.google.com/store");
  const [storeName, setStoreName] = useState("Google Play");

  // Restore banner on next page navigation
  useEffect(() => {
    setIsDismissed(false);
  }, [pathname]);

  // If dismissed on current page, re-show after 60 seconds
  useEffect(() => {
    if (!isDismissed) return;
    const timer = setTimeout(() => {
      setIsDismissed(false);
    }, 60000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  useEffect(() => {
    // Clear legacy sessionStorage dismissal
    try {
      sessionStorage.removeItem("ow_app_banner_dismissed");
      document.documentElement.classList.remove("ow-banner-dismissed");
    } catch {
      // ignore
    }

    // Detect exact platform
    const ua = navigator.userAgent || navigator.vendor || "";
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /android/i.test(ua);
    const isMac = /Macintosh|Mac OS X/i.test(ua);

    if (isAndroid) {
      setStoreUrl("https://play.google.com/store");
      setStoreName("Google Play");
    } else if (isIOS || isMac) {
      setStoreUrl("https://www.apple.com/app-store/");
      setStoreName("App Store");
    } else {
      setStoreUrl("https://play.google.com/store");
      setStoreName("Google Play");
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
  };

  const handleGetClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    const ua = navigator.userAgent || navigator.vendor || "";
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /android/i.test(ua);
    const isMac = /Macintosh|Mac OS X/i.test(ua);

    const targetUrl =
      isAndroid
        ? "https://play.google.com/store"
        : isIOS || isMac
        ? "https://www.apple.com/app-store/"
        : "https://play.google.com/store";

    window.open(targetUrl, "_blank", "noopener,noreferrer");
    e.preventDefault();
  };

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      aria-label="App download banner"
      className="ow-app-banner relative z-50 border-b border-[#DCECC8] bg-gradient-to-r from-[#F2F8EA] via-[#F8FCF2] to-[#EEF7E2] py-2 sm:py-2.5 transition-all shadow-[0_1px_3px_rgba(18,38,26,0.03)]"
    >
      <div className="ow-wrap flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Dismiss button + App Icon + Details */}
        <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3.5">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Dismiss app banner"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#6E7E74] transition-all hover:bg-black/5 hover:text-[#12261A] active:scale-90"
          >
            <X className="h-4 w-4 stroke-[2.4]" />
          </button>

          {/* Squircle App Icon */}
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[14px] bg-[#1F2D24] shadow-[0_2px_8px_rgba(18,38,26,0.15)] ring-2 ring-[#58CC02]/20 sm:h-12 sm:w-12">
            <WhizzyMascot size={34} mood="none" />
          </div>

          {/* App Info */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="truncate font-[Fredoka] text-[14px] font-bold tracking-tight text-[#12261A] sm:text-[15px]">
                oohwheels app
              </span>
              <span className="hidden rounded-full border border-[#BCE49E] bg-[#E3F5CE] px-2 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wider text-[#2E6B00] shadow-[0_1px_0_#B5DC96] sm:inline-block">
                Free
              </span>
            </div>

            <p className="mt-0.5 truncate text-[11.5px] font-semibold leading-tight text-[#55665D] sm:text-[12.5px]">
              Plan & track lessons, practice road signs & pass your test!
            </p>

            <div className="mt-0.5 flex items-center gap-1.5 leading-none text-[11px]">
              <div className="flex items-center text-[#FF9600]" aria-label="5 stars out of 5">
                <Star className="h-2.5 w-2.5 fill-[#FF9600] stroke-[#FF9600]" />
                <Star className="h-2.5 w-2.5 fill-[#FF9600] stroke-[#FF9600]" />
                <Star className="h-2.5 w-2.5 fill-[#FF9600] stroke-[#FF9600]" />
                <Star className="h-2.5 w-2.5 fill-[#FF9600] stroke-[#FF9600]" />
                <Star className="h-2.5 w-2.5 fill-[#FF9600] stroke-[#FF9600]" />
              </div>
              <span className="font-bold text-[#6E7E74] text-[11px]">(4,920)</span>
            </div>
          </div>
        </div>

        {/* Right: Proper styled GET pill button */}
        <div className="shrink-0 pl-1">
          <a
            href={storeUrl}
            onClick={handleGetClick}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get oohwheels on ${storeName}`}
            className="inline-flex min-w-[68px] sm:min-w-[78px] items-center justify-center rounded-full bg-[#58CC02] px-4 py-1.5 sm:px-5 sm:py-2 text-center font-[Nunito] text-[13px] sm:text-[14px] font-black uppercase tracking-wider text-white shadow-[0_3px_0_#3F9400] transition-all hover:bg-[#4EBA02] hover:shadow-[0_4px_0_#3F9400] active:translate-y-0.5 active:shadow-[0_1px_0_#3F9400] leading-none"
          >
            GET
          </a>
        </div>
      </div>
    </aside>
  );
};
