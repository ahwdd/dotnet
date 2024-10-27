import Image from "next/image";
import hero3 from "/public/hero/hero3.png";
import GradientFilter from "../GradientFilter/GradientFilter";

function Hero3() {
  return (
    <div className="bg-red-500 col-span-4 h-1/2 relative">
      <Image
        src={hero3}
        className="object-cover size-full"
        alt="indiana jones"
      />
      <GradientFilter text={<HeroText />} />
    </div>
  );
}

export default Hero3;
