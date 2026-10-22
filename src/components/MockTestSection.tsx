"use client";

import React, { useState } from "react";
import { Check, Target, Clock, AlertTriangle, ArrowRight } from "lucide-react";

export const MockTestSection: React.FC = () => {
  const [readinessScore, setReadinessScore] = useState(94);

  return (
    <section className="py-16 md:py-24 border-t border-[#E1EAD8]">
      <div className="ow-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#DDD6FE] bg-[#EDE9FE] px-4 py-1.5 shadow-[0_2px_0_#DDD6FE]">
              <span className="font-[Fredoka] text-xs font-bold tracking-wider text-[#6D28D9] uppercase sm:text-sm">
                EXAM READINESS
              </span>
            </div>

            <h2 className="mt-5 font-[Fredoka] text-3xl font-extrabold tracking-tight text-[#12261A] sm:text-4xl md:text-5xl leading-tight">
              Know you&apos;ll pass <br />
              before you book.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#324B3C] font-medium leading-relaxed">
              Official mock tests simulate the real timed exam pressure with
              strict pass marks, randomized questions and instant breakdowns of
              every mistake so there are zero surprises on test day.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6] text-white shadow-[0_2px_0_#6D28D9]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-[Fredoka] text-base font-bold text-[#12261A]">
                    Exam-style timer, question palette and flag-for-review
                  </h4>
                  <p className="text-sm text-[#4E6858] mt-0.5">
                    Practice pacing yourself with 57 minutes on the clock, just like at the official test center.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6] text-white shadow-[0_2px_0_#6D28D9]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-[Fredoka] text-base font-bold text-[#12261A]">
                    Readiness score with a three-step plan each week
                  </h4>
                  <p className="text-sm text-[#4E6858] mt-0.5">
                    Our AI diagnostic pinpoints exactly which syllabus areas are costing you marks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6] text-white shadow-[0_2px_0_#6D28D9]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-[Fredoka] text-base font-bold text-[#12261A]">
                    Review every answer, with its scene, after you finish
                  </h4>
                  <p className="text-sm text-[#4E6858] mt-0.5">
                    Jump straight to visual 3D scene explanations for any question you flagged or missed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup with Exam Readiness Gauge */}
          <div className="flex justify-center lg:col-span-6">
            <div className="relative w-full max-w-[360px] rounded-[44px] border-[8px] border-[#1F2D24] bg-white p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-[#1F2D24]" />

              <div className="mt-3 overflow-hidden rounded-[32px] bg-[#FAFDF7] p-5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#E8EFE3] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-[Fredoka] text-sm font-bold text-[#12261A]">
                      Mock Exam #4 Result
                    </span>
                  </div>
                  <span className="rounded-full bg-[#E5F3D6] px-2.5 py-0.5 font-[Fredoka] text-xs font-bold text-[#356B13]">
                    PASSED 🎉
                  </span>
                </div>

                {/* Score Dial / Card */}
                <div className="mt-5 rounded-3xl border-2 border-[#D9E6CF] bg-white p-5 text-center shadow-[0_4px_0_#D9E6CF]">
                  <span className="font-[Fredoka] text-xs font-bold uppercase tracking-wider text-[#547361]">
                    Test Day Readiness
                  </span>

                  <div className="my-3 flex items-center justify-center">
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#58CC02] bg-[#F4F9EE]">
                      <div className="text-center">
                        <span className="font-[Fredoka] text-3xl font-extrabold text-[#12261A]">
                          {readinessScore}%
                        </span>
                        <div className="text-[10px] font-bold text-[#58CC02] uppercase tracking-wider">
                          Ready!
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-[#446050]">
                    Score: <strong className="text-[#12261A]">47 / 50</strong>{" "}
                    (Pass Mark: 43) • Time: 34 mins
                  </p>
                </div>

                {/* Weak Spots Diagnostic List */}
                <div className="mt-4 rounded-2xl border border-[#E2EBD8] bg-white p-4">
                  <div className="flex items-center justify-between border-b border-[#EDF3E7] pb-2 font-[Fredoka] text-xs font-bold text-[#12261A]">
                    <span>Syllabus Category</span>
                    <span>Status</span>
                  </div>

                  <div className="mt-3 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-semibold text-[#12261A]">
                        <span className="h-2 w-2 rounded-full bg-[#58CC02]" />
                        <span>Road & Traffic Signs</span>
                      </div>
                      <span className="font-[Fredoka] font-bold text-[#58CC02]">
                        100%
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-semibold text-[#12261A]">
                        <span className="h-2 w-2 rounded-full bg-[#58CC02]" />
                        <span>Motorway Regulations</span>
                      </div>
                      <span className="font-[Fredoka] font-bold text-[#58CC02]">
                        96%
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-semibold text-[#12261A]">
                        <span className="h-2 w-2 rounded-full bg-[#FF7800]" />
                        <span>Stopping Distances (Wet)</span>
                      </div>
                      <span className="font-[Fredoka] font-bold text-[#E56300]">
                        2 to review
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons inside Mockup */}
                <div className="mt-5 flex flex-col gap-2.5">
                  <button className="ow-btn ow-green w-full !py-3 !text-xs font-[Fredoka] font-bold text-center justify-center">
                    Fix my weak spots
                  </button>
                  <button className="ow-btn ow-white w-full !py-3 !text-xs font-[Fredoka] font-bold text-center justify-center">
                    Review answers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
