import Link from "next/link";
import { Icon } from "./Icons";

export function Cta({
  title = "Let's make every camera an AI sensor.",
  sub = "Book a pre-purchase feasibility review, explore a partnership, or bring CVS to your sites.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="eyebrow !text-[#c4b5fd]">Connect with CVS</div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-xl text-base text-white/75">{sub}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:bg-lilac"
              >
                Book a feasibility review <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/industries" className="text-sm font-semibold text-white/80 hover:text-white">
                Browse industries →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
