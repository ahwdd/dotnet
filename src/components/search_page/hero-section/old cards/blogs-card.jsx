"use client"
import {useState, useEffect, useRef} from 'react'
import { NewspaperIcon } from 'lucide-react';
import CardsTitle from './cards-title';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube,Pagination } from 'swiper/modules';
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import SingleBlogCard from './single-blog-card';

function BlogsCard({cards=[], changeTab}) {
    const BlogsSliderRef = useRef() 
    const [chunks, setChunks] = useState([[]])
    const [activeSlide, setActiveSlide] = useState(0)

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    useEffect(()=>{
      const swiperInstance = BlogsSliderRef.current?.swiper;
      if (swiperInstance) {
        swiperInstance.on('slideChange', () => {
          setActiveSlide(swiperInstance.realIndex)
        });
      }
    }, [])

    useEffect(()=>{ 
        setChunks(chunkArray(cards, 2))
    }, [cards])
    
  return (
    // no initial height
    <div className="w-full min-h-[340px] col-span-2 relative backdrop-blur-lg rounded overflow-hidden shadow-md p-4 border border-gray-700 border-solid">
        <CardsTitle title={`المقالات`} Icon={NewspaperIcon} onClick={()=>changeTab('blogs')} />
        {/* {chunks[activeSlide] && chunks[activeSlide][0] &&
        <div className="absolute inset-0 blur-3xl -z-10 saturate-[.25] brightness-150 dark:brightness-50" 
        style={{backgroundImage: `url(${chunks[activeSlide][0]?.imgUrl})`}}/>} */}
        
        <Swiper
        id='latest-blogs-swiper'
        ref={BlogsSliderRef}
        effect='cube'
        parallax={true}
        speed='500'
        pagination={{
          clickable: true,
        //   dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        cubeEffect={{
          shadow: false,
        }}
        modules={[Pagination, EffectCube]}
        slidesPerView={1}
        centeredSlides= {true}
        className='w-auto search-blogs-swiper pb-10'>
            {chunks.map((chunk, index)=>{
            return  <SwiperSlide key={index} className=''>
                <div className="p-4 space-y-4">
                {chunk && chunk.length>0 && chunk.map((_, i)=>{
                    return <SingleBlogCard key={i} _={_} i={i} chunkLength={chunk.length} />
                })}
                </div>
            </SwiperSlide> 
            })}
        </Swiper>
        
    </div>
  )
}

export default BlogsCard