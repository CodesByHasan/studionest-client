import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, ArrowUpRight } from "lucide-react";

export default function StudioCard({ studio }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#e8e3dc] bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={studio.image}
          alt={studio.title}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#a65a3c]">
          {studio.category}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-lg font-semibold text-[#252d42]">
            {studio.title}
          </h3>

          <span className="flex shrink-0 items-center gap-1 text-sm">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {studio.rating || "New"}
          </span>
        </div>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {studio.location}
        </p>

        <div className="flex items-center justify-between border-t pt-4">
          <p className="font-semibold text-[#a65a3c]">
            ${studio.hourlyRate}
            <span className="text-xs font-normal text-muted-foreground"> / hour</span>
          </p>

          <Link
            href={`/studios/${studio._id}`}
            className="flex items-center gap-1 text-sm font-semibold text-[#252d42] hover:text-[#a65a3c]"
          >
            View Details <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}