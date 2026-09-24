import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { IndustryCard } from "@/components/IndustryCard";
import { Cta } from "@/components/Cta";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI video analytics for manufacturing, warehousing, logistics, vehicle systems, workspaces, hospitality, healthcare, airports, managed farmland, campuses and construction sites, with 300+ mapped use cases on existing cameras.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Section
        eyebrow="Industries we serve"
        title="One platform. Every environment."
        sub="The same engine adapts to the scene. Explore the full detection library and real detection examples for each vertical we work in."
        className="pt-12 sm:pt-16"
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <li key={ind.slug}>
              <IndustryCard industry={ind} />
            </li>
          ))}
        </ul>
      </Section>
      <Cta title="Don't see your environment?" sub="If it has cameras, we can map it. Tell us about your site and we'll scope the use cases that fit." />
    </>
  );
}
