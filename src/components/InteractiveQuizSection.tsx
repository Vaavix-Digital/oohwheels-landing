"use client";

import React, { useState } from "react";
import { Check, Heart, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import { WhizzyMascot } from "./WhizzyMascot";

interface QuestionItem {
  id: number;
  question: string;
  signType: "ahead_only" | "no_entry" | "speed_30" | "pedestrian";
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    question: "What does this sign mean to you?",
    signType: "ahead_only",
    options: ["Ahead only", "No entry", "One-way traffic"],
    correctIndex: 0,
    explanation: "A blue circle is an order: follow it. Circles that are blue give a mandatory command you must obey.",
    category: "Regulatory Signs",
  },
  {
    id: 2,
    question: "What does a circular sign with a red border indicate?",
    signType: "no_entry",
    options: ["An order what NOT to do (Prohibition)", "A temporary road recommendation", "A tourist attraction ahead"],
    correctIndex: 0,
    explanation: "Red circles are mostly prohibitive: they tell you what you MUST NOT do.",
    category: "Highway Code Fundamentals",
  },
  {
    id: 3,
    question: "In wet weather, stopping distances are usually:",
    signType: "speed_30",
    options: ["The same as in dry weather", "At least double the distance", "Reduced because tires grip better"],
    correctIndex: 1,
    explanation: "Wet conditions reduce tire grip significantly. Always leave at least double the standard stopping gap.",
    category: "Road Safety & Distances",
  },
];

