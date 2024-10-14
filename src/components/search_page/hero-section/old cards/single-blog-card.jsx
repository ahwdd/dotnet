import React from 'react'
import { Divider, Image } from '@nextui-org/react'
import { ArrowUpLeft, Edit3Icon, EyeIcon, HeartIcon, HeartPulseIcon, NewspaperIcon } from 'lucide-react';
import CardStatus from './card-status';

function SingleBlogCard({_,  i=0, chunkLength}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 text-sm">
        <div className="w-full flex items-start justify-center gap-4">
            {_.imgUrl && <Image src={_.imgUrl} alt={_.title}
            classNames={{
                img: "w-full h-full object-cover rounded",
                wrapper: "size-24 min-w-0 mt-1",
            }} />}
            <div className="flex-1 space-y-2">
                <div className="flex items-center justify-start gap-4 text-black/40 dark:text-white/40">
                    <CardStatus text={_.views} Icon={EyeIcon} />
                    <CardStatus text={_.likes} Icon={HeartIcon} />
                </div>
                <h3 className='font-bold '>
                    {_.title}
                </h3>
                <p className="">
                    {_.desc}
                </p>
                <div className='text-black/40 dark:text-white/40 w-full flex items-center justify-start '>
                    <CardStatus text={_.author} Icon={Edit3Icon} />
                </div>
            </div>
        </div>
        {i!=chunkLength-1 && <Divider className='w-3/4 bg-gray-700 dark:bg-gray-400' />}
    </div>
  )
}

export default SingleBlogCard