"use client";
import Image from "next/image";

const mostWatchedData = [
  {
    writtenBy: "يومان . بقلم أحمد يسري",
    desc: "حدث IFA 24: انتل تستعرض Lunar Lake، معماريتها الأكثر توفيرًا للطاقة.",
  },

  {
    writtenBy: "يومان . بقلم أحمد يسري",
    desc: "حدث IFA 24: انتل تستعرض Lunar Lake، معماريتها الأكثر توفيرًا للطاقة.",
  },

  {
    writtenBy: "يومان . بقلم أحمد يسري",
    desc: "حدث IFA 24: انتل تستعرض Lunar Lake، معماريتها الأكثر توفيرًا للطاقة.",
  },

  {
    writtenBy: "يومان . بقلم أحمد يسري",
    desc: "حدث IFA 24: انتل تستعرض Lunar Lake، معماريتها الأكثر توفيرًا للطاقة.",
  },

  {
    writtenBy: "يومان . بقلم أحمد يسري",
    desc: "حدث IFA 24: انتل تستعرض Lunar Lake، معماريتها الأكثر توفيرًا للطاقة.",
  },

  {
    writtenBy: "يومان . بقلم أحمد يسري",
    desc: "حدث IFA 24: انتل تستعرض Lunar Lake، معماريتها الأكثر توفيرًا للطاقة.",
  },
];

function MostWatched() {
  return (
    <div className="bg-[#3F3F46] h-full p-4">
      <h2 className="text-xl mb-10">الأكثر مشاهدة</h2>

      <div className="flex flex-col gap-10 items-center justify-center">
        {mostWatchedData.map((e, i) => (
          <div className="flex gap-3">
            <div className="flex items-center justify-center text-3xl">
              {i + 1}
            </div>
            <div>
              <Image src={"/hero3.png"} width={68} height={68} />
            </div>
            <div className="flex flex-col">
              <p>{e.writtenBy}</p>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostWatched;
