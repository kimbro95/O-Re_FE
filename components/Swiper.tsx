"use client";

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { boxOfficeMovies } from "@/types/movies";

interface BoxOfficeProps {
  movies: boxOfficeMovies[];
}

export default function SwiperMovies({ movies }: BoxOfficeProps) {
  return (
    <Swiper
      breakpoints={{
        0: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        468: {
          spaceBetween: 10,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 10,
          slidesPerView: 5,
        },
      }}
      grabCursor={true}
      className="breakpoint flex"
    >
      {movies.map((movie, index: number) => (
        <SwiperSlide key={index} className="flex space-y-2">
          <div className="flex relative w-full h-44 md:h-52 border border-gray-800">
            <Image
              src={movie.poster ? movie.poster : "/images/no-image-96.png"}
              alt={movie.title}
              fill={true}
            />
            <span className="absolute bottom-0 p-1 font-semibold bg-black">
              {movie.rank}
            </span>
          </div>
          <div className="flex  flex-col space-y-1 w-full">
            <span className="whitespace-normal font-semibold text-xs text-gray-00 dark:text-gray-100">
              {movie.title}
            </span>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              {movie.prodYear}
              {movie.nation && ` · ${movie.nation.replace("대한민국", "한국")}`}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
