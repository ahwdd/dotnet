"use client"
import {useState, useEffect, useRef} from 'react'
import { Image } from '@nextui-org/react'
import CirclesImage from '@/public/images/shapes/circles.png'
import CardsTitle from './cards-title';
import QuestionMarkImg from '@/public//images/icons/question-mark.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules';
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

function HowCard({cards=[], changeTab}) {
    const HowSliderRef = useRef() 
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(()=>{ 
        const swiperInstance = HowSliderRef.current?.swiper;
        if (swiperInstance) {
          swiperInstance.on('slideChange', () => {
            setActiveSlide(swiperInstance.realIndex)
          });
        }
    }, [])
  return (
    // h-64
    <div className="w-full h-[340px] col-span-2 relative backdrop-blur-lg rounded overflow-hidden shadow-md p-4 border border-gray-700 border-solid bg-blue-100/30 dark:bg-black/50">
        <CardsTitle title={`كيف`} img={QuestionMarkImg} onClick={()=>changeTab('how')} />
        <Image src={CirclesImage.src} alt='circles image'
        classNames={{
            img: "w-full h-full object-cover object-bottom brightness-0 saturate-0 grayscale",
            wrapper: "absolute h-[50%] min-w-[75%] z-10 top-[10%] -right-[15%] rotate-45",
        }} />

        <Swiper
        id='latest-how-swiper'
        ref={HowSliderRef}
        effect='cube'
        parallax={true}
        speed='500'
        pagination={{
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
        },
        }}
        cubeEffect={{ shadow: false, }}
        modules={[Pagination, EffectCube]}
        slidesPerView={1}
        centeredSlides= {true}
        className='w-auto search-how-swiper h-[calc(100%-100px)] p-4 px-8 translate-y-1/3'>
            {cards.map((_, i)=>{
            return  <SwiperSlide key={i} className=''>
                <div className="flex items-center justify-center w-full gap-4">
                    {_.imgUrl && <Image src={_.imgUrl} alt={_.title}
                    classNames={{
                        img: "w-full h-full object-cover rounded",
                        wrapper: "size-16 min-w-16 mt-1",
                    }} />}
                    <div className="space-y-2 max-w-72">
                        <h3 className='font-bold '>
                            {_.title}
                        </h3>
                        <p className="">
                            {_.desc}
                        </p>
                    </div>
                </div>
            </SwiperSlide> 
            })}
        </Swiper>
    </div>
  )
}

export default HowCard