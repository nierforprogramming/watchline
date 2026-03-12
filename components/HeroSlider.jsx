"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useLineUpStore } from "@/store/useLineUpStore";

const HeroSlider = () => {
  const featuredItems = useLineUpStore((state) => state.featuredItems);
  const loading = useLineUpStore((state) => state.loading);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="min-h-[420px] rounded-3xl bg-white/5" />
        ))}
      </div>
    );
  }

  if (!featuredItems.length) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center rounded-3xl bg-white/5 text-white/70">
        No featured items available.
      </div>
    );
  }

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={featuredItems.length > 1}
        className="w-full"
      >
        {featuredItems.map((item) => {
          const result = item.tmdb;

          return (
            <SwiperSlide key={item.media.id}>
              <div className="relative min-h-screen overflow-hidden">
                <Image
                  src={`https://image.tmdb.org/t/p/original${result.backdropPath}`}
                  alt={result.title || "background"}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/35 z-10" />
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/40 z-10" />

                <div className="absolute inset-0 z-20 flex items-start">
                  <div className="w-full px-4 pt-52 sm:px-8 md:px-12 lg:px-20">
                    <div className="max-w-3xl text-white">
                      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                        ON YOUR LINE UP
                      </p>

                      <div>
                        {result.genres.map((genre) => (
                          <span
                            key={genre.id}
                            className="mx-1 my-4 inline-block bg-black/30 backdrop-blur-md text-md sm:text-lg px-1 py-2 rounded-sm"
                          >
                            {genre.name}
                          </span>
                        ))}
                      </div>

                      <h1 className="text-3xl uppercase font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                        {result.title}
                      </h1>

                      <div className="flex space-x-8 font-semibold">
                        <p className="mt-4 text-lg text-white/90">
                          ⭐ {result.voteAverage.toFixed(1) ?? "N/A"} / 10
                        </p>

                        <p className="mt-4 text-lg text-white/90">
                          {result.releaseDate?.slice(0, 4) ?? "TBA"}
                        </p>
                      </div>

                      <p className="mt-4 max-w-2xl text-lg leading-8 font-semibold text-gray-300 line-clamp-3">
                        {result.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
