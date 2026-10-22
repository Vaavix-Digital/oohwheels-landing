import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { FaqClient } from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently asked questions — oohwheels",
  description:
    "Common questions about oohwheels features and the driving test process.",
};

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />
      <FaqClient />
      <CtaSection />
      <Footer />
    </div>
  );
}
