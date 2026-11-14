import Link from "next/link";
import { Search } from "lucide-react";
import StudioCard from "@/components/studios/StudioCard";

async function getStudios() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/studios`,
      { cache: "no-store" }
    );

    if (!response.ok) return [];

    return response.json();
  } catch {
    return [];
  }
}

export default async function StudiosPage({ searchParams }) {
  const params = await searchParams;
  const studios = await getStudios();

  const category = params?.category || "";
  const search = params?.search?.toLowerCase() || "";

  const filteredStudios = studios.filter((studio) => {
    const matchesCategory =
      !category || studio.category === category;

    const matchesSearch =
      !search ||
      studio.title.toLowerCase().includes(search) ||
      studio.location.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-[#fbfaf7] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#a65a3c]">
            THE CREATIVE COLLECTION
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#252d42]">
            Explore Studios
          </h1>

          <p className="mt-3 text-muted-foreground">
            Find the right space to bring your creative ideas to life.
          </p>
        </div>

        <form action="/studios" className="mb-6 flex flex-wrap gap-3">
          <div className="relative min-w-0 flex-1">
            <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
            <input
              name="search"
              defaultValue={search}
              placeholder="Search studio or location..."
              className="h-11 w-full rounded-lg border bg-white pl-10 pr-3 outline-none focus:border-[#a65a3c]"
            />
          </div>

          <select
            name="category"
            defaultValue={category}
            className="h-11 rounded-lg border bg-white px-4 outline-none"
          >
            <option value="">All Categories</option>
            <option>Photo Studio</option>
            <option>Film Stage</option>
            <option>Podcast Lounge</option>
            <option>Music Suite</option>
            <option>Workshop</option>
          </select>

          <button className="h-11 rounded-lg bg-[#a65a3c] px-6 font-medium text-white">
            Search
          </button>
        </form>

        <p className="mb-6 text-sm text-muted-foreground">
          {filteredStudios.length} studios found
        </p>

        {filteredStudios.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStudios.map((studio) => (
              <StudioCard key={studio._id} studio={studio} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border bg-white px-6 py-20 text-center">
            <h2 className="text-xl font-semibold">No studios found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Try another search or explore a different category.
            </p>
            <Link
              href="/studios"
              className="mt-5 inline-block font-semibold text-[#a65a3c]"
            >
              Clear filters
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}