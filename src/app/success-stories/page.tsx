"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import {
  ChevronRight,
  Trophy,
  Quote,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const stories = [
  {
    name: "Aisha K.",
    country: "Dubai, UAE",
    result: "Passed on third attempt",
    quote:
      "I had failed twice and almost gave up. The short lessons rebuilt my confidence bit by bit.",
    story:
      "Aisha struggled with junction questions and English-language tests. Switching to Arabic narration and working through the junction scenes let her pass with a high score.",
  },
  {
    name: "Rahul M.",
    country: "Bengaluru, India",
    result: "Passed first attempt",
    quote:
      "I only had ten minutes a day on my commute. That was enough.",
    story:
      "A busy software engineer, Rahul used offline downloads on the metro. Mock tests timed to the Karnataka format meant nothing surprised him on test day.",
  },
  {
    name: "Liam O.",
    country: "Cork, Ireland",
    result: "Passed after 6 weeks",
    quote: "Roundabouts finally made sense after the animated scenes.",
    story:
      "Liam was a nervous driver who avoided roundabouts. Watching the scenes replay until the right-of-way rules clicked changed everything for him.",
  },
  {
    name: "Fatima S.",
    country: "Riyadh, Saudi Arabia",
    result: "Passed first attempt",
    quote: "Studying in my own language made all the difference.",
    story:
      "Fatima found English theory materials exhausting. oohwheels in Arabic let her focus on the rules, not the translation, and she passed comfortably.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "#EFE3F8" }}
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
                <span>Success stories</span>
              </span>
            </nav>

            <span className="ow-label">Success stories</span>
            <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
              They passed. So can you.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">
              Real drivers, real journeys, real passes. See how oohwheels fit into
              their lives.
            </p>
          </div>
        </section>

        {/* Stats banner */}
        <section className="bg-[#EAF8D6] py-12">
          <div className="ow-wrap">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["1M+", "Learners"],
                ["92%", "Pass first time"],
                ["4.8★", "App rating"],
                ["10", "Countries"],
              ].map(([val, label], idx) => (
                <Reveal key={label} delay={idx * 0.08}>
                  <div className="text-center">
                    <div
                      className="font-[Fredoka] text-4xl font-bold text-[#58CC02] md:text-5xl"
                      style={{ color: "#58CC02" }}
                    >
                      {val}
                    </div>
                    <div className="mt-1 text-sm font-extrabold uppercase tracking-wider text-[#55665D]">
                      {label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap grid gap-8 lg:grid-cols-2">
            {stories.map((s, idx) => (
              <Reveal key={s.name} delay={(idx % 2) * 0.1}>
                <div className="ow-card ow-lift h-full p-8">
                  <div className="flex items-center gap-3">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[#EFE3F8] font-[Fredoka] text-xl font-bold text-[#12261A]">
                      {s.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-[Fredoka] text-xl font-semibold text-[#12261A]">
                        {s.name}
                      </span>
                      <span className="text-sm text-[#55665D]">{s.country}</span>
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 rounded-full bg-[#FFF5CC] px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#12261A]">
                      <Trophy size={15} color="#D19F00" />
                      {s.result}
                    </span>
                  </div>

                  <Quote size={28} className="mt-5 text-[#8549BA]" fill="#8549BA" />
                  <p className="mt-2 text-lg font-semibold text-[#12261A]">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-[16px] leading-relaxed text-[#2B3A33]">
                    {s.story}
                  </p>
                </div>
              </Reveal>
            ))}
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
            <Reveal delay={0.2} className="mt-8 flex justify-center">
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
