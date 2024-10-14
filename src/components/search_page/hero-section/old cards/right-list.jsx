"use client"
import {useState, useEffect, useRef} from 'react'
import Image from 'next/image';

// import { footerData } from './data';
import { ArrowUpLeft } from 'lucide-react';
import NewsCard from './news-card';
import BlogsCard from './blogs-card';
import ReviewsCard from './reviews-card';
import HowCard from './how-card';

function RightList({cards=[], id='blogs', changeTab}) {
    const [current, setCurrent] = useState(0)
    const [categories, setCategories] = useState(null)
    console.log('cards', cards)

    const data = [
        {en: "news", ar: "الأخبار"},
        {en: "blogs", ar: "المقالات"},
        {en: "reviews", ar: "المراجعات"},
        {en: "how", ar: "كيف"}
    ]
    
    useEffect(()=>{
        if(id == 'all'){
          const maxCardsPerCategory = {
            blogs: 6,
            products: 0,
            videos: 0,
            news: 5,
            reviews: 1,
            how: 3,
          };
          const categories = Object.keys(maxCardsPerCategory); // categories array
          const categorizedCards = categories.reduce((cat, i) => { 
            cat[i] = []; return cat; 
          }, {}); // object with catigories & an initial value of []
          
          cards.forEach(card => {
            if (categorizedCards[card.type] && categorizedCards[card.type].length < maxCardsPerCategory[card.type]) {
              categorizedCards[card.type].push(card);
            }
          });
          console.log('categorizedCards', categorizedCards)
          setCategories(categorizedCards);
        }else{
          setCategories([...cards])
        }
        // const timer = setInterval(()=>{
        // setCurrent(prev=>{
        //     if(prev+1<data.length) return prev+1
        //     else return 0
        // })
        // }, 6000) 
        // return () => clearInterval(timer)
    }, [cards])


  return (
    <div className='w-full h-full grid grid-cols-3 items-center justify-center pt-4'>
        <div className="h-full w-full flex flex-col items-start justify-end gap-4">
            {data?.map((_, i)=>{
            return  <div key={i} 
            className={`h-20 w-full text-black dark:text-white relative cursor-pointer`} onClick={()=>setCurrent(i)}>
                <span className={`absolute h-full top-0 right-0 transition-all duration-[1.5s] ease-soft-spring bg-gradient-to-l to-transparent from-[#F95560] 
                    ${i==current||0? 'w-full': 'w-0.5'}`}></span>
                <span className='absolute inset-0 flex items-center justify-start px-4'>{_.ar}</span>
            </div> 
            })}
        </div>
        {current == 0 && <NewsCard cards={categories?.news} changeTab={changeTab} />}
        {current == 1 && <BlogsCard cards={categories?.blogs} changeTab={changeTab} />}
        {current == 2 && <ReviewsCard cards={categories?.reviews} changeTab={changeTab} />}
        {current == 3 && <HowCard cards={categories?.how} changeTab={changeTab} />}
    </div>)
}

export default RightList