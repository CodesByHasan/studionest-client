import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getTokenFromServer } from "@/lib/getTokenFromServer";
import StudioForm from "@/components/studios/StudioForm";
import { redirect, notFound } from "next/navigation";

export default async function EditStudioPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/login");

  const { id } = await params;
  const token = await getTokenFromServer();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/studios/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) notFound();

  const studio = await response.json();

  if (studio.hostId !== session.user.id) notFound();

  return (
    <section className="min-h-screen bg-[#fbfaf7] px-5 py-16">
      <div className="mx-auto max-w-3xl rounded-xl border bg-white p-6 shadow-sm sm:p-10">
        <h1 className="mb-2 text-3xl font-semibold text-[#252d42]">
          Update Studio
        </h1>

        <p className="mb-8 text-sm text-muted-foreground">
          Update your studio information.
        </p>

        <StudioForm user={session.user} studio={studio} />
      </div>
    </section>
  );
}