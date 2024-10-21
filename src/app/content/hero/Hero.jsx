import Image from "next/image";
import wukong from "/public/hero1.png";
import hero2 from "/public/hero2.png";
import hero3 from "/public/hero3.png";
import vectorNew from "/public/vector.png";
import vectorNew2 from "/public/vector2.png";
import ImgFilter from "./ImgFilter";

function Hero() {
  return (
    <div className="hero-section  flex items-center justify-stretch size-full">
      <div className="w-1/2 h-screen bg-black relative">
        <div className="text-white bg-red-500 relative ">
          <Image
            className="object-cover w-full h-[365px] "
            src={wukong}
            alt="Wukong image"
          />
          <div className="linear-grad bg-gradient-filter-img absolute top-0 left-0 right-0 h-full"></div>
        </div>
        <div className="absolute bottom-0 pt-5 left-0  h-1/2 w-full  flex gap-10">
          <ul className=" w-full text-lg letter-spacing[-3px] flex flex-col gap-7">
            <h3 className="gap-2 font-bold flex text-3xl items-center ">
              <Image src={vectorNew} className="w-9 h-3 mt-2" alt="new" />
              <span> الأخبار</span>
            </h3>
            <li>هل توجد تلك التقنية على جميع الهواتف؟</li>
            <li>ما هي مكالمات الوايفاي؟</li>
            <li>هل توجد تلك التقنية على جميع الهواتف؟</li>
            <li>ما هي مكالمات الوايفاي؟</li>
          </ul>
          <ul className=" w-full text-lg letter-spacing[-3px] flex flex-col gap-7">
            <h3 className="gap-2 font-bold flex text-3xl items-center ">
              <Image src={vectorNew2} className="w-[18px] h-4 mt-2" alt="new" />
              <span> المقالات</span>
            </h3>
            <li>هل توجد تلك التقنية على جميع الهواتف؟</li>
            <li>ما هي مكالمات الوايفاي؟</li>
            <li>هل توجد تلك التقنية على جميع الهواتف؟</li>
            <li>ما هي مكالمات الوايفاي؟</li>
          </ul>
        </div>
      </div>
      <div className=" w-1/4 h-screen overflow-hidden">
        <div className="h-full text-white relative flex items-center">
          <Image
            quality={100}
            className="object-cover h-full w-full"
            src={hero2}
            alt="gaming event image"
          />

          <ImgFilter />
        </div>
      </div>
      <div className=" w-1/4 h-screen flex flex-col ">
        <div className="h-1/2 text-white relative">
          <Image
            quality={100}
            className="object-cover size-full"
            src={hero3}
            alt="gaming event image"
          />

          <ImgFilter />

          {/* <ImgFilter
              textComponent={
                <HeroSectionContent
                  h3={"يومان . بقلم مصطفى يسري"}
                  p={
                    "انطباعنا عن Indiana Jones: مزيج مثالي بين انشارتد و ولفينشتاين!"
                  }
                />
              }
            /> */}
        </div>
        <div className="h-1/2 text-white relative">
          <Image
            quality={100}
            className="object-cover size-full"
            src={hero3}
            alt="gaming event image"
          />
          {/* <ImgFilter
              textComponent={
                <HeroSectionContent
                  h3={"يومان . بقلم مصطفى يسري"}
                  p={
                    "انطباعنا عن Indiana Jones: مزيج مثالي بين انشارتد و ولفينشتاين!"
                  }
                />
              }
            /> */}

          <ImgFilter />
        </div>
      </div>
    </div>
  );
}

export default Hero;
