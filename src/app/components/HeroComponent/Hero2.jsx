import Image from "next/image";
import hero2 from "/public/hero/hero2.png";
import GradientFilter from "../GradientFilter/GradientFilter";
import HeroText from "./HeroText";

function Hero2() {
  return (
    <div className=" w-1/4 h-screen overflow-hidden">
      <div className="h-full text-white relative flex items-center">
        <Image
          quality={100}
          className="object-cover h-full w-full"
          src={hero2}
          alt="gaming event image"
        />
        <GradientFilter text={<HeroText />} />
      </div>
    </div>
  );
}

export default Hero2;
