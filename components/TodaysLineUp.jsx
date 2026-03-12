"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useLineUpStore } from "@/store/useLineUpStore";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { lineUpCategories } from "@/assets";

const TodaysLineUp = () => {
  const todayItems = useLineUpStore((state) => state.todayItems);

  if (!todayItems?.length) {
    return (
      <section className="w-full">
        <SectionHeading text="Today's Lineup" />
        <div className="flex min-h-[220px] items-center justify-center rounded-2xl bg-white/5 text-white/60">
          Nothing scheduled for today.
        </div>
      </section>
    );
  }

  return (
    <section className="w-full" id="lineup">
      <SectionHeading text="Today's Lineup" className="sm:mb-15" />

      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {todayItems.map((item) => {
          const result = item.tmdb;
          const categoryColor = lineUpCategories.find(
            (c) => c.name === item.category,
          );

          return (
            <SwiperSlide key={item.id}>
              <div className="group overflow-hidden rounded-2xl">
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${result.posterPath}`}
                    alt={result?.title || "poster"}
                    fill
                    sizes="(max-width: 480px) 80vw,
                           (max-width: 768px) 45vw,
                           (max-width: 1024px) 30vw,
                           25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-5 ">
                    <p className="mt-4 text-sm rounded-sm text-white/90 w-fit  bg-black/40 backdrop-blur-md px-3 py-1">
                      {result.voteAverage.toFixed(1) ?? "N/A"}
                    </p>
                  </div>
                </div>

                <div className="px-2 py-3 space-y-3 text-white">
                  <h3 className="line-clamp-1 text-2xl font-semibold">
                    {result?.title || "Untitled"}
                  </h3>

                  <p
                    className={`text-md ${categoryColor?.softBgColor || "bg-gray-600/20"} ${categoryColor?.textColor || "text-white"}  px-2 py-1 rounded-sm w-fit`}
                  >
                    {item.category || "No Category"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TodaysLineUp;
