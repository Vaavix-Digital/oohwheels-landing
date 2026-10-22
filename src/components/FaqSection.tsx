"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Which countries and tests does oohwheels cover?",
    answer:
      "oohwheels covers 65 regions across 10 countries: the United Kingdom, India, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Ireland and Canada. You pick the place where you will sit your test and the whole course follows that licensing authority.",
  },
  {
    question: "Is oohwheels really free?",
    answer:
      "Yes! You can complete the entire core learning path, practice all question categories, and take weekly mock tests completely free with ad support. Ads only appear on hub menus, never during questions, tests, or animated scenes.",
  },
  {
    question: "What do I get with Premium?",
    answer:
      "Premium unlocks unlimited hearts, all mock tests on-demand, an ad-free experience, offline downloads, and deep diagnostic analytics to fix weak spots quickly without interruptions.",
  },
  {
    question: "Can I learn in my own language?",
    answer:
      "Absolutely. You can learn in English, Hindi, Arabic, Urdu, French, Spanish, Malayalam, Punjabi, Bengali, and more with native voiceovers and synchronized captions side-by-side with official road terms.",
  },
  {
    question: "How accurate are the test questions?",
    answer:
      "Our question bank is actively audited and mapped directly against each official licensing authority's official syllabus and highway codes (including DVSA, RTA Dubai, Parivahan RTO, and RSA).",
  },
  {
    question: "Does oohwheels work offline without mobile data?",
    answer:
      "Yes! With offline mode enabled, you can download entire question categories and video scenes to your phone so you can practice on the underground, trains, or flights.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-t border-[#E1EAD8]">
      <div className="ow-wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D5E6C8] bg-white px-4 py-1.5 shadow-[0_2px_0_#D5E6C8]">
              <span className="font-[Fredoka] text-xs font-bold tracking-wider text-[#347802] uppercase sm:text-sm">
                FAQ
              </span>
            </div>

            <h2 className="mt-5 font-[Fredoka] text-3xl font-extrabold tracking-tight text-[#12261A] sm:text-4xl md:text-5xl">
              Questions, <br />
              answered.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#324B3C] font-medium leading-relaxed">
              Have something else on your mind? Our support team and learning
              guides are always ready to help.
            </p>

            <div className="mt-8">
              <Link
                href="/help"
                className="ow-btn ow-white !text-sm !py-3 !px-6 font-[Fredoka] font-bold"
              >
                More help
              </Link>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border-2 border-[#E1EAD8] bg-white transition-all shadow-[0_2px_0_#E1EAD8] overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-[Fredoka] text-lg font-bold text-[#12261A] pr-4">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F7EE] text-[#12261A] font-bold">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#446050] font-medium leading-relaxed border-t border-[#F0F5EB] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
