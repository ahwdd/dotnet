import Image from "next/image";
import LatestNewsHeader from "./LatestNewsHeader";
import arrowtopleft from "/public/arrowtopleft.png";
import hero3 from "/public/hero3.png";
import postimg from "/public/postimg.png";
import penVector from "/public/penvector.png";
import eyeVector from "/public/eyevector.png";
import ImgFilter from "../hero/ImgFilter";

function LatestNews() {
  return (
    <>
      <div className="latest-news pb-10">
        <div className="latest-news-container grid grid-cols-3 gap-5">
          <div className="">
            <div className="header flex justify-between items-center py-2 px-4">
              <LatestNewsHeader />
              <Image src={arrowtopleft} className="object-cover w-2 h-2" />
            </div>

            <div className="h-[400px] text-white relative flex items-center">
              <Image
                quality={100}
                className="object-cover h-full w-full"
                src={hero3}
                alt="gaming event image"
              />

              <ImgFilter />
            </div>

            <div className="post flex bg-[#364549] p-5 gap-3">
              <Image
                className="object-cover w-20 border h-20"
                src={postimg}
                alt="gaming event image"
              />

              <div className="post-data">
                <div className="post-stats flex justify-between">
                  <div className="watched-liked flex gap-4">
                    <p className="flex gap-1 items-center">
                      <Image src={eyeVector} className="object-cover " />
                      <span>1255</span>
                    </p>
                    <p>123 </p>
                  </div>

                  <div className="post-date">
                    <p>مارس 2024</p>
                  </div>
                </div>
                <div className="post-text">
                  <p>
                    الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات
                    كل أربع سنوات، الذي بدأ في إحداث...
                  </p>
                  <p></p>
                </div>

                <p className="post-author text-gray-800 text-xs flex items-center gap-1">
                  <Image
                    src={penVector}
                    className="object-cover w-[9px] h-[9px]"
                  />
                  <span> مصطفي يسري</span>
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="header flex justify-between items-center py-2 px-4">
              <LatestNewsHeader />
              <Image src={arrowtopleft} className="object-cover w-2 h-2" />
            </div>
          </div>

          {/* Same as the top one , looping later */}

          <div className="">
            <div className="header flex justify-between items-center py-2 px-4">
              <LatestNewsHeader />
              <Image src={arrowtopleft} className="object-cover w-2 h-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
