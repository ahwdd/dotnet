import { ArrowUpLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CardsTitle({title, Icon, img,  onClick}) {
  return (
    <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-center gap-2">
            {Icon && <Icon />}
            {img && <Image src={img} alt={`${title} icon`} className='size-6 object-contain' />}
            <h2 className='font-bold text-xl'>
                {title??''}
            </h2>
        </div>
        <ArrowUpLeft onClick={onClick} className='cursor-pointer' />
    </div>
  )
}

export default CardsTitle