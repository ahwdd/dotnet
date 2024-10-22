"use client";

import { useEffect, useState } from "react";
import ImgFilter from "../hero/ImgFilter";
import Button from "./Button";

const arr = [1, 2, 3, 4, 5];
const data = [
  "تدشين بلايستيشن 5 برو ",
  "مهرجان ASUS",
  "افتتاح معرض برلين",
  "حضور المصورين",
  "بداية المعرض",
];

function LiveProdcast() {
  // const [buttonId, setButtonId] = useState(null);
  const [buttonIndex, setButtonIndex] = useState(0);

  // useEffect(() => {
  //   const buttonsContainer = Array.from(
  //     document.querySelectorAll(".buttons-container > button")
  //   );

  //   // Set the first button ID
  //   const firstButton = buttonsContainer[0];
  //   setButtonId(firstButton);

  //   // Get the index of the first button
  //   const index = buttonsContainer.findIndex(
  //     (button) => button === firstButton
  //   );
  //   setButtonIndex(index);
  // }, []);

  return (
    <div className="live-prodcast h-[500px] mx-10">
      <div
        className="h-full"
        style={{
          background: "url('/berlin.png') center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="filter h-full bg-gradient-filter-img-top f">
          <div className="header flex justify-between p-7">
            <p className="text-red-500 underline flex items-center gap-2">
              <button className="relative w-4 h-4 rounded-full mt-1 border-solid border-white border after:content-[''] after:block after:w-3 after:h-3 after:bg-red-500 after:absolute after:top-1/2 after:left-1/2 after:rounded-full after:-translate-x-1/2 after:-translate-y-1/2"></button>
              تغطية مباشرة
            </p>
            <h2 className="title text-gray-500 text-left text-3xl">
              IFA_Germani#
            </h2>
          </div>

          <p>{/* Hello ID : <Button id={buttonIndex} /> */}</p>

          <div className="buttons-navigation mx-16 ">
            <h3 className="mb-10 text-4xl font-bold">
              تغطيتنا لمعرض IFA المانيا برلين
            </h3>
            <div className="buttons-container flex flex-col gap-7 relative w-fit ">
              <div className="border-dotted border-1 h-full absolute right-1/2 z-0">
                {/* dotted element */}
              </div>
              {arr.map((e, i) => (
                <button
                  onClick={() => {
                    setButtonIndex(i);
                  }}
                  className={`
                    ${
                      buttonIndex === i ? "bg-sixth" : "bg-sixth50"
                    } border border-solid w-7 h-7  rounded-full relative z-10
                    `}
                >
                  <p className="absolute text-right right-10 top-0 z-0 whitespace-nowrap">
                    {data[i]}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveProdcast;
