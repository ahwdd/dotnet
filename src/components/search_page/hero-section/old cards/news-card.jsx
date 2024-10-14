"use client";
import { useState, useEffect, useRef } from 'react';
import { Image } from '@nextui-org/react';
import CirclesImage from '@/public/images/shapes/circles.png';
import { ArrowUpLeft, EyeIcon, HeartIcon } from 'lucide-react';
import CardStatus from './card-status';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';

function NewsCard({ cards = [], changeTab}) {
  const NewsSliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (cards.length > 0 && NewsSliderRef.current) {
      const swiperInstance = NewsSliderRef.current.swiper;
      if (swiperInstance) {
        swiperInstance.on('slideChange', () => {
          setActiveSlide(swiperInstance.realIndex);
        });

        const interval = setInterval(() => {
          swiperInstance.slideNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
      }
    }
  }, [cards]);

  return (
    // h-64
    <div className="w-full h-[340px] col-span-2 relative backdrop-blur-lg rounded overflow-hidden text-white shadow-md border border-gray-700 border-solid">
      <div className="absolute inset-0 flex">
        {/* bg image */}
        {cards[activeSlide]?.imgUrl && (
          <Image
            key={activeSlide}
            src={cards[activeSlide]?.imgUrl}
            alt="random image"
            classNames={{
              img: 'w-full h-full object-cover dark:satureate-50 dark:brightness-50',
              wrapper: `min-w-full opacity-1 transition-opacity duration-1000 ease-in-out blur-md`,
            }}
          />
        )}
        {cards && (
          <Swiper
            id="latest-news-swiper"
            ref={NewsSliderRef}
            effect="fade"
            fadeEffect={{ crossFade: true }} // Enable cross-fading between slides
            modules={[EffectFade]}
            parallax={true}
            speed={1000}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            allowTouchMove={false}
            className="w-full !absolute inset-0 bg-gradient-radial !z-10 to-black from-black/15 p-4"
          >
            {/* circles image */}
            <Image
              src={CirclesImage.src}
              alt="circles image"
              classNames={{
                img: `w-full h-full object-cover object-top`,
                wrapper: 'absolute h-[50%] min-w-[75%] -bottom-0 left-1/2 -translate-x-1/2 z-10',
              }}
            />
            {cards.map((_, i) => (
              <SwiperSlide key={i} className="p-4">
                <div className="flex flex-col items-center justify-between w-full gap-4 h-full">
                  {/* news data */}
                  <div className="flex items-center justify-start gap-1 w-full">
                    <span className="text-primaryLight text-tiny font-bold">New</span>
                    <h2>{`الأخبار`}</h2>
                  </div>
                  <div className="space-y-2 w-full text-center ">
                    <h3 className="font-bold text-xl">{_.title}</h3>
                    <p className="text-lg ">{_.desc}</p>
                    <div className="flex items-center justify-center gap-4 text-tiny text-white/50">
                      <CardStatus text={_.views} Icon={EyeIcon} />
                      <CardStatus text={_.likes} Icon={HeartIcon} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full ">
                    <p className="text-white/50">{_.publishedAt}</p>
                    <ArrowUpLeft onClick={()=>changeTab('news')} className='cursor-pointer' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
