
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Compass,
  Search,
  Camera,
  Building2,
  Users,
} from "lucide-react";

const creatorSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover your space",
    description:
      "Explore creative studios by category, location, and the facilities your project needs.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Find your perfect fit",
    description:
      "Review studio details, equipment, amenities, and availability before making your choice.",
  },
  {
    number: "03",
    icon: Check,
    title: "Book and create",
    description:
      "Choose the space that matches your vision and get ready to bring your next idea to life.",
  },
];

const hostSteps = [
  "Showcase your creative space with photos and details.",
  "Reach creators looking for a place to work.",
  "Manage your studio listings and booking requests.",
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden bg-[#f5f3ed] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd6847]" />
              <span className="text-xs font-bold tracking-[0.22em] text-[#a65a3c]">
                THE PROCESS
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.055em] text-[#20251f] sm:text-5xl lg:text-6xl">
              From looking for a space
              <span className="font-serif font-normal italic text-[#a65a3c]">
                {" "}to making something.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#686b62] lg:justify-self-end">
            Whether you are searching for your next creative environment or
            sharing one with the world, StudioNest makes the connection
            straightforward.
          </p>
        </div>

        {/* Creator journey */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#202820] p-6 text-white sm:p-10 lg:p-12">
          <div className="absolute -right-20 -top-28 size-80 rounded-full border border-white/10" />
          <div className="absolute -right-5 -top-12 size-52 rounded-full border border-white/10" />

          <div className="relative z-10">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[#d7a58d]">
                  <Compass className="size-4" />
                  <span className="text-[11px] font-bold tracking-[0.2em]">
                    FOR CREATORS
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Your next project starts here.
                </h3>
              </div>

              <Link
                href="/studios"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium transition hover:border-[#d7a58d] hover:bg-[#d7a58d] hover:text-[#202820]"
              >
                Explore studios
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3 md:gap-5">
              {creatorSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="relative border-t border-white/20 pt-6"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-mono text-sm text-[#d7a58d]">
                        {step.number}
                      </span>
                      <Icon className="size-5 text-[#d7a58d]" strokeWidth={1.5} />
                    </div>

                    <h4 className="mb-3 text-xl font-semibold tracking-tight">
                      {step.title}
                    </h4>

                    <p className="max-w-sm text-sm leading-7 text-white/65">
                      {step.description}
                    </p>

                    {index !== creatorSteps.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-8 hidden size-5 text-white/25 lg:block" />
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Host journey */}
        <div className="mt-5 grid overflow-hidden rounded-[28px] border border-[#dedbd2] bg-[#e9e5da] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[280px] overflow-hidden bg-[#c9b8a2] sm:min-h-[360px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85')",
              }}
              role="img"
              aria-label="Bright creative workspace ready to welcome creators"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#172019]/70 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9">
              <span className="mb-3 block text-[11px] font-bold tracking-[0.2em] text-white/75">
                FOR STUDIO HOSTS
              </span>
              <p className="max-w-sm text-2xl leading-tight font-semibold sm:text-3xl">
                Your space has a story. Let creators find it.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="mb-7 flex size-12 items-center justify-center rounded-2xl bg-[#202820] text-[#e9b49a]">
              <Building2 className="size-5" />
            </div>

            <h3 className="max-w-lg text-3xl leading-tight font-semibold tracking-[-0.04em] text-[#20251f] sm:text-4xl">
              Turn your studio into someone's next big idea.
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#686b62]">
              Make your creative space discoverable. Connect with people who
              need the environment, equipment, and atmosphere you offer.
            </p>

            <div className="my-8 space-y-5">
              {hostSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#c8c1b4] font-mono text-[11px] text-[#a65a3c]">
                    0{index + 1}
                  </span>
                  <p className="pt-0.5 text-sm leading-6 text-[#454a41]">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/signup"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#a65a3c] pb-2 text-sm font-semibold text-[#a65a3c] transition-colors hover:text-[#202820]"
            >
              Become a studio host
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
