"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import {
  ChevronRight,
  Heart,
  Languages,
  ShieldCheck,
  Smile,
  Smartphone,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    t: "Accessible to all",
    d: "Free to start, works on any phone, and built for every budget and background.",
    bg: "#EAF8D6",
  },
  {
    icon: Languages,
    t: "In your language",
    d: "Lessons and questions in eight languages, so nothing gets lost in translation.",
    bg: "#E1F4FE",
  },
  {
    icon: ShieldCheck,
    t: "Accurate and trusted",
    d: "Every question set is tied to a licensing authority and carries a last-updated date.",
    bg: "#FFF5CC",
  },
  {
    icon: Smile,
    t: "Learning should be fun",
    d: "Short lessons, streaks and instant feedback make studying something you look forward to.",
    bg: "#EFE3F8",
  },
];

const team = [
  { name: "Maya R.", role: "Founder & CEO", initials: "MR", bg: "#EAF8D6" },
  { name: "Arjun P.", role: "Head of Content", initials: "AP", bg: "#E1F4FE" },
  { name: "Sara A.", role: "Lead Designer", initials: "SA", bg: "#FFF1B0" },
  { name: "Tom B.", role: "Head of Engineering", initials: "TB", bg: "#FFE3E3" },
];

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "#EAF8D6" }}
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
                <span>About us</span>
              </span>
            </nav>

            <span className="ow-label">About us</span>
            <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
              Making driving education accessible and simple for everyone.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">
              oohwheels started with a simple idea: passing your driving test
              should not depend on your language, your budget or where you live.
            </p>
          </div>
        </section>

        {/* Vision section */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="ow-label">Our vision</span>
              <h2 className="ow-h2f font-[Fredoka] font-bold text-[#12261A]">
                A fair start for every learner driver.
              </h2>
              <p className="ow-lead mt-5 text-[#2B3A33]">
                Rules differ by emirate, province and state, and most study
                materials only exist in one language. We built oohwheels to change
                that: short, game-like lessons, animated scenes and mock tests, in
                your language, for the exact test you will sit, free to start.
              </p>
            </div>
            <div className="flex justify-center">
              <WhizzyMascot size={180} mood="cheer" className="ow-bob" />
            </div>
          </div>
        </section>

        {/* Stats banner */}
        <section className="bg-[#EAF8D6] py-16">
          <div className="ow-wrap">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="text-center">
                  <div
                    className="font-[Fredoka] text-4xl font-bold text-[#58CC02] md:text-5xl"
                    style={{ color: "#58CC02" }}
                  >
                    10
                  </div>
                  <div className="mt-1 text-sm font-extrabold uppercase tracking-wider text-[#55665D]">
                    Countries
                  </div>
                </div>
              </div>

              <div style={{ opacity: 1, transform: "none" }}>
                <div className="text-center">
                  <div
                    className="font-[Fredoka] text-4xl font-bold text-[#58CC02] md:text-5xl"
                    style={{ color: "#58CC02" }}
                  >
                    65
                  </div>
                  <div className="mt-1 text-sm font-extrabold uppercase tracking-wider text-[#55665D]">
                    Regions
                  </div>
                </div>
              </div>

              <div style={{ opacity: 1, transform: "none" }}>
                <div className="text-center">
                  <div
                    className="font-[Fredoka] text-4xl font-bold text-[#58CC02] md:text-5xl"
                    style={{ color: "#58CC02" }}
                  >
                    8
                  </div>
                  <div className="mt-1 text-sm font-extrabold uppercase tracking-wider text-[#55665D]">
                    Languages
                  </div>
                </div>
              </div>

              <div style={{ opacity: 1, transform: "none" }}>
                <div className="text-center">
                  <div
                    className="font-[Fredoka] text-4xl font-bold text-[#58CC02] md:text-5xl"
                    style={{ color: "#58CC02" }}
                  >
                    1M+
                  </div>
                  <div className="mt-1 text-sm font-extrabold uppercase tracking-wider text-[#55665D]">
                    Learners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we believe */}
        <section className="ow-sec">
          <div className="ow-wrap">
            <div className="max-w-3xl">
              <span className="ow-label">What we believe</span>
              <h2 className="ow-h2 font-[Fredoka] font-bold text-[#12261A]">
                Four things we will never compromise on.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.t} className="ow-card ow-lift h-full p-6">
                    <div
                      className="ow-tile"
                      style={{ backgroundColor: v.bg }}
                    >
                      <Icon size={26} strokeWidth={2.4} color="#12261A" />
                    </div>
                    <h3 className="mt-5 text-[20px] font-[Fredoka] font-bold text-[#12261A]">
                      {v.t}
                    </h3>
                    <p className="mt-2 text-[15px] text-[#2B3A33]">{v.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The team */}
        <section className="bg-[#E1F4FE] py-16">
          <div className="ow-wrap">
            <div className="max-w-3xl">
              <span className="ow-label">The team</span>
              <h2 className="ow-h2f font-[Fredoka] font-bold text-[#12261A]">
                A small team that cares about the details.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <div key={m.name} className="ow-card ow-lift p-6 text-center">
                  <div
                    className="mx-auto grid h-20 w-20 place-items-center rounded-full font-[Fredoka] text-2xl font-bold text-[#12261A]"
                    style={{ background: m.bg }}
                  >
                    {m.initials}
                  </div>
                  <h3 className="mt-4 text-[20px] font-[Fredoka] font-bold text-[#12261A]">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wider text-[#55665D]">
                    {m.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
