import Image from "next/image";
import { seeLaterData } from "@/app/data/data";
import clock from "/public/clock.png";

function UpComingEvent() {
  return (
    <>
      <div
        style={{
          background: "url('/seelaterbg.png') center center no-repeat",
          backgroundSize: "cover",
        }}
        className="see-later rounded relative border-spacing-2 h-[126px] "
      >
        <div className="h-full bg-[#3c3c3c75] flex justify-between items-center p-5 ">
          <h2 className="event-title font-normal text-3xl pr-4">
            {seeLaterData.title}
          </h2>
          <p className="event-desc-date flex flex-col gap-3">
            <span className="text-4xl font-normal">{seeLaterData.desc}</span>
            <span className="self-end">{seeLaterData.date}</span>
          </p>

          <div className="flex gap-10 items-center">
            <div className="event-timing flex text-5xl font-bold gap-6 text-mainColor  jusitfy-center items-center">
              <Image src={clock} className="w-11 h-[52px]" alt="clock" />
              <ul className="flex gap-2 text-mainColor2">
                <li className="bg-mainColor w-20 h-20 rounded-md flex items-center justify-center">
                  58
                </li>
                <li className="bg-mainColor w-20 h-20 rounded-md flex items-center justify-center">
                  36
                </li>
                <li className="bg-mainColor w-20 h-20 rounded-md flex items-center justify-center">
                  00
                </li>
              </ul>
            </div>

            <div className="desc2 border-solid bg-[#0000006e] h-16 flex justify-center px-7 items-center border-red-500 border">
              <h3>{seeLaterData.desc2}</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col absolute top-0 right-[0px]  h-full">
          <div className=" bg-red-500 h-6 rounded-tr w-6"></div>
          <div className=" bg-white h-full w-6"></div>
        </div>
      </div>
    </>
  );
}

export default UpComingEvent;
