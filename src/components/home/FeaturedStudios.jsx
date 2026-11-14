import Link from "next/link";
import StudioCard from "@/components/studios/StudioCard";

async function getFeaturedStudios() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/studios/featured`,
      { cache: "no-store" }
    );

    if (!response.ok) return [];

    return response.json();
  } catch {
    return [];
  }
}

export default async function FeaturedStudios() {
  const studios = await getFeaturedStudios();

  return (
    <section className="bg-[#fbfaf7] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#a65a3c]">
              FIND YOUR SPACE
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#252d42] sm:text-4xl">
              Featured Studios
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore creative spaces ready for your next project.
            </p>
          </div>

          <Link href="/studios" className="text-sm font-semibold text-[#a65a3c]">
            Explore all studios →
          </Link>
        </div>

        {studios.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studios.map((studio) => (
              <StudioCard key={studio._id} studio={studio} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border bg-white p-10 text-center text-muted-foreground">
            No studios have been listed yet. Be the first to host a space!
          </p>
        )}
      </div>
    </section>
  );
}