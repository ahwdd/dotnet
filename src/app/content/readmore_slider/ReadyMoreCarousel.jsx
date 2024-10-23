"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import readmorecarousel from "/public/readmorecarousel.png";
import hero2 from "/public/hero2.png";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import ImgFilter from "../hero/ImgFilter";

function ReadyMoreCarousel() {
  return (
    <div className="w-full relative read-more-carousel ">
      {" "}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        className="h-full w-full pt-20"
        dir="rtl"
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="h-[calc(100%-2.5rem)] ">
          <div className=" w-full">
            <div className="h-full text-white  flex items-center">
              <Image
                quality={100}
                className="object-cover w-full"
                src={readmorecarousel}
                alt="gaming event image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full">
            <div className="h-full text-white  flex items-center">
              <Image
                quality={100}
                className="object-cover w-full"
                src={readmorecarousel}
                alt="gaming event image"
              />

              <ImgFilter />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" w-full">
            <div className="h-full text-white  flex items-center">
              <Image
                quality={100}
                className="object-cover w-full"
                src={readmorecarousel}
                alt="gaming event image"
              />

              <ImgFilter />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="swiper-pagination !h-[80px] absolute top-[-20px] left-0 w-full flex justify-center"></div> */}
    </div>
  );
}

export default ReadyMoreCarousel;
