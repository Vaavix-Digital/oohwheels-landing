import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy — oohwheels",
  description:
    "How oohwheels handles your data, ad personalisation consent, data download and account deletion.",
};

const privacySections = [
  {
    id: "who",
    h: "Who we are",
    content: (
      <p>
        oohwheels is a driving theory test preparation app. This policy explains
        what information we handle when you use our website and app.
      </p>
    ),
  },
  {
    id: "collect",
    h: "Information we collect",
    content: (
      <>
        <p>We collect only what we need to run the service:</p>
        <ul>
          <li>Account details such as your email and chosen country</li>
          <li>Learning progress, streaks and mock test results</li>
          <li>Messages you send through our contact form</li>
          <li>Basic device and usage information</li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    h: "How we use it",
    content: (
      <p>
        We use your information to provide lessons, track progress, answer your
        messages, keep the service secure and improve the app.
      </p>
    ),
  },
  {
    id: "ads",
    h: "Ads and personalisation consent",
    content: (
      <p>
        The free plan shows ads on hub screens and after lessons, never during
        questions, tests or scenes. In the UK, the EU and Canada we ask for your
        explicit consent before showing personalised ads. You can change your
        choice at any time in your profile, and Premium removes ads entirely.
      </p>
    ),
  },
  {
    id: "choices",
    h: "Download your data and delete your account",
    content: (
      <p>
        You can download a copy of your data and delete your account from your
        profile. Deleting your account removes your progress and personal
        information, except what we must keep by law.
      </p>
    ),
  },
  {
    id: "retention",
    h: "How long we keep data",
    content: (
      <p>
        We keep your data while your account is active and delete it after you
        close your account, unless the law requires otherwise.
      </p>
    ),
  },
  {
    id: "changes",
    h: "Changes to this policy",
    content: (
      <p>
        If we change this policy we will update the date above and tell you about
        important changes in the app.
      </p>
    ),
  },
  {
    id: "contact",
    h: "Contact",
    content: (
      <p>
        Questions about privacy? Use the contact page and choose Support.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero */}
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
                <span>Privacy policy</span>
              </span>
            </nav>
            <span className="ow-label">Legal</span>
            <h1 className="ow-h1s max-w-3xl">Privacy policy</h1>
            <span className="ow-chip mt-5">Last updated: October 18, 2026</span>
          </div>
        </section>

        {/* Content Section */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap grid gap-12 lg:grid-cols-[240px_minmax(0,720px)]">
            {/* Table of contents */}
            <nav aria-label="Table of contents" className="hidden lg:block">
              <ul className="sticky top-24 space-y-2 text-[15px] font-bold">
                {privacySections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="block rounded-lg px-3 py-1.5 hover:bg-[#EAF8D6] transition-colors"
                    >
                      {sec.h}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Prose Content */}
            <div className="ow-prose">
              <p className="rounded-2xl bg-[#FFF5CC] p-4 text-[15px] font-semibold text-[#12261A]">
                Placeholder text: this document is a draft until it has been
                reviewed by a lawyer.
              </p>

              {privacySections.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24">
                  <h2>{sec.h}</h2>
                  {sec.content}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CtaSection />

      <Footer />
    </div>
  );
}
