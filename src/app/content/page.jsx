import Image from "next/image";
import wukong from "/public/hero1.png";
import hero2 from "/public/hero2.png";
import hero3 from "/public/hero3.png";
import vectorNew from "/public/vector.png";
import vectorNew2 from "/public/vector2.png";
import imagesFilter from "/public/images-filter.png";
import HeroBox1 from "./herobox1";

function Content() {
  return (
    <div className="h-screen border-2 text-black dark:text-white relative top-0 mt-[110px] ">
      <div className="hero-section  grid grid-cols-12 items-center">
        <div className="col-span-6">
          <div className="hero-box-img text-white relative ">
            <Image className="object-cover" src={wukong} alt="Wukong image" />
            <Image
              className="object-cover absolute top-0"
              alt="filter"
              src={imagesFilter}
            />
          </div>
          <div className="hero-box-content bg-black px-6 py-7 flex gap-10">
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
                <Image
                  src={vectorNew2}
                  className="w-[18px] h-4 mt-2"
                  alt="new"
                />
                <span> المقالات</span>
              </h3>
              <li>هل توجد تلك التقنية على جميع الهواتف؟</li>
              <li>ما هي مكالمات الوايفاي؟</li>
              <li>هل توجد تلك التقنية على جميع الهواتف؟</li>
              <li>ما هي مكالمات الوايفاي؟</li>

              <li>هل توجد تلك التقنية على جميع الهواتف؟</li>
              <li>ما هي مكالمات الوايفاي؟</li>
              <li>هل توجد تلك التقنية على جميع الهواتف؟</li>
              <li>ما هي مكالمات الوايفاي؟</li>
            </ul>
          </div>
        </div>
        {/*  */}

        {/* <div className=" col-span-3 h-full bg-blue-500 overflow-hidden">
          <div className="hero-box-img h-full text-white relative flex items-center">
            <Image
              quality={100}
              className="object-cover"
              src={hero2}
              alt="gaming event image"
            />
            <Image
              className="object-cover absolute top-0 left-0 bottom-0 right-0"
              alt="filter"
              src={imagesFilter}
            />
          </div>
        </div>
        <div className=" col-span-3 flex flex-col">
          <div className="hero-box-img h-full text-white relative">
            <Image
              quality={100}
              className="object-cover"
              src={hero3}
              alt="gaming event image"
            />
          </div>

          <div className="hero-box-img h-full text-white relative">
            <Image
              quality={100}
              className="object-cover"
              src={hero3}
              alt="gaming event image"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Content;
