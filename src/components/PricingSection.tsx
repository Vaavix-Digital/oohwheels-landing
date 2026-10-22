import React from "react";
import { Check } from "lucide-react";

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 border-t border-[#E1EAD8]">
      <div className="ow-wrap">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D5E6C8] bg-white px-4 py-1.5 shadow-[0_2px_0_#D5E6C8]">
            <span className="font-[Fredoka] text-xs font-bold tracking-wider text-[#347802] uppercase sm:text-sm">
              SIMPLE, HONEST PRICING
            </span>
          </div>

          <h2 className="mt-5 font-[Fredoka] text-3xl font-extrabold tracking-tight text-[#12261A] sm:text-4xl md:text-5xl">
            Start free. Upgrade when you&apos;re ready.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#324B3C] font-medium leading-relaxed">
            Choose at sign-up and switch any time from your profile.
          </p>
        </div>

        {/* 2 Pricing Cards */}
        <div className="mt-12 grid max-w-4xl mx-auto gap-8 md:grid-cols-2 items-stretch">
          {/* Free Card */}
          <div className="flex flex-col justify-between rounded-[32px] border-2 border-[#D7E3CE] bg-white p-8 shadow-[0_8px_0_#D7E3CE] transition-all hover:-translate-y-1">
            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold text-[#12261A]">
                Free with ads
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-[Fredoka] text-5xl font-extrabold text-[#12261A]">
                  $0
                </span>
                <span className="text-base font-bold text-[#557362]">
                  forever
                </span>
              </div>

              {/* Checklist */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#2C4837]">
                    Full learning path and practice
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#2C4837]">
                    One mock test every week
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#2C4837]">
                    Limited hearts, earn more by practising or watching an ad
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#2C4837]">
                    Ads on hub screens and after lessons, never during questions, tests or scenes
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="ow-btn ow-white w-full !py-3.5 text-center justify-center font-[Fredoka] font-bold text-base">
                Start free
              </button>
            </div>
          </div>

          {/* Premium Card (Dark Luxury Theme) */}
          <div className="relative flex flex-col justify-between rounded-[32px] border-2 border-[#12261A] bg-[#12261A] p-8 text-white shadow-2xl transition-all hover:-translate-y-1">
            {/* Best Value Badge */}
            <div className="absolute top-6 right-6">
              <span className="rounded-full bg-[#FFC700] px-3.5 py-1 font-[Fredoka] text-xs font-black uppercase tracking-wider text-[#12261A] shadow-[0_2px_0_#CC9E00]">
                BEST VALUE
              </span>
            </div>

            <div>
              <h3 className="font-[Fredoka] text-2xl font-bold text-white">
                Premium
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-[Fredoka] text-5xl font-extrabold text-[#FFC700]">
                  $3.99
                </span>
                <span className="text-base font-bold text-[#A5C99E]">
                  per month
                </span>
              </div>

              {/* Checklist */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#E2EBD8]">
                    No ads, anywhere
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#E2EBD8]">
                    Unlimited hearts
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#E2EBD8]">
                    Every mock test, whenever you like
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#E2EBD8]">
                    Full video library and offline downloads
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#58CC02] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-[#E2EBD8]">
                    Advanced progress analytics & weakness finder
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="ow-btn ow-green w-full !py-3.5 text-center justify-center font-[Fredoka] font-bold text-base shadow-[0_4px_0_#3F8E00]">
                Go Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
