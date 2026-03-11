"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useLineUpStore } from "@/store/useLineUpStore";

const ScreenTimeSaturday = () => {
  const saturdayMovies = useLineUpStore((state) => state.saturdayMovies);

  if (!saturdayMovies.length) {
    return <div>No Saturday movies.</div>;
  }

  return (
    <div className="bg-section-background pb-20">
      <div className="px-4 pt-15 sm:pt-25 sm:px-8 md:px-12 lg:px-20">
        <SectionHeading text={"This Weekend"} />

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

            return (
              <SwiperSlide key={item.media.id}>
                <div className="text-white grid sm:grid-cols-2 items-center gap-10">
                  <div>
                    {result.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="mx-1 my-4 inline-block bg-black/50 text-md sm:text-lg px-2 py-1 rounded-sm"
                      >
                        {genre.name}
                      </span>
                    ))}

                    <div className="text-3xl my-4 font-bold">
                      {result.title}
                    </div>

                    <div className="flex text-md sm:text-lg space-x-7">
                      <div>
                        ⭐ {Math.ceil(result.voteAverage) ?? "N/A"} / 10
                      </div>
                      <div>{result.releaseDate?.slice(0, 4) ?? "TBA"}</div>
                      <div>1h 11m</div>
                      <div>ScreenTime Saturday</div>
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
