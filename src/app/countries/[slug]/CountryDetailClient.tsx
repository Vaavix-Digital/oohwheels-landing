"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import { Country } from "@/data/countries";
import {
  ChevronRight,
  FileQuestion,
  Clock,
  Award,
  Plus,
  Minus,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  country: Country;
}

export default function CountryDetailClient({ country }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(0);

  const faqs = [
    {
      q: `Which rules does oohwheels use for ${country.name}?`,
      a: `Your ${country.name} course follows the licensing authority you choose at sign-up. Each question set is tied to that authority and shows a last-updated date.`,
    },
    {
      q: "Are the test details confirmed?",
      a: "Question counts, time limits and pass marks are placeholders until the source for each authority is verified. Always confirm current rules with your local authority.",
    },
    {
      q: "Is it free to try?",
      a: "Yes. Start free with the full learning path and one mock test a week, or upgrade to Premium for $3.99 a month.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero Banner */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: country.tone.bg }}
        >
          <div className="ow-wrap">
            <nav
              aria-label="Breadcrumb"
              className="ow-muted mb-6 flex flex-wrap items-center gap-1"
            >
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <span className="flex items-center gap-1">
                <ChevronRight size={14} />
                <Link className="hover:underline" href="/countries">
                  Countries
                </Link>
              </span>
              <span className="flex items-center gap-1">
                <ChevronRight size={14} />
                <span>{country.name}</span>
              </span>
            </nav>

            <span className="ow-label">
              {country.code} · {country.sub}
            </span>
            <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
              Driving theory test in {country.name}
            </h1>
            <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">
              Lessons, animated scenes and mock tests built around your licensing
              authority.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className="ow-badge !h-14 !w-14 font-[Fredoka] text-xl font-bold"
                style={{
                  background: country.tone.bg,
                  border: `2px solid ${country.tone.edge}`,
                }}
              >
                {country.code}
              </span>
              {country.authorities.map((auth) => (
                <span key={auth} className="ow-chip">
                  {auth}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* What the test looks like */}
        <section className="ow-sec !pb-8">
          <div className="ow-wrap">
            <Reveal>
              <h2 className="ow-h2f mb-8 font-[Fredoka] font-bold text-[#12261A]">
                What the test looks like
              </h2>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-3">
              <Reveal delay={0}>
                <div className="ow-card ow-lift h-full p-6">
                  <div className="ow-tile bg-[#EAF8D6]">
                    <FileQuestion size={26} strokeWidth={2.4} color="#12261A" />
                  </div>
                  <div className="mt-4 text-sm font-extrabold uppercase tracking-wider text-[#55665D]">
                    Number of questions
                  </div>
                  <div className="mt-1 font-[Fredoka] text-xl font-semibold text-[#12261A]">
                    [CONFIRM PER AUTHORITY]
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="ow-card ow-lift h-full p-6">
                  <div className="ow-tile bg-[#EAF8D6]">
                    <Clock size={26} strokeWidth={2.4} color="#12261A" />
                  </div>
                  <div className="mt-4 text-sm font-extrabold uppercase tracking-wider text-[#55665D]">
                    Time limit
                  </div>
                  <div className="mt-1 font-[Fredoka] text-xl font-semibold text-[#12261A]">
                    [CONFIRM PER AUTHORITY]
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="ow-card ow-lift h-full p-6">
                  <div className="ow-tile bg-[#EAF8D6]">
                    <Award size={26} strokeWidth={2.4} color="#12261A" />
                  </div>
                  <div className="mt-4 text-sm font-extrabold uppercase tracking-wider text-[#55665D]">
                    Pass mark
                  </div>
                  <div className="mt-1 font-[Fredoka] text-xl font-semibold text-[#12261A]">
                    [CONFIRM PER AUTHORITY]
                  </div>
                </div>
              </Reveal>

              <p className="ow-muted sm:col-span-3">
                Numbers for {country.name} are placeholders until the question
                source for each authority is verified.
              </p>
            </div>
          </div>
        </section>

        {/* Topics you will cover */}
        <section className="py-12">
          <div className="ow-wrap">
            <Reveal>
              <h2 className="ow-h2f mb-6 font-[Fredoka] font-bold text-[#12261A]">
                Topics you will cover
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {country.topics.map((topic, idx) => (
                  <span
                    key={topic}
                    className="ow-chip"
                    style={
                      {
                        "--edge": ["#CFE8B0", "#B5E1F7", "#F0D870"][idx % 3],
                      } as React.CSSProperties
                    }
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Practise like the real thing */}
        <section className="bg-[#E1F4FE] py-16">
          <div className="ow-wrap grid items-center gap-10 lg:grid-cols-2">
            <Reveal x={-40} y={0}>
              <h2 className="ow-h2f font-[Fredoka] font-bold text-[#12261A]">
                Practise like the real thing
              </h2>
              <p className="ow-lead mt-4 text-[#2B3A33]">
                Bite-size questions with instant feedback and a short reason for
                every answer.
              </p>
            </Reveal>

            <Reveal x={40} y={0} delay={0.1}>
              <div className="ow-card max-w-md p-6">
                <div className="text-sm font-extrabold uppercase tracking-wider text-[#2E6B00]">
                  Sample question
                </div>
                <p className="mt-2 font-[Fredoka] text-xl font-semibold text-[#12261A]">
                  What does a blue circular sign with an arrow mean?
                </p>
                <div className="mt-4 space-y-2">
                  {[
                    "An order: follow the arrow",
                    "A warning of a hazard",
                    "A speed limit",
                  ].map((opt, i) => {
                    const isSelected = selectedAnswer === i;
                    const isCorrect = i === 0;
                    return (
                      <button
                        key={opt}
                        onClick={() => setSelectedAnswer(i)}
                        className="w-full text-left rounded-2xl border-2 px-4 py-2.5 font-bold transition-all"
                        style={
                          isSelected
                            ? isCorrect
                              ? {
                                  borderColor: "#58CC02",
                                  background: "#EAF8D6",
                                  color: "#12261A",
                                }
                              : {
                                  borderColor: "#FF4B4B",
                                  background: "#FFE3E3",
                                  color: "#12261A",
                                }
                            : {
                                borderColor: "#E3EDD6",
                                color: "#12261A",
                              }
                        }
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Languages available */}
        <section className="py-16">
          <div className="ow-wrap">
            <Reveal>
              <h2 className="ow-h2f mb-6 font-[Fredoka] font-bold text-[#12261A]">
                Languages available
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {country.languages.map((lang) => (
                  <span key={lang} className="ow-chip !text-lg">
                    {lang}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pricing banner callout */}
        <section className="py-4">
          <div className="ow-wrap">
            <Reveal>
              <div
                className="flex flex-col items-start justify-between gap-5 rounded-[28px] bg-[#FFF5CC] p-8 sm:flex-row sm:items-center"
                style={{ boxShadow: "0 5px 0 #F0D870" }}
              >
                <div>
                  <h2 className="text-[28px] font-[Fredoka] font-bold text-[#12261A]">
                    Free with ads, or Premium at $3.99 a month.
                  </h2>
                  <p className="mt-1 text-[#2B3A33]">
                    Cancel anytime. Billed through the App Store or Google Play.
                  </p>
                </div>
                <Link href="/pricing" className="ow-btn ow-yellow flex-none">
                  See pricing
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Country FAQ */}
        <section className="ow-sec">
          <div className="ow-wrap max-w-3xl">
            <Reveal>
              <h2 className="ow-h2f mb-6 font-[Fredoka] font-bold text-[#12261A]">
                {country.name} FAQ
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={faq.q} className="ow-card ow-lift">
                      <h3 className="!text-[20px] font-[Fredoka] font-semibold text-[#12261A]">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-[Fredoka] text-[20px] font-semibold text-[#12261A]"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#EAF8D6]">
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
                })}
              </div>
            </Reveal>

            {country.consent && (
              <p className="ow-muted mt-6">
                Ad personalisation in this region needs your explicit consent.
                See our{" "}
                <Link href="/privacy" className="underline">
                  privacy policy
                </Link>
                .
              </p>
            )}

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="ow-btn ow-green mt-8"
            >
              Start free
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#58CC02] py-20 text-center">
          <div className="ow-wrap flex flex-col items-center">
            <Reveal delay={0.1} className="flex justify-center">
              <WhizzyMascot size={160} mood="cheer" className="ow-bob" />
            </Reveal>
            <Reveal>
              <h2 className="ow-h2 mt-4 font-[Fredoka] font-bold text-[#12261A]">
                Ready to pass first time?
              </h2>
              <p className="ow-lead mt-4 max-w-xl !text-[#12261A]">
                oohwheels is launching soon on iOS and Android. Start free and be
                test-ready sooner.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex justify-center w-full">
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
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
