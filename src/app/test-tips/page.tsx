import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import {
  ChevronRight,
  Signpost,
  Eye,
  Timer,
  Repeat,
  CalendarDays,
  MapPin,
  X,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road test tips — oohwheels",
  description:
    "Actionable tips and common pitfalls to help you feel prepared and pass your driving theory test.",
};

const tips = [
  {
    icon: Signpost,
    t: "Learn signs by shape and colour",
    d: "The shape and colour tell you the sign's purpose before you read a word. Triangles warn, circles order, rectangles inform.",
    bg: "rgb(234, 248, 214)",
  },
  {
    icon: Eye,
    t: "Practise hazard perception daily",
    d: "Train your eye to scan ahead and anticipate. Ten minutes a day builds the instinct examiners look for.",
    bg: "rgb(225, 244, 254)",
  },
  {
    icon: Timer,
    t: "Time yourself on mock tests",
    d: "The real test has a clock. Practise with one so you do not panic when time is tight.",
    bg: "rgb(255, 241, 176)",
  },
  {
    icon: Repeat,
    t: "Review every wrong answer",
    d: "A wrong answer is a gift. Read the reason, watch the scene, and the weak-spot trainer brings it back later.",
    bg: "rgb(239, 227, 248)",
  },
  {
    icon: CalendarDays,
    t: "Study in short, frequent sessions",
    d: "Ten minutes a day beats a three-hour cram. Your brain fixes memories between sessions, not during them.",
    bg: "rgb(255, 227, 227)",
  },
  {
    icon: MapPin,
    t: "Know your local authority's rules",
    d: "Rules differ by emirate, province and state. Make sure your course is set to the authority where you will sit the test.",
    bg: "rgb(234, 248, 214)",
  },
];

const pitfalls = [
  {
    t: "Cramming the night before",
    d: "Last-minute cramming raises stress and does not build lasting memory. Trust your preparation and rest well.",
  },
  {
    t: "Ignoring your weak spots",
    d: "It feels good to practise what you already know. Use the weak-spot trainer to face the topics you keep missing.",
  },
  {
    t: "Memorising answers, not understanding",
    d: "Questions change. Understand the rule behind each answer so you can handle any variation on test day.",
  },
  {
    t: "Skipping the highway code",
    d: "The app covers it, but reading your local authority's official handbook fills in the gaps and builds confidence.",
  },
];

const checklist = [
  "Photo ID",
  "Booking confirmation",
  "Glasses or contacts if you need them",
  "A good night's sleep",
  "Arrive 15 minutes early",
  "Stay calm and read each question twice",
];

export default function TestTipsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "rgb(255, 245, 204)" }}
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
                <span>Test tips</span>
              </span>
            </nav>
            <span className="ow-label">Road test tips</span>
            <h1 className="ow-h1s max-w-3xl">
              Feel prepared, pass with confidence.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl">
              The tips that work and the traps that catch people out, from
              learners who have been there.
            </p>
          </div>
        </section>

        {/* Do This Section */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap">
            <Reveal className="max-w-3xl">
              <span className="ow-label">Do this</span>
              <h2 className="ow-h2f">Six tips that make a real difference.</h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tips.map((tip, idx) => {
                const Icon = tip.icon;
                return (
                  <Reveal key={tip.t} delay={(idx % 3) * 0.08}>
                    <div className="ow-card ow-lift h-full p-6">
                      <div
                        className="ow-tile"
                        style={{ background: tip.bg }}
                      >
                        <Icon size={26} strokeWidth={2.4} />
                      </div>
                      <h3 className="mt-5 text-[20px]">{tip.t}</h3>
                      <p className="mt-2 text-[15px]">{tip.d}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Avoid This Section */}
        <section className="bg-[#FFE3E3] py-16">
          <div className="ow-wrap">
            <Reveal className="max-w-3xl">
              <span className="ow-label" style={{ color: "rgb(217, 58, 58)" }}>
                Avoid this
              </span>
              <h2 className="ow-h2f">Common pitfalls that trip people up.</h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {pitfalls.map((p, idx) => (
                <Reveal key={p.t} delay={(idx % 2) * 0.1}>
                  <div
                    className="flex h-full gap-4 rounded-2xl border-2 border-[#F5BDBD] bg-white p-6"
                    style={{ boxShadow: "rgb(245, 189, 189) 0px 4px 0px" }}
                  >
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#FF4B4B]">
                      <X
                        size={20}
                        strokeWidth={3}
                        stroke="#fff"
                      />
                    </span>
                    <div>
                      <h3 className="text-[20px]">{p.t}</h3>
                      <p className="mt-1 text-[15px]">{p.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Test Day Checklist */}
        <section className="ow-sec">
          <div className="ow-wrap">
            <Reveal className="ow-card max-w-3xl p-8">
              <h2 className="text-[28px]">Your test-day checklist</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li key={item} className="ow-tick">
                    <i style={{ background: "rgb(88, 204, 2)" }}>
                      <Check
                        size={15}
                        strokeWidth={3.2}
                        stroke="#12261A"
                      />
                    </i>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <CtaSection />

      <Footer />
    </div>
  );
}
