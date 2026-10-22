"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Languages, Award, ChevronRight } from "lucide-react";

interface CountryData {
  id: string;
  name: string;
  code: string;
  flag: string;
  authority: string;
  passRequirement: string;
  questionBank: string;
  languages: string[];
  colorClass: string;
  borderClass: string;
  details: string;
}

const COUNTRIES: CountryData[] = [
  {
    id: "gb",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    authority: "DVSA (Driver and Vehicle Standards Agency)",
    passRequirement: "43 / 50 (86%) + 44 / 75 in Hazard Perception",
    questionBank: "1,200+ DVSA licensed questions & 34 CGI hazard clips",
    languages: ["English", "Welsh", "Hindi", "Urdu", "Punjabi", "Arabic", "Polish"],
    colorClass: "bg-[#E6F4EA] text-[#137333]",
    borderClass: "border-[#CEEAD6]",
    details: "Covers the official Highway Code, UK motorway driving, pedestrian crossings, and real DVSA CGI hazard perception video scenarios.",
  },
  {
    id: "ae",
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    authority: "RTA Dubai & Abu Dhabi Police",
    passRequirement: "36 / 45 (80%) required to pass",
    questionBank: "850+ official questions with smart Dubai road layouts",
    languages: ["English", "Arabic", "Hindi", "Urdu", "Malayalam", "Tagalog"],
    colorClass: "bg-[#FFF0E6] text-[#C2410C]",
    borderClass: "border-[#FFD8BE]",
    details: "Specific rules for Sheikh Zayed Road, complex multi-lane roundabouts, yellow box junctions, and UAE traffic fines system.",
  },
  {
    id: "in",
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    authority: "Ministry of Road Transport (Parivahan / 28 State RTOs)",
    passRequirement: "12 / 15 to 16 / 20 depending on state",
    questionBank: "1,500+ questions covering state & national highway rules",
    languages: ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali"],
    colorClass: "bg-[#E0F2FE] text-[#0369A1]",
    borderClass: "border-[#BAE6FD]",
    details: "Computerized Learner License (LLR) mock exams mapped to your state RTO guidelines, mandatory traffic signs, and right-of-way norms.",
  },
  {
    id: "sa",
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    authority: "Moroor (General Directorate of Traffic - Dallah Driving Schools)",
    passRequirement: "40 / 45 (88%) required to pass",
    questionBank: "900+ official theory questions with Riyadh & Jeddah scenarios",
    languages: ["Arabic", "English", "Urdu", "Hindi", "Bengali", "Filipino"],
    colorClass: "bg-[#FEE2E2] text-[#B91C1C]",
    borderClass: "border-[#FECACA]",
    details: "Dallah school curriculum, priority at roundabouts, point system violations, and desert driving safety precautions.",
  },
  {
    id: "qa",
    name: "Qatar",
    code: "QA",
    flag: "🇶🇦",
    authority: "General Directorate of Traffic (Ministry of Interior)",
    passRequirement: "35 / 40 (87.5%) required to pass",
    questionBank: "650+ questions with visual intersection rules",
    languages: ["Arabic", "English", "Hindi", "Urdu", "Nepali", "Malayalam"],
    colorClass: "bg-[#F3E8FF] text-[#7E22CE]",
    borderClass: "border-[#E9D5FF]",
    details: "Doha ring roads, expressway overtaking, Metrash2 digital verification guidelines, and speed radar camera penalties.",
  },
  {
    id: "kw",
    name: "Kuwait",
    code: "KW",
    flag: "🇰🇼",
    authority: "General Traffic Department (Kuwait MoI)",
    passRequirement: "18 / 20 (90%) required to pass",
    questionBank: "550+ questions on Kuwait Highway codes",
    languages: ["Arabic", "English", "Urdu", "Hindi"],
    colorClass: "bg-[#DCFCE7] text-[#15803D]",
    borderClass: "border-[#BBF7D0]",
    details: "Kuwait lane discipline, priority on roundabouts, seatbelt safety laws, and fine point system.",
  },
  {
    id: "om",
    name: "Oman",
    code: "OM",
    flag: "🇴🇲",
    authority: "Royal Oman Police (ROP Directorate General of Traffic)",
    passRequirement: "32 / 35 (91%) required to pass",
    questionBank: "500+ questions covering mountain and city routes",
    languages: ["Arabic", "English", "Hindi", "Urdu"],
    colorClass: "bg-[#E0F2FE] text-[#0284C7]",
    borderClass: "border-[#BAE6FD]",
    details: "Salalah and Muscat traffic regulations, wadi crossing cautions, and speed buffer tolerances.",
  },
  {
    id: "bh",
    name: "Bahrain",
    code: "BH",
    flag: "🇧🇭",
    authority: "General Directorate of Traffic (Bahrain GDT)",
    passRequirement: "32 / 36 (89%) required to pass",
    questionBank: "480+ interactive questions & sign recognition",
    languages: ["Arabic", "English", "Hindi", "Urdu"],
    colorClass: "bg-[#FEF9C3] text-[#A16207]",
    borderClass: "border-[#FEF08A]",
    details: "Causeway crossing protocol, city parking regulations, pedestrian crosswalk priority, and smart meter zones.",
  },
  {
    id: "ie",
    name: "Ireland",
    code: "IE",
    flag: "🇮🇪",
    authority: "Road Safety Authority (RSA Driver Theory Test)",
    passRequirement: "35 / 40 (87.5%) required to pass",
    questionBank: "850+ RSA Official questions for car (Category B)",
    languages: ["English", "Irish (Gaeilge)", "Polish", "Russian"],
    colorClass: "bg-[#FFE4E6] text-[#BE123C]",
    borderClass: "border-[#FECDD3]",
    details: "Rules of the road for rural Irish boreens, N & M roads, motorway speed reductions, and L-plate driving restrictions.",
  },
  {
    id: "ca",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    authority: "Provincial (MTO Ontario G1, ICBC BC, SAAQ Quebec, Alberta Class 7)",
    passRequirement: "16 / 20 on Signs + 16 / 20 on Rules (80%)",
    questionBank: "1,100+ questions customized per province",
    languages: ["English", "French", "Punjabi", "Hindi", "Mandarin", "Spanish"],
    colorClass: "bg-[#EDE9FE] text-[#6D28D9]",
    borderClass: "border-[#DDD6FE]",
    details: "Winter driving safety, black ice protocols, school bus flashing lights rules, all-way stop priority, and provincial graduated licensing.",
  },
];

