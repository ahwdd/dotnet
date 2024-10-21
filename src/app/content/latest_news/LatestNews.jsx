import Image from "next/image";
import LatestNewsHeader from "./LatestNewsHeader";
import arrowtopleft from "/public/arrowtopleft.png";
import hero3 from "/public/hero3.png";
import penVector from "/public/penvector.png";
import eyeVector from "/public/eyevector.png";
import ImgFilter from "../hero/ImgFilter";
import { latestNews_articles_reviews, latestNews_news } from "../contentData";
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

            {latestNews_articles_reviews.map((e, i) => (
              <div key={i} className="post flex bg-gray-800 p-5 gap-3">
                <Image
                  className="object-cover w-20 border h-20"
                  src={latestNews_articles_reviews[0].mainImg}
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

            {latestNews_articles_reviews.map((e, i) => (
              <div key={i} className="post flex bg-gray-800 p-5 gap-3">
                <Image
                  className="object-cover w-20 border h-20"
                  src={latestNews_articles_reviews[0].mainImg}
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

          {/* Same as the top one , looping later */}

          <div className="h-full border-solid border-blue-500 border-2">
            <div className="header flex justify-between items-center py-2 px-4">
              <LatestNewsHeader />
              <Image src={arrowtopleft} className="object-cover w-2 h-2" />
            </div>

            <div className="border-solid border border-red-500 bg-[#3F3F46] flex flex-col gap-4">
              {latestNews_news.map((e, i) => (
                <div key={i} className="latest-news-posts  flex-grow flex">
                  <div className="latest-news-post flex items-center p-4 gap-3">
                    <Image src={e.postimg} className="object-cover w-20 h-20" />
                    <div className="post-text">
                      <div className="flex gap-2 mb-3">
                        <p>{e.date}</p>.<p>بقلم {e.writtenBy}</p>
                      </div>
                      <p>{e.postDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
