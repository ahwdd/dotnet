"use client";
import React, { useEffect } from "react";

function TopTrending() {
  // useEffect(() => {
  //   const copy = document
  //     .querySelector(".top-trending-content")
  //     .cloneNode(true);
  //   document.querySelector(".logos").appendChild(copy);
  // }, []);

  return (
    <div className="top-trending">
      <div className="top-trending-wrapper w-full bg-red-500 h-[500px] flex justify-center">
        <div className="top-trending-container bg-green-500 overflow-hidden w-1/2 border-red-500 border-2 border-solid">
          <div className="top-trending-slider !flex gap-1">
            {/* Original Content */}
            <div className="top-trending-content w-full !flex justify-between">
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
            </div>
            <div className="top-trending-content w-full !flex justify-between -mr-[100% ]">
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
            </div>

            <div className="top-trending-content w-full !flex justify-between -mr-[100% ]">
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
              <p>مستجدات الحرب علي غزة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTrending;
