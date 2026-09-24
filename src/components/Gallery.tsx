import Image from "next/image";
import type { ShowcaseImage } from "@/data/types";

export function Gallery({ images, industryName }: { images: ShowcaseImage[]; industryName: string }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {images.map((im) => (
        <li key={im.src} className="card relative aspect-[4/3] overflow-hidden">
          <Image
            src={im.src}
            alt={`${im.caption}: CVS AI detection in a ${industryName.toLowerCase()} environment`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-ink/85 px-4 py-2.5 text-sm font-semibold text-white">
            {im.caption}
          </figcaption>
        </li>
      ))}
    </ul>
  );
}
