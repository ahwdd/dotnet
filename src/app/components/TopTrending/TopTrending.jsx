import Image from "next/image";
import trendahw from "/public/trendahw.png";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//      style={{ background: `url("/hero/hero1.png") center center no-repeat` }}

function TopTrending() {
  return (
    <div className="flex gap-7 top-trending  items-start justify-center ">
      <h2>تريند🔥</h2>
      <div className="wrapper w-1/2 h-7 overflow-hidden">
        <div className="trending w-screen">
          <ul className="flex gap-8 whitespace-nowrap justify-end ">
            {arr.map((_, i) => (
              <li key={i} className="flex gap-1 items-center">
                <Image src={trendahw} className="object-contain" />
                <span>مستجدات الحرب على غزة</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopTrending;
