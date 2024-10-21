import React from "react";
import Slider from "react-slick";
import HowSectionBg from "/public/HowSectionBg.png";
import appleicon from "/public/appleicon.png";
import Image from "next/image";
// Slick track , slick list

export default function SliderHow() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2, // put the length-1 inversed later
  };
  return (
    <div className="mx-10  bg-[#0f1623]  min-h-[279px] relative">
      <h2 className="m-6 top-5 right-5">كيف ؟</h2>
      <Image src={HowSectionBg} className="object-cover absolute top-0" />

      <Slider {...settings}>
        <div className="min-h-[279px] !flex gap-10 justify-center items-center w-full ">
          <div className="flex">
            <div>
              <h3 className="w-fit">طريقة اعادة ضبط المصنع للآيفون</h3>
              <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
            </div>
            <Image src={appleicon} className="object-cover" alt="apple icon" />
          </div>{" "}
          <div className="flex">
            <div>
              <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
              <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
            </div>
            <Image src={appleicon} className="object-cover" alt="apple icon" />
          </div>{" "}
          <div className="flex">
            <div>
              <h3>طريقة اعادة ضبط المصنع للآيفون</h3>
              <p>تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون</p>
            </div>
            <Image src={appleicon} className="object-cover" alt="apple icon" />
          </div>
        </div>

        <div className="h-full">
          <h3>Omar asfasf</h3>
        </div>

        <div className="h-full">
          <h3>Omar asfasf</h3>
        </div>
      </Slider>
    </div>
  );
}
