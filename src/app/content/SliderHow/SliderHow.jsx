"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import HowSectionBg from "/public/HowSectionBg.png";
import appleicon from "/public/appleicon.png";
// Slick track , slick list

// const data = [1, 2, 3, 4, 5];

export default function SliderHow() {
  return (
    <>
      <div className="slider-how mx-10 bg-gray-800 h-[300px] border-white border-solid border-2 rounded-xl relative">
        <div
          className="relative"

          // style={{
          //   background: "url('/HowSectionBg.png ') center center no-repeat",
          //   backgroundSize: "cover",
          // }}
        >
          <h2 className="absolute top-6 right-7">كيف ؟</h2>
          <Image
            src={HowSectionBg}
            className="object-cover absolute top-0 right-0"
          />
        </div>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          autoplay={{
            delay: 3000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Keep autoplay running after user interaction
          }}
          slidesPerView={1}
          className="h-full"
          dir="rtl"
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="min-h-[279px]  !flex gap-10 justify-center items-center w-full ">
              <section className="flex py-10 px-5 border-l-2 border-solid border-[#FFFFFF80]">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />
                <section>
                  <h3 className="w-fit">طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>{" "}
              <section className="flex py-10 px-5 border-l-2 border-solid border-[#FFFFFF80]">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />
                <section>
                  <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>
              <section className="flex">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />

                <section>
                  <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="min-h-[279px]  !flex gap-10 justify-center items-center w-full ">
              <section className="flex py-10 px-5 border-l-2 border-solid border-[#FFFFFF80]">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />
                <section>
                  <h3 className="w-fit">طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>{" "}
              <section className="flex py-10 px-5 border-l-2 border-solid border-[#FFFFFF80]">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />
                <section>
                  <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>
              <section className="flex">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />

                <section>
                  <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="min-h-[279px]  !flex gap-10 justify-center items-center w-full ">
              <section className="flex py-10 px-5 border-l-2 border-solid border-[#FFFFFF80]">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />
                <section>
                  <h3 className="w-fit">طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>{" "}
              <section className="flex py-10 px-5 border-l-2 border-solid border-[#FFFFFF80]">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />
                <section>
                  <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>
              <section className="flex">
                <Image
                  src={appleicon}
                  className="object-cover"
                  alt="apple icon"
                />

                <section>
                  <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
                  <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
                </section>
              </section>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

/*
        <div className="min-h-[279px] !flex gap-10 justify-center items-center w-full ">
          <section className="flex">
            <section>
              <h3 className="w-fit">طريقة اعادة ضبط المصنع للآيفون</h3>
              <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
            </section>
            <Image src={appleicon} className="object-cover" alt="apple icon" />
          </section>{" "}
          <section className="flex">
            <section>
              <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
              <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
            </section>
            <Image src={appleicon} className="object-cover" alt="apple icon" />
          </section>{" "}
          <section className="flex">
            <section>
              <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
              <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
            </section>
            <Image src={appleicon} className="object-cover" alt="apple icon" />
          </section>
        </div>
*/
