import Image from "next/image";

// import newVector from "/public/new-vector.png";
// import articlesVector from "/public/articles-vector.png";
// import { heroArticles, heroNews } from "@/app/data/hero";
// import Hero1 from "./Hero1";
// import Hero2 from "./Hero2";
// import Hero3 from "./Hero3";

import hero1 from "/public/hero/hero1.png";
import hero2 from "/public/hero/hero2.png";
import hero3 from "/public/hero/hero3.png";
import newVector from "/public/new-vector.png";
import articlesVector from "/public/articles-vector.png";
import { heroArticles, heroNews } from "@/app/data/data";
import GradientFilter from "../GradientFilter/GradientFilter";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import HeroText from "./HeroText";

function HeroComponent() {
  return (
    <>
      <div className="hero-section  flex items-center justify-stretch size-full">
        <Hero1 />
        <Hero2 />

        <div className=" w-1/4 h-screen flex flex-col ">
          <div className="h-1/2 text-white relative">
            <Image
              quality={100}
              className="object-cover size-full"
              src={hero3}
              alt="indiana jones"
            />

            <GradientFilter text={<HeroText />} />
          </div>
          <div className="h-1/2 text-white relative">
            <Image
              quality={100}
              className="object-cover size-full"
              src={hero3}
              alt="indiana jones"
            />

            <GradientFilter text={<HeroText />} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
