import Image from "next/image";
import Link from "next/link";
import type { Industry } from "@/data/types";
import { countUseCases } from "@/data/industries";
import { Icon } from "./Icons";

export function IndustryCard({ industry }: { industry: Industry }) {
  const count = countUseCases(industry);
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-lilac">
        {industry.heroImage ? (
          <Image
            src={industry.heroImage}
            alt={`${industry.name}: AI detection example`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-lilac to-[#e4d9ff]">
            <span className="icon-bubble h-16 w-16 bg-white">
              <Icon name={industry.icon} className="h-7 w-7" />
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span className="icon-bubble h-8 w-8">
            <Icon name={industry.icon} className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-ink">{industry.shortName}</h3>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{industry.description}</p>
        <div className="mt-auto flex items-center justify-between pt-5 text-xs font-semibold uppercase tracking-wider text-soft">
          <span>{count} use cases</span>
          <span className="flex items-center gap-1 text-accent">
            Explore <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
