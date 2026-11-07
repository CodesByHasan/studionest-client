
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/studios", label: "Explore Studios" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#about", label: "About Us" },
];

function isActiveRoute(pathname, href) {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return false;

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="relative mx-auto flex h-[68px] w-full max-w-[1520px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="StudioNest homepage"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="flex size-[30px] items-center justify-center rounded-[10px] bg-[#252d42] text-white">
            <Camera className="size-[19px]" strokeWidth={1.8} />
          </span>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            Studio<span className="text-[#252d42]">Nest</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex">
          {navLinks.map((item) => {
            const active = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-base transition-colors duration-200 ${
                  active
                    ? "font-semibold text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600"
                    : "font-normal text-gray-800 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Authentication */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/signin"
            className="text-base text-gray-900 transition-colors hover:text-blue-600"
          >
            Sign in
          </Link>

          <Button
            asChild
            className="h-8 rounded-md bg-[#252d42] px-3.5 text-sm font-medium text-white hover:bg-[#343e58]"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] bg-white sm:w-[360px]"
            >
              <SheetHeader className="border-b pb-4 text-left">
                <SheetTitle className="flex items-center gap-2 text-lg text-[#252d42]">
                  <Camera className="size-5" />
                  StudioNest
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((item) => {
                  const active = isActiveRoute(pathname, item.href);

                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`rounded-lg px-3 py-3 text-base transition-colors ${
                          active
                            ? "bg-gray-100 font-semibold text-[#252d42]"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}

                <div className="my-3 border-t border-gray-200" />

                <SheetClose asChild>
                  <Link
                    href="/signin"
                    className="rounded-lg px-3 py-3 text-base text-gray-800 hover:bg-gray-100"
                  >
                    Sign in
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Button
                    asChild
                    className="bg-[#252d42] text-white hover:bg-[#343e58]"
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}



