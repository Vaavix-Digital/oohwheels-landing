"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Plus, Minus, CircleHelp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  topic: string;
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    topic: "The app",
    q: "How do the animated scenes work?",
    a: "Each scene is a short top-down animation of a real driving situation, like a junction or roundabout. You can pause, replay, slow down and switch the narration and captions to your language. Scenes also appear inside questions, so you can watch the rule happen before you answer.",
  },
  {
    topic: "The app",
    q: "What is a readiness score?",
    a: "Your readiness score combines your mock test results and practice performance into one number. When it is consistently high, you are likely ready for the real test. Each week you get a three-step plan to raise it.",
  },
  {
    topic: "The app",
    q: "How do streaks and leagues work?",
    a: "Practise every day to keep your streak alive. You earn XP for every correct answer, and your weekly total places you in a league with other learners. It is a friendly nudge to keep going.",
  },
  {
    topic: "The app",
    q: "Can I use oohwheels on more than one device?",
    a: "Yes. Sign in on any phone and your path, streak and readiness score follow you. Your progress syncs automatically when you are online.",
  },
  {
    topic: "The driving test",
    q: "How many mock tests can I take?",
    a: "Free members get one full mock test every week. Premium members can take as many as they like, whenever they like.",
  },
  {
    topic: "The driving test",
    q: "Do the mock tests match my real test?",
    a: "Yes. Each mock test follows the format, question count, time limit and pass mark of the licensing authority you chose at sign-up.",
  },
  {
    topic: "The driving test",
    q: "How accurate are the questions?",
    a: "Every question set is tied to a licensing authority and shows a last-updated date. If anything looks out of date, tap the flag on the question to report it and we will review it.",
  },
  {
    topic: "The driving test",
    q: "Does passing mock tests guarantee I pass the real test?",
    a: "No. oohwheels is a study aid. A strong readiness score means you are well prepared, but always confirm current rules with your local authority and prepare for your practical test too.",
  },
  {
    topic: "Features",
    q: "Does it work offline?",
    a: "Offline learning is part of Premium. Download units, scenes and mock tests on Wi-Fi, then study anywhere without a signal. Your progress syncs when you are back online.",
  },
  {
    topic: "Features",
    q: "Which languages are available?",
    a: "Lessons, questions, narration and captions are available in English, Arabic, Hindi, Malayalam, Tamil, Telugu, Urdu and French, with more on the way.",
  },
  {
    topic: "Features",
    q: "What is the difference between free and Premium?",
    a: "Free includes the full learning path, practice and one mock test a week, with ads on hub screens and after lessons. Premium removes all ads, gives unlimited hearts and mock tests, the full video library, offline downloads and advanced analytics for $3.99 a month.",
  },
  {
    topic: "Features",
    q: "Which countries are covered?",
    a: "Ten markets and 65 regions: the United Kingdom, India, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Ireland and Canada, with more on the way.",
  },
];

const categories = ["All", "The app", "The driving test", "Features"];

export const FaqClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null); // All closed by default as in base44

  const filteredFaqs = faqs.filter(
    (item) => selectedCategory === "All" || item.topic === selectedCategory
  );

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <main id="main">
      {/* Breadcrumb & Hero */}
      <section
        className="pb-14 pt-10 md:pb-20"
        style={{ background: "rgb(234, 248, 214)" }}
      >
        <div className="ow-wrap" style={{ opacity: 1, transform: "none" }}>
          <nav
            aria-label="Breadcrumb"
            className="ow-muted mb-6 flex flex-wrap items-center gap-1"
          >
            <Link className="hover:underline" href="/">
              Home
            </Link>
            <span className="flex items-center gap-1">
              <ChevronRight size={14} />
              <span>FAQ</span>
            </span>
          </nav>
          <span className="ow-label">Frequently asked</span>
          <h1 className="ow-h1s max-w-3xl">
            Questions about the app and the test.
          </h1>
          <p className="ow-lead mt-4 max-w-2xl">
            Everything you might want to know before you start, from animated
            scenes to mock tests.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="ow-sec !pt-12">
        <div className="ow-wrap grid gap-10 lg:grid-cols-[1.8fr_1fr]">
          {/* FAQ List */}
          <div>
            {/* Filter Chips */}
            <div className="mb-6 flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setOpenIndex(null);
                    }}
                    className="ow-chip !px-4 !py-2 !text-sm cursor-pointer transition select-none"
                    style={
                      isActive
                        ? {
                            background: "rgb(88, 204, 2)",
                            borderColor: "#3F9400",
                            boxShadow: "0 3px 0 #3F9400",
                            color: "#12261A",
                          }
                        : {
                            background: "#FFFFFF",
                            borderColor: "#CFE8B0",
                            boxShadow: "0 3px 0 #CFE8B0",
                            color: "#12261A",
                          }
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Accordion Items */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={faq.q} className="ow-card ow-lift">
                    <h3 className="!text-[20px]">
                      <button
                        onClick={() => toggleAccordion(idx)}
                        className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-[Fredoka] font-bold text-[#12261A] cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        {faq.q}
                        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#EAF8D6] transition-transform">
                          {isOpen ? (
                            <Minus size={18} strokeWidth={3} />
                          ) : (
                            <Plus size={18} strokeWidth={3} />
                          )}
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 leading-relaxed text-[#2B3A33]">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside>
            <div className="ow-card sticky top-24 p-7">
              <div className="ow-tile bg-[#EAF8D6]">
                <CircleHelp size={26} strokeWidth={2.4} />
              </div>
              <h2 className="mt-4 text-[24px]">Still have a question?</h2>
              <p className="mt-2 text-[#2B3A33]">
                Browse our support help centre or send us a message.
              </p>
              <Link
                className="ow-btn ow-outline mt-5 w-full"
                href="/help"
              >
                Help centre
              </Link>
              <Link
                className="ow-btn ow-green mt-3 w-full"
                href="/contact"
              >
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
