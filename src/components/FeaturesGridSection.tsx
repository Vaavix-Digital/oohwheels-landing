import React from "react";
import {
  Globe2,
  Clock,
  Video,
  Brain,
  WifiOff,
  Trophy,
} from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  color: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: <Globe2 className="h-6 w-6 text-[#137333]" />,
    badge: "GLOBAL & LOCAL",
    title: "65 regions & 10+ languages",
    description:
      "Listen in your mother tongue and read in the official test language. Seamless bilingual voiceovers and side-by-side transcripts.",
    color: "bg-[#E6F4EA] border-[#CEEAD6]",
  },
  {
    icon: <Clock className="h-6 w-6 text-[#1E40AF]" />,
    badge: "MICRO-LEARNING",
    title: "5-minute bite-sized lessons",
    description:
      "Turn dead time on the subway, in queues, or before sleeping into active theory prep without feeling overwhelmed.",
    color: "bg-[#EFF6FF] border-[#BFDBFE]",
  },
  {
    icon: <Video className="h-6 w-6 text-[#7E22CE]" />,
    badge: "OFFICIAL CGI CLIPS",
    title: "Hazard perception practice",
    description:
      "Official high-definition video clips with cheat-proof scoring window simulation. Master when and where to click.",
    color: "bg-[#FAF5FF] border-[#E9D5FF]",
  },
  {
    icon: <Brain className="h-6 w-6 text-[#C2410C]" />,
    badge: "SMART ALGORITHM",
    title: "Spaced repetition memory",
    description:
      "Our memory engine calculates when you're about to forget a road sign and slips it into your next quiz for permanent recall.",
    color: "bg-[#FFF7ED] border-[#FED7AA]",
  },
  {
    icon: <WifiOff className="h-6 w-6 text-[#047857]" />,
    badge: "NO INTERNET NEEDED",
    title: "100% offline study mode",
    description:
      "Download entire question packs and 3D scenes to your device so you can learn on the train, subway, or in flight.",
    color: "bg-[#ECFDF5] border-[#A7F3D0]",
  },
  {
    icon: <Trophy className="h-6 w-6 text-[#A16207]" />,
    badge: "HIGH-PASS GUARANTEE",
    title: "96% first-time pass rate",
    description:
      "Learners who complete Whizzy's readiness tree pass their official theory exam on the very first try.",
    color: "bg-[#FEFCE8] border-[#FEF08A]",
  },
];

export const FeaturesGridSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white/70 border-t border-[#E1EAD8]">
      <div className="ow-wrap">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D5E6C8] bg-white px-4 py-1.5 shadow-[0_2px_0_#D5E6C8]">
            <span className="font-[Fredoka] text-xs font-bold tracking-wider text-[#347802] uppercase sm:text-sm">
              EVERYTHING IN ONE APP
            </span>
          </div>

          <h2 className="mt-5 font-[Fredoka] text-3xl font-extrabold tracking-tight text-[#12261A] sm:text-4xl md:text-5xl">
            All you need to pass first time.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#324B3C] font-medium leading-relaxed">
            Ditch outdated 400-page road textbooks. oohwheels bundles every tool,
            technique, and rule into an addictive learning companion.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border-2 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${feat.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_2px_0_rgba(0,0,0,0.06)]">
                  {feat.icon}
                </div>
                <span className="font-[Fredoka] text-[10px] font-extrabold tracking-wider text-[#12261A] uppercase rounded-full bg-white/80 px-2.5 py-1">
                  {feat.badge}
                </span>
              </div>

              <h3 className="mt-5 font-[Fredoka] text-xl font-bold text-[#12261A]">
                {feat.title}
              </h3>

              <p className="mt-2 text-sm text-[#446050] font-medium leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
