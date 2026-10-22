"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import {
  ChevronRight,
  Search,
  Plus,
  Minus,
  Mail,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";

export interface FaqItem {
  topic: string;
  q: string;
  a: string;
}

const TOPICS = [
  "All",
  "Getting started",
  "Account",
  "Premium and billing",
  "Content and languages",
  "Offline",
  "Report a mistake",
] as const;

type TopicType = (typeof TOPICS)[number];

export const helpFaqs: FaqItem[] = [
  {
    topic: "Getting started",
    q: "Which countries and tests does oohwheels cover?",
    a: "oohwheels covers 65 regions across 10 countries: the United Kingdom, India, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Ireland and Canada. You pick the place where you will sit your test and the whole course follows that licensing authority.",
  },
  {
    topic: "Premium and billing",
    q: "Is oohwheels really free?",
    a: "Yes. The free plan includes the full learning path, practice and one mock test every week. It is supported by ads on hub screens and after lessons, never during questions, tests or scenes.",
  },
  {
    topic: "Premium and billing",
    q: "What do I get with Premium?",
    a: "Premium is $3.99 a month. It removes ads everywhere, gives you unlimited hearts, every mock test whenever you like, the full video library with offline downloads, and advanced progress analytics.",
  },
  {
    topic: "Content and languages",
    q: "Can I learn in my own language?",
    a: "Yes. Lessons, questions, narration and captions are available in English, Arabic, Hindi, Malayalam, Tamil, Telugu, Urdu and French, with more on the way.",
  },
  {
    topic: "Report a mistake",
    q: "How do you keep the questions accurate?",
    a: "Every question set is tied to a licensing authority and carries a last-updated date. If anything looks out of date, tap the report button on the question and we will review it.",
  },
  {
    topic: "Offline",
    q: "Does it work without internet?",
    a: "Offline learning is part of Premium. Download lessons, scenes and mock tests while you are on Wi-Fi, then study anywhere. Your progress syncs when you are back online.",
  },
  {
    topic: "Getting started",
    q: "How do I choose my test?",
    a: "At sign-up you choose your country and, where rules differ, your state, emirate or province. You can change it any time from your profile.",
  },
  {
    topic: "Account",
    q: "How do I delete my account and data?",
    a: "Open your profile, then Account, and choose Delete account. You can also download a copy of your data from the same screen.",
  },
  {
    topic: "Account",
    q: "Can I use one account on two phones?",
    a: "Yes. Sign in on any device and your path, streak and readiness score follow you.",
  },
  {
    topic: "Premium and billing",
    q: "How do I cancel Premium?",
    a: "Premium is billed through the App Store or Google Play, so you cancel in your store subscription settings. You keep Premium until the end of the period you paid for.",
  },
  {
    topic: "Premium and billing",
    q: "How do I restore a purchase?",
    a: "Open your profile, tap Restore purchases, and sign in with the same store account you used to subscribe.",
  },
  {
    topic: "Premium and billing",
    q: "What happens when Premium ends?",
    a: "You move back to the free plan with ads. Your progress, streak and saved questions stay, but offline downloads are removed.",
  },
  {
    topic: "Premium and billing",
    q: "Which currency will I be charged in?",
    a: "The price is $3.99 a month. Local currency is shown where the store allows it, and the store sets the final amount.",
  },
  {
    topic: "Offline",
    q: "How much space do downloads need?",
    a: "You choose what to download, one unit at a time, so you stay in control of storage on your phone.",
  },
  {
    topic: "Report a mistake",
    q: "I think a question is wrong. What do I do?",
    a: "Tap the flag on the question and pick a reason, or use the contact form and choose Report a wrong question.",
  },
  {
    topic: "Content and languages",
    q: "Are the animated scenes in my language?",
    a: "Yes. Switch the narration and captions on any scene to the language you prefer.",
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<TopicType>("All");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (questionText: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionText]: !prev[questionText],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return helpFaqs.filter((item) => {
      const matchesTopic =
        selectedTopic === "All" || item.topic === selectedTopic;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.q.toLowerCase().includes(q) ||
        item.a.toLowerCase().includes(q) ||
        item.topic.toLowerCase().includes(q);
      return matchesTopic && matchesSearch;
    });
  }, [searchQuery, selectedTopic]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero Banner */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "rgb(234, 248, 214)" }}
        >
          <Reveal className="ow-wrap">
            <nav
              aria-label="Breadcrumb"
              className="ow-muted mb-6 flex flex-wrap items-center gap-1"
            >
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <span className="flex items-center gap-1">
                <ChevronRight size={14} />
                <span>Help</span>
              </span>
            </nav>

            <span className="ow-label">Help</span>
            <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
              Questions, answered.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">
              Search the help centre or pick a topic.
            </p>
          </Reveal>
        </section>

        {/* Main Section */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap grid gap-10 lg:grid-cols-[1.8fr_1fr]">
            {/* Left Column: Search, Topics, FAQs */}
            <div>
              {/* Search Bar */}
              <div className="relative max-w-xl">
                <Search
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#55665D]"
                />
                <input
                  className="ow-input !pl-12"
                  type="search"
                  placeholder="Search help"
                  aria-label="Search help"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter Chips */}
              <div className="my-6 flex flex-wrap gap-2.5">
                {TOPICS.map((topic) => {
                  const isSelected = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      aria-pressed={isSelected}
                      onClick={() => setSelectedTopic(topic)}
                      className="ow-chip min-h-[44px] cursor-pointer transition-all"
                      style={
                        isSelected
                          ? {
                              background: "rgb(88, 204, 2)",
                              borderColor: "#3F9400",
                              boxShadow: "0 3px 0 #3F9400",
                              color: "#12261A",
                            }
                          : {
                              background: "#FFFFFF",
                              color: "#12261A",
                            }
                      }
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>

              {/* FAQ Accordion List */}
              <div className="space-y-3">
                {filteredFaqs.length === 0 ? (
                  <div className="ow-card p-8 text-center">
                    <p className="text-lg font-bold text-[#12261A]">
                      No questions found matching your search.
                    </p>
                    <p className="ow-muted mt-2">
                      Try searching with different keywords or switch back to
                      &ldquo;All&rdquo;.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedTopic("All");
                      }}
                      className="ow-btn ow-outline mt-5"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  filteredFaqs.map((faq) => {
                    const isOpen = Boolean(openQuestions[faq.q]);
                    return (
                      <div key={faq.q} className="ow-card ow-lift">
                        <h3 className="!text-[20px] font-[Fredoka] font-semibold text-[#12261A]">
                          <button
                            onClick={() => toggleQuestion(faq.q)}
                            className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-[Fredoka] text-[20px] font-semibold text-[#12261A]"
                            aria-expanded={isOpen}
                          >
                            <span>{faq.q}</span>
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
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 text-[16px] leading-relaxed text-[#2B3A33]">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Right Aside Column */}
            <aside>
              <div className="ow-card sticky top-24 p-7">
                <div className="ow-tile bg-[#E1F4FE]">
                  <Mail size={26} strokeWidth={2.4} color="#12261A" />
                </div>
                <h2 className="mt-4 text-[26px] font-[Fredoka] font-bold text-[#12261A]">
                  Still stuck?
                </h2>
                <p className="mt-2 text-[#2B3A33]">
                  Send us a message and we will get back to you.
                </p>
                <Link className="ow-btn ow-green mt-5 w-full" href="/contact">
                  Contact us
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA Section Before Footer */}
        <section className="bg-[#58CC02] py-20 text-center">
          <div className="ow-wrap flex flex-col items-center">
            <WhizzyMascot size={160} mood="cheer" className="ow-bob" />
            <h2 className="ow-h2 mt-4 font-[Fredoka] font-bold text-[#12261A]">
              Ready to pass first time?
            </h2>
            <p className="ow-lead mt-4 max-w-xl !text-[#12261A]">
              oohwheels is launching soon on iOS and Android. Start free and be
              test-ready sooner.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-ink"
                >
                  <Smartphone size={20} strokeWidth={2.5} />
                  Get it on iPhone
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-white"
                >
                  <Smartphone size={20} strokeWidth={2.5} />
                  Get it on Android
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
