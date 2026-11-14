import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getTokenFromServer } from "@/lib/getTokenFromServer";
import Link from "next/link";
import Image from "next/image";
import DeleteStudioButton from "@/components/studios/DeleteStudioButton";
import { redirect } from "next/navigation";

export default async function MyListingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/login");

  const token = await getTokenFromServer();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/studios/my-listings`,
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    }
  );

  const studios = response.ok ? await response.json() : [];

  return (
    <section className="min-h-screen bg-[#fbfaf7] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-[#252d42]">
              My Studio Listings
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage the creative spaces you have published.
            </p>
          </div>

          <Link
            href="/add-studio"
            className="rounded-lg bg-[#a65a3c] px-5 py-3 text-sm font-semibold text-white"
          >
            + Add New Studio
          </Link>
        </div>

        {studios.length ? (
          <div className="space-y-5">
            {studios.map((studio) => (
              <div
                key={studio._id}
                className="flex flex-col gap-5 rounded-xl border bg-white p-4 sm:flex-row sm:items-center"
              >
                <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-lg sm:w-52">
                  <Image
                    src={studio.image}
                    alt={studio.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold text-[#a65a3c]">
                    {studio.category}
                  </span>

                  <h2 className="mt-1 text-xl font-semibold">{studio.title}</h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {studio.location}
                  </p>

                  <p className="mt-2 font-semibold text-[#a65a3c]">
                    ${studio.hourlyRate} / hour
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/studios/edit/${studio._id}`}
                    className="rounded-lg border px-4 py-2 text-sm font-medium"
                  >
                    Update
                  </Link>

                  <DeleteStudioButton id={studio._id} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border bg-white py-20 text-center">
            <h2 className="text-xl font-semibold">No listings yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start sharing your creative space.
            </p>
            <Link
              href="/add-studio"
              className="mt-5 inline-block font-semibold text-[#a65a3c]"
            >
              Add your first studio →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}