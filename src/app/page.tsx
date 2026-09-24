import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Icon } from "@/components/Icons";
import { IndustryCard } from "@/components/IndustryCard";
import { Cta } from "@/components/Cta";
import { INDUSTRIES } from "@/data/industries";
import {
  SITE,
  STATS,
  FLOW,
  SEE_UNDERSTAND_ACT,
  WHO_WE_ARE_STATS,
  PILLARS,
  STEPS,
  DELIVERABLES,
  LIBRARY,
  DIFFERENCE,
  DIGITAL_TWIN,
} from "@/data/site";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.fullName,
  url: SITE.url,
  slogan: SITE.tagline,
  description: SITE.description,
  email: SITE.emails.hello,
  telephone: SITE.phone,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
  areaServed: SITE.regions,
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* HERO */}
      <section className="container-x pb-10 pt-10 sm:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="eyebrow">AI-powered computer vision analytics · Digital Twin</div>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
              Every camera.
              <br />
              Now an <span className="text-accent">AI sensor.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              CVS turns the cameras you already own into a live network of intelligent sensors that see, understand and act in real
              time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-deep">
                Book a feasibility review <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/industries" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-bold text-ink transition hover:bg-lilac">
                Explore industries
              </Link>
            </div>
          </div>

          <ol className="card flex flex-col divide-y divide-line p-2">
            {FLOW.map((f) => (
              <li key={f.title} className="flex items-center gap-4 px-4 py-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-lilac text-accent">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-base font-bold text-ink">{f.title}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{f.sub}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="order-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{s.label}</dt>
              <dd className="text-3xl font-extrabold text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* WHO WE ARE */}
      <Section id="who-we-are" eyebrow="Who we are" title="The intelligence layer for the cameras you already own.">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              CVS is an AI-powered computer-vision platform. We retrofit existing CCTV and NVRs into an analytics-ready network, no rip-and-replace, then run a single engine that detects, verifies and acts on what each camera sees.
            </p>
            <p>
              The result is one living view of your facility: security, operations, traffic and safety, unified and surfaced through
              a real-time Digital Twin.
            </p>
            <dl className="grid grid-cols-3 gap-4 border-t border-line pt-6">
              {WHO_WE_ARE_STATS.map((s) => (
                <div key={s.label}>
                  <dd className="text-xl font-extrabold text-accent sm:text-2xl">{s.value}</dd>
                  <dt className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <ul className="rounded-2xl border border-line bg-lilac/70 p-5 sm:p-6">
            {SEE_UNDERSTAND_ACT.map((s, i) => (
              <li key={s.title} className={`flex items-center gap-4 py-4 ${i > 0 ? "border-t border-line" : ""}`}>
                <span className="icon-bubble bg-white">
                  <Icon name={s.icon} />
                </span>
                <div>
                  <p className="text-lg font-bold text-ink">{s.title}</p>
                  <p className="text-sm text-muted">{s.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* THE SHIFT */}
      <Section
        id="why-now"
        eyebrow="The shift · Why now"
        title={<>Most cameras record.<br />Yours should decide.</>}
        sub="Billions of cameras stream footage no one watches. The value isn't in recording, it's in the moment something happens. CVS moves every feed from passive playback to real-time decision-making."
      >
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="card p-7">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-soft">Before</div>
            <h3 className="mt-2 text-2xl font-bold text-ink">Passive camera</h3>
            <div className="mt-5 flex items-center gap-5">
              <span className="icon-bubble h-16 w-16 text-soft">
                <Icon name="camera" className="h-7 w-7" />
              </span>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Footage no one watches</li>
                <li>• Blind spots after hours</li>
                <li>• Evidence found too late</li>
              </ul>
            </div>
          </div>
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent text-accent">
            <Icon name="arrow" className="h-5 w-5 rotate-90 md:rotate-0" />
          </span>
          <div className="rounded-2xl bg-ink p-7 text-white">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c4b5fd]">With CVS</div>
            <h3 className="mt-2 text-2xl font-bold">Active AI sensor</h3>
            <div className="mt-5 flex items-center gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-white/5">
                <Icon name="agent" className="h-7 w-7" />
              </span>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Sees & classifies instantly</li>
                <li>• Watches every zone, 24/7</li>
                <li>• Acts before it escalates</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* PLATFORM */}
      <Section
        id="platform"
        eyebrow="The platform"
        title="One platform. Every camera. One living view."
        sub="A single AI engine unifies every computer-vision use case across four capability pillars, all surfaced through a live Digital Twin of the facility."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <li key={p.title} className="card border-t-4 border-t-accent p-6 text-center">
              <span className="icon-bubble h-14 w-14">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.sub}</p>
            </li>
          ))}
        </ul>
        <ol className="mt-8 grid gap-4 rounded-2xl border border-line bg-lilac/70 p-5 sm:grid-cols-4 sm:p-7">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex items-center gap-3">
              <span className="icon-bubble bg-white">
                <Icon name={s.icon} />
              </span>
              <div>
                <p className="font-bold text-ink">{s.title}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">step {i + 1}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* WHAT WE DELIVER */}
      <Section
        id="deliver"
        eyebrow="What we deliver · Managed intelligence"
        title="We don't just detect. We verify, act and report."
        sub="CVS pairs the AI platform with a 24/7 human-verified operations layer, so every alert that reaches you is real, and every incident is closed."
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {DELIVERABLES.map((d) => (
            <li key={d.title} className="card flex gap-5 p-6">
              <span className="icon-bubble shrink-0">
                <Icon name={d.icon} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* DETECTION LIBRARY */}
      <Section
        id="library"
        eyebrow="Detection library"
        title="A single brain for every scene."
        sub="Ninety-plus configurable detection types run on the same platform. A representative set, each tunable to your site, zones and thresholds."
      >
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {LIBRARY.map((l) => (
            <li key={l.label} className="card flex items-center gap-3 px-4 py-3.5">
              <span className="icon-bubble h-10 w-10 shrink-0">
                <Icon name={l.icon} className="h-4.5 w-4.5" />
              </span>
              <span className="text-sm font-bold text-ink">{l.label}</span>
            </li>
          ))}
        </ul>
        <div className="card mt-6 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            Every industry page carries the full mapped library: 300+ use cases across 7 deep-dive verticals.
          </p>
          <Link
            href="/industries"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent-deep"
          >
            Browse by industry <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* DIFFERENCE */}
      <Section
        id="difference"
        eyebrow="The CVS difference"
        title="Beyond the alert."
        sub="Detection is table stakes. Three things set CVS apart: the workflow, the privacy stance, and the honesty before you buy."
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {DIFFERENCE.map((d) => (
            <li key={d.title} className="card border-t-4 border-t-accent p-7 text-center">
              <span className="icon-bubble h-16 w-16">
                <Icon name={d.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{d.sub}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* DIGITAL TWIN */}
      <Section id="digital-twin" eyebrow="Digital Twin" title={<>Your entire facility.<br />Live in one view.</>}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex h-full flex-col justify-center">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              A real-time 3D replica of your site with every AI use case mapped in place. See, navigate, detect and locate, then
              respond, from one screen.
            </p>
            <ul className="mt-8 space-y-5">
              {DIGITAL_TWIN.map((d) => (
                <li key={d.title} className="flex items-center gap-4">
                  <span className="icon-bubble bg-white">
                    <Icon name={d.icon} />
                  </span>
                  <div>
                    <p className="text-lg font-bold text-ink">{d.title}</p>
                    <p className="text-sm text-muted">{d.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card relative aspect-[4/3] overflow-hidden">
            <Image
              src="/digital-twin.jpg"
              alt="CVS Digital Twin: a live 3D replica of a facility with every camera feed and AI detection mapped in place"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              LIVE
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/85 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <span>8 zones monitored</span>
              <span className="text-[#c4b5fd]">2 active alerts</span>
            </div>
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section
        id="industries"
        eyebrow="Industries we serve"
        title="Intelligence across industries."
        sub="One AI platform. Multiple environments. CVS delivers purpose-built video intelligence across the industries where operational awareness matters most."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <li key={ind.slug}>
              <IndustryCard industry={ind} />
            </li>
          ))}
        </ul>
      </Section>

      <Cta />
    </>
  );
}
