"use client"
import { useEffect, useState, useRef } from 'react'
import BoxesBg from '@/components/ui/boxes-bg'
import { Image } from '@nextui-org/react'
import Logo from '@/public/images/logo_icon.png'
import { ArrowUpLeft, Eye, EyeIcon, HeartIcon, PencilLineIcon } from 'lucide-react'

// type: 'products', 
// model: card?.model,
// brandId: card?.brand_id,
// title: card?.name,
// desc: card?.description,
// quantity: card?.quantity,
// price: card?.price,
// inStock: card?.quantity>0,
// imgUrl: card?.image,
// url: `https://ahw.store/${card?.url}`

function ProductsPlayer({isPopupOpen, setIsPopupOpen, currentProduct, setcurrentProduct}) {
    // console.log('currentProduct', currentProduct)

    const goToUrl = () => {
        location.href=currentProduct.url??'#'
    }

  return (
    <>
        
    {isPopupOpen && currentProduct && <div className="fixed z-[200] -top-[5%] left-0 w-screen h-[110dvh] flex items-center justify-center text-white">
        <BoxesBg setIsPopupOpen={setIsPopupOpen} noBg={true} >
        <div className={`absolute z-40 xl:w-[70%] space-y-0 max-w-grid w-[96%] lg:h-[80dvh] h-[95dvh]
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/95 pt-8 flex items-center justify-between flex-col`}>
            <div className="flex max-lg:flex-col max-lg:flex-1 items-center justify-between gap-8 h-[calc(100%-6rem)]  overflow-y-scroll scrollbar-hide px-8">
                <div className="w-1/3 lg:h-full flex max-lg:w-full h-72">
                    <Image src={currentProduct?.imgUrl} alt={currentProduct?.title}
                    classNames={{
                    img: 'w-full rounded-r object-cover h-full',
                    wrapper: `max-lg:w-full max-lg:!max-w-full`,
                    }}/>
                </div>
                <div className="flex-1 space-y-8 h-full">
                    <p className="font-bold lg:text-large text-prime/70 text-center">
                        {currentProduct?.title}
                    </p>
                    <div className="space-y-4 overflow-y-scroll h-[calc(100%-3.65rem)]"
                    style={{direction: 'ltr'}}>
                        <div className="flex items-start">
                            <span className='font-bold w-32 lg:text-large text-medium'>Model: </span>
                            <span className=' lg:indent-4 lg:text-small text-tiny flex-1'>{currentProduct.model}</span>
                        </div>
                        <div className="flex items-start">
                            <span className='font-bold w-32 lg:text-large text-medium'>Price: </span>
                            <span className=' lg:indent-4 lg:text-small text-tiny flex-1'>{currentProduct.price} EGP</span>
                        </div>
                        <div className="flex items-start">
                            <span className='font-bold w-32 lg:text-large text-medium'>Description: </span>
                            <span className=' lg:indent-4 lg:text-small text-tiny flex-1'>{currentProduct.desc}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-gray-400 text-tiny flex items-start justify-between w-full gap-[25%] px-8">
                {currentProduct.quantity>0&&currentProduct.quantity<6 &&
                <p className="text-center">
                    only <span className="text-prime">{currentProduct.quantity} </span> left
                </p>}

            </div>
            <button className="py-4 w-full text-white bg-black/75 flex items-center justify-center group"
            onClick={goToUrl}>
                {/* lg:text-transparent lg:scale-x-0 lg:group-hover:scale-x-100 lg:group-hover:text-white text-white transition-all duration-300'> */}
                <p className='text-white transition-all duration-300'>

                    <span className='text-prime'>ORDER NOW</span> FROM OUR STORE
                </p>
                {/*lg:size-8 lg:group-hover:size-4 size-4 lg:translate-x-16 lg:group-hover:translate-x-0 lg:group-hover:-translate-y-2  */}
                <ArrowUpLeft className={`size-4 lg:translate-x-0 lg:-translate-y-2 
                    max-lg:-translate-y-2 transition-all duration-300`} />
            </button>
        </div>
        </BoxesBg>
    </div>}
    </>
  )
}

export default ProductsPlayer