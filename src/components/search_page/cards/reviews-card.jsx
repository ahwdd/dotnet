import React, {useMemo} from "react"
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Skeleton} from "@nextui-org/react";
import Link from "next/link";
import Logo from '@/public/images/logo_icon.png'
import NotFoundCard from "./not-found-card";

function ReviewsCard({
  index, title="", imgUrl, desc="", url, setCurrentBlog, 
  setIsBlogPopupOpen, author, likes, views, publishAt, isViewList, isCardLoading, isCentered
}) {
  const resultFound = url!='#no-result'

  function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = now - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = now.getFullYear() - date.getFullYear();
  
    if (diffDays === 0) {
      return 'اليوم'; // Today
    } else if (diffDays === 1) {
      return 'أمس'; // Yesterday
    } else if (diffDays < 30) {
      return `${diffDays} أيام`; // X days ago
    } else if (diffMonths === 1) {
      return 'شهر'; // 1 month ago
    } else if (diffMonths === 2) {
      return 'شهرين'; // 2 months ago
    } else if (diffMonths <= 10) {
      return `${diffMonths} شهور`; // X months ago
    } else if (diffMonths <= 11) {
      return '11 شهر'; // 11 months ago
    } else {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('ar-EG', options); // Date in format: 9 مارس 2024
    }
  }
  
  const formattedDate = useMemo(() => formatDate(publishAt), [publishAt]);
  
  const goTo = () => {
    if(resultFound)
      window.open(url, "_blank");
  }
  
  return (<>
    {isCardLoading || !url? 
    <Skeleton className={`rounded
    ${isViewList?'w-full':(isCentered? 'w-full sm:w-[calc(25%-1rem)] lg:w-[calc(20%-1rem)] '
    :'w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]')}`}>
      <div className={`${isViewList?'h-[100px] max-md:h-32 ':'h-96'} rounded bg-default-300`}></div>
    </Skeleton>
    :<div className={` ${isViewList?`w-full`: 
      `${resultFound?`${isCentered? 'w-full sm:w-[calc(25%-1rem)] lg:w-[calc(20%-1rem)] '
    :'w-full sm:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]'}`:'w-full'}`
      } 
      group transition-all rounded duration-100 ease-soft-spring`}>
{/*sm:group-hover/type:w-[calc(40%-1rem)] sm:hover:!w-[calc(60%-1rem)] lg:group-hover/type:w-[calc(30%-1rem)] lg:hover:!w-[calc(40%-1rem)] */}
      <Card className={` ${isViewList?`${resultFound?'h-[100px] max-md:h-32 ': 'h-36'} items-between`
      : `${resultFound?'h-96 ': 'h-36'} items-end`} 
      ${resultFound?'hover:gap-4 hover:bg-black bg-black/15 ': 'shadow-none bg-transparent'} 
      w-full group flex-row rounded text-white`}
      isPressable onPress={goTo}>
        {!resultFound && <NotFoundCard />}
        {imgUrl && resultFound && <Image
          removeWrapper
          alt="Card background"
          className={`h-full object-cover rounded rounded-l-none
            ${isViewList?`group-hover:brightness-50 group-hover:scale-105 transition-all sm:duration-0 duration-100 ease-soft-spring`:''}
            ${isViewList?`w-1/5`:'w-full absolute'}`}
          src={imgUrl}
        />}
        {resultFound && <div className="absolute inset-0 z-10 bg-gradient-to-b to-black/90 from-black/20 to-80% group-hover:hidden"/>}
        {resultFound && 
        <CardHeader className={`flex-1 flex-col items-start transition-all sm:duration-0 duration-100 ease-soft-spring 
          ${isViewList?'h-full justify-between':
          `justify-center items-center group-hover:justify-start group-hover:gap-4 text-white h-1/3 rounded-none rounded-b 
          group-hover:h-full group-hover:pb-0 group-hover:px-0 bg-transparent group-hover:bg-black/80`}`}>
            {!isViewList && resultFound && <p className="font-medium text-tiny group-hover:px-4 ml-auto indent-4 mb-1">
                <span>{formattedDate}، </span>
                <span> بقلم </span>
                <span>{author}</span>
            </p>}
            <h4  className={`uppercase font-bold group-hover:line-clamp-none transition-all sm:duration-0 duration-100 ease-soft-spring
              ${isViewList?'line-clamp-1 max-md:line-clamp-2 max-md:text-right max-md:text-small':'group-hover:px-4 text-center group-hover:w-full'}`}>
                {title}
            </h4>
            <p className={`font-medium text-small line-clamp-2 group-hover:line-clamp-none transition-all sm:duration-0 duration-100 ease-soft-spring
              ${isViewList?'max-md:line-clamp-2 max-md:text-right max-md:text-tiny':'hidden group-hover:flex group-hover:px-4 group-hover:mt-4 text-left ml-auto group-hover:mx-auto group-hover:text-center group-hover:w-full'}`}>
                {desc}
            </p>
            <div role="button" onClick={goTo}
              className={` ${isViewList?'text-primaryLight text-tiny mr-auto '
              :'w-full bg-black/50 text-center py-4 hidden group-hover:block group-hover:mt-auto'}`}>
                اقرأ المزيد
            </div>
        </CardHeader>}
      </Card>
    </div>}
  </>
  )
}

export default ReviewsCard