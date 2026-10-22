"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  bg?: string;
  label: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  bg = "#EAF8D6",
  label,
  title,
  lead,
  crumbs = [],
  children,
}) => {
  return (
    <section style={{ background: bg }} className="pb-14 pt-10 md:pb-20">
      <Reveal className="ow-wrap">
        <nav
          aria-label="Breadcrumb"
          className="ow-muted mb-6 flex flex-wrap items-center gap-1"
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight size={14} />
              {c.href ? (
                <Link href={c.href} className="hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <span className="ow-label">{label}</span>
        <h1 className="ow-h1s max-w-3xl font-[Fredoka] font-bold text-[#12261A]">
          {title}
        </h1>
        {lead && <p className="ow-lead mt-4 max-w-2xl text-[#2B3A33]">{lead}</p>}
        {children}
      </Reveal>
    </section>
  );
};

export default PageBanner;
