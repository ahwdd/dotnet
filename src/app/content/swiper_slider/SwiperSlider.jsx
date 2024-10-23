"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import HowSectionBg from "/public/HowSectionBg.png";
import appleicon from "/public/appleicon.png";

function SwiperSlider() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        className="h-[300px]"
        dir="rtl"
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="min-h-[279px] !flex gap-10 justify-center items-center w-full ">
            <section className="flex">
              <section>
                <h3 className="w-fit">طريقة اعادة ضبط المصنع للآيفون</h3>
                <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
              </section>
              <Image
                src={appleicon}
                className="object-cover"
                alt="apple icon"
              />
            </section>{" "}
            <section className="flex">
              <section>
                <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
                <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
              </section>
              <Image
                src={appleicon}
                className="object-cover"
                alt="apple icon"
              />
            </section>{" "}
            <section className="flex">
              <section>
                <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
                <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
              </section>
              <Image
                src={appleicon}
                className="object-cover"
                alt="apple icon"
              />
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
