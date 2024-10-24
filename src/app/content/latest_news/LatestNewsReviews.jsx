import LatestNewsHeader from "./LatestNewsHeader";
import hero3 from "/public/hero3.png";
import penVector from "/public/penvector.png";
import eyeVector from "/public/eyevector.png";
import ImgFilter from "../hero/ImgFilter";
import arrowtopleft from "/public/arrowtopleft.png";
import { latestNews_articles_reviews } from "../contentData";
import Image from "next/image";
function LatestNewsReviews() {
  return (
    <>
      <div className="h-full">
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

        <div className="flex flex-col h-full overflow-hidden">
          {" "}
          {latestNews_articles_reviews.map((e, i) => (
            <div
              key={i}
              className="post border-solid border-b border-gray-700  flex bg-gray-800 p-5 gap-3"
            >
              <Image
                className="object-cover w-20 border h-20"
                src={latestNews_articles_reviews[0].mainImg}
                alt="gaming event image"
              />

              <div className="post-data ">
                <div className="post-stats flex justify-between">
                  <div className="watched-liked flex gap-4">
                    <p className="flex gap-1 items-center">
                      <Image src={eyeVector} className="object-cover " />
                      <span>1255</span>
                    </p>
                    <p>123 </p>
                  </div>

                  <div className="post-date">
                    <p> {e.date}</p>
                  </div>
                </div>
                <div className="post-text">
                  <p>{e.postDesc}</p>
                  <p></p>
                </div>

                <p className="post-author text-gray-900 text-xs flex items-center gap-1">
                  <Image
                    src={penVector}
                    className="object-cover w-[9px] h-[9px]"
                  />
                  <span> {e.writtenBy}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestNewsReviews;
