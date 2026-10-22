import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import {
  ChevronRight,
  Flame,
  Gem,
  Heart,
  Check,
  Play,
  Lock,
  House,
  Dumbbell,
  Trophy,
  BookOpen,
  User,
  X,
  RotateCcw,
  Pause,
  ArrowUp,
  Smartphone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App guide — oohwheels",
  description:
    "See how oohwheels works from your first lesson to a passed mock test in five steps.",
};

// Phone Mockup 1 & 2: The Learning Path
function LearnPathPhone() {
  return (
    <div className="ow-phone" role="group" aria-label="oohwheels Learn screen">
      <div className="ow-phone-in">
        <div className="flex items-center justify-between px-3 pt-4 text-[13px] font-extrabold text-[#12261A]">
          <span className="rounded-full border-2 border-[#B5E1F7] bg-[#E1F4FE] px-2.5 py-0.5">
            IN
          </span>
          <span className="flex items-center gap-1">
            <Flame size={18} fill="#FF9600" stroke="#FF9600" strokeWidth={2} />
            5
          </span>
          <span className="flex items-center gap-1">
            <Gem size={17} fill="#1CB0F6" stroke="#1CB0F6" strokeWidth={2} />
            120
          </span>
          <span className="flex items-center gap-1">
            <Heart size={17} fill="#FF4B4B" stroke="#FF4B4B" strokeWidth={2} />
            5
          </span>
        </div>

        <div
          className="mx-3 mt-3 rounded-2xl bg-[#58CC02] px-3 py-2.5 text-[#12261A]"
          style={{ boxShadow: "rgb(63, 148, 0) 0px 4px 0px" }}
        >
          <div className="text-[11px] font-extrabold uppercase tracking-wider opacity-80">
            Unit 2
          </div>
          <div className="font-[Fredoka] text-lg font-semibold">Road signs</div>
        </div>

        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="relative" style={{ transform: "translateX(0px)" }}>
            <div
              className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
              style={{
                background: "rgb(88, 204, 2)",
                boxShadow: "rgb(63, 148, 0) 0px 5px 0px",
              }}
            >
              <Check size={26} strokeWidth={3} />
            </div>
          </div>

          <div className="relative" style={{ transform: "translateX(-34px)" }}>
            <div
              className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
              style={{
                background: "rgb(88, 204, 2)",
                boxShadow: "rgb(63, 148, 0) 0px 5px 0px",
              }}
            >
              <Check size={26} strokeWidth={3} />
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
                boxShadow: "rgb(209, 159, 0) 0px 5px 0px",
              }}
            >
              <Play
                size={24}
                fill="#12261A"
                stroke="currentColor"
                strokeWidth={2.6}
              />
            </div>
          </div>

          <div className="relative" style={{ transform: "translateX(34px)" }}>
            <div
              className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
              style={{
                background: "rgb(229, 229, 229)",
                boxShadow: "rgb(201, 201, 201) 0px 5px 0px",
              }}
            >
              <Lock size={22} stroke="#8a8a8a" strokeWidth={2.6} />
            </div>
          </div>

          <div className="relative" style={{ transform: "translateX(0px)" }}>
            <div
              className="grid h-[54px] w-[54px] place-items-center rounded-full text-[#12261A]"
              style={{
                background: "rgb(229, 229, 229)",
                boxShadow: "rgb(201, 201, 201) 0px 5px 0px",
              }}
            >
              <Lock size={22} stroke="#8a8a8a" strokeWidth={2.6} />
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
            <House size={20} stroke="#12261A" strokeWidth={2.4} />
          </span>
          <span className="grid h-9 w-11 place-items-center rounded-xl">
            <Dumbbell size={20} stroke="#12261A" strokeWidth={2.4} />
          </span>
          <span className="grid h-9 w-11 place-items-center rounded-xl">
            <Trophy size={20} stroke="#12261A" strokeWidth={2.4} />
          </span>
          <span className="grid h-9 w-11 place-items-center rounded-xl">
            <BookOpen size={20} stroke="#12261A" strokeWidth={2.4} />
          </span>
          <span className="grid h-9 w-11 place-items-center rounded-xl">
            <User size={20} stroke="#12261A" strokeWidth={2.4} />
          </span>
        </div>
      </div>
    </div>
  );
}

