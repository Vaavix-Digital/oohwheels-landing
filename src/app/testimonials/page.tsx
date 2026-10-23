"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import {
  ChevronRight,
  Star,
  Quote,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    name: "Aisha K.",
    country: "UAE",
    rating: 5,
    quote:
      "I failed twice before. oohwheels broke everything into tiny lessons and I passed on my third try with confidence.",
    passed: "Passed in Dubai",
  },
  {
    name: "Rahul M.",
    country: "India",
    rating: 5,
    quote:
      "Ten minutes on the bus each morning. The mock tests felt exactly like the real thing.",
    passed: "Passed in Bengaluru",
  },
  {
    name: "Liam O.",
    country: "Ireland",
    rating: 5,
    quote:
      "The animated scenes finally made roundabouts click for me. Wish I had found it sooner.",
    passed: "Passed in Cork",
  },
  {
    name: "Fatima S.",
    country: "Saudi Arabia",
    rating: 5,
    quote:
      "Studying in Arabic made all the difference. Everything was clear and easy to follow.",
    passed: "Passed in Riyadh",
  },
  {
    name: "Priya N.",
    country: "India",
    rating: 4,
    quote:
      "The weak-spot trainer kept bringing back the signs I kept forgetting until they stuck.",
    passed: "Passed in Chennai",
  },
  {
    name: "James W.",
    country: "UK",
    rating: 5,
    quote:
      "The readiness score told me exactly when I was ready. No more guessing.",
    passed: "Passed in Manchester",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "#FFF5CC" }}
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
                <span>Reviews</span>
              </span>
            </nav>

            <span className="ow-label">Customer reviews</span>
            <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
              Learners who passed with oohwheels.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">
              Real stories from people who turned a stressful test into a
              confident pass.
            </p>
          </div>
        </section>

        {/* Stats banner */}
        <section className="bg-[#EAF8D6] py-12">
          <div className="ow-wrap">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["92%", "Pass first time"],
                ["1M+", "Learners"],
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

        {/* Reviews Grid */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap">
            <div className="grid gap-6 lg:grid-cols-2">
              {reviews.map((r, idx) => (
                <Reveal key={r.name} delay={(idx % 2) * 0.1}>
                  <div className="ow-card ow-lift h-full p-7">
                  <Quote size={32} className="text-[#58CC02]" fill="#58CC02" />
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        color="#FFC800"
                        fill="#FFC800"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-lg font-semibold text-[#12261A]">
                    {r.quote}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#EAF8D6] font-[Fredoka] text-lg font-bold text-[#12261A]">
                      {r.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-bold text-[#12261A]">
                        {r.name}
                      </span>
                      <span className="text-sm text-[#55665D]">
                        {r.passed} · {r.country}
                      </span>
                    </span>
                  </div>
                </div>
              </Reveal>
              ))}
            </div>
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
