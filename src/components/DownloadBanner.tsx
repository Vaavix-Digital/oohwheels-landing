import React from "react";
import { WhizzyMascot } from "./WhizzyMascot";
import { Smartphone, Download } from "lucide-react";

export const DownloadBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#58CC02] py-16 text-white">
      {/* Decorative background dashed tire tracks */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full border-8 border-dashed border-white/20" />
      <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full border-8 border-dashed border-white/15" />

      <div className="ow-wrap relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="rounded-3xl bg-white p-3 shadow-lg">
              <WhizzyMascot size={80} expression="happy" />
            </div>

            <div>
              <span className="font-[Fredoka] text-xs font-black uppercase tracking-widest text-[#D5FF9C]">
                READY TO PASS YOUR THEORY TEST?
              </span>
              <h2 className="mt-1 font-[Fredoka] text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Start your streak today.
              </h2>
              <p className="mt-2 text-base font-medium text-[#E8FFD0] max-w-xl">
                Join 250,000+ drivers passing their official test without boring
                handbooks. Free on iOS and Android.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="ow-btn ow-white !text-sm !py-3.5 !px-6 shadow-[0_4px_0_#CBD5E1]"
            >
              <span className="text-xl mr-2"></span> App Store
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="ow-btn ow-dark !text-sm !py-3.5 !px-6"
            >
              <span className="text-lg mr-2">▶</span> Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
