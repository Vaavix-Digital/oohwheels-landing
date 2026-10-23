"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  Flame,
  Check,
  X,
  RotateCcw,
  Pause,
  Play,
  ArrowUp,
  Heart,
  Route,
  Languages as LanguagesIcon,
  Target,
  Signpost,
  Download,
  Trophy,
  CalendarDays,
  Car,
  Minus,
  Plus,
  Zap,
  Lock,
  House,
  Dumbbell,
  BookOpen,
  User,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { WhizzyMascot } from "./WhizzyMascot";

// Supported countries data
const COUNTRIES = [
  {
    slug: "uk",
    code: "GB",
    name: "United Kingdom",
    sub: "Great Britain and Northern Ireland",
    bg: "rgb(234, 248, 214)",
    edge: "rgb(207, 232, 176)",
  },
  {
    slug: "in",
    code: "IN",
    name: "India",
    sub: "National, every state and union territory",
    bg: "rgb(225, 244, 254)",
    edge: "rgb(181, 225, 247)",
  },
  {
    slug: "ae",
    code: "AE",
    name: "UAE",
    sub: "Dubai, Abu Dhabi, Sharjah & all emirates",
    bg: "rgb(255, 241, 176)",
    edge: "rgb(240, 216, 112)",
  },
  {
    slug: "sa",
    code: "SA",
    name: "Saudi Arabia",
    sub: "Dallah and national driving schools",
    bg: "rgb(255, 227, 227)",
    edge: "rgb(245, 189, 189)",
  },
  {
    slug: "qa",
    code: "QA",
    name: "Qatar",
    sub: "Doha and all national driving schools",
    bg: "rgb(239, 227, 248)",
    edge: "rgb(216, 194, 234)",
  },
  {
    slug: "kw",
    code: "KW",
    name: "Kuwait",
    sub: "Ministry of Interior curriculum",
    bg: "rgb(234, 248, 214)",
    edge: "rgb(207, 232, 176)",
  },
  {
    slug: "om",
    code: "OM",
    name: "Oman",
    sub: "Royal Oman Police curriculum",
    bg: "rgb(225, 244, 254)",
    edge: "rgb(181, 225, 247)",
  },
  {
    slug: "bh",
    code: "BH",
    name: "Bahrain",
    sub: "General Directorate of Traffic",
    bg: "rgb(255, 241, 176)",
    edge: "rgb(240, 216, 112)",
  },
  {
    slug: "ie",
    code: "IE",
    name: "Ireland",
    sub: "Driver Theory Test (DTT) Official",
    bg: "rgb(255, 227, 227)",
    edge: "rgb(245, 189, 189)",
  },
  {
    slug: "ca",
    code: "CA",
    name: "Canada",
    sub: "Ontario G1, Alberta, BC, Quebec & more",
    bg: "rgb(239, 227, 248)",
    edge: "rgb(216, 194, 234)",
  },
];

// Feature cards for "Everything in one app"
const FEATURES = [
  {
    icon: Route,
    t: "A path, not a pile",
    d: "Short lessons unlock one after another, so you always know what to learn next.",
    bg: "rgb(234, 248, 214)",
    edge: "rgb(207, 232, 176)",
  },
  {
    icon: LanguagesIcon,
    t: "Your language",
    d: "Questions, narration and captions in the language you think in.",
    bg: "rgb(225, 244, 254)",
    edge: "rgb(181, 225, 247)",
  },
  {
    icon: Target,
    t: "Weak-spot trainer",
    d: "Whizzy finds the topics you miss and brings them back until they stick.",
    bg: "rgb(255, 241, 176)",
    edge: "rgb(240, 216, 112)",
  },
  {
    icon: Signpost,
    t: "Flash signs",
    d: "Quick-fire cards that make every road sign easy to recognise.",
    bg: "rgb(255, 227, 227)",
    edge: "rgb(245, 189, 189)",
  },
  {
    icon: Download,
    t: "Offline learning (Premium)",
    d: "Download lessons and test scenes for the train, plane or weak Wi-Fi.",
    bg: "rgb(234, 248, 214)",
    edge: "rgb(207, 232, 176)",
  },
  {
    icon: Trophy,
    t: "Official format tests",
    d: "Full mock tests timed to match your real licensing authority exam.",
    bg: "rgb(225, 244, 254)",
    edge: "rgb(181, 225, 247)",
  },
  {
    icon: CalendarDays,
    t: "Daily habit",
    d: "Hearts, streaks and five-minute sessions fit right into your day.",
    bg: "rgb(255, 241, 176)",
    edge: "rgb(240, 216, 112)",
  },
  {
    icon: Car,
    t: "Real road rules",
    d: "Every question verified against the current highway code for your region.",
    bg: "rgb(255, 227, 227)",
    edge: "rgb(245, 189, 189)",
  },
];

// Steps for "How it works"
const STEPS = [
  {
    t: "Pick your test",
    d: "Choose your country and the licensing authority where you will sit the test.",
    bg: "#58CC02",
    fg: "#12261A",
  },
  {
    t: "Set your goal",
    d: "Tell us your test date and how many minutes a day you can give.",
    bg: "#1CB0F6",
    fg: "#12261A",
  },
  {
    t: "Learn, watch, practise",
    d: "Follow the path: short lessons, animated scenes and instant-feedback questions.",
    bg: "#FFC800",
    fg: "#12261A",
  },
  {
    t: "Pass the mock, book the test",
    d: "Hit a strong readiness score on a mock test, then book the real thing.",
    bg: "#8549BA",
    fg: "#FFFFFF",
  },
];

