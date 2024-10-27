import Image from "next/image";
import post1 from "/public/latestNews/post1.png";
import post2 from "/public/latestNews/post2.png";
import GradientFilter from "../GradientFilter/GradientFilter";
import penVector from "/public/penvector.png";
import eyeVector from "/public/eyevector.png";
import LatestNewsHeader from "./LatestNewsHeader";
import { latestNews_articles_reviews, latestNews_news } from "@/app/data/data";
import LatestNewsReviews from "./LatestNewsReviews";
import LatestNewsArticles from "./LatestNewsArticles";
import LatestNewsNews from "./LatestNewsNews";
function LatestNews() {
  return (
    <>
      <div className="grid grid-cols-12 gap-10 h-full ">
        <LatestNewsArticles />
        <LatestNewsReviews />
        <LatestNewsNews />
      </div>
    </>
  );
}

export default LatestNews;
