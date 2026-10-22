import React from "react";
import { notFound } from "next/navigation";
import { countries, getCountryBySlug } from "@/data/countries";
import CountryDetailClient from "./CountryDetailClient";

export async function generateStaticParams() {
  return countries.map((c) => ({
    slug: c.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CountryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  return <CountryDetailClient country={country} />;
}
