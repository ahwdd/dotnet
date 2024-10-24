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
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        className="h-[300px] border-red-500 border-solid border"
        dir="rtl"
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="min-h-[279px]  !flex gap-10 justify-center items-center w-full ">
            <section className="flex py-10 px-5 border-l-2 border-solid ">
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
        {/* <SwiperSlide>
          <div className="min-h-[279px] !flex gap-10 justify-center items-center w-full ">
            <section className="flex">
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
          <div className="min-h-[279px] !flex gap-10 justify-center items-center w-full ">
            <section className="flex">
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
