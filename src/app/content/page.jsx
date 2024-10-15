import Image from "next/image";
import wukong from "/public/wukong.png";
import vectorNew from "/public/vector.png";
import vectorNew2 from "/public/vector2.png";
import wukongFilter from "/public/images-filter.png";
import HeroBox1 from "./herobox1";

function Content() {
  return (
    <div className="h-screen border-2 text-black dark:text-white border-blue-500 relative top-0 mt-[112px] ">
      <div className="hero-section grid grid-cols-12 items-center">
        {/*  */}
        <div className=" col-span-6">
          <div className="hero-box-img text-white  relative ">
            <Image className="object-cover" src={wukong} alt="Wukong image" />
            <Image
              className="object-cover absolute top-0"
              alt="filter"
              src={wukongFilter}
            />
          </div>
          <div className="hero-box-content px-6 py-7 bg-black flex gap-10">
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
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="bg-red-500 col-span-3">Hello</div>
        <div className="bg-blue-500 col-span-3">Hello</div>
      </div>
    </div>
  );
}

export default Content;
