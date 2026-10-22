"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";

interface SceneOption {
  id: string;
  title: string;
  subtitle: string;
  caption: string;
  ruleExplanation: string;
}

const SCENES: SceneOption[] = [
  {
    id: "giveway",
    title: "Junctions: give way",
    subtitle: "Inverted triangle & priority",
    caption:
      "Yellow car yields at the inverted triangle. Always give priority to vehicles on the main road before pulling out.",
    ruleExplanation:
      "The inverted red triangle is the international symbol for 'Give Way' or 'Yield'. You do not need to stop completely if the road is clear, but you MUST yield to oncoming traffic.",
  },
  {
    id: "roundabout",
    title: "Roundabouts: lane choice",
    subtitle: "Taking 2nd exit & signaling",
    caption:
      "Stay in the left lane when turning left or going straight, and indicate when exiting.",
    ruleExplanation:
      "Always give priority to traffic already on the roundabout coming from your right (or left in right-hand drive jurisdictions). Mirror, signal, maneuver.",
  },
  {
    id: "pedestrian",
    title: "Zebra crossings: pedestrians",
    subtitle: "Full stop & clear view",
    caption:
      "Stop before the stripes when pedestrians approach or place a foot on the crossing.",
    ruleExplanation:
      "Never overtake another vehicle that has stopped at a pedestrian crossing, as your view of crossing pedestrians is obstructed.",
  },
];

