import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Users, ShieldCheck, ArrowLeft, Star } from "lucide-react";
import BookingModal from "@/components/studios/BookingModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getStudio(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/studios/${id}`,
      { cache: "no-store" }
    );

    if (!response.ok) return null;

    return response.json();
  } catch {
    return null;
  }
}

export default async function StudioDetailsPage({ params }) {
  const { id } = await params;

  const studio = await getStudio(id);

  if (!studio) notFound();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <section className="min-h-screen bg-[#fbfaf7] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/studios"
          className="mb-7 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#a65a3c]"
        >
          <ArrowLeft className="size-4" />
          Back to Studios
        </Link>

        <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[450px]">
          <Image
            src={studio.image}
            alt={studio.title}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <span className="rounded-full bg-[#a65a3c]/10 px-3 py-1 text-xs font-semibold text-[#a65a3c]">
              {studio.category}
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#252d42] sm:text-4xl">
              {studio.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {studio.location}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 border-y py-5 text-sm">
              <span className="flex items-center gap-2">
                <Users className="size-4 text-[#a65a3c]" />
                {studio.capacity} people
              </span>

              <span className="flex items-center gap-2">
                <Star className="size-4 text-amber-500" />
                {studio.rating || "New"}
              </span>

              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#a65a3c]" />
                Security deposit: ${studio.securityDeposit}
              </span>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-[#252d42]">
                About This Studio
              </h2>
              <p className="mt-4 whitespace-pre-line leading-8 text-muted-foreground">
                {studio.overview}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-[#252d42]">
                Studio Amenities
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {studio.amenities?.map((amenity) => (
                  <div key={amenity} className="rounded-lg border bg-white p-3 text-sm">
                    ✓ {amenity}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border bg-white p-5">
              <h2 className="font-semibold">Hosted by {studio.hostName}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {studio.hostEmail}
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Studio rental</p>

            <p className="mt-2 text-3xl font-semibold text-[#a65a3c]">
              ${studio.hourlyRate}
              <span className="text-sm font-normal text-muted-foreground"> / hour</span>
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              Security deposit: ${studio.securityDeposit}
            </p>

            <div className="mt-6">
              {session?.user ? (
                studio.hostId === session.user.id ? (
                  <Link
                    href={`/studios/edit/${studio._id}`}
                    className="block rounded-lg bg-[#a65a3c] py-3 text-center text-sm font-semibold text-white"
                  >
                    Edit Your Studio
                  </Link>
                ) : (
                  <BookingModal studio={studio} />
                )
              ) : (
                <Link
                  href="/login"
                  className="block rounded-lg bg-[#a65a3c] py-3 text-center text-sm font-semibold text-white"
                >
                  Login to Book
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}