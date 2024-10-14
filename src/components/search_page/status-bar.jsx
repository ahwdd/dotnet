import React from 'react'
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { Card, Skeleton } from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';

function StatusBar({statusData, openStatus, setVidDis, setCurrentVid, setActiveVidIndex ,isLoading, shortsTotal}) {
  const sliderRef = useRef() 
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  
  useEffect(() => {
    if (sliderRef.current) {
      const swiper = sliderRef.current.swiper;
      setTimeout(() => {
        swiper.slideTo(2, 1000);
        setTimeout(() => {
          swiper.slideTo(0, 500);
        }, 1000);
      }, 1000);
    }
  }, []);

  const handleOpenStatus = (i=0) => {
    openStatus(prev=>!prev)
    setVidDis('small')
    setCurrentVid({youtubeId: statusData[i].youtubeId, title: statusData[i].title})
    setActiveVidIndex(i)
  }

  const handleSlideChange = () => {
    const swiper = sliderRef.current.swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const slidePrev = () => {
    const swiper = sliderRef.current.swiper;
    swiper.slidePrev();
  };

  const slideNext = () => {
    const swiper = sliderRef.current.swiper;
    swiper.slideNext();
  };

  return (
    <Swiper
      id='status-swiper'
      ref={sliderRef}
      parallax={true}
      speed='500'
      pagination={false}
      grabCursor={true}
      slidesPerView={'auto'}
      spaceBetween={10}
      onSlideChange={handleSlideChange}
      className='w-full relative'>
        {(!isLoading && statusData && statusData.length > 0)
        ?statusData?.map((_, i)=>{
        return <SwiperSlide key={i} onClick={()=>handleOpenStatus(i)} className='!w-fit !flex items-center justify-center gap-0'>
          {i==shortsTotal && <div className='h-52 w-10 bg-black dark:bg-black/50 flex items-center justify-center'>
            <div className='text-white text-xl -mr-2' style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}>
              شاهد ايضاً
            </div>
          </div>}
          <div className="!aspect-[9/13] !w-36 !flex items-center justify-center cursor-pointer relative">
              <div className="size-full flex items-center justify-center relative">
                  <Image src={_.imgUrl} alt={_.title} width={1000} height={1000} className="w-full aspect-shorts object-cover" />
                  <div className="absolute inset-0  bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute w-[calc(100%-1rem)] bottom-0 left-0 text-white text-tiny line-clamp-3 mt-1 mb-2 mx-2">
                    {_.title}
                  </div>
              </div>
        </div>
        </SwiperSlide>
        })
        :isLoading&&[...Array(15)].map((_, i)=>(
          <SwiperSlide key={i} 
            className="!aspect-[9/13] !w-36 !flex items-center justify-center cursor-pointer relative">
            <div className="size-full flex items-center justify-center relative">
              <Skeleton className="w-full aspect-shorts object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
              <div className="flex items-center gap-1 flex-col absolute bottom-2 left-2 w-full z-20 pr-4">
                {[...Array(3)].map((line, i)=>(
                  <Skeleton key={i} 
                  className="w-full h-2" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))
        }

        
      {!isBeginning && (
        <button onClick={slidePrev} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white border border-solid px-1 py-4 rounded z-10">
          <ChevronRight />
        </button>
      )}
      {!isEnd && (
        <button onClick={slideNext} 
        className="absolute left-0 rotate-180 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white border border-solid px-1 py-4 rounded z-10">
          <ChevronRight />
        </button>
      )}
    </Swiper>
  )
}

export default StatusBar