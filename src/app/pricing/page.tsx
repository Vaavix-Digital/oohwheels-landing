"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import {
  ChevronRight,
  Check,
  X,
  Plus,
  Minus,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";

interface CompareRow {
  feature: string;
  free: boolean | string;
  premium: boolean | string;
}

const compareRows: CompareRow[] = [
  { feature: "Learning path", free: true, premium: true },
  { feature: "Practice", free: true, premium: true },
  { feature: "Mock tests", free: "1 per week", premium: "All" },
  { feature: "Hearts", free: "Limited", premium: "Unlimited" },
  { feature: "Ads", free: "Shown", premium: "None" },
  { feature: "Animated scenes", free: "Limited per day", premium: "Full library" },
  { feature: "Offline downloads", free: false, premium: true },
  { feature: "Advanced analytics", free: false, premium: true },
];

const billingFaqs = [
  {
    q: "Is oohwheels really free?",
    a: "Yes. The free plan includes the full learning path, practice and one mock test every week. It is supported by ads on hub screens and after lessons, never during questions, tests or scenes.",
  },
  {
    q: "What do I get with Premium?",
    a: "Premium is $3.99 a month. It removes ads everywhere, gives you unlimited hearts, every mock test whenever you like, the full video library with offline downloads, and advanced progress analytics.",
  },
  {
    q: "How do I cancel Premium?",
    a: "Premium is billed through the App Store or Google Play, so you cancel in your store subscription settings. You keep Premium until the end of the period you paid for.",
  },
  {
    q: "How do I restore a purchase?",
    a: "Open your profile, tap Restore purchases, and sign in with the same store account you used to subscribe.",
  },
  {
    q: "What happens when Premium ends?",
    a: "You move back to the free plan with ads. Your progress, streak and saved questions stay, but offline downloads are removed.",
  },
  {
    q: "Which currency will I be charged in?",
    a: "The price is $3.99 a month. Local currency is shown where the store allows it, and the store sets the final amount.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero Banner */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "rgb(255, 245, 204)" }}
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
                <span>Pricing</span>
              </span>
            </nav>

            <span className="ow-label">Pricing</span>
            <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
              Start free. Go Premium when you want.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">
              Choose at sign-up and switch any time from your profile.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="ow-sec !pb-10">
          <div className="ow-wrap">
            <div>
              <div className="grid items-stretch gap-6 lg:grid-cols-2">
                {/* Free with Ads Plan */}
                <Reveal>
                  <div className="ow-card ow-lift h-full !rounded-[28px] p-8">
                    <h3 className="text-[26px] font-[Fredoka] font-bold text-[#12261A]">
                      Free with ads
                    </h3>
                    <div className="mt-3 font-[Fredoka] text-5xl font-bold text-[#12261A]">
                      $0{" "}
                      <span className="text-lg font-medium text-[#55665D]">
                        forever
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      <li className="ow-tick">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        Full learning path and practice
                      </li>
                      <li className="ow-tick">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        One mock test every week
                      </li>
                      <li className="ow-tick">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        Limited hearts, earn more by practising or watching an
                        ad
                      </li>
                      <li className="ow-tick">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        Ads on hub screens and after lessons, never during
                        questions, tests or scenes
                      </li>
                    </ul>

                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noreferrer"
                      className="ow-btn ow-outline mt-8 w-full"
                    >
                      Start free
                    </a>
                  </div>
                </Reveal>

                {/* Premium Plan */}
                <Reveal delay={0.1}>
                  <div
                    className="relative h-full rounded-[28px] bg-[#12261A] p-8 text-white"
                    style={{ boxShadow: "rgb(0, 0, 0) 0px 6px 0px" }}
                  >
                    <span className="absolute right-6 top-6 rounded-full bg-[#FFC800] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#12261A]">
                      Best value
                    </span>

                    <h3 className="text-[26px] font-[Fredoka] font-bold !text-white">
                      Premium
                    </h3>
                    <div className="mt-3 font-[Fredoka] text-5xl font-bold text-[#FFC800]">
                      $3.99{" "}
                      <span className="text-lg font-medium text-[#C9D6CE]">
                        per month
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      <li className="ow-tick text-[#E8F0EA]">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        No ads, anywhere
                      </li>
                      <li className="ow-tick text-[#E8F0EA]">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        Unlimited hearts
                      </li>
                      <li className="ow-tick text-[#E8F0EA]">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        Every mock test, whenever you like
                      </li>
                      <li className="ow-tick text-[#E8F0EA]">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        Full video library and offline downloads
                      </li>
                      <li className="ow-tick text-[#E8F0EA]">
                        <i style={{ background: "rgb(88, 204, 2)" }}>
                          <Check
                            size={15}
                            strokeWidth={3.2}
                            color="#12261A"
                          />
                        </i>
                        Advanced progress analytics
                      </li>
                    </ul>

                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noreferrer"
                      className="ow-btn ow-green mt-8 w-full"
                    >
                      Go Premium
                    </a>
                  </div>
                </Reveal>
              </div>

              <p className="ow-muted mt-6 max-w-2xl">
                Premium is billed monthly through the App Store or Google Play
                and can be cancelled any time. Local currency is shown where the
                store allows it.
              </p>
            </div>
          </div>
        </section>

        {/* Compare Plans Section */}
        <section className="py-10">
          <div className="ow-wrap">
            <Reveal>
              <h2 className="ow-h2f mb-6 font-[Fredoka] font-bold text-[#12261A]">
                Compare plans
              </h2>
            </Reveal>

            <Reveal className="ow-card overflow-x-auto">
              <table className="w-full min-w-[520px] text-center">
                <thead>
                  <tr className="bg-[#EAF8D6] text-[#12261A]">
                    <th className="p-4 text-left font-[Fredoka] text-lg font-bold">
                      Feature
                    </th>
                    <th className="p-4 font-[Fredoka] text-lg font-bold">
                      Free with ads
                    </th>
                    <th className="p-4 font-[Fredoka] text-lg font-bold">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.feature} className="border-t-2 border-[#E3EDD6]">
                      <td className="p-4 text-left font-bold text-[#12261A]">
                        {row.feature}
                      </td>
                      <td className="p-4">
                        {typeof row.free === "boolean" ? (
                          row.free ? (
                            <Check
                              size={22}
                              strokeWidth={3}
                              color="#2E6B00"
                              className="mx-auto"
                              aria-label="Included"
                            />
                          ) : (
                            <X
                              size={22}
                              strokeWidth={3}
                              color="#FF4B4B"
                              className="mx-auto"
                              aria-label="Not included"
                            />
                          )
                        ) : (
                          <span className="font-bold text-[#12261A]">
                            {row.free}
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        {typeof row.premium === "boolean" ? (
                          row.premium ? (
                            <Check
                              size={22}
                              strokeWidth={3}
                              color="#2E6B00"
                              className="mx-auto"
                              aria-label="Included"
                            />
                          ) : (
                            <X
                              size={22}
                              strokeWidth={3}
                              color="#FF4B4B"
                              className="mx-auto"
                              aria-label="Not included"
                            />
                          )
                        ) : (
                          <span className="font-bold text-[#12261A]">
                            {row.premium}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        {/* Billing Questions FAQ Section */}
        <section className="ow-sec">
          <div className="ow-wrap max-w-3xl">
            <Reveal>
              <h2 className="ow-h2f mb-6 font-[Fredoka] font-bold text-[#12261A]">
                Billing questions
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-3">
                {billingFaqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={faq.q} className="ow-card ow-lift">
                      <h3 className="!text-[20px] font-[Fredoka] font-semibold text-[#12261A]">
                        <button
                          onClick={() => toggleFaq(i)}
                          className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-[Fredoka] text-[20px] font-semibold text-[#12261A]"
                          aria-expanded={isOpen}
                        >
                          {faq.q}
                          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#EAF8D6]">
                            {isOpen ? (
                              <Minus size={18} strokeWidth={3} />
                            ) : (
                              <Plus size={18} strokeWidth={3} />
                            )}
                          </span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-[16px] leading-relaxed text-[#2B3A33]">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA Section Before Footer */}
        <section className="bg-[#58CC02] py-20 text-center">
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
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-ink"
                >
                  <Smartphone size={20} strokeWidth={2.5} />
                  Get it on iPhone
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-btn ow-white"
                >
                  <Smartphone size={20} strokeWidth={2.5} />
                  Get it on Android
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
