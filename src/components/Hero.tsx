"use client";

import React, { useState } from "react";
import { WhizzyMascot } from "./WhizzyMascot";
import { Check, Flame, Heart, Lock, Play, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background soft ambient circles */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#E5F3D6]/60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#D7EFE0]/40 blur-3xl" />

      <div className="ow-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Copy */}
          <div className="text-left lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D5E6C8] bg-white px-4 py-1.5 shadow-[0_2px_0_#D5E6C8]">
              <span className="h-2 w-2 rounded-full bg-[#58CC02] animate-ping" />
              <span className="font-[Fredoka] text-xs font-bold tracking-wider text-[#347802] uppercase sm:text-sm">
                DRIVING THEORY, THE FUN WAY
              </span>
            </div>

            <h1 className="mt-6 font-[Fredoka] text-4xl font-extrabold tracking-tight text-[#12261A] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.08]">
              Pass your driving <br className="hidden sm:inline" />
              test without the <br className="hidden sm:inline" />
              <span className="relative inline-block text-[#58CC02]">
                boring bits.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#3F9400]"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="#58CC02"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[#324B3C] sm:text-xl font-medium leading-relaxed">
              oohwheels turns the rules of the road into short game-like
              lessons, animated scenes and mock tests, in your language and for
              your exact licensing authority.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#practice"
                className="ow-btn ow-green !text-base !py-4 !px-8 text-center justify-center shadow-[0_6px_0_#3F8E00] active:shadow-[0_2px_0_#3F8E00]"
              >
                Start practicing — Free
              </a>
              <a
                href="#countries"
                className="ow-btn ow-white !text-base !py-4 !px-6 text-center justify-center"
              >
                Find your test
              </a>
            </div>

            {/* Micro proof / app badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-2 border-t border-[#E1EAD8]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className="inline-block text-[#FFC700] text-lg font-bold"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-[Fredoka] font-bold text-sm text-[#12261A]">
                  4.9 / 5 rating
                </span>
              </div>
              <span className="h-4 w-px bg-[#D5E1CA] hidden sm:block" />
              <div className="text-sm font-semibold text-[#446050]">
                ⚡ 96% first-time pass rate
              </div>
              <span className="h-4 w-px bg-[#D5E1CA] hidden sm:block" />
              <div className="text-sm font-semibold text-[#446050]">
                🌍 65+ official jurisdictions
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup with Duolingo Path */}
          <div className="relative flex justify-center lg:col-span-5">
            {/* Mascot cheering next to phone */}
            <div className="absolute -top-10 -left-6 z-20 animate-float hidden sm:block">
              <div className="relative">
                <WhizzyMascot size={74} />
                <div className="absolute -top-6 left-12 whitespace-nowrap rounded-2xl border-2 border-[#12261A] bg-white px-3 py-1 font-[Fredoka] text-xs font-bold text-[#12261A] shadow-[0_2px_0_#12261A]">
                  Let&apos;s roll! 🚗💨
                </div>
              </div>
            </div>

            {/* Floating XP pill */}
            <div className="absolute top-16 -right-3 sm:-right-8 z-30 animate-bounce">
              <div className="flex items-center gap-1.5 rounded-2xl border-2 border-[#E5B200] bg-[#FFC700] px-4 py-2 font-[Fredoka] text-base font-extrabold text-[#12261A] shadow-[0_4px_0_#CC9E00]">
                <Sparkles className="h-4 w-4 text-[#12261A]" />
                <span>+10 XP</span>
              </div>
            </div>

            {/* Phone Container */}
            <div className="relative w-full max-w-[340px] rounded-[44px] border-[8px] border-[#1F2D24] bg-white p-3 shadow-2xl">
              {/* Phone Camera Notch */}
              <div className="absolute top-3 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-[#1F2D24]" />

              {/* Screen Content */}
              <div className="mt-4 overflow-hidden rounded-[32px] bg-[#FAFDF7] pb-6 pt-2">
                {/* App Top Bar */}
                <div className="flex items-center justify-between border-b border-[#E8EFE3] px-4 py-3">
                  <div className="relative">
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="cursor-pointer appearance-none rounded-xl border-2 border-[#D5E6C8] bg-[#EBF4E5] px-2.5 py-1 font-[Fredoka] text-xs font-bold text-[#12261A] outline-none"
                    >
                      <option value="IN">🇮🇳 IN</option>
                      <option value="GB">🇬🇧 GB</option>
                      <option value="AE">🇦🇪 AE</option>
                      <option value="US">🇺🇸 US</option>
                      <option value="CA">🇨🇦 CA</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 font-[Fredoka] text-xs font-bold text-[#E56300]">
                      <Flame className="h-3.5 w-3.5 fill-[#FF7800] text-[#FF7800]" />
                      <span>5</span>
                    </div>
                    <div className="flex items-center gap-1 font-[Fredoka] text-xs font-bold text-[#1CB0F6]">
                      <span className="text-xs">💎</span>
                      <span>120</span>
                    </div>
                    <div className="flex items-center gap-1 font-[Fredoka] text-xs font-bold text-[#FF4B4B]">
                      <Heart className="h-3.5 w-3.5 fill-[#FF4B4B] text-[#FF4B4B]" />
                      <span>5</span>
                    </div>
                  </div>
                </div>

                {/* Unit Header */}
                <div className="mx-3 mt-3 rounded-2xl bg-[#58CC02] p-4 text-white shadow-[0_4px_0_#3F8E00]">
                  <div className="font-[Fredoka] text-[11px] font-extrabold uppercase tracking-wider text-[#D5FF9C]">
                    UNIT 2
                  </div>
                  <div className="font-[Fredoka] text-lg font-bold leading-tight">
                    Road signs & markings
                  </div>
                </div>

                {/* Duolingo Style Learning Path */}
                <div className="relative mt-8 flex flex-col items-center gap-5 px-6">
                  {/* Node 1: Completed */}
                  <div className="relative flex flex-col items-center">
                    <button
                      className="group flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#46A302] bg-[#58CC02] text-white shadow-[0_5px_0_#3F8E00] transition active:translate-y-1 active:shadow-[0_1px_0_#3F8E00]"
                      aria-label="Lesson 1 - Completed"
                    >
                      <Check className="h-8 w-8 stroke-[3.5]" />
                    </button>
                    <span className="mt-1 font-[Fredoka] text-[11px] font-bold text-[#567362]">
                      Basics
                    </span>
                  </div>

                  {/* Node 2: Completed (Curved offset) */}
                  <div className="relative -ml-14 flex flex-col items-center">
                    <button
                      className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#46A302] bg-[#58CC02] text-white shadow-[0_5px_0_#3F8E00] transition active:translate-y-1 active:shadow-[0_1px_0_#3F8E00]"
                      aria-label="Lesson 2 - Completed"
                    >
                      <Check className="h-8 w-8 stroke-[3.5]" />
                    </button>
                    <span className="mt-1 font-[Fredoka] text-[11px] font-bold text-[#567362]">
                      Speed limits
                    </span>
                  </div>

                  {/* Node 3: Active with bouncy START tooltip */}
                  <div className="relative flex flex-col items-center">
                    {/* Floating START pill */}
                    <div className="absolute -top-7 right-[-48px] animate-pulse rounded-xl border border-[#D5E1CA] bg-white px-2.5 py-1 font-[Fredoka] text-[11px] font-extrabold tracking-wider text-[#12261A] shadow-[0_2px_0_#CBD5E1]">
                      START
                    </div>
                    <button
                      onClick={() => setActiveLesson(3)}
                      className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#E5B200] bg-[#FFC700] text-[#12261A] shadow-[0_5px_0_#CC9E00] transition hover:scale-105 active:translate-y-1 active:shadow-[0_1px_0_#CC9E00]"
                      aria-label="Lesson 3 - Start lesson"
                    >
                      <Play className="h-7 w-7 fill-[#12261A] stroke-none ml-1" />
                    </button>
                    <span className="mt-1 font-[Fredoka] text-[11px] font-bold text-[#12261A]">
                      Give Way
                    </span>
                  </div>

                  {/* Node 4: Locked (Offset right) */}
                  <div className="relative ml-14 flex flex-col items-center opacity-70">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D1D5DB] bg-[#E5E7EB] text-[#9CA3AF] shadow-[0_5px_0_#CBD5E1]">
                      <Lock className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <span className="mt-1 font-[Fredoka] text-[11px] font-bold text-[#9CA3AF]">
                      Roundabouts
                    </span>
                  </div>

                  {/* Node 5: Locked */}
                  <div className="relative flex flex-col items-center opacity-70">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D1D5DB] bg-[#E5E7EB] text-[#9CA3AF] shadow-[0_5px_0_#CBD5E1]">
                      <Lock className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <span className="mt-1 font-[Fredoka] text-[11px] font-bold text-[#9CA3AF]">
                      Mock test
                    </span>
                  </div>
                </div>

                {/* Bottom navigation tab simulation */}
                <div className="mt-8 flex justify-around border-t border-[#E8EFE3] pt-3 text-xs font-bold text-[#8FA597]">
                  <span className="text-[#58CC02] border-b-2 border-[#58CC02] pb-1">
                    Learn
                  </span>
                  <span>Practice</span>
                  <span>Mock Exam</span>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
