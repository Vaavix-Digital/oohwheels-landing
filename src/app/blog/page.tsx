import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ChevronRight,
  ArrowRight,
  Signpost,
  Eye,
  ClipboardList,
  Clock,
  RefreshCw,
  Target,
} from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning resources — oohwheels",
  description:
    "Articles, study tips and updates for driving students preparing for their theory test.",
};

const otherArticles = [
  {
    slug: "hazard-perception",
    title: "Hazard perception: what examiners actually look for",
    excerpt:
      "It is not about spotting things early, it is about responding at the right moment. Here is how to train that instinct.",
    category: "Study tips",
    date: "Oct 8, 2026",
    readTime: "6 min",
    icon: Eye,
    bg: "rgb(225, 244, 254)",
  },
  {
    slug: "test-day-checklist",
    title: "Your test day checklist: what to bring and what to expect",
    excerpt:
      "A calm test day starts the night before. Walk in prepared with this simple checklist.",
    category: "Test day",
    date: "Oct 3, 2026",
    readTime: "3 min",
    icon: ClipboardList,
    bg: "rgb(255, 241, 176)",
  },
  {
    slug: "ten-minutes-a-day",
    title: "Why ten minutes a day beats a three-hour cram",
    excerpt:
      "Short, frequent study builds long-term memory. Here is the science and how to make it a habit.",
    category: "Study tips",
    date: "Sep 28, 2026",
    readTime: "5 min",
    icon: Clock,
    bg: "rgb(255, 227, 227)",
  },
  {
    slug: "roundabouts-explained",
    title: "Roundabouts explained: a visual guide",
    excerpt:
      "Approach, lane choice, signalling and exit. We break roundabouts into four clear steps with scenes.",
    category: "Road signs",
    date: "Sep 22, 2026",
    readTime: "7 min",
    icon: RefreshCw,
    bg: "rgb(239, 227, 248)",
  },
  {
    slug: "mock-test-strategy",
    title: "How to use mock tests to find your weak spots",
    excerpt:
      "Mock tests are not just for practice, they are a diagnostic tool. Here is how to read your results.",
    category: "Practice",
    date: "Sep 16, 2026",
    readTime: "5 min",
    icon: Target,
    bg: "rgb(234, 248, 214)",
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "rgb(225, 244, 254)" }}
        >
          <div className="ow-wrap" style={{ opacity: 1, transform: "none" }}>
            <nav
              aria-label="Breadcrumb"
              className="ow-muted mb-6 flex flex-wrap items-center gap-1"
            >
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <span className="flex items-center gap-1">
                <ChevronRight size={14} />
                <span>Blog</span>
              </span>
            </nav>
            <span className="ow-label">Learning resources</span>
            <h1 className="ow-h1s max-w-3xl">Study tips, guides and updates.</h1>
            <p className="ow-lead mt-4 max-w-2xl">
              Helpful articles to keep you on track between lessons and on the
              way to test day.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap">
            {/* Featured Article */}
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="ow-card ow-lift grid gap-8 p-7 md:grid-cols-2 md:p-9">
                <div className="flex flex-col justify-center">
                  <span className="ow-chip w-fit">Road signs</span>
                  <h2 className="mt-4 text-[28px]">
                    Read any road sign in seconds: the shape and colour trick
                  </h2>
                  <p className="mt-3 text-[17px]">
                    Most signs follow a simple visual code. Learn the shapes and
                    colours and you can guess most signs before you read them.
                  </p>
                  <p className="ow-muted mt-4">Oct 12, 2026 · 4 min read</p>
                  <Link
                    className="ow-btn ow-green mt-5 w-fit"
                    href="/blog"
                  >
                    Read article <ArrowRight size={18} />
                  </Link>
                </div>
                <div
                  className="grid place-items-center rounded-2xl p-10"
                  style={{ background: "rgb(234, 248, 214)" }}
                >
                  <Signpost size={80} strokeWidth={1.8} />
                </div>
              </div>
            </div>

            {/* Other Articles Grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((art) => {
                const Icon = art.icon;
                return (
                  <div
                    key={art.slug}
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <Link
                      className="ow-card ow-lift flex h-full flex-col p-6"
                      href="/blog"
                    >
                      <div
                        className="grid h-32 place-items-center rounded-2xl"
                        style={{ background: art.bg }}
                      >
                        <Icon size={48} strokeWidth={1.8} />
                      </div>
                      <span className="mt-4 text-xs font-extrabold uppercase tracking-wider text-[#2E6B00]">
                        {art.category}
                      </span>
                      <h3 className="mt-1 text-[20px]">{art.title}</h3>
                      <p className="mt-2 flex-1 text-[15px]">{art.excerpt}</p>
                      <p className="ow-muted mt-4">
                        {art.date} · {art.readTime} read
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <CtaSection />

      <Footer />
    </div>
  );
}
