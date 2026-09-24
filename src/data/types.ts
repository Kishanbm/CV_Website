export type UseCase = { label: string; cat: string };
export type ShowcaseImage = { src: string; caption: string };

export type DeepIndustryData = {
  cats: string[];
  items: UseCase[];
  images: ShowcaseImage[];
};

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  headline: string;
  description: string;
  why: string[];
  whereItRuns: string[];
  highlights: string[];
  fit: "Very High" | "High" | "Medium–High";
  /** Key into DEEP_INDUSTRY_DATA when a full detection library + gallery exists. */
  deepKey?: string;
  heroImage?: string;
};
