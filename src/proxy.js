import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${encodeURIComponent(request.nextUrl.pathname)}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add-studio",
    "/my-listings",
    "/my-bookings",
    "/studios/edit/:path*",
  ],
};