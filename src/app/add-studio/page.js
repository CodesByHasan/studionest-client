import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import StudioForm from "@/components/studios/StudioForm";
import { redirect } from "next/navigation";

export default async function AddStudioPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/login");

  return (
    <section className="min-h-screen bg-[#fbfaf7] px-5 py-16">
      <div className="mx-auto max-w-3xl rounded-xl border bg-white p-6 shadow-sm sm:p-10">
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#a65a3c]">
          BECOME A HOST
        </p>

        <h1 className="text-3xl font-semibold text-[#252d42]">
          Add New Studio
        </h1>

        <p className="mb-8 mt-2 text-sm text-muted-foreground">
          Share your creative space with the StudioNest community.
        </p>

        <StudioForm user={session.user} />
      </div>
    </section>
  );
}
