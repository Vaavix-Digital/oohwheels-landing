"use client";

import React from "react";
import { WhizzyMascot } from "./WhizzyMascot";
import { Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

export const CtaSection: React.FC = () => {
  return (
    <section className="bg-[#58CC02] py-20 text-center overflow-hidden">
      <div className="ow-wrap flex flex-col items-center">
        <Reveal delay={0.1} className="flex justify-center">
          <WhizzyMascot size={160} mood="cheer" className="ow-bob" />
        </Reveal>
        <Reveal>
          <h2 className="ow-h2 mt-4 font-[Fredoka] font-bold text-[#12261A]">
            Ready to pass first time?
          </h2>
          <p className="ow-lead mt-4 max-w-xl !text-[#12261A]">
            oohwheels is launching soon on iOS and Android. Start free and be
            test-ready sooner.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-8 flex justify-center w-full">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="ow-btn ow-ink w-full sm:w-auto"
            >
              <Smartphone size={20} strokeWidth={2.5} />
              Get it on iPhone
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="ow-btn ow-white w-full sm:w-auto"
            >
              <Smartphone size={20} strokeWidth={2.5} />
              Get it on Android
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaSection;