export const InteractiveQuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(10);
  const [hearts, setHearts] = useState(5);

  const q = QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    if (idx === q.correctIndex) {
      setScore((s) => s + 10);
    } else {
      setHearts((h) => Math.max(1, h - 1));
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    setCurrentIdx((prev) => (prev + 1) % QUESTIONS.length);
  };

  const isCorrect = selectedOption === q.correctIndex;

  return (
    <section id="how" className="py-16 md:py-24 bg-[#EEF5E6]/60 border-t border-[#E1EAD8]">
      <div className="ow-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Interactive Phone Question Screen */}
          <div className="flex justify-center lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full max-w-[360px] rounded-[44px] border-[8px] border-[#1F2D24] bg-white p-3 shadow-2xl">
              {/* Camera Notch */}
              <div className="absolute top-3 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-[#1F2D24]" />

              <div className="mt-3 overflow-hidden rounded-[32px] bg-[#FAFDF7] flex flex-col min-h-[520px]">
                {/* Header Stats */}
                <div className="flex items-center justify-between border-b border-[#E8EFE3] px-4 py-3 bg-white">
                  {/* Progress bar */}
                  <div className="h-2.5 w-32 rounded-full bg-[#E5EFE0] overflow-hidden">
                    <div
                      className="h-full bg-[#58CC02] transition-all duration-300"
                      style={{
                        width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 font-[Fredoka] text-xs font-bold text-[#E56300]">
                      <Sparkles className="h-3.5 w-3.5 text-[#FFC700] fill-[#FFC700]" />
                      <span>{score} XP</span>
                    </div>
                    <div className="flex items-center gap-1 font-[Fredoka] text-xs font-bold text-[#FF4B4B]">
                      <Heart className="h-3.5 w-3.5 fill-[#FF4B4B] text-[#FF4B4B]" />
                      <span>{hearts}</span>
                    </div>
                  </div>
                </div>

                {/* Question Body */}
                <div className="p-5 flex-1 flex flex-col items-center">
                  <span className="font-[Fredoka] text-[11px] font-bold text-[#567562] uppercase tracking-wider">
                    {q.category} · Question {currentIdx + 1} of {QUESTIONS.length}
                  </span>

                  <h3 className="mt-2 text-center font-[Fredoka] text-xl font-bold text-[#12261A] leading-snug">
                    {q.question}
                  </h3>

                  {/* Sign Display */}
                  <div className="my-5 flex items-center justify-center">
                    {q.signType === "ahead_only" && (
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#005EA6] shadow-md ring-4 ring-[#005EA6]/20">
                        <svg
                          width="52"
                          height="52"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="19" x2="12" y2="5" />
                          <polyline points="5 12 12 5 19 12" />
                        </svg>
                      </div>
                    )}

                    {q.signType === "no_entry" && (
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#D9381E] bg-white shadow-md ring-4 ring-[#D9381E]/20">
                        <div className="h-4 w-16 rounded-full bg-[#D9381E]" />
                      </div>
                    )}

                    {q.signType === "speed_30" && (
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-[#D9381E] bg-white shadow-md">
                        <span className="font-[Fredoka] text-3xl font-extrabold text-[#12261A]">
                          30
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  <div className="w-full flex flex-col gap-2.5">
                    {q.options.map((opt, i) => {
                      let btnStyle =
                        "border-[#E2EBD8] bg-white text-[#12261A] shadow-[0_3px_0_#D5E1CA] hover:border-[#CADAC0]";

                      if (hasAnswered) {
                        if (i === q.correctIndex) {
                          btnStyle =
                            "border-[#46A302] bg-[#EBF7DF] text-[#2F6904] shadow-[0_3px_0_#3F8E00]";
                        } else if (i === selectedOption) {
                          btnStyle =
                            "border-[#EA4335] bg-[#FDE8E8] text-[#C5221F] shadow-[0_3px_0_#D93025]";
                        }
                      }

                      return (
                        <button
                          key={i}
                          disabled={hasAnswered}
                          onClick={() => handleSelect(i)}
                          className={`w-full rounded-2xl border-2 p-3.5 text-left font-[Fredoka] text-sm font-bold transition-all active:translate-y-0.5 ${btnStyle}`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{opt}</span>
                            {hasAnswered && i === q.correctIndex && (
                              <Check className="h-5 w-5 text-[#46A302] stroke-[3]" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Instant Feedback Bottom Sheet */}
                {hasAnswered && (
                  <div
                    className={`p-4 border-t-2 animate-in slide-in-from-bottom-2 ${
                      isCorrect
                        ? "bg-[#58CC02] border-[#46A302] text-white"
                        : "bg-[#EA4335] border-[#D93025] text-white"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-[Fredoka] text-lg font-extrabold">
                          {isCorrect ? "Nice! +10 XP" : "Almost there!"}
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-white/95">
                          {q.explanation}
                        </p>
                      </div>
                      <WhizzyMascot
                        size={36}
                        expression={isCorrect ? "happy" : "surprised"}
                      />
                    </div>

                    <button
                      onClick={handleNext}
                      className="ow-btn ow-white mt-3 w-full !text-sm !py-2.5 text-center justify-center font-[Fredoka] font-bold"
                    >
                      {currentIdx + 1 === QUESTIONS.length
                        ? "Restart Practice"
                        : "Continue"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D5E6C8] bg-white px-4 py-1.5 shadow-[0_2px_0_#D5E6C8]">
              <span className="font-[Fredoka] text-xs font-bold tracking-wider text-[#347802] uppercase sm:text-sm">
                PRACTICE WITH FEEDBACK
              </span>
            </div>

            <h2 className="mt-5 font-[Fredoka] text-3xl font-extrabold tracking-tight text-[#12261A] sm:text-4xl md:text-5xl leading-tight">
              Questions you actually <br />
              want to answer.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#324B3C] font-medium leading-relaxed">
              Bite-size questions with instant feedback. Get one wrong and
              Whizzy shows you why, then brings it back later until it sticks.
              Hearts, XP and streaks make ten minutes a day an easy habit.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white shadow-[0_2px_0_#3F8E00]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-[Fredoka] text-base font-bold text-[#12261A]">
                    Picture, true or false, multi-select, ordering and hotspot questions
                  </h4>
                  <p className="text-sm text-[#4E6858] mt-0.5">
                    Never grind boring text lists. Realistic high-res sign graphics and intersection diagrams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white shadow-[0_2px_0_#3F8E00]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-[Fredoka] text-base font-bold text-[#12261A]">
                    A short reason for every answer, with a scene one tap away
                  </h4>
                  <p className="text-sm text-[#4E6858] mt-0.5">
                    Understand the &apos;why&apos; behind each rule instead of blindly memorizing numbers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white shadow-[0_2px_0_#3F8E00]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-[Fredoka] text-base font-bold text-[#12261A]">
                    Save any question, or report one that looks out of date
                  </h4>
                  <p className="text-sm text-[#4E6858] mt-0.5">
                    Bookmark tricky questions to a personalized revision bucket before test day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
