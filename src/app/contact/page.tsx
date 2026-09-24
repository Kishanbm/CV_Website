import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a pre-purchase feasibility review, explore a partnership, or bring CVS AI video analytics to your sites. Bengaluru HQ, operating across India, the US, Canada and Africa.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  { icon: "mail", label: "Sales", value: SITE.emails.sales, href: `mailto:${SITE.emails.sales}`, phone: true },
  { icon: "handshake", label: "Partnerships", value: SITE.emails.partners, href: `mailto:${SITE.emails.partners}` },
  { icon: "chip", label: "Product & support", value: SITE.emails.hello, href: `mailto:${SITE.emails.hello}`, phone: true },
  { icon: "globe", label: "Web", value: SITE.url.replace("https://", ""), href: SITE.url },
];

export default function ContactPage() {
  const social = SITE.social.filter((s) => s.href);
  const subject = encodeURIComponent("Feasibility review request");
  const body = encodeURIComponent(
    "Hi CVS team,\n\nCompany:\nSite type / industry:\nNumber of cameras:\nLocation:\nWhat we'd like to detect:\n\nThanks,"
  );
  return (
    <section className="container-x py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="flex h-full flex-col">
          <div className="eyebrow">Connect with CVS</div>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Let&apos;s make every camera an AI sensor.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Book a pre-purchase feasibility review, explore a partnership, or bring CVS to your sites.
          </p>
          <a
            href={`mailto:${SITE.emails.sales}?subject=${subject}&body=${body}`}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-bold text-white transition hover:bg-accent-deep"
          >
            Book a feasibility review <Icon name="arrow" className="h-4 w-4" />
          </a>

          <div className="mt-10 flex items-center gap-4 border-t border-line pt-8">
            <span className="icon-bubble h-12 w-12">
              <Icon name="pin" />
            </span>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-soft">Headquarters</div>
              <div className="text-lg font-bold text-ink">{SITE.hq}</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-lilac/70 p-6 sm:p-8">
          <div className="eyebrow">Talk to the right team</div>
          <ul className="mt-4">
            {CHANNELS.map((c, i) => (
              <li key={c.label} className={`flex items-center gap-4 py-4 ${i > 0 ? "border-t border-line" : ""}`}>
                <span className="icon-bubble bg-white">
                  <Icon name={c.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-soft">{c.label}</div>
                  <a href={c.href} className="block truncate text-lg font-bold text-ink hover:text-accent">{c.value}</a>
                </div>
                {c.phone && (
                  <a href={SITE.phoneHref} className="hidden text-sm font-bold text-ink hover:text-accent sm:block">
                    {SITE.phone}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
            <a href={SITE.phoneHref} className="text-sm font-bold text-ink hover:text-accent sm:hidden">
              Call {SITE.phone}
            </a>
            {social.length > 0 && (
              <div className="flex items-center gap-4">
                <span className="font-bold text-ink">Follow / Connect</span>
                {social.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:underline">
                    {s.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <div className="eyebrow">Operating across</div>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SITE.regions.map((r) => (
            <li key={r} className="card flex items-center gap-4 p-5">
              <span className="icon-bubble h-12 w-12 shrink-0">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <div>
                <div className="text-lg font-bold leading-tight text-ink">{r}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-soft">Product · Partnership · Sales</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
