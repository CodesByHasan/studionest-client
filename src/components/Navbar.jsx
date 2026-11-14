"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import {
  Aperture,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Plus,
  Building2,
  CalendarDays,
  LogOut,
  User,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const user = session?.user;

  const links = [
    { href: "/", label: "Home" },
    { href: "/studios", label: "Explore Studios" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#about", label: "About Us" },
  ];

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Logged out successfully.");
    setProfileOpen(false);
    setMobileOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e3dc] bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Aperture className="size-8 text-[#a65a3c]" />
          <span className="text-2xl font-semibold tracking-tight text-[#252d42]">
            Studio<span className="text-[#a65a3c]">Nest</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-[#a65a3c] ${
                pathname === link.href
                  ? "text-[#a65a3c]"
                  : "text-[#252d42]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {isPending ? null : user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-full border p-1.5 pr-3 transition hover:bg-[#fbfaf7]"
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="size-9 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#a65a3c]/10 text-[#a65a3c]">
                    <User className="size-5" />
                  </span>
                )}

                <span className="max-w-28 truncate text-sm font-semibold">
                  {user.name}
                </span>

                <ChevronDown className="size-4" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-14 w-60 rounded-xl border bg-white p-2 shadow-xl">
                  <div className="border-b px-3 py-3">
                    <p className="truncate text-sm font-semibold">{user.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>

                  <div className="space-y-1 py-2">
                    <Link
                      href="/my-listings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-[#fbfaf7]"
                    >
                      <LayoutDashboard className="size-4" />
                      Dashboard
                    </Link>

                    <Link
                      href="/add-studio"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-[#fbfaf7]"
                    >
                      <Plus className="size-4" />
                      Add New Studio
                    </Link>

                    <Link
                      href="/my-listings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-[#fbfaf7]"
                    >
                      <Building2 className="size-4" />
                      My Studio Listings
                    </Link>

                    <Link
                      href="/my-bookings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-[#fbfaf7]"
                    >
                      <CalendarDays className="size-4" />
                      My Bookings
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="size-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-5 py-2.5 text-sm font-semibold text-[#252d42] hover:bg-[#fbfaf7]"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-[#a65a3c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#87472f]"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border p-2 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-[#252d42]"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t pt-4">
              {user ? (
                <>
                  <p className="mb-3 text-sm font-semibold">{user.name}</p>

                  <Link
                    href="/add-studio"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm"
                  >
                    Add New Studio
                  </Link>

                  <Link
                    href="/my-listings"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm"
                  >
                    My Studio Listings
                  </Link>

                  <Link
                    href="/my-bookings"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm"
                  >
                    My Bookings
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="mt-2 flex items-center gap-2 py-2 text-sm text-red-600"
                  >
                    <LogOut className="size-4" />
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex gap-3">
                  <Link href="/login" className="text-sm font-semibold">
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="text-sm font-semibold text-[#a65a3c]"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