// Languages list
const LANGUAGES = [
  { name: "English" },
  { name: "العربية", rtl: true },
  { name: "हिन्दी" },
  { name: "മലയാളം" },
  { name: "தமிழ்" },
  { name: "తెలుగు" },
  { name: "اردو", rtl: true },
  { name: "Français" },
];

// FAQ list
const FAQS = [
  {
    q: "Which countries and tests does oohwheels cover?",
    a: "oohwheels covers 65 regions across 10 countries: the United Kingdom, India, UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Ireland and Canada. You pick the place where you will sit your test and the whole course follows that licensing authority.",
  },
  {
    q: "Is oohwheels really free?",
    a: "Yes. The free plan includes the full learning path, practice and one mock test every week. It is supported by occasional short ads. You can upgrade to Premium at any time for unlimited mock tests, offline downloads and zero ads.",
  },
  {
    q: "What languages are available?",
    a: "Questions, voice narration and video captions are available in English, Arabic, Hindi, Malayalam, Tamil, Telugu, Urdu and French, with more languages being added regularly.",
  },
  {
    q: "How does the animated scene player work?",
    a: "Scenes illustrate junctions, roundabouts and right-of-way scenarios from a top-down view. You can pause at any key moment, scrub forward and backward, switch speeds and toggle captions in your language.",
  },
  {
    q: "Can I use oohwheels offline?",
    a: "Yes. Premium users can download any unit, test set or video scene for offline practice when travelling or on poor connectivity.",
  },
  {
    q: "How long does it take to get test-ready?",
    a: "Most learners reach an 85%+ readiness score in 2 to 3 weeks by practising 10 to 15 minutes a day.",
  },
];

