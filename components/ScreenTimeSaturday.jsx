"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useLineUpStore } from "@/store/useLineUpStore";
import { lineUpCategories } from "@/assets";

const ScreenTimeSaturday = () => {
  const saturdayMovies = useLineUpStore((state) => state.saturdayMovies);

  if (!saturdayMovies.length) {
    return <div>No Saturday movies.</div>;
  }

  return (
    <div className="bg-section-background pb-20" id="nextonmovies">
      <div className="px-4 pt-15 sm:pt-25 sm:px-8 md:px-12 lg:px-20">
        <SectionHeading text={"Movies On Saturday"} className="sm:mb-15" />

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          pagination={{
            type: "progressbar",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={saturdayMovies.length > 1}
        >
          {saturdayMovies.map((item) => {
            const result = item.tmdb;
            const categoryColor = lineUpCategories.find(
              (c) => c.name === item.category,
            );
            return (
              <SwiperSlide key={item.media.id}>
                <div className="text-white grid sm:grid-cols-2 items-center gap-10">
                  <div>
                    {result.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="mx-1 my-4 inline-block bg-black/30 backdrop-blur-md text-md sm:text-lg px-1 py-2 rounded-sm"
                      >
                        {genre.name}
                      </span>
                    ))}

                    <div className="text-3xl my-4 font-bold">
                      {result.title}
                    </div>

                    <div className="flex text-md items-center sm:text-lg space-x-5">
                      <div>
                        ⭐ {Math.ceil(result.voteAverage) ?? "N/A"} / 10
                      </div>
                      <div>{result.releaseDate?.slice(0, 4) ?? "TBA"}</div>
                      <div>1h 11m</div>
                      <div
                        className={`${categoryColor?.softBgColor || "bg-gray-600/20"}  ${categoryColor?.textColor || "text-white"}  px-1 py-2 rounded-sm w-fit`}
                      >
                        {item.category}
                      </div>
                    </div>

                    <div className="my-8 font-semibold max-w-2xl text-md sm:text-lg leading-8 line-clamp-3">
                      {result.overview}
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${result.backdropPath}`}
                      alt="background"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ScreenTimeSaturday;
