import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDownRight,
  Aperture,
  Camera,
  Clapperboard,
  Mic2,
  Music2,
  MoveUpRight,
  Users,
} from "lucide-react";


const creativeCategories = [
  { label: "Photography", icon: Camera },
  { label: "Film & Video", icon: Clapperboard },
  { label: "Podcasting", icon: Mic2 },
  { label: "Music Production", icon: Music2 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#fbfaf7] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Intro */}
        <div className="mb-14 flex flex-col gap-5 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd6847]" />
              <span className="text-xs font-bold tracking-[0.22em] text-[#a65a3c]">
                THE IDEA BEHIND STUDIONEST
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.055em] text-[#20251f] sm:text-5xl lg:text-6xl">
              Great work needs
              <span className="font-serif font-normal italic text-[#a65a3c]">
                {" "}the right space.
              </span>
            </h2>
          </div>

          <span className="font-mono text-xs tracking-widest text-[#898b80]">
            OUR PURPOSE / 001
          </span>
        </div>

        {/* Main editorial composition */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Visual */}
          <div className="relative min-h-[390px] overflow-hidden rounded-[26px] bg-[#d7d0c3] sm:min-h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90')",
              }}
              role="img"
              aria-label="Thoughtfully designed creative workspace"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#151d17]/75 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-4 py-2.5 text-white backdrop-blur-md sm:left-8 sm:top-8">
              <Aperture className="size-4" />
              <span className="text-[10px] font-semibold tracking-[0.18em]">
                A SPACE FOR EVERY VISION
              </span>
            </div>

            <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10">
              <p className="max-w-md text-3xl leading-tight font-medium tracking-tight text-white sm:text-4xl">
                More than a room.
                <br />
                <span className="font-serif italic text-[#e8b69c]">
                  A place to create.
                </span>
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="flex flex-col justify-center py-2 lg:py-8">
            <span className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#a65a3c]">
              WHO WE ARE
            </span>

            <h3 className="max-w-xl text-2xl leading-snug font-semibold tracking-[-0.035em] text-[#20251f] sm:text-3xl">
              Connecting creative people with spaces where ideas can happen.
            </h3>

            <div className="mt-6 max-w-xl space-y-4 text-sm leading-8 text-[#686b62]">
              <p>
                StudioNest is a peer-to-peer creative space discovery and
                sharing platform designed to bring creators and studio owners
                closer together.
              </p>

              <p>
                Finding the right environment can make a difference to a
                photography session, film production, podcast recording, or
                music project. We want to make discovering those spaces
                simpler and more accessible.
              </p>

              <p>
                At the same time, studio owners get a place to showcase their
                spaces and connect with creators looking for somewhere to
                bring their projects to life.
              </p>
            </div>

            <Link
              href="/studios"
              className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#202820] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a65a3c]"
            >
              Discover StudioNest
              <MoveUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Two sides of the community */}
        <div className="mt-20 border-y border-[#e5e2d9] py-12 sm:mt-24 sm:py-16">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#a65a3c]">
                BUILT AROUND CONNECTION
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#20251f] sm:text-3xl">
                Two sides. One creative community.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#77796f]">
              A shared place for people who create spaces and people who need
              them.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-[#f0eee7] p-7 sm:p-9">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-[#202820] text-[#e8b69c]">
                  <Users className="size-5" />
                </div>
                <span className="font-mono text-xs text-[#a65a3c]">
                  SIDE / 01
                </span>
              </div>

              <h4 className="text-xl font-semibold text-[#20251f]">
                For the creators
              </h4>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#686b62]">
                Find a space that fits your creative direction, explore its
                facilities, and discover environments for your next project.
              </p>
              <Link
                href="/studios"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#a65a3c]"
              >
                Find your space
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </article>

            <article className="rounded-2xl bg-[#202820] p-7 text-white sm:p-9">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#e8b69c]">
                  <Aperture className="size-5" />
                </div>
                <span className="font-mono text-xs text-[#e8b69c]">
                  SIDE / 02
                </span>
              </div>

              <h4 className="text-xl font-semibold">
                For the studio owners
              </h4>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
                Give your studio visibility, present its unique character, and
                connect with creators searching for the right production
                environment.
              </p>
              <Link
                href="/signup"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#e8b69c]"
              >
                Share your space
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </article>
          </div>
        </div>

        {/* Creative categories */}
        <div className="pt-14 sm:pt-16">
          <div className="mb-7 flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-[#20251f] sm:text-xl">
              Spaces for every kind of creation.
            </h3>
            <span className="hidden font-mono text-[10px] tracking-widest text-[#898b80] sm:block">
              FIND YOUR ENVIRONMENT
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {creativeCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.label}
                  href="/studios"
                  className="group flex min-h-[110px] items-center justify-between gap-3 rounded-2xl border border-[#e7e4dc] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd8b73] hover:bg-[#f5f0e9] sm:p-6"
                >
                  <div>
                    <Icon className="mb-4 size-5 text-[#a65a3c]" />
                    <span className="text-sm font-semibold text-[#30352d]">
                      {category.label}
                    </span>
                  </div>
                  <ArrowDownRight className="size-4 shrink-0 text-[#a65a3c] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
