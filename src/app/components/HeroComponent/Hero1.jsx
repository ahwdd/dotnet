import hero1 from "/public/hero/hero1.png";
import newVector from "/public/new-vector.png";
import articlesVector from "/public/articles-vector.png";
import { heroArticles, heroNews } from "@/app/data/data";
import Image from "next/image";
import GradientFilter from "../GradientFilter/GradientFilter";

function Hero1() {
  return (
    <div className="w-1/2 h-screen bg-mainColor2 shadow-xl relative">
      <div className="text-mainColor  relative ">
        <Image
          className="object-cover w-full h-[365px]"
          src={hero1}
          alt="Wukong image"
        />
        <GradientFilter />
      </div>
      <div className="absolute bottom-0 pt-5 left-0  px-5 h-1/2 w-full  flex gap-10">
        <ul className="list-disc w-full text-lg letter-spacing[-3px] flex flex-col gap-7">
          <h3 className="gap-2 font-bold flex text-3xl items-center ">
            <Image src={newVector} className="w-9 h-3 mt-2" alt="new" />
            <span> الأخبار</span>
          </h3>
          {heroNews.map((_, i) => (
            <li className="mr-5" key={i}>
              {_}
            </li>
          ))}
        </ul>
        <ul className="list-disc w-full text-lg letter-spacing[-3px] flex flex-col gap-7">
          <h3 className="gap-2 font-bold flex text-3xl items-center ">
            <Image
              src={articlesVector}
              className="w-[18px] h-4 mt-2"
              alt="new"
            />
            <span> المقالات</span>
          </h3>
          {heroArticles.map((_, i) => (
            <li className="mr-5" key={i}>
              {_}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hero1;
