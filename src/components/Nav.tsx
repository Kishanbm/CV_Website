"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icons";

const LINKS = [
  { href: "/#platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/#library", label: "Detection Library" },
  { href: "/#digital-twin", label: "Digital Twin" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-page/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2" aria-label="CVS home">
          <span className="icon-bubble h-9 w-9">
            <Icon name="scan" className="h-4 w-4" />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-ink">CVS</span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-soft">
              Computer Vision Systems
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-semibold text-muted transition hover:text-ink">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-deep"
          >
            Book a feasibility review
          </Link>
        </nav>

        <button
          type="button"
          className="icon-bubble h-10 w-10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-page md:hidden" aria-label="Primary mobile">
          <div className="container-x flex flex-col gap-1 py-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-muted hover:bg-lilac hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book a feasibility review
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
