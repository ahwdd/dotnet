import Link from "next/link";

function ReadMoreMain() {
  return (
    <div>
      <div className="readmore-post w-full grid grid-cols-12 h-[309px]">
        <div
          style={{
            background: "url('/hero/hero3.png') center center no-repeat",
            backgroundSize: "cover",
          }}
          className="slider-piece col-span-6  border-solid"
        ></div>

        <div
          style={{
            background: "url('/hero/hero3.png') center center no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full slider-piece col-span-6  relative"
        >
          <div className="first-text absolute h-full top-0 left-0 right-0 backdrop-blur-lg bg-[#3F3F4680]">
            <div className="flex flex-col text-sm gap-2 m-3 justify-center">
              <h2 className="title ">فريق Machine Games يُبدع!</h2>

              <p className="leading-9">
                تلقينا دعوة من Bethesda الشرق الأوسط لمشاهدة نصف ساعة من Indiana
                Jones and the Great Circle، وتركت اللعبة انطباعًا رائعًا، حيث
                استلهمت من ألعاب Uncharted وTomb Raider وأضافت طابع Machine
                Games المعروف من سلسلة ولفينشتاين. النتيجة هي تجربة مغامرات
                مميزة ستنال إعجاب عشاق هذا النوع!
              </p>
            </div>

            <Link
              href={"/"}
              className="absolute bottom-0 py-3 bg-[#00000080] w-full left-0 right-0 text-center"
            >
              إقرأ المزيد
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadMoreMain;
