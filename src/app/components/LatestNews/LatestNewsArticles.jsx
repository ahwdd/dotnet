import LatestNewsHeader from "./LatestNewsHeader";
import Hero3 from "/public/hero/hero3.png";
import penVector from "/public/penvector.png";
import eyeVector from "/public/eyevector.png";
import arrowtopleft from "/public/arrowtopleft.png";
import { latestNews_articles_reviews } from "@/app/data/data";
import Image from "next/image";
import GradientFilter from "../GradientFilter/GradientFilter";
import post1 from "/public/latestNews/post1.png";
import HeroText from "../HeroComponent/HeroText";
function LatestNewsArticles() {
  return (
    <>
      <div className="div col-span-4">
        <LatestNewsHeader />
        <div className="rounded border border-gray-700 ">
          <div className="relative">
            <Image src={post1} className="object-cover w-full" alt="post" />
            <GradientFilter text={<HeroText />} />
          </div>
          <div className="flex flex-col h-full overflow-hidden rounded">
            {latestNews_articles_reviews.map((e, i) => (
              <div
                key={i}
                className="post border-solid border-gray-700 border-t flex p-5 gap-3"
              >
                <Image
                  className="object-cover w-20 h-20"
                  src={latestNews_articles_reviews[0].mainImg}
                  alt="gaming event image"
                />

                <div className="post-data ">
                  <div className="post-stats flex justify-between">
                    <div className="watched-liked flex gap-4">
                      <p className="flex gap-1 items-center">
                        <Image
                          src={eyeVector}
                          className="object-cover "
                          alt="eye"
                        />
                        <span>1255</span>
                      </p>
                      <p className="flex gap-1 items-center">
                        <svg
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.87788 2.27506C7.68714 2.05628 7.46068 1.88273 7.21143 1.76432C6.96218 1.64591 6.69502 1.58496 6.42521 1.58496C6.15541 1.58496 5.88825 1.64591 5.639 1.76432C5.38975 1.88273 5.16329 2.05628 4.97255 2.27506L4.57671 2.7289L4.18087 2.27506C3.7956 1.83335 3.27306 1.58519 2.7282 1.58519C2.18335 1.58519 1.66081 1.83335 1.27554 2.27506C0.890271 2.71678 0.673828 3.31588 0.673828 3.94057C0.673828 4.56525 0.890271 5.16436 1.27554 5.60607L4.57671 9.39092L7.87788 5.60607C8.0687 5.38739 8.22008 5.12775 8.32335 4.84198C8.42663 4.55621 8.47979 4.2499 8.47979 3.94057C8.47979 3.63124 8.42663 3.32493 8.32335 3.03916C8.22008 2.75339 8.0687 2.49375 7.87788 2.27506Z"
                            stroke="#364549"
                            strokeWidth="1.30099"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>123</span>
                      </p>
                    </div>

                    <div className="post-date text-gray-500">
                      <p> {e.date}</p>
                    </div>
                  </div>
                  <div className="post-text">
                    <p>{e.postDesc}</p>
                    <p></p>
                  </div>

                  <p className="post-author text-gray-500 text-xs flex items-center gap-1">
                    <Image
                      src={penVector}
                      className="object-cover w-[9px] h-[9px]"
                      alt="pen"
                    />
                    <span> {e.writtenBy}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNewsArticles;
