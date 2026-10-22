"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import {
  ChevronRight,
  Mail,
  Clock,
  CheckCircle2,
  Smartphone,
} from "lucide-react";

const TOPICS = [
  "Support",
  "Report a wrong question",
  "Partnerships",
  "Press",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Support",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending message
    setTimeout(() => {
      setStatus("done");
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero Banner */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "#E1F4FE" }}
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
                <span>Contact</span>
              </span>
            </nav>

            <span className="ow-label">Contact</span>
            <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
              Say hello to the team.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">
              Support, a wrong question, partnerships or press: tell us what you
              need.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="ow-card p-7 md:p-9">
              {status === "done" ? (
                <div className="flex flex-col items-center py-10 text-center animate-in fade-in duration-300">
                  <WhizzyMascot size={110} mood="cheer" className="ow-bob" />
                  <CheckCircle2 size={34} color="#58CC02" className="mt-3" />
                  <h2 className="mt-2 text-[28px] font-[Fredoka] font-bold text-[#12261A]">
                    Message sent
                  </h2>
                  <p className="mt-2 text-[#2B3A33]">
                    Thanks, we will reply to{" "}
                    <strong>{formData.email}</strong> soon.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        topic: "Support",
                        message: "",
                      });
                    }}
                    className="ow-btn ow-outline mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block font-bold text-[#12261A]">
                      Name
                      <input
                        required
                        className="ow-input mt-1.5"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </label>

                    <label className="block font-bold text-[#12261A]">
                      Email
                      <input
                        required
                        type="email"
                        className="ow-input mt-1.5"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </label>
                  </div>

                  <label className="block font-bold text-[#12261A]">
                    Topic
                    <select
                      className="ow-input mt-1.5 cursor-pointer bg-white"
                      value={formData.topic}
                      onChange={(e) =>
                        setFormData({ ...formData, topic: e.target.value })
                      }
                    >
                      {TOPICS.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block font-bold text-[#12261A]">
                    Message
                    <textarea
                      required
                      rows={6}
                      className="ow-input mt-1.5"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </label>

                  {status === "error" && (
                    <p className="font-bold text-[#d93a3a]" role="alert">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="ow-btn ow-green disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </button>
                </form>
              )}
            </div>

            <aside className="ow-card h-fit p-7">
              <div className="flex items-center gap-3">
                <Mail size={22} className="text-[#55665D]" />
                <a
                  href="mailto:support@oohwheels.com"
                  className="font-bold text-[#12261A] hover:underline"
                >
                  support@oohwheels.com
                </a>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock size={22} className="mt-0.5 flex-none text-[#55665D]" />
                <span className="text-[#2B3A33]">
                  We aim to reply within a few working days.
                </span>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#58CC02] py-20 text-center">
          <div className="ow-wrap flex flex-col items-center">
            <WhizzyMascot size={160} mood="cheer" className="ow-bob" />
            <h2 className="ow-h2 mt-4 font-[Fredoka] font-bold text-[#12261A]">
              Ready to pass first time?
            </h2>
            <p className="ow-lead mt-4 max-w-xl !text-[#12261A]">
              oohwheels is launching soon on iOS and Android. Start free and be
              test-ready sooner.
            </p>
            <div className="mt-8 flex justify-center">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
