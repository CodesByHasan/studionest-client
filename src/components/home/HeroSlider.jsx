"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ArrowDown, ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    eyebrow: "YOUR SPACE. YOUR STORY.",
    title: "Find the perfect space to create something extraordinary.",
    description:
      "Discover inspiring photography, filmmaking, podcast, and creative studios — all in one place.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90",
    alt: "Beautiful modern creative workspace",
  },
  {
    id: 2,
    eyebrow: "MADE FOR CREATORS",
    title: "Your next great idea deserves a better space.",
    description:
      "From professional photography setups to intimate podcast rooms, find a studio that fits your vision.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2400&q=90",
    alt: "Professional photography and creative studio",
  },
  {
    id: 3,
    eyebrow: "TURN SPACE INTO OPPORTUNITY",
    title: "Have a studio? Let the world discover it.",
    description:
      "Share your creative space, connect with passionate creators, and turn your studio into an opportunity.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2400&q=90",
    alt: "Professional music and recording studio",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#111827]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        loop
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="hero-swiper h-[600px] min-h-[520px] sm:h-[650px] lg:h-[700px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex h-full items-center bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.image}")` }}
              role="img"
              aria-label={slide.alt}
            >
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#101827]/90 via-[#101827]/65 to-[#101827]/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/55 via-transparent to-black/10" />

              <div className="relative z-10 mx-auto w-full max-w-[1520px] px-5 pb-12 pt-10 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                  <div className="mb-7 flex items-center gap-3">
                    <span className="h-[2px] w-10 bg-sky-400" />
                    <span className="text-xs font-semibold tracking-[0.25em] text-sky-300 sm:text-sm">
                      {slide.eyebrow}
                    </span>
                  </div>

                  <h1 className="max-w-3xl text-4xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/studios"
                      className="group inline-flex h-13 items-center justify-center gap-3 rounded-lg bg-sky-500 px-7 text-sm font-semibold text-white shadow-lg shadow-sky-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400"
                    >
                      Explore Studios
                      <MoveUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <Link
                      href="/studios"
                      className="inline-flex h-13 items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#252d42]"
                    >
                      Host Your Space
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-20">
        <div className="mx-auto flex max-w-[1520px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <div className="pointer-events-auto flex items-center gap-3">
            <button
              type="button"
              className="hero-prev flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#252d42]"
              aria-label="Previous slide"
            >
              <ArrowLeft className="size-5" />
            </button>

            <button
              type="button"
              className="hero-next flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#252d42]"
              aria-label="Next slide"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>

          <div className="pointer-events-auto flex items-center gap-5">
            <span className="text-sm font-medium tabular-nums text-white">
              0{activeSlide + 1}
              <span className="mx-2 text-white/40">/</span>
              <span className="text-white/60">0{slides.length}</span>
            </span>

            <div className="hero-pagination flex items-center gap-2" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-white/60 xl:flex">
        SCROLL TO EXPLORE
        <ArrowDown className="size-3" />
      </div>

      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 !important;
          border-radius: 20px;
          background: white;
          opacity: 0.45;
          transition: all 0.3s ease;
        }

        .hero-pagination .swiper-pagination-bullet-active {
          width: 28px;
          opacity: 1;
          background: #38bdf8;
        }
      `}</style>
    </section>
  );
}
