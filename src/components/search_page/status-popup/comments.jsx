import React from 'react'
import Image from 'next/image'
import Logo from '@/public/images/logos/ahw_store_w.png'

function Comments({commentsList = [
  // {image: Logo, username: 'خديجة مسعود', comment: 'حل فعال ومثالي'}, 
  // {image: Logo, username: 'مسعود مسعود', comment: 'حل فعال ومثالي'}, 
]}) {
  // console.log('commentsList', commentsList)
  return (
    <div className='w-full p-4 text-white relative'>
      <div className="rounded flex flex-col justify-between">
        <p className="text-large font-bold ml-2 pr-10 w-[calc(100%-1rem)] h-12 pt-2 bg-gradient-to-r rounded-tr">
          التعليقات: 
        </p>
        <div className="">
            {commentsList.map((_, i)=>{
                return <div key={i} className="w-full h-20 flex items-center justify-start gap-4 px-10">
                <Image src={_.image || Logo} alt='arabhardware logo' width={500} height={500} className='size-14 rounded' />
                <div className="space-y-1 w-3/4 text-small">
                    <h4 className='font-bold'>{i} {_.username}</h4>
                    <p>{_.comment}</p>
                </div>
            </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Comments