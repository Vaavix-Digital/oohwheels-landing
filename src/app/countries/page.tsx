"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhizzyMascot } from "@/components/WhizzyMascot";
import { ChevronRight, Search, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

import { countries } from "@/data/countries";

export default function CountriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();
  const filteredCountries = countries.filter((c) => {
    if (!query) return true;
    const searchable = `${c.name} ${c.code} ${c.sub} ${c.authorities.join(" ")}`.toLowerCase();
    return searchable.includes(query);
  });

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />

      <main id="main">
        {/* Breadcrumb & Hero Search Banner */}
        <section
          className="pb-14 pt-10 md:pb-20"
          style={{ background: "rgb(234, 248, 214)" }}
        >
          <Reveal className="ow-wrap">
            <nav
              aria-label="Breadcrumb"
              className="ow-muted mb-6 flex flex-wrap items-center gap-1"
            >
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <span className="flex items-center gap-1">
                <ChevronRight size={14} />
                <span>Countries</span>
              </span>
            </nav>

            <span className="ow-label">Countries</span>
            <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
              Find your test.
            </h1>
            <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">
              Ten markets, 65 regions. Search for your country, state or
              licensing authority.
            </p>

            <div className="relative mt-8 max-w-xl">
              <Search
                size={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#55665D]"
              />
              <input
                className="ow-input !pl-12"
                type="search"
                placeholder="Search by country name..."
                aria-label="Search countries"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </Reveal>
        </section>

        {/* Countries Grid */}
        <section className="ow-sec !pt-12">
          <div className="ow-wrap">
            {filteredCountries.length > 0 ? (
              <div
                className="grid gap-5"
                style={{
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(230px, 1fr))",
                }}
              >
                {filteredCountries.map((country, idx) => (
                  <Reveal key={country.slug} delay={(idx % 5) * 0.06}>
                    <Link
                      className="ow-card flex h-full items-center gap-4 p-5 hover:translate-y-[-4px] transition-transform"
                      href={`/countries/${country.slug}`}
                    >
                      <span
                        className="ow-badge font-[Fredoka] font-bold"
                        style={{
                          background: country.tone.bg,
                          border: `2px solid ${country.tone.edge}`,
                        }}
                      >
                        {country.code}
                      </span>
                      <span>
                        <span className="block font-[Fredoka] text-[20px] font-semibold leading-tight text-[#12261A]">
                          {country.name}
                        </span>
                        <span className="ow-muted block leading-snug">
                          {country.sub}
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ) : (
              <p className="ow-muted py-8 text-center text-lg">
                No country matches &ldquo;{searchQuery}&rdquo;. Try another name.
              </p>
            )}

            {/* Authority level rules callout */}
            <Reveal className="ow-card mt-14 max-w-3xl p-7">
              <h2 className="text-[28px] font-[Fredoka] font-bold text-[#12261A]">
                Why authority-level rules matter
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-[#2B3A33]">
                Question counts, pass marks and even some road rules change by
                emirate, province or state. oohwheels builds each course around
                one licensing authority, so you practise the test you will
                actually sit.
              </p>
              <Link className="ow-btn ow-outline mt-5" href="/help">
                Read the FAQ
              </Link>
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
