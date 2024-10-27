import Image from "next/image";
import newVector from "/public/new-vector.png";
function LatestNewsHeader({ type }) {
  return (
    <div>
      {" "}
      <h3 className="gap-2 font-bold mb-5 flex text-3xl items-center ">
        <Image src={newVector} className="w-9 h-3 mt-2" alt="new vector" />
        <span> الأخبار</span>
      </h3>
    </div>
  );
}

export default LatestNewsHeader;