export const CountriesSection: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<CountryData>(COUNTRIES[0]);

  return (
    <section id="countries" className="relative py-16 md:py-24 bg-white/50 border-y border-[#E1EAD8]">
      <div className="ow-wrap">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D5E6C8] bg-white px-4 py-1.5 shadow-[0_2px_0_#D5E6C8]">
            <span className="font-[Fredoka] text-xs font-bold tracking-wider text-[#347802] uppercase sm:text-sm">
              BUILT FOR YOUR EXACT TEST
            </span>
          </div>

          <h2 className="mt-5 font-[Fredoka] text-3xl font-extrabold tracking-tight text-[#12261A] sm:text-4xl md:text-5xl">
            Your country. Your state. <br className="hidden sm:inline" />
            Your authority.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#324B3C] font-medium leading-relaxed">
            Rules differ by emirate, province and state, so oohwheels asks where
            you will sit your test and builds the whole course around that
            licensing authority.
          </p>
        </div>

        {/* Scrollable / Multi-Row Country Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {COUNTRIES.map((c) => {
            const isSelected = activeCountry.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCountry(c)}
                className={`group flex items-center gap-2.5 rounded-full border-2 px-5 py-2.5 font-[Fredoka] text-sm font-bold transition-all duration-150 ${c.colorClass} ${c.borderClass} ${
                  isSelected
                    ? "scale-105 shadow-[0_4px_0_rgba(0,0,0,0.15)] ring-2 ring-[#58CC02] ring-offset-2"
                    : "opacity-85 hover:opacity-100 hover:scale-[1.02] shadow-[0_2px_0_rgba(0,0,0,0.06)]"
                }`}
              >
                <span className="text-lg">{c.flag}</span>
                <span>
                  {c.code} · {c.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Country Detailed Card */}
        <div className="mt-10 max-w-4xl mx-auto rounded-[32px] border-2 border-[#D7E3CE] bg-white p-6 sm:p-8 shadow-[0_8px_0_#D7E3CE]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#EAF0E4] pb-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl">{activeCountry.flag}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-[Fredoka] text-2xl sm:text-3xl font-bold text-[#12261A]">
                    {activeCountry.name}
                  </h3>
                  <span className="rounded-lg bg-[#58CC02] px-2 py-0.5 font-[Fredoka] text-xs font-bold text-white">
                    Official Syllabus
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#547361] mt-0.5">
                  Authority: {activeCountry.authority}
                </p>
              </div>
            </div>

            <a
              href="#practice"
              className="ow-btn ow-green !text-sm !py-2.5 !px-5 whitespace-nowrap"
            >
              Start {activeCountry.name} Prep
            </a>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E5EFE0] bg-[#F7FAF4] p-4">
              <div className="flex items-center gap-2 text-[#58CC02]">
                <Award className="h-5 w-5" />
                <span className="font-[Fredoka] text-xs font-bold uppercase tracking-wider text-[#356B13]">
                  Pass Benchmark
                </span>
              </div>
              <div className="mt-2 font-[Fredoka] text-lg font-bold text-[#12261A]">
                {activeCountry.passRequirement}
              </div>
            </div>

            <div className="rounded-2xl border border-[#E5EFE0] bg-[#F7FAF4] p-4">
              <div className="flex items-center gap-2 text-[#58CC02]">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-[Fredoka] text-xs font-bold uppercase tracking-wider text-[#356B13]">
                  Question Bank
                </span>
              </div>
              <div className="mt-2 font-[Fredoka] text-lg font-bold text-[#12261A]">
                {activeCountry.questionBank}
              </div>
            </div>

            <div className="rounded-2xl border border-[#E5EFE0] bg-[#F7FAF4] p-4">
              <div className="flex items-center gap-2 text-[#58CC02]">
                <Languages className="h-5 w-5" />
                <span className="font-[Fredoka] text-xs font-bold uppercase tracking-wider text-[#356B13]">
                  Voiceover Languages
                </span>
              </div>
              <div className="mt-2 font-[Fredoka] text-sm font-bold text-[#12261A] line-clamp-2">
                {activeCountry.languages.join(", ")}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-[#EEF5E7] p-4 text-sm text-[#2A4B37] font-medium flex items-center gap-3">
            <span className="text-xl">💡</span>
            <span>{activeCountry.details}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
