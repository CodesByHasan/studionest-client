import Link from "next/link";
import { Aperture, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-[#fbfaf7] px-5 py-16">
      <div className="max-w-lg text-center">
        <Aperture className="mx-auto mb-6 size-16 text-[#a65a3c]" />

        <p className="text-7xl font-bold tracking-tight text-[#a65a3c]">
          404
        </p>

        <h1 className="mt-5 text-3xl font-semibold text-[#252d42]">
          Lost in the creative space?
        </h1>

        <p className="mt-3 text-muted-foreground">
          This page doesn't exist or may have been moved.
          Let's get you back to discovering great studios.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#a65a3c] px-6 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft className="size-4" />
          Return to Home
        </Link>
      </div>
    </section>
  );
}