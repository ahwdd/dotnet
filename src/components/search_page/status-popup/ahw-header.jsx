import React from 'react'
import Image from 'next/image'
import ActionDropdown from './dropdown'
import { AlignLeftIcon } from 'lucide-react'

function AhwHeader({commentsNumber=0}) {
  return (
    <div className="w-full h-20 flex items-center justify-start px-10 gap-4 relative">
        <div className="flex items-center justify-center gap-2">
            <p>{commentsNumber}</p>
            <p>التعليقات</p>
        </div>
        <div className="flex items-center justify-center gap-2">
            <AlignLeftIcon className='size-6' />
            <p>الترتيب</p>
        </div>
        {/* <Image src={Logo} alt='arabhardware logo' className='size-14 rounded' />
        <div className={`space-y-1 flex-1 text-small`}>
            <h4 className='font-bold'>{title}</h4>
            <p>{desc}</p>
        </div>
        <div id='action-dropdown-btn' className="cursor-pointer p-2 relative" onClick={()=>setIsExpanded(prev=>!prev)}>
            <Icon className="" />
        </div>
        <ActionDropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setValue} items={items} /> */}
    </div>
  )
}

export default AhwHeader