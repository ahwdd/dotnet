"use client";
import React from "react";
import Slider from "@ant-design/react-slick";
import HowSectionBg from "/public/HowSectionBg.png";
import appleicon from "/public/appleicon.png";
import Image from "next/image";
// Slick track , slick list

// const data = [1, 2, 3, 4, 5];

export default function SliderHow() {
  var settings = {
    dots: true,
    arrows: false,
    autoPlay: true,
    rtl: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    // the length - 1 will be here in case of api data and that stuff
  };
  return (
    <div className="mx-10 bg-[#0f1623] slider-how  min-h-[279px] relative">
      <h2 className="m-6 top-5 right-5">كيف ؟</h2>
      <Image src={HowSectionBg} className="object-cover absolute top-0" />

      {/* {data.map((e) => (
          <div>{e}</div>
        ))} */}

      <Slider {...settings}>
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

        <div className="h-full">
          <h3>Omar 2</h3>
        </div>

        <div className="h-full">
          <h3>Omar 3</h3>
        </div>
      </Slider>
    </div>
  );
}
