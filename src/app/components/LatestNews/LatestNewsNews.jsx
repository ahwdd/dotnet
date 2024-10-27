import { latestNews_news } from "@/app/data/data";
import LatestNewsHeader from "./LatestNewsHeader";
import Image from "next/image";

function LatestNewsNews() {
  return (
    <div className="div col-span-4 flex flex-col h-screen">
      <LatestNewsHeader />

      <div className="flex flex-col flex-1 pt-5 justify-center rounded pb-3 h-[800px] bg-[#3F3F46]">
        {latestNews_news.map((e, i) => (
          <div key={i} className="latest-news-posts flex-1 my-2 px-5">
            <div className="latest-news-post h-[104px] flex items-center gap-3">
              <Image
                src={e.postimg}
                className="object-cover w-20 h-20 rounded"
                alt={e.postDesc}
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
  );
}

export default LatestNewsNews;