export const MainContent: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Screen switcher tab in Hero (0: Learn, 1: Watch, 2: Practise, 3: Mock test)
  const tabNames = ["Learn", "Watch", "Practise", "Mock test"];
  const [activeTab, setActiveTab] = useState<number>(3);
  const [isHeroPaused, setIsHeroPaused] = useState<boolean>(false);
  const [heroPracticeAnswer, setHeroPracticeAnswer] = useState<number>(0);

  // Auto-carousel timer (cycles every 5.2 seconds, pauses on hover)
  useEffect(() => {
    if (isHeroPaused || shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabNames.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [isHeroPaused, shouldReduceMotion, tabNames.length]);

  // FAQ accordion open state
  const [openFaq, setOpenFaq] = useState<number>(0);

  // Practice section answer state in Zig-zag section
  const [practiceAnswer, setPracticeAnswer] = useState<string>("Ahead only");

  // Scene animation paused state in Zig-zag section
  const [isScenePaused, setIsScenePaused] = useState<boolean>(false);

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-b from-[#FBFDF6] to-[#EAF8D6] pb-20 pt-12 md:pt-16">
        <div className="ow-wrap grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span
              className="ow-chip !text-[13px] font-extrabold uppercase tracking-widest inline-block ow-hero-fade"
            >
              Driving theory, the fun way
            </span>
            <h1 className="ow-h1 mt-6 ow-hero-fade ow-hero-fade-1">
              Pass your driving test without the boring bits.
            </h1>
            <p className="ow-lead mt-6 max-w-xl ow-hero-fade ow-hero-fade-2">
              oohwheels turns the rules of the road into short game-like
              lessons, animated scenes and mock tests, in your language and for
              your exact licensing authority.
            </p>
            <div className="mt-8 ow-hero-fade ow-hero-fade-3">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-green"
                >
                  <Smartphone className="h-5 w-5 stroke-[2.5]" />
                  Get it on iPhone
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-ink"
                >
                  <Smartphone className="h-5 w-5 stroke-[2.5]" />
                  Get it on Android
                </a>
              </div>
            </div>
            <p className="ow-muted mt-5 max-w-md ow-hero-fade ow-hero-fade-3">
              Launching soon on iOS and Android. Free to start. Premium is $3.99 a
              month, cancel anytime.
            </p>
          </div>

          <div
            className="relative mx-auto flex w-full max-w-[460px] justify-center pb-4"
            onMouseEnter={() => setIsHeroPaused(true)}
            onMouseLeave={() => setIsHeroPaused(false)}
          >
            <div
              className="absolute left-1/2 top-10 -z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#CFE8B0]/60 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="h-[560px] w-[280px]" aria-live="polite">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div
                        className="ow-phone"
                        role="group"
                        aria-label={
                          activeTab === 0
                            ? "oohwheels Learn screen"
                            : activeTab === 1
                            ? "Animated scene: junctions, give way"
                            : activeTab === 2
                            ? "Practice question screen"
                            : "Mock test result screen"
                        }
                      >
                        <div className="ow-phone-in">
                          {activeTab === 3 ? (
                            // Screen 3: Mock Test Screen
                            <>
                              <div className="px-4 pt-5 text-center">
                                <span className="rounded-full bg-[#EFE3F8] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#8549BA]">
                                  Mock test 3
                                </span>
                                <div className="mt-2 font-[Fredoka] text-2xl font-semibold text-[#12261A]">
                                  You passed!
                                </div>
                              </div>
                              <div className="relative mx-auto mt-3 w-[200px]">
                                <svg viewBox="0 0 200 110" className="w-full">
                                  <path
                                    d="M20 100 A80 80 0 0 1 180 100"
                                    fill="none"
                                    stroke="#E5E5E5"
                                    strokeWidth="16"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M20 100 A80 80 0 0 1 180 100"
                                    fill="none"
                                    stroke="#58CC02"
                                    strokeWidth="16"
                                    strokeLinecap="round"
                                    className="ow-gauge"
                                  />
                                </svg>
                                <div className="absolute inset-x-0 bottom-0 text-center leading-none">
                                  <div className="font-[Fredoka] text-3xl font-bold text-[#12261A]">
                                    82%
                                  </div>
                                  <div className="mt-1 text-[10px] font-extrabold uppercase tracking-widest text-[#55665D]">
                                    Readiness
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 space-y-2 px-4">
                                {[
                                  ["Road signs", 92, "#58CC02"],
                                  ["Rules & priority", 85, "#58CC02"],
                                  ["Safety & hazards", 68, "#FFC800"],
                                ].map(([topic, pct, color]) => (
                                  <div key={topic as string}>
                                    <div className="flex justify-between text-xs font-bold text-[#12261A]">
                                      <span>{topic}</span>
                                      <span>{pct}%</span>
                                    </div>
                                    <div className="mt-0.5 h-2.5 overflow-hidden rounded-full bg-[#E5E5E5]">
                                      <div
                                        className="ow-grow h-full rounded-full"
                                        style={{
                                          width: `${pct}%`,
                                          background: color as string,
                                        }}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 px-4 pb-4">
                                <button className="ow-btn ow-green w-full !min-h-[42px]">
                                  Review answers
                                </button>
                              </div>
                            </>
                          ) : activeTab === 0 ? (
                            // Screen 0: Learn Screen
                            <>
                              <div className="flex items-center justify-between px-3 pt-4 text-[13px] font-extrabold text-[#12261A]">
                                <span className="rounded-full border-2 border-[#B5E1F7] bg-[#E1F4FE] px-2.5 py-0.5">
                                  IN
                                </span>
                                <span className="flex items-center gap-1">
                                  <Flame className="h-4 w-4 fill-[#FF9600] text-[#FF9600]" />
                                  5
                                </span>
                                <span className="flex items-center gap-1 text-[#1CB0F6]">
                                  <Zap className="h-4 w-4 fill-[#1CB0F6]" />
                                  120
                                </span>
                                <span className="flex items-center gap-1 text-[#FF4B4B]">
                                  <Heart className="h-4 w-4 fill-[#FF4B4B]" />
                                  5
                                </span>
                              </div>
                              <div
                                className="mx-3 mt-3 rounded-2xl bg-[#58CC02] px-3 py-2.5 text-[#12261A]"
                                style={{ boxShadow: "0 4px 0 #3F9400" }}
                              >
                                <div className="text-[11px] font-extrabold uppercase tracking-wider opacity-80">
                                  Unit 2
                                </div>
                                <div className="font-[Fredoka] text-lg font-semibold">
                                  Road signs
                                </div>
                              </div>
                              <div className="mt-5 flex flex-col items-center gap-3">
                                <div className="relative" style={{ transform: "translateX(0px)" }}>
                                  <div
                                    className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
                                    style={{
                                      background: "rgb(88, 204, 2)",
                                      boxShadow: "0 5px 0 rgb(63, 148, 0)",
                                    }}
                                  >
                                    <Check className="h-6 w-6 stroke-[3]" />
                                  </div>
                                </div>
                                <div className="relative" style={{ transform: "translateX(-34px)" }}>
                                  <div
                                    className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
                                    style={{
                                      background: "rgb(88, 204, 2)",
                                      boxShadow: "0 5px 0 rgb(63, 148, 0)",
                                    }}
                                  >
                                    <Check className="h-6 w-6 stroke-[3]" />
                                  </div>
                                </div>
                                <div className="relative" style={{ transform: "translateX(0px)" }}>
                                  <div className="ow-bob absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border-2 border-[#E3EDD6] bg-white px-2.5 py-0.5 text-[11px] font-extrabold text-[#12261A]">
                                    START
                                  </div>
                                  <div
                                    className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
                                    style={{
                                      background: "rgb(255, 200, 0)",
                                      boxShadow: "0 5px 0 rgb(209, 159, 0)",
                                    }}
                                  >
                                    <Play className="h-6 w-6 fill-[#12261A] stroke-none ml-0.5" />
                                  </div>
                                </div>
                                <div className="relative" style={{ transform: "translateX(34px)" }}>
                                  <div
                                    className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
                                    style={{
                                      background: "rgb(229, 229, 229)",
                                      boxShadow: "0 5px 0 rgb(201, 201, 201)",
                                    }}
                                  >
                                    <Lock className="h-5 w-5 stroke-[2.6] text-[#8a8a8a]" />
                                  </div>
                                </div>
                                <div className="relative" style={{ transform: "translateX(0px)" }}>
                                  <div
                                    className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
                                    style={{
                                      background: "rgb(229, 229, 229)",
                                      boxShadow: "0 5px 0 rgb(201, 201, 201)",
                                    }}
                                  >
                                    <Lock className="h-5 w-5 stroke-[2.6] text-[#8a8a8a]" />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute inset-x-0 bottom-0 flex justify-around border-t-2 border-[#E3EDD6] bg-white px-2 py-2.5">
                                <span
                                  className="grid h-9 w-11 place-items-center rounded-xl"
                                  style={{
                                    background: "rgb(234, 248, 214)",
                                    border: "2px solid rgb(88, 204, 2)",
                                  }}
                                >
                                  <House size={20} strokeWidth={2.4} color="#12261A" />
                                </span>
                                <span className="grid h-9 w-11 place-items-center rounded-xl">
                                  <Dumbbell size={20} strokeWidth={2.4} color="#12261A" />
                                </span>
                                <span className="grid h-9 w-11 place-items-center rounded-xl">
                                  <Trophy size={20} strokeWidth={2.4} color="#12261A" />
                                </span>
                                <span className="grid h-9 w-11 place-items-center rounded-xl">
                                  <BookOpen size={20} strokeWidth={2.4} color="#12261A" />
                                </span>
                                <span className="grid h-9 w-11 place-items-center rounded-xl">
                                  <User size={20} strokeWidth={2.4} color="#12261A" />
                                </span>
                              </div>
                            </>
                          ) : activeTab === 1 ? (
                            // Screen 1: Watch Screen
                            <div className="h-full flex flex-col">
                              <div className="flex items-center gap-2 px-3 pt-4">
                                <X className="h-5 w-5 stroke-[2.6] text-[#12261A]" />
                                <div className="font-[Fredoka] text-base font-semibold text-[#12261A]">
                                  Junctions: give way
                                </div>
                              </div>
                              <div className="mx-3 mt-3 overflow-hidden rounded-2xl border-2 border-[#CFE8B0]">
                                <svg
                                  viewBox="0 0 240 200"
                                  className="block w-full"
                                  role="img"
                                  aria-label="Top-down junction with a blue car passing and a yellow car waiting"
                                >
                                  <rect width="240" height="200" fill="#CDEFA8" />
                                  <rect y="60" width="240" height="70" fill="#5B6B73" />
                                  <rect x="95" y="60" width="50" height="140" fill="#5B6B73" />
                                  <line
                                    x1="0"
                                    y1="95"
                                    x2="240"
                                    y2="95"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeDasharray="10 8"
                                  />
                                  <line
                                    x1="120"
                                    y1="140"
                                    x2="120"
                                    y2="200"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeDasharray="8 8"
                                  />
                                  {[0, 1, 2, 3, 4].map((idx) => (
                                    <rect
                                      key={idx}
                                      x={99 + idx * 9}
                                      y="132"
                                      width="5"
                                      height="14"
                                      fill="#fff"
                                    />
                                  ))}
                                  <g className="ow-drive">
                                    <g transform="translate(-50 103)">
                                      <rect width="36" height="18" rx="6" fill="#1CB0F6" />
                                      <rect x="22" y="3" width="9" height="12" rx="3" fill="#E1F4FE" />
                                    </g>
                                  </g>
                                  <g className="ow-wait">
                                    <g transform="translate(103 160)">
                                      <rect width="18" height="34" rx="6" fill="#FFC800" />
                                      <rect x="3" y="4" width="12" height="9" rx="3" fill="#FFF1B0" />
                                    </g>
                                  </g>
                                </svg>
                              </div>
                              <div className="mx-3 mt-3 flex items-center gap-2">
                                <button className="grid h-8 w-8 place-items-center rounded-full bg-[#12261A] text-white">
                                  <Play className="h-4 w-4 fill-current ml-0.5" />
                                </button>
                                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E5E5E5]">
                                  <div className="ow-scrub h-full bg-[#58CC02]" />
                                </div>
                                <span className="text-[11px] font-bold text-[#55665D]">
                                  0:04
                                </span>
                              </div>
                              <div className="mx-3 mt-3 rounded-2xl bg-[#EAF8D6] p-3 text-xs leading-relaxed text-[#12261A]">
                                The blue car is on the priority road. The yellow car
                                must wait at the broken line.
                              </div>
                            </div>
                          ) : (
                            // Screen 2: Practise Screen
                            <>
                              <div className="flex items-center gap-2 px-3 pt-4">
                                <X className="h-5 w-5 stroke-[2.6] text-[#12261A]" />
                                <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#E5E5E5]">
                                  <div className="h-full w-3/5 rounded-full bg-[#58CC02]" />
                                </div>
                                <span className="flex items-center gap-1 text-sm font-extrabold text-[#12261A]">
                                  <Heart className="h-4 w-4 fill-[#FF4B4B] text-[#FF4B4B]" />
                                  4
                                </span>
                              </div>
                              <div className="px-4 pt-5 text-center font-[Fredoka] text-xl font-semibold text-[#12261A]">
                                What does this sign tell you?
                              </div>
                              <div
                                className="mx-auto mt-4 grid h-24 w-24 place-items-center rounded-full bg-[#1CB0F6]"
                                style={{
                                  boxShadow: "0 5px 0 #1488BE",
                                  border: "4px solid #fff",
                                  outline: "3px solid #1488BE",
                                }}
                              >
                                <ArrowUp className="h-12 w-12 stroke-[3.2] text-white" />
                              </div>
                              <div className="mt-4 space-y-2 px-3">
                                {["Ahead only", "One-way street", "No entry"].map(
                                  (opt, i) => (
                                    <button
                                      key={opt}
                                      onClick={() => setHeroPracticeAnswer(i)}
                                      className="w-full rounded-2xl border-2 px-3 py-2.5 text-left text-[15px] font-bold text-[#12261A] transition"
                                      style={
                                        heroPracticeAnswer === i
                                          ? {
                                              borderColor:
                                                heroPracticeAnswer === 0
                                                  ? "#58CC02"
                                                  : "#FF4B4B",
                                              background:
                                                heroPracticeAnswer === 0
                                                  ? "#EAF8D6"
                                                  : "#FFE3E3",
                                              boxShadow: `0 3px 0 ${
                                                heroPracticeAnswer === 0
                                                  ? "#3F9400"
                                                  : "#d93a3a"
                                              }`,
                                            }
                                          : {
                                              borderColor: "#E3EDD6",
                                              boxShadow: "0 3px 0 #E3EDD6",
                                            }
                                      }
                                    >
                                      {opt}
                                    </button>
                                  )
                                )}
                              </div>
                              <div
                                className="absolute inset-x-0 bottom-0 p-4"
                                style={{
                                  background:
                                    heroPracticeAnswer === 0
                                      ? "#58CC02"
                                      : "#FF4B4B",
                                }}
                              >
                                <div className="text-base font-bold text-[#12261A]">
                                  {heroPracticeAnswer === 0
                                    ? "Correct!"
                                    : "Not quite"}
                                </div>
                                <div className="text-xs text-[#12261A] opacity-90">
                                  {heroPracticeAnswer === 0
                                    ? "A blue circle with a white arrow means you must proceed ahead only."
                                    : "A blue circle is mandatory: you must follow the arrow."}
                                </div>
                                <button className="ow-btn ow-white mt-2 w-full !min-h-[42px]">
                                  Continue
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Tabs Under Phone */}
                <div
                  className="mt-6 flex items-center gap-1"
                  role="tablist"
                  aria-label="App screens"
                >
                  {tabNames.map((name, i) => (
                    <button
                      key={name}
                      role="tab"
                      aria-selected={activeTab === i}
                      onClick={() => setActiveTab(i)}
                      className="grid min-h-[44px] place-items-center px-1.5"
                      aria-label={`Show ${name} screen`}
                    >
                      <span
                        className="block h-3 rounded-full transition-all duration-300"
                        style={{
                          width: activeTab === i ? 32 : 12,
                          background:
                            activeTab === i
                              ? "rgb(88, 204, 2)"
                              : "rgb(207, 232, 176)",
                        }}
                      />
                    </button>
                  ))}
                  <span className="ml-3 w-20 text-sm font-extrabold uppercase tracking-wider text-[#2E6B00]">
                    {tabNames[activeTab]}
                  </span>
                </div>
              </div>
            </div>

            {/* +10 XP Chip */}
            <div
              className="ow-bob ow-chip absolute right-0 top-16 z-20 !border-[#D19F00] !bg-[#FFC800] sm:-right-2"
              style={
                {
                  "--edge": "#D19F00",
                  "--r": "-6deg",
                } as React.CSSProperties
              }
            >
              +10 XP
            </div>

            {/* 5 day streak Chip */}
            <div
              className="ow-bob ow-chip absolute bottom-40 right-0 z-20 sm:-right-4"
              style={
                {
                  "--r": "5deg",
                  animationDelay: "-1.2s",
                } as React.CSSProperties
              }
            >
              <Flame className="h-4 w-4 fill-[#FF9600] text-[#FF9600]" />
              5 day streak
            </div>

            {/* Mascot Whizzy */}
            <div
              className="ow-bob absolute -bottom-2 left-0 z-20"
              style={{ animationDelay: "-0.6s" }}
            >
              <WhizzyMascot size={104} mood="wave" />
            </div>
          </div>
        </div>
      </section>

      {/* Road Divider with Driving Car */}
      <div className="ow-road" aria-hidden="true">
        <svg className="ow-car" width="44" height="14" viewBox="0 0 44 14">
          <rect x="2" y="2" width="38" height="10" rx="4" fill="#1CB0F6" />
          <rect x="24" y="4" width="9" height="6" rx="2" fill="#E1F4FE" />
        </svg>
      </div>

      {/* Countries Section */}
      <section id="countries" className="ow-sec overflow-hidden">
        <div className="ow-wrap">
          <Reveal className="max-w-3xl">
            <span className="ow-label">Built for your exact test</span>
            <h2 className="ow-h2">Your country. Your state. Your authority.</h2>
            <p className="ow-lead mt-5">
              Rules differ by emirate, province and state, so oohwheels asks
              where you will sit your test and builds the whole course around
              that licensing authority.
            </p>
          </Reveal>

          {/* Marquee Banner */}
          <div className="mt-8 overflow-hidden py-3" aria-hidden="true">
            <div className="ow-marquee">
              {[...COUNTRIES, ...COUNTRIES].map((c, i) => (
                <span
                  key={i}
                  className="ow-chip"
                  style={
                    {
                      "--edge": c.edge,
                      background: c.bg,
                    } as React.CSSProperties
                  }
                >
                  {c.code} · {c.name}
                </span>
              ))}
            </div>
          </div>

          {/* Country Cards Grid */}
          <div className="mt-8">
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
              }}
            >
              {COUNTRIES.map((c, idx) => (
                <Reveal key={c.slug} delay={(idx % 5) * 0.06}>
                  <Link
                    href={`/countries/${c.slug}`}
                    className="ow-card flex h-full items-center gap-4 p-5 hover:translate-y-[-2px] transition"
                  >
                    <span
                      className="ow-badge"
                      style={{
                        background: c.bg,
                        border: `2px solid ${c.edge}`,
                      }}
                    >
                      {c.code}
                    </span>
                    <span>
                      <span className="block font-[Fredoka] text-[20px] font-semibold leading-tight text-[#12261A]">
                        {c.name}
                      </span>
                      <span className="ow-muted block leading-snug">
                        {c.sub}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zigzag Feature 1: Animated Scenes */}
      <section
        id="scenes"
        className="ow-sec overflow-hidden"
        style={{ background: "rgb(225, 244, 254)" }}
      >
        <div className="ow-wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal x={-40} y={0}>
            <span
              className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest"
              style={{
                background: "rgb(28, 176, 246)",
                color: "rgb(18, 38, 26)",
              }}
            >
              Animated scenes
            </span>
            <h2 className="ow-h2f">
              See the rule happen, then you will remember it.
            </h2>
            <p className="ow-lead mt-5">
              Short animated scenes show junctions, roundabouts, crossings and
              overtaking from above. Pause on the key moment, replay, slow it
              down and switch the narration and captions to your language.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Pause and step through complex priority rules frame by frame",
                "Voice-over in 8 languages, with plain captions",
                "Scenes also play inside questions: watch, then decide",
              ].map((tick) => (
                <li key={tick} className="ow-tick">
                  <i
                    style={{
                      background: "rgb(28, 176, 246)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} />
                  </i>
                  <span>{tick}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal x={40} y={0} delay={0.1} className="flex justify-center">
            <div
              className={`ow-phone ${isScenePaused ? "ow-paused" : ""}`}
              role="group"
              aria-label="Animated scene: junctions, give way"
            >
              <div className="ow-phone-in">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-2 px-3 pt-4">
                    <X className="h-5 w-5 stroke-[2.6] text-[#12261A]" />
                    <div className="font-[Fredoka] text-base font-semibold text-[#12261A]">
                      Junctions: give way
                    </div>
                  </div>
                  <div className="mx-3 mt-3 overflow-hidden rounded-2xl border-2 border-[#CFE8B0]">
                    <svg
                      viewBox="0 0 240 200"
                      className="block w-full"
                      role="img"
                      aria-label="Top-down junction with a blue car passing and a yellow car waiting"
                    >
                      <rect width="240" height="200" fill="#CDEFA8" />
                      <rect y="60" width="240" height="70" fill="#5B6B73" />
                      <rect x="95" y="60" width="50" height="140" fill="#5B6B73" />
                      <line
                        x1="0"
                        y1="95"
                        x2="240"
                        y2="95"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeDasharray="10 8"
                      />
                      <line
                        x1="120"
                        y1="140"
                        x2="120"
                        y2="200"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                      />
                      {[0, 1, 2, 3, 4].map((idx) => (
                        <rect
                          key={idx}
                          x={99 + idx * 9}
                          y="132"
                          width="5"
                          height="14"
                          fill="#fff"
                        />
                      ))}
                      <g className="ow-drive">
                        <g transform="translate(-50 103)">
                          <rect width="36" height="18" rx="6" fill="#1CB0F6" />
                          <rect x="22" y="3" width="9" height="12" rx="3" fill="#E1F4FE" />
                        </g>
                      </g>
                      <g className="ow-wait">
                        <g transform="translate(103 160)">
                          <rect width="18" height="34" rx="6" fill="#FFC800" />
                          <rect x="3" y="4" width="12" height="9" rx="3" fill="#FFF1B0" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="mx-3 mt-3 flex items-center gap-2">
                    <button
                      onClick={() => setIsScenePaused(!isScenePaused)}
                      className="grid h-8 w-8 place-items-center rounded-full bg-[#12261A] text-white"
                      aria-label={isScenePaused ? "Play scene" : "Pause scene"}
                    >
                      {isScenePaused ? (
                        <Play className="h-4 w-4 fill-current ml-0.5" />
                      ) : (
                        <Pause className="h-4 w-4 fill-current" />
                      )}
                    </button>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E5E5E5]">
                      <div className="ow-scrub h-full bg-[#58CC02]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#55665D]">
                      0:04
                    </span>
                  </div>
                  <div className="mx-3 mt-3 rounded-2xl bg-[#EAF8D6] p-3 text-xs leading-relaxed text-[#12261A]">
                    The blue car is on the priority road. The yellow car must wait
                    at the broken line.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Zigzag Feature 2: Practice */}
      <section
        id="practice"
        className="ow-sec overflow-hidden"
        style={{ background: "rgb(251, 253, 246)" }}
      >
        <div className="ow-wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal x={40} y={0} className="lg:order-2">
            <span
              className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest"
              style={{
                background: "rgb(88, 204, 2)",
                color: "rgb(18, 38, 26)",
              }}
            >
              Practice that feels like play
            </span>
            <h2 className="ow-h2f">Questions you actually want to answer.</h2>
            <p className="ow-lead mt-5">
              Bite-size questions with instant feedback. Get one wrong and
              Whizzy shows you why, then brings it back later until it sticks.
              Hearts, XP and streaks make ten minutes a day an easy habit.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Every official question topic broken into 3-minute lessons",
                "Instant, friendly explanations so you learn from mistakes",
                "Review weak areas with Whizzy’s targeted practice",
              ].map((tick) => (
                <li key={tick} className="ow-tick">
                  <i
                    style={{
                      background: "rgb(88, 204, 2)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} />
                  </i>
                  <span>{tick}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal x={-40} y={0} delay={0.1} className="flex justify-center lg:order-1">
            <div
              className="ow-phone"
              role="group"
              aria-label="Practice question screen"
            >
              <div className="ow-phone-in">
                <div className="flex items-center gap-2 px-3 pt-4">
                  <X className="h-5 w-5 stroke-[2.6] text-[#12261A]" />
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#E5E5E5]">
                    <div className="h-full w-3/5 rounded-full bg-[#58CC02]" />
                  </div>
                  <span className="flex items-center gap-1 text-sm font-extrabold text-[#12261A]">
                    <Heart className="h-4 w-4 fill-[#FF4B4B] text-[#FF4B4B]" />
                    4
                  </span>
                </div>
                <div className="px-4 pt-5 text-center font-[Fredoka] text-xl font-semibold text-[#12261A]">
                  What does this sign tell you?
                </div>
                <div
                  className="mx-auto mt-4 grid h-24 w-24 place-items-center rounded-full bg-[#1CB0F6]"
                  style={{
                    boxShadow: "0 5px 0 #1488BE",
                    border: "4px solid #fff",
                    outline: "3px solid #1488BE",
                  }}
                >
                  <ArrowUp className="h-12 w-12 stroke-[3.2] text-white" />
                </div>
                <div className="mt-4 space-y-2 px-3">
                  {["Ahead only", "One-way street", "No entry"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setPracticeAnswer(opt)}
                      className="w-full rounded-2xl border-2 px-3 py-2.5 text-left text-[15px] font-bold text-[#12261A] transition"
                      style={
                        practiceAnswer === opt
                          ? {
                              borderColor:
                                practiceAnswer === "Ahead only"
                                  ? "#58CC02"
                                  : "#FF4B4B",
                              background:
                                practiceAnswer === "Ahead only"
                                  ? "#EAF8D6"
                                  : "#FFE3E3",
                              boxShadow: `0 3px 0 ${
                                practiceAnswer === "Ahead only"
                                  ? "#3F9400"
                                  : "#d93a3a"
                              }`,
                            }
                          : {
                              borderColor: "#E3EDD6",
                              boxShadow: "0 3px 0 #E3EDD6",
                            }
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 p-4"
                  style={{
                    background:
                      practiceAnswer === "Ahead only" ? "#58CC02" : "#FF4B4B",
                  }}
                >
                  <div className="text-base font-bold text-[#12261A]">
                    {practiceAnswer === "Ahead only" ? "Correct!" : "Not quite"}
                  </div>
                  <div className="text-xs text-[#12261A] opacity-90">
                    {practiceAnswer === "Ahead only"
                      ? "A blue circle with a white arrow means you must proceed ahead only."
                      : "A blue circle is mandatory: you must follow the arrow."}
                  </div>
                  <button className="ow-btn ow-white mt-2 w-full !min-h-[42px]">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Zigzag Feature 3: Mock Tests & Readiness */}
      <section
        id="mock"
        className="ow-sec overflow-hidden"
        style={{ background: "rgb(239, 227, 248)" }}
      >
        <div className="ow-wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal x={-40} y={0}>
            <span
              className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest"
              style={{
                background: "rgb(133, 73, 186)",
                color: "rgb(255, 255, 255)",
              }}
            >
              Mock tests and readiness
            </span>
            <h2 className="ow-h2f">Know you are ready before test day.</h2>
            <p className="ow-lead mt-5">
              Timed mock tests follow the format and pass mark of your licensing
              authority. Your readiness score and weak-spot trainer tell you
              exactly what to study this week, so nothing on test day is a
              surprise.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Exact question count, timing and pass mark for your region",
                "Readiness score shows your overall probability of passing",
                "Full test history with detailed review of every mistake",
              ].map((tick) => (
                <li key={tick} className="ow-tick">
                  <i
                    style={{
                      background: "rgb(133, 73, 186)",
                      color: "#FFFFFF",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} />
                  </i>
                  <span>{tick}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal x={40} y={0} delay={0.1} className="flex justify-center">
            <div
              className="ow-phone"
              role="group"
              aria-label="Mock test result screen"
            >
              <div className="ow-phone-in">
                <div className="px-4 pt-5 text-center">
                  <span className="rounded-full bg-[#EFE3F8] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#8549BA]">
                    Mock test 3
                  </span>
                  <div className="mt-2 font-[Fredoka] text-2xl font-semibold text-[#12261A]">
                    You passed!
                  </div>
                </div>
                <div className="relative mx-auto mt-3 w-[200px]">
                  <svg viewBox="0 0 200 110" className="w-full">
                    <path
                      d="M20 100 A80 80 0 0 1 180 100"
                      fill="none"
                      stroke="#E5E5E5"
                      strokeWidth="16"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 100 A80 80 0 0 1 180 100"
                      fill="none"
                      stroke="#58CC02"
                      strokeWidth="16"
                      strokeLinecap="round"
                      className="ow-gauge"
                    />
                  </svg>
                  <div className="absolute inset-x-0 bottom-0 text-center leading-none">
                    <div className="font-[Fredoka] text-3xl font-bold text-[#12261A]">
                      82%
                    </div>
                    <div className="mt-1 text-[10px] font-extrabold uppercase tracking-widest text-[#55665D]">
                      Readiness
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-2 px-4">
                  {[
                    ["Road signs", 92, "#58CC02"],
                    ["Rules & priority", 85, "#58CC02"],
                    ["Safety & hazards", 68, "#FFC800"],
                  ].map(([topic, pct, color]) => (
                    <div key={topic as string}>
                      <div className="flex justify-between text-xs font-bold text-[#12261A]">
                        <span>{topic}</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="mt-0.5 h-2.5 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: color as string,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 px-4 pb-4">
                  <button className="ow-btn ow-green w-full !min-h-[42px]">
                    Review answers
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Everything in One App Section */}
      <section className="ow-sec overflow-hidden">
        <div className="ow-wrap">
          <Reveal className="max-w-3xl">
            <span className="ow-label">Everything in one app</span>
            <h2 className="ow-h2">All you need to pass first time.</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((item, i) => {
              const IconComp = item.icon;
              return (
                <Reveal key={item.t} delay={(i % 4) * 0.07}>
                  <div className="ow-card ow-lift h-full p-6">
                    <div
                      className="ow-tile"
                      style={{
                        background: item.bg,
                        border: `2px solid ${item.edge}`,
                      }}
                    >
                      <IconComp className="h-6 w-6 stroke-[2.4]" />
                    </div>
                    <h3 className="mt-5 text-[22px] font-[Fredoka] font-bold text-[#12261A]">
                      {item.t}
                    </h3>
                    <p className="mt-2 text-[16px] text-[#55665D]">
                      {item.d}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how" className="ow-sec scroll-mt-[72px] bg-[#EAF8D6] overflow-hidden">
        <div className="ow-wrap">
          <Reveal className="max-w-3xl">
            <span className="ow-label">How it works</span>
            <h2 className="ow-h2">From download to driving test in four steps.</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.t} delay={i * 0.1}>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full font-[Fredoka] text-2xl font-bold"
                    style={{
                      background: step.bg,
                      color: step.fg,
                      boxShadow: "0 4px 0 rgba(18,38,26,.25)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-[22px] font-[Fredoka] font-bold text-[#12261A]">
                    {step.t}
                  </h3>
                  <p className="mt-2 text-[16px] text-[#55665D]">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="ow-sec overflow-hidden">
        <div className="ow-wrap">
          <Reveal className="max-w-3xl">
            <span className="ow-label">Pricing</span>
            <h2 className="ow-h2">Start free. Go Premium when you want.</h2>
            <p className="ow-lead mt-5">
              Choose at sign-up and switch any time from your profile.
            </p>
          </Reveal>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Free with Ads */}
            <Reveal>
              <div className="ow-card ow-lift h-full !rounded-[28px] p-8">
                <h3 className="text-[26px] font-[Fredoka] font-bold text-[#12261A]">
                  Free with ads
                </h3>
                <div className="mt-3 font-[Fredoka] text-5xl font-bold text-[#12261A]">
                  $0{" "}
                  <span className="text-lg font-medium text-[#55665D]">
                    forever
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    "Full learning path and practice",
                    "One mock test every week",
                    "Limited hearts, earn more by practising or watching an ad",
                    "Ads on hub screens and after lessons, never during questions, tests or scenes",
                  ].map((perk) => (
                    <li key={perk} className="ow-tick">
                      <i style={{ background: "#58CC02" }}>
                        <Check size={15} strokeWidth={3.2} color="#12261A" />
                      </i>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-outline mt-8 w-full"
                >
                  Start free
                </a>
              </div>
            </Reveal>

            {/* Premium */}
            <Reveal delay={0.1}>
              <div
                className="relative h-full rounded-[28px] bg-[#12261A] p-8 text-white"
                style={{ boxShadow: "0 6px 0 #000" }}
              >
                <div className="absolute right-6 top-6 rounded-full bg-[#58CC02] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#12261A]">
                  Recommended
                </div>
                <h3 className="text-[26px] font-[Fredoka] font-bold text-white">
                  Premium
                </h3>
                <div className="mt-3 font-[Fredoka] text-5xl font-bold text-[#58CC02]">
                  $3.99{" "}
                  <span className="text-lg font-medium text-white/70">
                    / month
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    "No ads, anywhere",
                    "Unlimited hearts",
                    "Every mock test, whenever you like",
                    "Full video library and offline downloads",
                    "Advanced progress analytics",
                  ].map((perk) => (
                    <li key={perk} className="ow-tick">
                      <i style={{ background: "#58CC02" }}>
                        <Check size={15} strokeWidth={3.2} color="#12261A" />
                      </i>
                      <span className="text-white/90">{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-green mt-8 w-full"
                >
                  Get Premium
                </a>
              </div>
            </Reveal>
          </div>

          <p className="ow-muted mt-6 max-w-2xl">
            Premium is billed monthly through the App Store or Google Play and
            can be cancelled any time. Local currency is shown where the store
            allows it.
          </p>
        </div>
      </section>

      {/* Languages Section */}
      <section className="ow-sec bg-[#E1F4FE] overflow-hidden">
        <div className="ow-wrap">
          <Reveal className="max-w-3xl">
            <span className="ow-label">Languages</span>
            <h2 className="ow-h2">Learn in the language you think in.</h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-4">
            {LANGUAGES.map((lang, index) => (
              <motion.span
                key={lang.name}
                className="ow-chip !px-6 !py-3 !text-xl inline-block"
                style={{ "--edge": "#B5E1F7" } as React.CSSProperties}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: index * 0.06,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              >
                <span dir={lang.rtl ? "rtl" : undefined}>{lang.name}</span>
              </motion.span>
            ))}
            <span
              className="ow-chip !border-dashed !px-6 !py-3 !text-xl !shadow-none inline-block"
              style={
                {
                  "--edge": "#1488BE",
                  background: "transparent",
                } as React.CSSProperties
              }
            >
              and more
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="ow-sec overflow-hidden">
        <div className="ow-wrap grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          <Reveal>
            <span className="ow-label">FAQ</span>
            <h2 className="ow-h2">Questions, answered.</h2>
            <Link className="ow-btn ow-outline mt-8 inline-flex" href="/help">
              More help
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className="ow-card ow-lift">
                    <h3 className="!text-[20px] font-[Fredoka] font-bold text-[#12261A]">
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#EAF8D6]">
                          {isOpen ? (
                            <Minus className="h-4 w-4 stroke-[3] text-[#12261A]" />
                          ) : (
                            <Plus className="h-4 w-4 stroke-[3] text-[#12261A]" />
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
                          <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#55665D]">
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
        </div>
      </section>

      {/* CTA Section Before Footer */}
      <section className="bg-[#58CC02] py-20 text-center overflow-hidden">
        <div className="ow-wrap flex flex-col items-center">
          <Reveal delay={0.1} className="flex justify-center">
            <WhizzyMascot size={160} mood="cheer" className="ow-bob" />
          </Reveal>
          <Reveal>
            <h2 className="ow-h2 mt-4">Ready to pass first time?</h2>
            <p className="ow-lead mt-4 max-w-xl !text-[#12261A]">
              oohwheels is launching soon on iOS and Android. Start free and be
              test-ready sooner.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex justify-center w-full">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="ow-btn ow-ink w-full sm:w-auto"
              >
                <Smartphone size={20} strokeWidth={2.5} />
                Get it on iPhone
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="ow-btn ow-white w-full sm:w-auto"
              >
                <Smartphone size={20} strokeWidth={2.5} />
                Get it on Android
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
