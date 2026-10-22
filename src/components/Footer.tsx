import React from "react";
import Link from "next/link";
import { WhizzyMascot } from "./WhizzyMascot";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12261A] pb-10 pt-16 overflow-hidden">
      <div className="ow-wrap">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <WhizzyMascot size={40} mood="none" />
              <span className="font-[Fredoka] text-[28px] font-bold text-white">
                oohwheels
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[#C9D6CE]">
              Driving theory test prep for 65 regions, in your language, made to
              be fun.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-[Fredoka] text-lg !text-white">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/countries"
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/help"
                >
                  Help centre
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-[Fredoka] text-lg !text-white">Explore</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/about-us"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/testimonials"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/success-stories"
                >
                  Success stories
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/test-tips"
                >
                  Test tips
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/app-guide"
                >
                  App guide
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-[Fredoka] text-lg !text-white">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/privacy"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1.5 font-semibold text-[#C9D6CE] hover:text-[#58CC02]"
                  href="/terms"
                >
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-[#2B3A33] pt-6 text-sm text-[#9FB2A7]">
          oohwheels is an independent study aid. It is not affiliated with or
          endorsed by any driving licensing authority. Always confirm current
          rules with your local authority. © 2026 oohwheels.
        </p>
      </div>
    </footer>
  );
};
