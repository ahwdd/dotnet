import Image from "next/image";
import LatestNewsHeader from "./LatestNewsHeader";
import arrowtopleft from "/public/arrowtopleft.png";
import { latestNews_articles_reviews, latestNews_news } from "../contentData";
import LatestNewsReviews from "./LatestNewsReviews";
import LatestNewsArticles from "./LatestNewsArticles";
function LatestNews() {
  return (
    <>
      <div className="latest-news pb-10 mx-10">
        <div className="latest-news-container grid grid-cols-3 gap-5">
          {/* First section */}
          <LatestNewsArticles />
          {/* Second section */}
          <LatestNewsReviews />
          {/* Second section */}
          {/* Same as the top one , looping later */}

          <div className="   ">
            <div className="h-full">
              <div className="header  flex justify-between items-center py-2 px-4">
                <LatestNewsHeader />
                <Image src={arrowtopleft} className="object-cover w-2 h-2" />
              </div>

              <div className="flex bg-[#3F3F46] flex-col items-center justify-between  h-[788px]">
                {latestNews_news.map((e, i) => (
                  <div key={i} className="latest-news-posts flex-1  pt-5">
                    <div className="latest-news-post flex items-center  gap-3">
                      <Image
                        src={e.postimg}
                        className="object-cover w-20 h-20"
                      />
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
      </div>
    </>
  );
}

export default LatestNews;
