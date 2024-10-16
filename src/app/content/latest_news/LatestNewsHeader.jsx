import Image from "next/image";
import vectorNew from "/public/vector.png";
import vectorNew2 from "/public/vector2.png";

function LatestNewsHeader({ type }) {
  return (
    <div>
      {" "}
      <h3 className="gap-2 font-bold flex text-3xl items-center ">
        <Image src={vectorNew} className="w-9 h-3 mt-2" alt="new vector" />
        <span> الأخبار</span>
      </h3>
    </div>
  );
}

export default LatestNewsHeader;
