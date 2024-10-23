import Image from "next/image";
import readmore1 from "/public/readmore1.png";
import ReadMorePost from "./ReadMorePost";
import ReadyMoreCarousel from "./ReadyMoreCarousel";
import ReadMoreMain from "./ReadMoreMain";
import MostWatched from "./MostWatched";

function ReadMoreSlider() {
  return (
    <div className="mx-10 one-time-repeat grid grid-cols-12 gap-4">
      <div className="readmore-posts col-span-8 flex flex-col gap-3 ">
        <ReadMoreMain />
        <ReadMorePost />
        <ReadMorePost />
        <ReadMorePost />
        <ReadMorePost />
        <ReadMorePost />
      </div>

      <div className="readmore-static col-span-4 gap-5  w-full flex flex-col">
        <ReadyMoreCarousel />
        <MostWatched />
      </div>
    </div>
  );
}

export default ReadMoreSlider;

/*
           <div className="second-text absolute h-full top-0 left-0 right-0 backdrop-blur-lg bg-[#3F3F4680]">
            <div className="flex flex-col gap-2 m-3">
              <h2 className="title text-lg">
                انطباعنا عن Indiana Jones: مزيج مثالي بين انشارتد و ولفينشتاين!
              </h2>

              <p className="desc text-sm">فريق Machine Games يُبدع!</p>
              <p className="written-by text-xxs">يومان . بقلم أحمد يسري</p>
            </div>
          </div>

          <div className="third-text w-full h-full backdrop-blur-lg bg-[#3F3F4680] w-ful">
            <p>
              تلقينا دعوة من Bethesda الشرق الأوسط لمشاهدة نصف ساعة من Indiana
              Jones and the Great Circle، وتركت اللعبة انطباعًا رائعًا، حيث
              استلهمت من ألعاب Uncharted وTomb Raider وأضافت طابع Machine Games
              المعروف من سلسلة ولفينشتاين. النتيجة هي تجربة مغامرات مميزة ستنال
              إعجاب عشاق هذا النوع!
            </p>
          </div> */
