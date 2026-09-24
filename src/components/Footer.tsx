import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";
import { SITE } from "@/data/site";
import { Icon } from "./Icons";

export function Footer() {
  const social = SITE.social.filter((s) => s.href);
  return (
    <footer className="mt-16 border-t border-line bg-white/50">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="icon-bubble h-9 w-9">
              <Icon name="scan" className="h-4 w-4" />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-extrabold text-ink">CVS</span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-soft">
                Computer Vision Systems
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{SITE.tagline} {SITE.description.split(".")[0]}.</p>
          {social.length > 0 && (
            <div className="mt-5 flex gap-3">
              {social.map((s) => (
                <a key={s.name} href={s.href} className="text-sm font-semibold text-accent hover:underline" target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="eyebrow">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li><Link className="hover:text-ink" href="/#platform">Platform</Link></li>
            <li><Link className="hover:text-ink" href="/#deliver">What we deliver</Link></li>
            <li><Link className="hover:text-ink" href="/#library">Detection library</Link></li>
            <li><Link className="hover:text-ink" href="/#digital-twin">Digital Twin</Link></li>
            <li><Link className="hover:text-ink" href="/industries">Industries</Link></li>
            <li><Link className="hover:text-ink" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Industries</div>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link className="hover:text-ink" href={`/industries/${i.slug}`}>{i.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li><a className="hover:text-ink" href={`mailto:${SITE.emails.sales}`}>{SITE.emails.sales}</a></li>
            <li><a className="hover:text-ink" href={`mailto:${SITE.emails.partners}`}>{SITE.emails.partners}</a></li>
            <li><a className="hover:text-ink" href={`mailto:${SITE.emails.hello}`}>{SITE.emails.hello}</a></li>
            <li><a className="hover:text-ink" href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li className="pt-2 text-xs uppercase tracking-wider text-soft">HQ · {SITE.hq}</li>
            <li className="text-xs uppercase tracking-wider text-soft">Operating across {SITE.regions.join(" · ")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-5 text-xs uppercase tracking-wider text-soft sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {SITE.fullName}</span>
          <span>{SITE.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