// Phone Mockup 3: Animated Junction Scene
function JunctionScenePhone() {
  return (
    <div
      className="ow-phone"
      role="group"
      aria-label="Animated scene: junctions, give way"
    >
      <div className="ow-phone-in">
        <div className="h-full">
          <div className="flex items-center gap-2 px-3 pt-4">
            <X size={20} stroke="#12261A" strokeWidth={2.6} />
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
              <rect x="99" y="132" width="5" height="14" fill="#fff" />
              <rect x="108" y="132" width="5" height="14" fill="#fff" />
              <rect x="117" y="132" width="5" height="14" fill="#fff" />
              <rect x="126" y="132" width="5" height="14" fill="#fff" />
              <rect x="135" y="132" width="5" height="14" fill="#fff" />
              <g className="ow-drive">
                <g transform="translate(-50 103)">
                  <rect width="36" height="18" rx="6" fill="#1CB0F6" />
                  <rect
                    x="22"
                    y="3"
                    width="9"
                    height="12"
                    rx="3"
                    fill="#E1F4FE"
                  />
                </g>
              </g>
              <g className="ow-wait">
                <g transform="translate(122 164)">
                  <rect width="18" height="34" rx="6" fill="#FFC800" />
                  <rect
                    x="3"
                    y="4"
                    width="12"
                    height="8"
                    rx="3"
                    fill="#FFF5CC"
                  />
                </g>
              </g>
              <polygon
                points="150,150 172,150 161,170"
                fill="#fff"
                stroke="#FF4B4B"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="mx-3 mt-3 h-2 overflow-hidden rounded-full bg-[#E5E5E5]">
            <div className="ow-scrub h-full rounded-full bg-[#1CB0F6]" />
          </div>

          <div className="mx-3 mt-3 flex items-center gap-2">
            <button
              className="grid h-9 w-9 place-items-center rounded-full bg-[#E1F4FE]"
              aria-label="Replay"
            >
              <RotateCcw size={16} stroke="#12261A" strokeWidth={2.6} />
            </button>
            <button
              className="grid h-9 w-9 place-items-center rounded-full bg-[#E1F4FE]"
              aria-label="Pause"
            >
              <Pause size={16} stroke="#12261A" strokeWidth={2.6} />
            </button>
            <span className="ml-auto rounded-full bg-[#E1F4FE] px-2.5 py-1 text-xs font-extrabold text-[#12261A]">
              1x
            </span>
            <span className="rounded-full bg-[#E1F4FE] px-2.5 py-1 text-xs font-extrabold text-[#12261A]">
              CC
            </span>
          </div>

          <div className="mx-3 mt-3 rounded-2xl border-2 border-[#F0D870] bg-[#FFF5CC] p-3 text-[13px] font-bold text-[#12261A]">
            Give way to traffic on the main road, even if the junction looks
            empty.
          </div>

          <div className="absolute inset-x-3 bottom-4">
            <div className="ow-btn ow-green w-full !min-h-[44px]">Got it</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Phone Mockup 4: Practice Question Screen
function PracticeQuestionPhone() {
  return (
    <div
      className="ow-phone"
      role="group"
      aria-label="Practice question screen"
    >
      <div className="ow-phone-in">
        <div className="flex items-center gap-2 px-3 pt-4">
          <X size={20} stroke="#12261A" strokeWidth={2.6} />
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#E5E5E5]">
            <div className="h-full w-3/5 rounded-full bg-[#58CC02]" />
          </div>
          <span className="flex items-center gap-1 text-sm font-extrabold text-[#12261A]">
            <Heart size={17} fill="#FF4B4B" stroke="#FF4B4B" strokeWidth={2} />
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
          <ArrowUp size={52} stroke="#fff" strokeWidth={3.2} />
        </div>

        <div className="mt-4 space-y-2 px-3">
          <button
            className="w-full rounded-2xl border-2 px-3 py-2.5 text-left text-[15px] font-bold text-[#12261A] transition"
            style={{
              borderColor: "rgb(88, 204, 2)",
              background: "rgb(234, 248, 214)",
              boxShadow: "rgb(63, 148, 0) 0px 3px 0px",
            }}
          >
            Ahead only
          </button>
          <button
            className="w-full rounded-2xl border-2 px-3 py-2.5 text-left text-[15px] font-bold text-[#12261A] transition"
            style={{
              borderColor: "rgb(227, 237, 214)",
              boxShadow: "rgb(227, 237, 214) 0px 3px 0px",
            }}
          >
            No entry
          </button>
          <button
            className="w-full rounded-2xl border-2 px-3 py-2.5 text-left text-[15px] font-bold text-[#12261A] transition"
            style={{
              borderColor: "rgb(227, 237, 214)",
              boxShadow: "rgb(227, 237, 214) 0px 3px 0px",
            }}
          >
            One-way traffic
          </button>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 p-4"
          style={{ background: "rgb(88, 204, 2)" }}
        >
          <div className="font-[Fredoka] text-lg font-semibold text-[#12261A]">
            Nice! +10 XP
          </div>
          <div className="text-[13px] font-semibold text-[#12261A]">
            A blue circle is an order: follow it.
          </div>
          <div className="ow-btn ow-white mt-2 w-full !min-h-[42px]">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}

// Phone Mockup 5: Mock Test Result Screen
function MockTestResultPhone() {
  return (
    <div className="ow-phone" role="group" aria-label="Mock test result screen">
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
            />
            <path
              d="M20 100 A80 80 0 0 1 180 100"
              fill="none"
              stroke="#58CC02"
              strokeWidth="16"
              strokeLinecap="round"
              pathLength="100"
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
          <div>
            <div className="flex justify-between text-xs font-bold text-[#12261A]">
              <span>Road signs</span>
              <span>92%</span>
            </div>
            <div className="mt-0.5 h-2.5 overflow-hidden rounded-full bg-[#E5E5E5]">
              <div
                className="ow-grow h-full rounded-full"
                style={{ width: "92%", background: "rgb(88, 204, 2)" }}
              />
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
              />
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
              />
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
              />
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
  );
}

export default function AppGuidePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "rgb(225, 244, 254)" }}
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
                <span>App guide</span>
              </span>
            </nav>
            <span className="ow-label">App walkthrough</span>
            <h1 className="ow-h1s max-w-3xl">See how oohwheels works.</h1>
            <p className="ow-lead mt-4 max-w-2xl">
              From your first lesson to a passed mock test, here is the whole
              journey in five steps.
            </p>
          </div>
        </section>

        {/* 5 Steps Section */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap space-y-16">
            {/* Step 1 */}
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full font-[Fredoka] text-2xl font-bold text-[#12261A]"
                    style={{
                      background: "rgb(88, 204, 2)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    1
                  </div>
                  <h2 className="mt-5 text-[28px]">Pick your test</h2>
                  <p className="ow-lead mt-3 max-w-lg">
                    Choose your country and the licensing authority where you
                    will sit the test. The whole course follows that authority.
                  </p>
                </div>
                <div className="flex justify-center">
                  <LearnPathPhone />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className="lg:order-2">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full font-[Fredoka] text-2xl font-bold text-[#12261A]"
                    style={{
                      background: "rgb(28, 176, 246)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    2
                  </div>
                  <h2 className="mt-5 text-[28px]">Follow the path</h2>
                  <p className="ow-lead mt-3 max-w-lg">
                    Short lessons unlock one after another. Each takes a few
                    minutes and ends with a quick check.
                  </p>
                </div>
                <div className="flex justify-center lg:order-1">
                  <LearnPathPhone />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full font-[Fredoka] text-2xl font-bold text-[#12261A]"
                    style={{
                      background: "rgb(255, 200, 0)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    3
                  </div>
                  <h2 className="mt-5 text-[28px]">Watch the scenes</h2>
                  <p className="ow-lead mt-3 max-w-lg">
                    Animated scenes show real situations from above. Pause,
                    replay and switch the language of the narration.
                  </p>
                </div>
                <div className="flex justify-center">
                  <JunctionScenePhone />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className="lg:order-2">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full font-[Fredoka] text-2xl font-bold text-[#12261A]"
                    style={{
                      background: "rgb(133, 73, 186)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    4
                  </div>
                  <h2 className="mt-5 text-[28px]">Practise with feedback</h2>
                  <p className="ow-lead mt-3 max-w-lg">
                    Answer bite-size questions and get an instant reason for
                    every answer. Get one wrong and it comes back later.
                  </p>
                </div>
                <div className="flex justify-center lg:order-1">
                  <PracticeQuestionPhone />
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full font-[Fredoka] text-2xl font-bold text-[#12261A]"
                    style={{
                      background: "rgb(255, 150, 0)",
                      boxShadow: "rgba(18, 38, 26, 0.25) 0px 4px 0px",
                    }}
                  >
                    5
                  </div>
                  <h2 className="mt-5 text-[28px]">Pass a mock test</h2>
                  <p className="ow-lead mt-3 max-w-lg">
                    Take a timed mock test that matches your real exam. Your
                    readiness score tells you when you are ready to book.
                  </p>
                </div>
                <div className="flex justify-center">
                  <MockTestResultPhone />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to try it yourself Section */}
        <section className="bg-[#EAF8D6] py-16">
          <div className="ow-wrap flex flex-col items-center text-center">
            <h2 className="ow-h2f">Ready to try it yourself?</h2>
            <p className="ow-lead mt-4 max-w-xl">
              oohwheels is launching soon on iOS and Android. Start free and be
              test-ready sooner.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-green"
                >
                  <Smartphone size={20} strokeWidth={2.5} />
                  Get it on iPhone
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-ink"
                >
                  <Smartphone size={20} strokeWidth={2.5} />
                  Get it on Android
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CtaSection />

      <Footer />
    </div>
  );
}
