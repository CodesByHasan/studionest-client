import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getTokenFromServer } from "@/lib/getTokenFromServer";
import MyBookingCard from "@/components/studios/MyBookingCard";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function MyBookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/login");

  const token = await getTokenFromServer();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/my-bookings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const bookings = response.ok ? await response.json() : [];

  return (
    <section className="min-h-screen bg-[#fbfaf7] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold text-[#252d42]">
          My Bookings
        </h1>

        <p className="mb-10 mt-2 text-sm text-muted-foreground">
          Track and manage your studio reservations.
        </p>

        {bookings.length ? (
          <div className="space-y-5">
            {bookings.map((booking) => (
              <MyBookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border bg-white py-20 text-center">
            <h2 className="text-xl font-semibold">No bookings yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Discover a creative space for your next project.
            </p>
            <Link
              href="/studios"
              className="mt-5 inline-block font-semibold text-[#a65a3c]"
            >
              Explore Studios →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}