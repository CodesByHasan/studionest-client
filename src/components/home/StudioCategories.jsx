import Link from "next/link";
import {
  Camera,
  Clapperboard,
  Mic2,
  Music2,
  Palette,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  { name: "Photo Studio", icon: Camera },
  { name: "Film Stage", icon: Clapperboard },
  { name: "Podcast Lounge", icon: Mic2 },
  { name: "Music Suite", icon: Music2 },
  { name: "Workshop", icon: Palette },
];

export default function StudioCategories() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#a65a3c]">
            EXPLORE YOUR POSSIBILITIES
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#252d42] sm:text-4xl">
            Browse by Category
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              href={`/studios?category=${encodeURIComponent(name)}`}
              className="group rounded-xl border border-[#e8e3dc] p-6 transition hover:border-[#a65a3c] hover:bg-[#fbfaf7]"
            >
              <Icon className="mb-6 size-8 text-[#a65a3c]" />
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#252d42]">{name}</h3>
                <ArrowUpRight className="size-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}