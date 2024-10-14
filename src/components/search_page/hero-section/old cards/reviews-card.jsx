
import React from 'react'
import { Image } from '@nextui-org/react'
import { SquareGanttChartIcon } from 'lucide-react';
import CardsTitle from './cards-title';
function ReviewsCard({cards=[], changeTab}) {
  return (
    // h-[340px]
    <div className="mt-4 w-full h-[340px] col-span-2 relative backdrop-blur-lg rounded overflow-hidden shadow-md p-4 border border-gray-700 border-solid bg-blue-100/30 dark:bg-black/50">
        <CardsTitle title={cards[0]?.title} Icon={SquareGanttChartIcon} onClick={()=>changeTab('reviews')} />

        <div className="mx-4 my-2 relative rounded overflow-hidden h-[calc(100%-46px)]">
            {cards[0]?.imgUrl && <Image src={cards[0]?.imgUrl} alt={cards[0]?.title??'the review img'}
            classNames={{
                img: "w-full h-full object-cover",
                wrapper: "min-w-full",
            }} />}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black/60 from-15% to-70% z-10 flex flex-col items-start justify-end p-4 text-white">
                <h3 className='font-bold text-xl line-clamp-1 w-full'>
                    {cards[0]?.title}
                </h3>
                <p className="text-lg line-clamp-1 w-full">
                    {cards[0]?.desc}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ReviewsCard