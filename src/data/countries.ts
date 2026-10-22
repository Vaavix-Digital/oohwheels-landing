export interface Country {
  slug: string;
  code: string;
  name: string;
  sub: string;
  authorities: string[];
  languages: string[];
  topics: string[];
  consent?: boolean;
  tone: {
    bg: string;
    edge: string;
  };
}

const defaultTopics = [
  "Signs and signals",
  "Rules of the road",
  "Hazard perception",
  "Vehicle safety",
  "Emergencies",
  "Motorways",
  "Speed limits",
  "Parking",
];

export const countries: Country[] = [
  {
    slug: "gb",
    code: "GB",
    name: "United Kingdom",
    sub: "Great Britain and Northern Ireland",
    tone: { bg: "rgb(234, 248, 214)", edge: "rgb(207, 232, 176)" },
    authorities: ["Great Britain", "Northern Ireland"],
    languages: ["English", "Français"],
    topics: defaultTopics,
    consent: true,
  },
  {
    slug: "in",
    code: "IN",
    name: "India",
    sub: "National, every state and union territory",
    tone: { bg: "rgb(225, 244, 254)", edge: "rgb(181, 225, 247)" },
    authorities: [
      "Kerala",
      "Karnataka",
      "Tamil Nadu",
      "Telangana",
      "Maharashtra",
      "Delhi",
      "Every state and union territory",
    ],
    languages: ["English", "हिन्दी", "മലയാളം", "தமிழ்", "తెలుగు", "اردو"],
    topics: defaultTopics,
  },
  {
    slug: "ae",
    code: "AE",
    name: "UAE",
    sub: "All 7 emirates",
    tone: { bg: "rgb(255, 241, 176)", edge: "rgb(240, 216, 112)" },
    authorities: [
      "Dubai RTA",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Umm Al Quwain",
      "Ras Al Khaimah",
      "Fujairah",
    ],
    languages: ["English", "العربية", "हिन्दी", "اردو", "മലയാളം"],
    topics: defaultTopics,
  },
  {
    slug: "sa",
    code: "SA",
    name: "Saudi Arabia",
    sub: "National rules",
    tone: { bg: "rgb(255, 227, 227)", edge: "rgb(245, 189, 189)" },
    authorities: ["National rules"],
    languages: ["العربية", "English", "اردو"],
    topics: defaultTopics,
  },
  {
    slug: "qa",
    code: "QA",
    name: "Qatar",
    sub: "National rules",
    tone: { bg: "rgb(239, 227, 248)", edge: "rgb(216, 194, 234)" },
    authorities: ["National rules"],
    languages: ["العربية", "English", "മലയാളം"],
    topics: defaultTopics,
  },
  {
    slug: "kw",
    code: "KW",
    name: "Kuwait",
    sub: "National rules",
    tone: { bg: "rgb(234, 248, 214)", edge: "rgb(207, 232, 176)" },
    authorities: ["National rules"],
    languages: ["العربية", "English", "हिन्दी"],
    topics: defaultTopics,
  },
  {
    slug: "om",
    code: "OM",
    name: "Oman",
    sub: "National rules",
    tone: { bg: "rgb(225, 244, 254)", edge: "rgb(181, 225, 247)" },
    authorities: ["National rules"],
    languages: ["العربية", "English", "اردو"],
    topics: defaultTopics,
  },
  {
    slug: "bh",
    code: "BH",
    name: "Bahrain",
    sub: "National rules",
    tone: { bg: "rgb(255, 241, 176)", edge: "rgb(240, 216, 112)" },
    authorities: ["National rules"],
    languages: ["العربية", "English"],
    topics: defaultTopics,
  },
  {
    slug: "ie",
    code: "IE",
    name: "Ireland",
    sub: "National rules",
    tone: { bg: "rgb(255, 227, 227)", edge: "rgb(245, 189, 189)" },
    authorities: ["National rules"],
    languages: ["English", "Français"],
    topics: defaultTopics,
    consent: true,
  },
  {
    slug: "ca",
    code: "CA",
    name: "Canada",
    sub: "Provinces and territories",
    tone: { bg: "rgb(239, 227, 248)", edge: "rgb(216, 194, 234)" },
    authorities: [
      "Ontario",
      "Quebec",
      "British Columbia",
      "Alberta",
      "Manitoba",
      "Nova Scotia",
      "Every province and territory",
    ],
    languages: ["English", "Français"],
    topics: defaultTopics,
    consent: true,
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === "uk") return countries.find((c) => c.slug === "gb");
  return countries.find((c) => c.slug === normalized);
}
