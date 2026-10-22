import React from "react";
import { Star, ShieldCheck, Users, Award } from "lucide-react";
import { WhizzyMascot } from "./WhizzyMascot";

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F4F7EE] border-t border-[#E1EAD8]">
      <div className="ow-wrap">
        {/* Metric Cards Row */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#D7E3CE] bg-white p-6 shadow-[0_4px_0_#D7E3CE]">
            <div className="flex items-center gap-2 text-[#FFC700]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-[#FFC700]" />
              ))}
            </div>
            <div className="mt-3 font-[Fredoka] text-3xl font-extrabold text-[#12261A]">
              4.9 / 5
            </div>
            <p className="mt-1 text-sm font-semibold text-[#547361]">
              Average score from 12,500+ learner reviews
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#D7E3CE] bg-white p-6 shadow-[0_4px_0_#D7E3CE]">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EAF7DE] text-[#58CC02]">
              <Award className="h-5 w-5" />
            </div>
            <div className="mt-3 font-[Fredoka] text-3xl font-extrabold text-[#58CC02]">
              96%
            </div>
            <p className="mt-1 text-sm font-semibold text-[#547361]">
              First-time theory test pass rate
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#D7E3CE] bg-white p-6 shadow-[0_4px_0_#D7E3CE]">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0284C7]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="mt-3 font-[Fredoka] text-3xl font-extrabold text-[#12261A]">
              65+
            </div>
            <p className="mt-1 text-sm font-semibold text-[#547361]">
              Official licensing authorities supported
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#D7E3CE] bg-white p-6 shadow-[0_4px_0_#D7E3CE]">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FAF5FF] text-[#7E22CE]">
              <Users className="h-5 w-5" />
            </div>
            <div className="mt-3 font-[Fredoka] text-3xl font-extrabold text-[#12261A]">
              250,000+
            </div>
            <p className="mt-1 text-sm font-semibold text-[#547361]">
              Learners practicing each month
            </p>
          </div>
        </div>

        {/* Real Learner Testimonial Highlight */}
        <div className="mt-12 rounded-[32px] border-2 border-[#1F2D24] bg-[#1F2D24] p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-5">
              <WhizzyMascot size={64} expression="wink" />
              <div>
                <div className="flex items-center gap-1 text-[#FFC700]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mt-1 text-lg sm:text-xl font-medium italic text-[#E2EBD8]">
                  &ldquo;I failed my theory test twice using government books.
                  Switched to oohwheels, did 15 minutes a day with Whizzy, and
                  passed with 49/50 in Manchester! The animated roundabout scenes
                  are pure genius.&rdquo;
                </blockquote>
                <div className="mt-3 font-[Fredoka] text-sm text-[#A5C99E]">
                  — Sarah K., Passed DVSA Theory Test (UK)
                </div>
              </div>
            </div>

            <a
              href="#pricing"
              className="ow-btn ow-green !text-sm !py-3 !px-6 whitespace-nowrap shadow-[0_4px_0_#3F8E00]"
            >
              Start Your Streak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
