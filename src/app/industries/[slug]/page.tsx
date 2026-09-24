import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Icon } from "@/components/Icons";
import { DetectionGrid } from "@/components/DetectionGrid";
import { Gallery } from "@/components/Gallery";
import { Cta } from "@/components/Cta";
import { INDUSTRIES, getIndustry, getDeepData, countUseCases } from "@/data/industries";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  const count = countUseCases(ind);
  return {
    title: `${ind.name}: AI video analytics`,
    description: `${ind.headline} ${ind.description} ${count} mapped use cases on existing cameras.`,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: ind.heroImage ? { images: [{ url: ind.heroImage, alt: ind.name }] } : undefined,
  };
}

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();
  const deep = getDeepData(ind);
  const count = countUseCases(ind);

  return (
    <>
      {/* HERO */}
      <section className="container-x pb-6 pt-12 sm:pt-16">
        <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-wider text-soft">
          <Link href="/industries" className="hover:text-ink">Industries</Link> <span className="mx-1">/</span> {ind.shortName}
        </nav>
        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="eyebrow">
              <span className="text-accent">{ind.shortName}</span> <span className="text-soft">intelligence</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {ind.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{ind.description}</p>

            <div className="mt-8">
              <div className="eyebrow">Why CVS here</div>
              <ul className="mt-3 space-y-2.5">
                {ind.why.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-base text-ink">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-8 flex flex-wrap gap-8 border-t border-line pt-6">
              <div>
                <dd className="text-2xl font-extrabold text-ink">{count}</dd>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-soft">Mapped use cases</dt>
              </div>
              <div>
                <dd className="text-2xl font-extrabold text-ink">{ind.fit}</dd>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-soft">Deployment fit</dt>
              </div>
              {deep && (
                <div>
                  <dd className="text-2xl font-extrabold text-ink">{deep.cats.length}</dd>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-soft">Categories</dt>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-3xl border border-line bg-lilac/70 p-5 sm:p-7">
            {ind.heroImage ? (
              <div className="card relative aspect-[4/3] overflow-hidden">
                <Image
                  src={ind.heroImage}
                  alt={`${ind.name}: CVS AI detection example`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-white">
                <span className="icon-bubble h-20 w-20">
                  <Icon name={ind.icon} className="h-9 w-9" />
                </span>
              </div>
            )}
            <div className="mt-5 text-center">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{ind.shortName}</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-soft">CVS use cases on site</div>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {ind.highlights.map((h) => (
                <li key={h} className="card px-3 py-3 text-center text-xs font-bold leading-snug text-ink">{h}</li>
              ))}
            </ul>
            <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
              Where it runs · {ind.whereItRuns.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {deep && deep.images.length > 0 && (
        <Section
          eyebrow={`${ind.shortName} · On demand`}
          title="Seen in action."
          sub="Real detection examples: the overlay, the alert and the context, exactly as an operator sees them."
        >
          <Gallery images={deep.images} industryName={ind.shortName} />
        </Section>
      )}

      {/* DETECTION LIBRARY */}
      {deep ? (
        <Section
          eyebrow={`${ind.shortName} · Detection library`}
          title="The complete mapped use-case set."
          sub={`${deep.items.length} detections across ${deep.cats.length} categories, each tunable to your site, zones and thresholds.`}
        >
          <DetectionGrid items={deep.items} cats={deep.cats} />
        </Section>
      ) : (
        <Section
          eyebrow={`${ind.shortName} · Use cases`}
          title="Where the platform lands first."
          sub="The highest-value detections for this environment. The full mapped library is scoped with you during a feasibility review."
        >
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ind.highlights.map((h, i) => (
              <li key={h} className="card px-5 py-4">
                <span className="mb-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lilac text-[11px] font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] font-bold text-ink">{h}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Cta
        title={`Bring CVS to your ${ind.shortName.toLowerCase()} sites.`}
        sub="A written feasibility review names what will and won't work on your cameras before you buy."
      />
    </>
  );
}
