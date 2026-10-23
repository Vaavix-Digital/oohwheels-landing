import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of use — oohwheels",
  description:
    "Terms covering subscription billing, cancellation and the independent study aid disclaimer.",
};

const termsSections = [
  {
    id: "using",
    h: "Using oohwheels",
    p: "By using the website or app you agree to these terms. You must be old enough to hold or apply for a driving licence in your country, or have a parent or guardian's permission.",
  },
  {
    id: "disclaimer",
    h: "Independent study aid",
    p: "oohwheels is an independent study aid. It is not affiliated with or endorsed by any driving licensing authority. Always confirm current rules with your local authority. Passing our mock tests does not guarantee you will pass the official test.",
  },
  {
    id: "accounts",
    h: "Your account",
    p: "Keep your sign-in details safe. You are responsible for activity on your account.",
  },
  {
    id: "billing",
    h: "Subscription billing",
    p: "Premium costs $3.99 per month and is billed monthly through the App Store or Google Play. Local currency is shown where the store allows it, and the store sets the final amount.",
  },
  {
    id: "cancel",
    h: "Cancellation",
    p: "You can cancel Premium at any time in your store subscription settings. You keep Premium until the end of the period you have paid for. Refunds follow the policy of the store you used.",
  },
  {
    id: "acceptable",
    h: "Acceptable use",
    p: "Do not copy, resell or scrape our content, or interfere with the service.",
  },
  {
    id: "liability",
    h: "Liability",
    p: "The service is provided as is. To the extent the law allows, we are not liable for indirect losses arising from your use of oohwheels.",
  },
  {
    id: "changes",
    h: "Changes to these terms",
    p: "We may update these terms. We will change the date above and tell you about important changes.",
  },
];

export default function TermsPage() {
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
                <span>Terms of use</span>
              </span>
            </nav>
            <span className="ow-label">Legal</span>
            <h1 className="ow-h1s max-w-3xl">Terms of use</h1>
            <span className="ow-chip mt-5">Last updated: October 18, 2026</span>
          </div>
        </section>

        {/* Content Section */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap grid gap-12 lg:grid-cols-[240px_minmax(0,720px)]">
            {/* Table of contents */}
            <nav aria-label="Table of contents" className="hidden lg:block">
              <ul className="sticky top-24 space-y-2 text-[15px] font-bold">
                {termsSections.map((sec) => (
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

              {termsSections.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24">
                  <h2>{sec.h}</h2>
                  <p>{sec.p}</p>
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