export const AnimatedScenesSection: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<number>(1);
  const [showCaptions, setShowCaptions] = useState(true);
  const [progress, setProgress] = useState(30);

  const currentScene = SCENES[activeSceneIndex];

  // Animation timer loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1 * speed;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  // Car positions calculated from progress
  const mainCarX = (progress * 3.4) % 360 - 30; // moves from left to right
  const sideCarY =
    progress < 45
      ? 160 - progress * 1.5 // approaching junction
      : progress < 70
      ? 92 // waiting at give way line for main car
      : 92 - (progress - 70) * 1.8; // turning left onto main road

  const sideCarX =
    progress < 70
      ? 155
      : 155 - (progress - 70) * 2.2; // turning into left lane

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="ow-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#BAE6FD] bg-[#E0F2FE] px-4 py-1.5 shadow-[0_2px_0_#BAE6FD]">
              <span className="font-[Fredoka] text-xs font-bold tracking-wider text-[#0284C7] uppercase sm:text-sm">
                ANIMATED SCENES
              </span>
            </div>

            <h2 className="mt-5 font-[Fredoka] text-3xl font-extrabold tracking-tight text-[#12261A] sm:text-4xl md:text-5xl leading-tight">
              See the rule happen, <br />
              then you will remember it.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#324B3C] font-medium leading-relaxed">
              Short animated scenes show junctions, roundabouts, crossings and
              overtaking from above. Pause on the key moment, replay, slow it
              down and switch the narration and captions to your language.
            </p>

            {/* Interactive Scene Selector Tabs */}
            <div className="mt-8 flex flex-col gap-3">
              {SCENES.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    setActiveSceneIndex(idx);
                    setProgress(0);
                    setIsPlaying(true);
                  }}
                  className={`flex items-center justify-between rounded-2xl border-2 p-4 text-left transition-all ${
                    activeSceneIndex === idx
                      ? "border-[#58CC02] bg-[#EBF7DF] shadow-[0_4px_0_#58CC02]"
                      : "border-[#E1EAD8] bg-white hover:border-[#CADAC0]"
                  }`}
                >
                  <div>
                    <div className="font-[Fredoka] text-base font-bold text-[#12261A]">
                      {scene.title}
                    </div>
                    <div className="text-xs font-semibold text-[#547562]">
                      {scene.subtitle}
                    </div>
                  </div>
                  <span
                    className={`font-[Fredoka] text-xs font-bold uppercase rounded-lg px-2.5 py-1 ${
                      activeSceneIndex === idx
                        ? "bg-[#58CC02] text-white"
                        : "bg-[#F0F5EB] text-[#547562]"
                    }`}
                  >
                    {activeSceneIndex === idx ? "Playing" : "Inspect"}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#D5E1CA] bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚦</span>
                <div>
                  <h4 className="font-[Fredoka] text-sm font-bold text-[#12261A]">
                    Key Highway Rule:
                  </h4>
                  <p className="mt-1 text-xs text-[#446251] leading-relaxed">
                    {currentScene.ruleExplanation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Phone Screen */}
          <div className="flex justify-center lg:col-span-6">
            <div className="relative w-full max-w-[360px] rounded-[44px] border-[8px] border-[#1F2D24] bg-white p-3 shadow-2xl">
              {/* Camera Notch */}
              <div className="absolute top-3 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-[#1F2D24]" />

              <div className="mt-3 overflow-hidden rounded-[32px] bg-[#FAFDF7]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#E8EFE3] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="font-[Fredoka] text-xs font-bold text-[#8FA597]">
                      ✕
                    </span>
                    <span className="font-[Fredoka] text-sm font-bold text-[#12261A]">
                      {currentScene.title}
                    </span>
                  </div>
                  <span className="rounded-full bg-[#E5F3D6] px-2 py-0.5 font-[Fredoka] text-[10px] font-bold text-[#356B13]">
                    Interactive 3D
                  </span>
                </div>

                {/* Animated Bird's-Eye Junction View */}
                <div className="relative h-[280px] w-full overflow-hidden bg-[#A3C785]">
                  {/* Surrounding Grass with roadside trees */}
                  <div className="absolute top-3 left-3 h-5 w-5 rounded-full bg-[#8EB76E] shadow-sm" />
                  <div className="absolute top-10 right-4 h-6 w-6 rounded-full bg-[#8EB76E] shadow-sm" />
                  <div className="absolute bottom-4 left-4 h-6 w-6 rounded-full bg-[#8EB76E] shadow-sm" />
                  <div className="absolute bottom-4 right-4 h-5 w-5 rounded-full bg-[#8EB76E] shadow-sm" />

                  {/* Horizontal Main Road */}
                  <div className="absolute top-[60px] left-0 h-[64px] w-full bg-[#4A5568]">
                    {/* Road Center Dotted Line */}
                    <div className="absolute top-[30px] left-0 h-[2px] w-full border-t-2 border-dashed border-white/80" />
                  </div>

                  {/* Vertical Side Road */}
                  <div className="absolute top-[124px] left-[135px] h-[160px] w-[60px] bg-[#4A5568]">
                    {/* Give way double broken line */}
                    <div className="absolute top-[2px] left-0 h-[4px] w-full border-t-2 border-b-2 border-white" />

                    {/* Zebra crossing stripes */}
                    <div className="absolute top-[28px] left-[6px] flex w-[48px] justify-between">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="h-6 w-1.5 bg-white" />
                      ))}
                    </div>
                  </div>

                  {/* Give Way Sign on Side of Road */}
                  <div className="absolute top-[132px] left-[110px] flex flex-col items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="3,4 21,4 12,20"
                        fill="white"
                        stroke="#E53E3E"
                        strokeWidth="3.5"
                      />
                    </svg>
                    <span className="font-[Fredoka] text-[8px] font-bold text-white bg-red-600 px-1 rounded shadow">
                      GIVE WAY
                    </span>
                  </div>

                  {/* Pedestrian walking on zebra crossing */}
                  <div
                    className="absolute top-[160px] h-3.5 w-3.5 rounded-full bg-[#FFA07A] border border-[#12261A] shadow-sm transition-all duration-300"
                    style={{
                      left: progress < 50 ? `${145 + progress * 0.4}px` : "165px",
                    }}
                  />

                  {/* Blue Car on Main Road (Priority) */}
                  <div
                    className="absolute top-[68px] z-10 flex h-[24px] w-[42px] items-center justify-center rounded-lg bg-[#3182CE] shadow-md border border-[#2B6CB0]"
                    style={{ left: `${mainCarX}px` }}
                  >
                    <div className="h-2 w-3 rounded-sm bg-sky-200/80" />
                    <div className="absolute -left-1 top-1 h-1.5 w-1 rounded-sm bg-yellow-300 animate-pulse" />
                  </div>

                  {/* Yellow Car on Side Road (Yielding) */}
                  <div
                    className="absolute z-10 flex h-[42px] w-[24px] flex-col items-center justify-center rounded-lg bg-[#ECC94B] shadow-md border border-[#D69E2E] transition-all duration-100"
                    style={{
                      top: `${sideCarY}px`,
                      left: `${sideCarX}px`,
                      transform: progress > 70 ? "rotate(-45deg)" : "rotate(0deg)",
                    }}
                  >
                    <div className="h-3 w-2 rounded-sm bg-sky-100/90" />
                    {/* Blinking indicator */}
                    <div className="absolute -top-1 left-0.5 h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping" />
                  </div>
                </div>

                {/* Video Controls Bar */}
                <div className="p-4 bg-white border-t border-[#E8EFE3]">
                  {/* Progress Slider */}
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#E2E8F0]">
                    <div
                      className="h-full bg-[#58CC02] transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Buttons Bar */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setProgress(0)}
                        className="rounded-xl p-2 text-[#4A5568] hover:bg-[#F0F5EB]"
                        title="Replay scene"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#58CC02] text-white shadow-[0_2px_0_#3F8E00] active:translate-y-0.5"
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4 fill-white" />
                        ) : (
                          <Play className="h-4 w-4 fill-white ml-0.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setSpeed((s) => (s === 1 ? 1.5 : s === 1.5 ? 0.5 : 1))
                        }
                        className="rounded-lg border border-[#D1D5DB] px-2 py-0.5 font-[Fredoka] text-xs font-bold text-[#4A5568]"
                      >
                        {speed}x
                      </button>

                      <button
                        onClick={() => setShowCaptions(!showCaptions)}
                        className={`rounded-lg border px-2 py-0.5 font-[Fredoka] text-xs font-bold ${
                          showCaptions
                            ? "border-[#58CC02] bg-[#EBF7DF] text-[#347802]"
                            : "border-[#D1D5DB] text-[#9CA3AF]"
                        }`}
                      >
                        CC
                      </button>
                    </div>
                  </div>

                  {/* Subtitle / Caption Card */}
                  {showCaptions && (
                    <div className="mt-3 rounded-xl bg-[#F7FAF4] border border-[#E1EBD8] p-2.5 text-xs font-medium text-[#2C4B37] leading-relaxed">
                      💬 &ldquo;{currentScene.caption}&rdquo;
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
