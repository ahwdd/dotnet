import React from 'react'
import Image from 'next/image'
import AddBgImg from '@/public/images/backgrounds/add-bg.png'
import AddImg from '@/public/images/ads/ad2.jpeg'

function Ad2() {
  return (<div className={`w-4/5 relative aspect-[16/4] bg-no-repeat bg-cover bg-center rounded mt-2 overflow-visible flex items-center justify-between cursor-pointer`}
    style={{ backgroundImage: `url(${AddImg.src})` }}>
    {/* <div className="flex flex-col items-start justify-between text-white mr-12 gap-6 -mt-4">
      <h4 className="font-bold text-4xl">
        {`عرض اللعييب!`}
      </h4>
      <p className="text-base">
        {`عرض للاعبين المحترفين فقط, تسوق الآن إن كنت منهم!`}
      </p> 
    </div>
    <div className="overflow-visible h-full -mt-28 -ml-12">
      <Image src={AddImg} alt='game console' className='animate-bounce h-64 w-64 object-contain' />
    </div> */}
  </div>)
}

export default Ad2