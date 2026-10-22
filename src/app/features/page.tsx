"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import {
  ChevronRight,
  Check,
  X,
  RotateCcw,
  Pause,
  Play,
  Heart,
  ArrowUp,
  Download,
  Flame,
  Crown,
  Route,
  Languages,
  Target,
  Signpost,
  Trophy,
  CalendarDays,
  Car,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function FeaturesPage() {
  // Animated scene pause/play state
  const [isScenePaused, setIsScenePaused] = useState(false);
  const [sceneKey, setSceneKey] = useState(0);

  // Practice quiz interactive state
  const [practiceAnswer, setPracticeAnswer] = useState<number>(0);
  const isPracticeCorrect = practiceAnswer === 0;

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero Banner */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "rgb(234, 248, 214)" }}
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
                <span>Features</span>
              </span>
            </nav>
            <span className="ow-label">Features</span>
            <h1 className="ow-h1s max-w-3xl">
              Everything you need to pass first time.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl">
              A closer look at the scenes, questions, mock tests and offline
              mode inside oohwheels.
            </p>
          </div>
        </section>

        {/* 1. Animated Scenes */}
        <section
          id="scenes"
          className="ow-sec"
          style={{ background: "rgb(225, 244, 254)" }}
        >
          <div className="ow-wrap grid items-center gap-14 lg:grid-cols-2">
            <div>
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
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(28, 176, 246)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  10 to 40 second clips, never a wall of text
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(28, 176, 246)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Speed control, captions and replay on every scene
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(28, 176, 246)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Scenes also play inside questions: watch, then decide
                </li>
              </ul>
            </div>

            <div
              className="flex justify-center"
            >
              <div
                className={`ow-phone ${isScenePaused ? "ow-paused" : ""}`}
                role="group"
                aria-label="Animated scene: junctions, give way"
                key={sceneKey}
              >
                <div className="ow-phone-in">
                  <div className="h-full">
                    <div className="flex items-center gap-2 px-3 pt-4">
                      <X size={20} color="#12261A" strokeWidth={2.6} />
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
                        <rect width="240" height="200" fill="#CDEFA8"></rect>
                        <rect y="60" width="240" height="70" fill="#5B6B73"></rect>
                        <rect
                          x="95"
                          y="60"
                          width="50"
                          height="140"
                          fill="#5B6B73"
                        ></rect>
                        <line
                          x1="0"
                          y1="95"
                          x2="240"
                          y2="95"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeDasharray="10 8"
                        ></line>
                        <line
                          x1="120"
                          y1="140"
                          x2="120"
                          y2="200"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeDasharray="8 8"
                        ></line>
                        <rect
                          x="99"
                          y="132"
                          width="5"
                          height="14"
                          fill="#fff"
                        ></rect>
                        <rect
                          x="108"
                          y="132"
                          width="5"
                          height="14"
                          fill="#fff"
                        ></rect>
                        <rect
                          x="117"
                          y="132"
                          width="5"
                          height="14"
                          fill="#fff"
                        ></rect>
                        <rect
                          x="126"
                          y="132"
                          width="5"
                          height="14"
                          fill="#fff"
                        ></rect>
                        <rect
                          x="135"
                          y="132"
                          width="5"
                          height="14"
                          fill="#fff"
                        ></rect>
                        <g className="ow-drive">
                          <g transform="translate(-50 103)">
                            <rect
                              width="36"
                              height="18"
                              rx="6"
                              fill="#1CB0F6"
                            ></rect>
                            <rect
                              x="22"
                              y="3"
                              width="9"
                              height="12"
                              rx="3"
                              fill="#E1F4FE"
                            ></rect>
                          </g>
                        </g>
                        <g className="ow-wait">
                          <g transform="translate(122 164)">
                            <rect
                              width="18"
                              height="34"
                              rx="6"
                              fill="#FFC800"
                            ></rect>
                            <rect
                              x="3"
                              y="4"
                              width="12"
                              height="8"
                              rx="3"
                              fill="#FFF5CC"
                            ></rect>
                          </g>
                        </g>
                        <polygon
                          points="150,150 172,150 161,170"
                          fill="#fff"
                          stroke="#FF4B4B"
                          strokeWidth="4"
                          strokeLinejoin="round"
                        ></polygon>
                      </svg>
                    </div>

                    <div className="mx-3 mt-3 h-2 overflow-hidden rounded-full bg-[#E5E5E5]">
                      <div className="ow-scrub h-full rounded-full bg-[#1CB0F6]"></div>
                    </div>

                    <div className="mx-3 mt-3 flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSceneKey((prev) => prev + 1);
                          setIsScenePaused(false);
                        }}
                        className="grid h-9 w-9 place-items-center rounded-full bg-[#E1F4FE] transition hover:bg-[#b5e1f7]"
                        aria-label="Replay"
                      >
                        <RotateCcw size={16} color="#12261A" strokeWidth={2.6} />
                      </button>
                      <button
                        onClick={() => setIsScenePaused((prev) => !prev)}
                        className="grid h-9 w-9 place-items-center rounded-full bg-[#E1F4FE] transition hover:bg-[#b5e1f7]"
                        aria-label={isScenePaused ? "Play" : "Pause"}
                      >
                        {isScenePaused ? (
                          <Play size={16} color="#12261A" strokeWidth={2.6} />
                        ) : (
                          <Pause size={16} color="#12261A" strokeWidth={2.6} />
                        )}
                      </button>
                      <span className="ml-auto rounded-full bg-[#E1F4FE] px-2.5 py-1 text-xs font-extrabold text-[#12261A]">
                        1x
                      </span>
                      <span className="rounded-full bg-[#E1F4FE] px-2.5 py-1 text-xs font-extrabold text-[#12261A]">
                        CC
                      </span>
                    </div>

                    <div className="mx-3 mt-3 rounded-2xl border-2 border-[#F0D870] bg-[#FFF5CC] p-3 text-[13px] font-bold text-[#12261A]">
                      Give way to traffic on the main road, even if the junction
                      looks empty.
                    </div>

                    <div className="absolute inset-x-3 bottom-4">
                      <button
                        onClick={() => {
                          setSceneKey((prev) => prev + 1);
                          setIsScenePaused(false);
                        }}
                        className="ow-btn ow-green w-full !min-h-[44px]"
                      >
                        Got it
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Practice that feels like play */}
        <section
          id="practice"
          className="ow-sec"
          style={{ background: "rgb(251, 253, 246)" }}
        >
          <div className="ow-wrap grid items-center gap-14 lg:grid-cols-2">
            <div className="lg:order-2">
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
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(88, 204, 2)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Picture, true or false, multi-select, ordering, matching and
                  hotspot questions
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(88, 204, 2)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  A short reason for every answer, with a scene one tap away
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(88, 204, 2)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Save any question, or report one that looks out of date
                </li>
              </ul>
            </div>

            <div
              className="flex justify-center lg:order-1"
            >
              <div
                className="ow-phone"
                role="group"
                aria-label="Practice question screen"
              >
                <div className="ow-phone-in">
                  <div className="flex items-center gap-2 px-3 pt-4">
                    <X size={20} color="#12261A" strokeWidth={2.6} />
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#E5E5E5]">
                      <div className="h-full w-3/5 rounded-full bg-[#58CC02]"></div>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-extrabold text-[#12261A]">
                      <Heart size={17} color="#FF4B4B" fill="#FF4B4B" />
                      4
                    </span>
                  </div>

                  <div className="px-4 pt-5 text-center font-[Fredoka] text-xl font-semibold text-[#12261A]">
                    What does this sign tell you?
                  </div>

                  <div
                    className="mx-auto mt-4 grid h-24 w-24 place-items-center rounded-full bg-[#1CB0F6]"
                    style={{
                      boxShadow: "rgb(20, 136, 190) 0px 5px 0px",
                      border: "4px solid rgb(255, 255, 255)",
                      outline: "rgb(20, 136, 190) solid 3px",
                    }}
                  >
                    <ArrowUp size={52} color="#fff" strokeWidth={3.2} />
                  </div>

                  <div className="mt-4 space-y-2 px-3">
                    {["Ahead only", "No entry", "One-way traffic"].map(
                      (optionText, i) => {
                        const isSelected = practiceAnswer === i;
                        const isCorrect = i === 0;
                        return (
                          <button
                            key={optionText}
                            onClick={() => setPracticeAnswer(i)}
                            className="w-full rounded-2xl border-2 px-3 py-2.5 text-left text-[15px] font-bold text-[#12261A] transition"
                            style={
                              isSelected
                                ? {
                                    borderColor: isCorrect
                                      ? "rgb(88, 204, 2)"
                                      : "rgb(255, 75, 75)",
                                    background: isCorrect
                                      ? "rgb(234, 248, 214)"
                                      : "rgb(255, 227, 227)",
                                    boxShadow: isCorrect
                                      ? "rgb(63, 148, 0) 0px 3px 0px"
                                      : "rgb(217, 58, 58) 0px 3px 0px",
                                  }
                                : {
                                    borderColor: "rgb(227, 237, 214)",
                                    boxShadow: "rgb(227, 237, 214) 0px 3px 0px",
                                    background: "transparent",
                                  }
                            }
                          >
                            {optionText}
                          </button>
                        );
                      }
                    )}
                  </div>

                  <div
                    className="absolute inset-x-0 bottom-0 p-4 transition-colors"
                    style={{
                      background: isPracticeCorrect
                        ? "rgb(88, 204, 2)"
                        : "rgb(255, 75, 75)",
                    }}
                  >
                    <div className="font-[Fredoka] text-lg font-semibold text-[#12261A]">
                      {isPracticeCorrect ? "Nice! +10 XP" : "Not quite"}
                    </div>
                    <div className="text-[13px] font-semibold text-[#12261A]">
                      {isPracticeCorrect
                        ? "A blue circle is an order: follow it."
                        : "Look again: a blue circle is an order, not a warning."}
                    </div>
                    <button
                      onClick={() => setPracticeAnswer((prev) => (prev + 1) % 3)}
                      className="ow-btn ow-white mt-2 w-full !min-h-[42px]"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mock tests and readiness */}
        <section
          id="mock"
          className="ow-sec"
          style={{ background: "rgb(239, 227, 248)" }}
        >
          <div className="ow-wrap grid items-center gap-14 lg:grid-cols-2">
            <div>
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
                Timed mock tests follow the format and pass mark of your
                licensing authority. Your readiness score and weak-spot trainer
                tell you exactly what to study this week, so nothing on test day
                is a surprise.
              </p>
              <ul className="mt-7 space-y-4">
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(133, 73, 186)",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Exam-style timer, question palette and flag-for-review
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(133, 73, 186)",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Readiness score with a three-step plan each week
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(133, 73, 186)",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Review every answer, with its scene, after you finish
                </li>
              </ul>
            </div>

            <div
              className="flex justify-center"
            >
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
                        pathLength="100"
                      ></path>
                      <path
                        d="M20 100 A80 80 0 0 1 180 100"
                        fill="none"
                        stroke="#58CC02"
                        strokeWidth="16"
                        strokeLinecap="round"
                        pathLength="100"
                        className="ow-gauge"
                      ></path>
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
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#12261A]">
                        <span>Road signs</span>
                        <span>92%</span>
                      </div>
                      <div className="mt-0.5 h-2.5 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full"
                          style={{ width: "92%", background: "rgb(88, 204, 2)" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#12261A]">
                        <span>Right of way</span>
                        <span>74%</span>
                      </div>
                      <div className="mt-0.5 h-2.5 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full"
                          style={{ width: "74%", background: "rgb(255, 150, 0)" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#12261A]">
                        <span>Hazards</span>
                        <span>58%</span>
                      </div>
                      <div className="mt-0.5 h-2.5 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full"
                          style={{ width: "58%", background: "rgb(255, 75, 75)" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#12261A]">
                        <span>Parking</span>
                        <span>85%</span>
                      </div>
                      <div className="mt-0.5 h-2.5 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full"
                          style={{ width: "85%", background: "rgb(88, 204, 2)" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 space-y-2">
                    <div className="ow-btn ow-green w-full !min-h-[42px] !text-[13px]">
                      Fix my weak spots
                    </div>
                    <div className="ow-btn ow-outline w-full !min-h-[42px] !text-[13px]">
                      Review answers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Offline learning */}
        <section
          id="offline"
          className="ow-sec"
          style={{ background: "rgb(251, 253, 246)" }}
        >
          <div className="ow-wrap grid items-center gap-14 lg:grid-cols-2">
            <div className="lg:order-2">
              <span
                className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest"
                style={{
                  background: "rgb(255, 200, 0)",
                  color: "rgb(18, 38, 26)",
                }}
              >
                Offline learning
              </span>
              <h2 className="ow-h2f">Study anywhere, even without signal.</h2>
              <p className="ow-lead mt-5">
                Premium members can download units, scenes and mock tests on
                Wi-Fi, then keep learning on the bus, on a flight or wherever
                the signal drops.
              </p>
              <ul className="mt-7 space-y-4">
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(255, 200, 0)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Choose exactly which units to download
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(255, 200, 0)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Progress syncs when you are back online
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(255, 200, 0)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Full video library included with Premium
                </li>
              </ul>
            </div>

            <div
              className="flex justify-center lg:order-1"
            >
              <div
                className="ow-phone"
                role="group"
                aria-label="Offline downloads screen"
              >
                <div className="ow-phone-in">
                  <div className="px-4 pt-5 font-[Fredoka] text-xl font-semibold text-[#12261A]">
                    Offline learning
                  </div>
                  <div className="mx-4 mt-2 rounded-xl bg-[#FFF5CC] px-3 py-2 text-xs font-bold text-[#12261A]">
                    Premium: study anywhere, no data needed.
                  </div>
                  <div className="mt-4 space-y-3 px-4">
                    <div
                      className="rounded-2xl border-2 border-[#E3EDD6] p-3"
                      style={{ boxShadow: "rgb(227, 237, 214) 0px 3px 0px" }}
                    >
                      <div className="flex items-center justify-between text-sm font-extrabold text-[#12261A]">
                        Road signs
                        <span
                          className="grid h-7 w-7 place-items-center rounded-full"
                          style={{ background: "rgb(88, 204, 2)" }}
                        >
                          <Check size={16} strokeWidth={3} color="#12261A" />
                        </span>
                      </div>
                      <div className="text-xs text-[#55665D]">Downloaded</div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full bg-[#1CB0F6]"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>

                    <div
                      className="rounded-2xl border-2 border-[#E3EDD6] p-3"
                      style={{ boxShadow: "rgb(227, 237, 214) 0px 3px 0px" }}
                    >
                      <div className="flex items-center justify-between text-sm font-extrabold text-[#12261A]">
                        Right of way
                        <span
                          className="grid h-7 w-7 place-items-center rounded-full"
                          style={{ background: "rgb(88, 204, 2)" }}
                        >
                          <Check size={16} strokeWidth={3} color="#12261A" />
                        </span>
                      </div>
                      <div className="text-xs text-[#55665D]">Downloaded</div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full bg-[#1CB0F6]"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>

                    <div
                      className="rounded-2xl border-2 border-[#E3EDD6] p-3"
                      style={{ boxShadow: "rgb(227, 237, 214) 0px 3px 0px" }}
                    >
                      <div className="flex items-center justify-between text-sm font-extrabold text-[#12261A]">
                        Hazards
                        <span
                          className="grid h-7 w-7 place-items-center rounded-full"
                          style={{ background: "rgb(225, 244, 254)" }}
                        >
                          <Download size={15} strokeWidth={2.6} color="#12261A" />
                        </span>
                      </div>
                      <div className="text-xs text-[#55665D]">Downloading</div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full bg-[#1CB0F6]"
                          style={{ width: "64%" }}
                        ></div>
                      </div>
                    </div>

                    <div
                      className="rounded-2xl border-2 border-[#E3EDD6] p-3"
                      style={{ boxShadow: "rgb(227, 237, 214) 0px 3px 0px" }}
                    >
                      <div className="flex items-center justify-between text-sm font-extrabold text-[#12261A]">
                        Parking
                        <span
                          className="grid h-7 w-7 place-items-center rounded-full"
                          style={{ background: "rgb(225, 244, 254)" }}
                        >
                          <Download size={15} strokeWidth={2.6} color="#12261A" />
                        </span>
                      </div>
                      <div className="text-xs text-[#55665D]">
                        Tap to download
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#E5E5E5]">
                        <div
                          className="ow-grow h-full rounded-full bg-[#1CB0F6]"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Streaks and leagues */}
        <section
          id="streaks"
          className="ow-sec"
          style={{ background: "rgb(255, 245, 204)" }}
        >
          <div className="ow-wrap grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span
                className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest"
                style={{
                  background: "rgb(255, 150, 0)",
                  color: "rgb(18, 38, 26)",
                }}
              >
                Streaks and leagues
              </span>
              <h2 className="ow-h2f">Make ten minutes a day a habit.</h2>
              <p className="ow-lead mt-5">
                Streaks, XP and a weekly league give you a reason to come back
                tomorrow, so the rules stick long before test day.
              </p>
              <ul className="mt-7 space-y-4">
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(255, 150, 0)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Daily streak with a friendly reminder
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(255, 150, 0)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Earn XP for every correct answer
                </li>
                <li className="ow-tick">
                  <i
                    style={{
                      background: "rgb(255, 150, 0)",
                      color: "rgb(18, 38, 26)",
                    }}
                  >
                    <Check size={15} strokeWidth={3.2} color="#12261A" />
                  </i>
                  Climb the weekly league
                </li>
              </ul>
            </div>

            <div
              className="flex justify-center"
            >
              <div
                className="ow-phone"
                role="group"
                aria-label="Streaks and leagues screen"
              >
                <div className="ow-phone-in">
                  <div className="px-4 pt-5 text-center">
                    <Flame
                      size={44}
                      color="#FF9600"
                      fill="#FF9600"
                      strokeWidth={2}
                      className="ow-bob mx-auto"
                    />
                    <div className="font-[Fredoka] text-3xl font-bold text-[#12261A]">
                      5 day streak
                    </div>
                    <div className="text-xs font-bold text-[#55665D]">
                      Practise today to keep it going
                    </div>
                  </div>

                  <div className="mt-3 flex justify-center gap-1.5">
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold text-[#12261A]"
                      style={{ background: "rgb(255, 200, 0)" }}
                    >
                      M
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold text-[#12261A]"
                      style={{ background: "rgb(255, 200, 0)" }}
                    >
                      T
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold text-[#12261A]"
                      style={{ background: "rgb(255, 200, 0)" }}
                    >
                      W
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold text-[#12261A]"
                      style={{ background: "rgb(255, 200, 0)" }}
                    >
                      T
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold text-[#12261A]"
                      style={{ background: "rgb(255, 200, 0)" }}
                    >
                      F
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold text-[#12261A]"
                      style={{ background: "rgb(229, 229, 229)" }}
                    >
                      S
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold text-[#12261A]"
                      style={{ background: "rgb(229, 229, 229)" }}
                    >
                      S
                    </span>
                  </div>

                  <div className="mx-4 mt-4 flex items-center gap-2 font-[Fredoka] font-semibold text-[#12261A]">
                    <Crown size={18} stroke="#D19F00" strokeWidth={2} />
                    Weekly league
                  </div>

                  <div className="mt-2 space-y-2 px-4">
                    <div
                      className="flex items-center gap-3 rounded-2xl border-2 px-3 py-2 text-sm font-extrabold text-[#12261A]"
                      style={{
                        borderColor: "rgb(88, 204, 2)",
                        background: "rgb(234, 248, 214)",
                      }}
                    >
                      <span className="w-4">1</span>You
                      <span className="ml-auto text-xs">320 XP</span>
                    </div>
                    <div
                      className="flex items-center gap-3 rounded-2xl border-2 px-3 py-2 text-sm font-extrabold text-[#12261A]"
                      style={{
                        borderColor: "rgb(227, 237, 214)",
                        background: "rgb(255, 255, 255)",
                      }}
                    >
                      <span className="w-4">2</span>Aisha
                      <span className="ml-auto text-xs">280 XP</span>
                    </div>
                    <div
                      className="flex items-center gap-3 rounded-2xl border-2 px-3 py-2 text-sm font-extrabold text-[#12261A]"
                      style={{
                        borderColor: "rgb(227, 237, 214)",
                        background: "rgb(255, 255, 255)",
                      }}
                    >
                      <span className="w-4">3</span>Rahul
                      <span className="ml-auto text-xs">240 XP</span>
                    </div>
                    <div
                      className="flex items-center gap-3 rounded-2xl border-2 px-3 py-2 text-sm font-extrabold text-[#12261A]"
                      style={{
                        borderColor: "rgb(227, 237, 214)",
                        background: "rgb(255, 255, 255)",
                      }}
                    >
                      <span className="w-4">4</span>Liam
                      <span className="ml-auto text-xs">190 XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. How it works */}
        <section id="how" className="ow-sec scroll-mt-[72px] bg-[#EAF8D6]">
          <div className="ow-wrap">
            <div className="max-w-3xl">
              <span className="ow-label">How it works</span>
              <h2 className="ow-h2 font-[Fredoka] font-bold text-[#12261A]">
                From download to driving test in{" "}
                <br className="hidden sm:inline" />
                four steps.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full font-[Fredoka] text-2xl font-bold"
                    style={{
                      background: "rgb(88, 204, 2)",
                      color: "rgb(18, 38, 26)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    1
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Pick your test
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Choose your country and the licensing authority where you
                    will sit the test.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full font-[Fredoka] text-2xl font-bold"
                    style={{
                      background: "rgb(28, 176, 246)",
                      color: "rgb(18, 38, 26)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    2
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Set your goal
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Tell us your test date and how many minutes a day you can
                    give.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full font-[Fredoka] text-2xl font-bold"
                    style={{
                      background: "rgb(255, 200, 0)",
                      color: "rgb(18, 38, 26)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    3
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Learn, watch, practise
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Follow the path: short lessons, animated scenes and
                    instant-feedback questions.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full font-[Fredoka] text-2xl font-bold"
                    style={{
                      background: "rgb(133, 73, 186)",
                      color: "rgb(255, 255, 255)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    4
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Pass the mock, book the test
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Hit a strong readiness score on a mock test, then book the
                    real thing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Everything in one app */}
        <section className="ow-sec">
          <div className="ow-wrap">
            <div className="max-w-3xl">
              <span className="ow-label">Everything in one app</span>
              <h2 className="ow-h2 font-[Fredoka] font-bold text-[#12261A]">
                All you need to pass first time.
              </h2>
            </div>

            <div
              className="mt-10 grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              }}
            >
              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="ow-tile"
                    style={{
                      background: "rgb(234, 248, 214)",
                      border: "2px solid rgb(207, 232, 176)",
                    }}
                  >
                    <Route size={26} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    A path, not a pile
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Short lessons unlock one after another, so you always know
                    what to learn next.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="ow-tile"
                    style={{
                      background: "rgb(225, 244, 254)",
                      border: "2px solid rgb(181, 225, 247)",
                    }}
                  >
                    <Languages size={26} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Your language
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Questions, narration and captions in the language you think
                    in.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="ow-tile"
                    style={{
                      background: "rgb(255, 241, 176)",
                      border: "2px solid rgb(240, 216, 112)",
                    }}
                  >
                    <Target size={26} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Weak-spot trainer
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Whizzy finds the topics you miss and brings them back until
                    they stick.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="ow-tile"
                    style={{
                      background: "rgb(255, 227, 227)",
                      border: "2px solid rgb(245, 189, 189)",
                    }}
                  >
                    <Signpost size={26} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Flash signs
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Quick-fire cards that make every road sign easy to recognise.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="ow-tile"
                    style={{
                      background: "rgb(234, 248, 214)",
                      border: "2px solid rgb(207, 232, 176)",
                    }}
                  >
                    <Download size={26} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Offline learning (Premium)
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Download units and study on the bus, on a flight or without
                    data.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="ow-tile"
                    style={{
                      background: "rgb(225, 244, 254)",
                      border: "2px solid rgb(181, 225, 247)",
                    }}
                  >
                    <Trophy size={26} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Streaks and leagues
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Keep your streak alive and climb the weekly league.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="ow-tile"
                    style={{
                      background: "rgb(255, 241, 176)",
                      border: "2px solid rgb(240, 216, 112)",
                    }}
                  >
                    <CalendarDays size={26} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    Test-date countdown
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Set your test date and get a plan that fits the days you have
                    left.
                  </p>
                </div>
              </div>

              <div>
                <div className="ow-card ow-lift h-full p-6">
                  <div
                    className="ow-tile"
                    style={{
                      background: "rgb(255, 227, 227)",
                      border: "2px solid rgb(245, 189, 189)",
                    }}
                  >
                    <Car size={26} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 font-[Fredoka] text-[22px] font-semibold leading-tight text-[#12261A]">
                    After you pass
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#2B3A33]">
                    Tips for your practical test and your first weeks on the
                    road.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section Before Footer */}
        <section className="bg-[#58CC02] py-20 text-center">
          <div className="ow-wrap flex flex-col items-center">
            <WhizzyMascot size={160} mood="cheer" className="ow-bob" />
            <h2 className="ow-h2 mt-4">Ready to pass first time?</h2>
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

