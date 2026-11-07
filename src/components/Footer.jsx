import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/studios" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About Us", href: "/#about" },
];

const categories = [
  { label: "Photography Studios", href: "/studios?category=photography" },
  { label: "Film & Video Studios", href: "/studios?category=film-video" },
  { label: "Podcast Studios", href: "/studios?category=podcast" },
  { label: "Music Studios", href: "/studios?category=music" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[17px]" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.49 0-1.955.93-1.955 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.092 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[17px]" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[17px]" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[17px]" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zM7.12 20.452H3.555V9H7.12zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#19243a] px-5 text-white sm:px-8">
      {/* Subtle Accent */}
      <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1536px]">
        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.15fr_1.15fr] lg:gap-12 lg:py-[52px]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="StudioNest homepage"
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-white text-[#19243a]">
                <Camera className="size-[19px]" strokeWidth={1.9} />
              </span>

              <span className="text-[22px] font-bold tracking-tight">
                Studio<span className="text-blue-300">Nest</span>
              </span>
            </Link>

            <p className="mt-4 max-w-[310px] text-[13px] leading-[1.8] text-slate-300/80">
              Empowering creators with professional studio spaces tailored
              for every vision. Find your space, create something extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-slate-300/80 transition-colors hover:text-blue-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Explore Categories
            </h3>

            <ul className="mt-5 space-y-3">
              {categories.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="text-[13px] text-slate-300/80 transition-colors hover:text-blue-300"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Stay Inspired
            </h3>

            <p className="mt-4 max-w-[280px] text-[13px] leading-6 text-slate-300/80">
              Get creative inspiration, studio updates, and exclusive offers.
            </p>

            <div className="mt-4 flex h-10 w-full max-w-[330px] items-center overflow-hidden rounded-md border border-white/15 bg-white/[0.08] transition-colors focus-within:border-blue-400/70">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-full min-w-0 flex-1 bg-transparent px-3 text-xs text-white outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="flex h-full items-center justify-center bg-blue-400 px-4 text-[#19243a] transition-colors hover:bg-blue-300"
              >
                <ArrowUpRight className="size-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-6 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-2 text-[11px] text-slate-400 sm:justify-start">
            <span>© 2026 StudioNest. All rights reserved.</span>

            <span className="text-slate-600">|</span>

            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>

            <span className="text-slate-600">|</span>

            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`StudioNest on ${social.label}`}
                className="text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

