import React from 'react'
import {Card, CardHeader, Skeleton} from "@nextui-org/react";
import Image from 'next/image';
import PurpleSquares from '@/public/images/shapes/purple-squares.png'
import BlackSquares from '@/public/images/shapes/black-squares.png'
import GraySquares from '@/public/images/shapes/gray-squares.png'
import ChipRed from '@/components/ui/chip-red';
import NotFoundCard from './not-found-card';

const PriceTag = ({text=0, index=0}) => {
  return <span className={`line-clamp-1 bg-gradient-conic bg-clip-text text-black dark:text-white `}>
      {text}
  </span>
}

function ProductsCard({index=0, title='', imgUrl, price, model, brandId, desc, quantity, isOffer, 
  inStock, url='#', isViewList, setCurrentProduct, setIsProductPopupOpen, isCardLoading}) {
    const isViewListProducts = false
  const resultFound = url!='#no-result'

    
  const handleOpenStatus = () => { 
    if(resultFound){
      setIsProductPopupOpen(true) 
      setCurrentProduct({index, title, imgUrl, price, url, inStock, model, brandId, desc, quantity, isOffer})
    }
  }

  return (
    <>
    {isCardLoading || !imgUrl?
    <Skeleton className={`rounded
    ${isViewListProducts?'w-full':
    `${resultFound?'lg:w-[calc(16.6%-1rem)] md:w-[calc(33.33%-1rem)] sm:w-[calc(50%-1rem)] ':''}w-full`}`}>
      <div className={`${isViewList?'h-24 ':'h-40'} rounded bg-default-300`}></div>
    </Skeleton>
    :<div className={`
      ${isViewListProducts ? 'w-full flex-row items-center justify-between' : 
        `${resultFound?'lg:w-[calc(16.6%-1rem)] md:w-[calc(33.33%-1rem)] sm:w-[calc(50%-1rem)] ':''} 
        w-full hover:!z-10 rounded`} 
      group relative overflow-visible transition-all duration-100 ease-soft-spring
      ${isOffer&&resultFound ? 'hover:animate-glowPink' : (resultFound?'hover:animate-glowGrayDark':'')}
    `}>
      {/* animate-glowYellow */}
      
      {isOffer && resultFound &&  <div className="absolute -left-2 w-[calc(100%+1rem)] h-10 opacity-0 top-6 group-hover:opacity-100 group-hover:-top-6 transition-all">
        <Image src={PurpleSquares.src} alt='purple squares' width={1000} height={1000}
        className='absolute -top-2 right-0 h-full w-2/3 object-fill -scale-100' />
        <Image src={PurpleSquares.src} alt='purple squares' width={1000} height={1000}
        className='absolute top-0 left-0 h-full w-2/3 object-fill' />
        <p className="font-bold text-white relative z-10 text-left w-full px-4 text-large">
          عرض خاص
        </p>
      </div>}

      <ChipRed color='white' disabled={!resultFound}>
        <Card isPressable onPress={handleOpenStatus} 
        className={`${isViewListProducts? 'w-full flex-row items-center justify-between' : 'w-full rounded bg-transparent'}
        ${resultFound?'':'shadow-none !bg-transparent'}`}>

          <div className={`relative rounded-t 
            ${resultFound?`${isViewListProducts? 'p-2 h-24':'w-full p-4 h-40 '} bg-white`:'bg-transparent p-0 h-40 w-full flex justify-center items-center'}`}>
              
            {!resultFound && <NotFoundCard />}
            <div className={`absolute size-0 dark:size-full inset-0 z-10 opacity-50
              ${resultFound?'bg-gradient-radial from-transparent from-50% to-black ':''}`} />
            {resultFound && <div className={`absolute -right-3 
              ${isViewListProducts?'top-0':'top-4'}
              ${inStock?'bg-green-800':'bg-primary'}  text-white pb-1 px-4 z-20 rounded-l`}>
              {!inStock? "نفذت الكمية":"متوفر"}
            </div>}
            {imgUrl && resultFound && <Image
              width={1000} height={1000}
              alt="Card background"
              className={`rounded-b-none rounded-t transition relative z-0
                ${resultFound?`object-contain group-hover:scale-105 ${isViewListProducts?'size-24':'size-full '}`: 
                  'w-full object-cover object-center'}`}
              src={imgUrl}
            />}
          </div>
          {resultFound && 
          <CardHeader className={`px-2 flex-col items-end 
            ${isViewListProducts?'w-2/3 flex-1':''}`}>
            <h4 className="font-medium text-xs line-clamp-2 overflow-hidden text-left" style={{direction: 'ltr'}}>
              {title}
            </h4>
            <p className="text-lg py-2 text-transparent rounded uppercase font-bold flex items-center gap-1">
              <PriceTag text={Math.round(parseFloat(price)).toLocaleString()} index={index} />
              <PriceTag text={`EGP`} index={index} />
            </p>
            <a href={url || `#`} target="_blank" rel="noopener noreferrer"
            className='text-tiny font-bold ml-auto relative overflow-visible text-white dark:text-black'>
              <span className="absolute h-[calc(100%+1.5rem)] w-[calc(100%+2rem)] -top-1.5 -left-2 bg-black dark:bg-white -z-10 rounded-br" />
              <span className=''>تسوق الآن</span>
            </a>
          </CardHeader>}

        </Card>
      </ChipRed>

    </div>}
    </>
  )
}

export default ProductsCard