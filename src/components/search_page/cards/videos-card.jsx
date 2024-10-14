"use client"
import React, {useState} from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Skeleton} from "@nextui-org/react";
import Link from 'next/link';
import YoutubeIcon from '@/components/ui/icons/youtube';
import YouTube from 'react-youtube';

function VideosCard({
  index, title='', youtubeId, moreVideos=[], comments=[], imgUrl, 
  openStatus, setVidDis, setCurrentVid, isViewList, isCardLoading, isCentered
}) {
  const [showPreview, setShowPreview] = useState(false);

  const handleMouseEnter = () => {
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };
  const onPlayerReady = (event) => {
    if(window && event.target) { 
      console.log('player ready')
      event.target.playVideo(); 
    }
  };

  const onError = (error) => {
    if(window) console.error('YouTube Player Error:', error);
  };

  const onPlayerStateChange = (event) => {
    if(window){
      if (event.data === 1) {
        // console.log('playing...')
        setTimeout(() => {
            console.log('Stopping after 10 seconds');
            setShowPreview(false);
        }, 8000); // 8 seconds timeout
      }
    }
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      start: 0,
      end: 600,
      loop: 1,
      playlist: youtubeId,
    },
  };

  // const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&start=0&end=5&controls=0&loop=1`; // Starts from 0 and ends at 5 seconds
  
  const handleOpenStatus = () => {
    openStatus(true)
    setVidDis('full')
    setCurrentVid({youtubeId, title, moreVideos, comments})
  }
  
  return (
    <>
    {isCardLoading
    ?<Skeleton className={`rounded
      ${isViewList?'w-full':(isCentered? 'w-full sm:w-[calc(25%-1rem)] lg:w-[calc(20%-1rem)] '
    :'w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]')}`}>
        <div className={`${isViewList?'h-24':'h-44'} rounded bg-default-300`}></div>
    </Skeleton>
    :<div className={`${isViewList?'w-full':(isCentered? 'w-full sm:w-[calc(25%-1rem)] lg:w-[calc(20%-1rem)] '
    :'w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]')} duration-100 transition-all`}>
  {/* lg:hover:!w-[calc(40%-1rem)] lg:group-hover/type:w-[calc(30%-1rem)] sm:hover:!w-[calc(60%-1rem)] 
  sm:group-hover/type:w-[calc(40%-1rem)] */}
      <Card className={`${isViewList? 'w-full h-24 flex-row-reverse items-center justify-between': `w-full h-44`}
      group rounded`} isPressable 
      onPress={handleOpenStatus} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardHeader className={`group-hover:drop-shadow-lg transition-all duration-0
          ${isViewList?'px-4 w-1/2':'absolute z-10 inset-0 bg-black/50 flex items-end justify-center'}`}>
          <p className={`drop-shadow-2xl uppercase font-bold rounded transition-all duration-0
            ${isViewList?'md:line-clamp-2 text-tiny md:text-medium':
            'group-hover:md:line-clamp-2 group-hover:text-small px-2 pb-0 -mb-10 text-white hidden group-hover:block w-32 group-hover:w-full group-hover:h-1/2'}`}>
              {title}
          </p>
        </CardHeader>
        {/* Show either the image or the video preview */}
        {imgUrl && !showPreview && <Image
          removeWrapper
          alt={title || 'youtube video thumbnail'}
          className={`z-0 object-cover hover:scale-110 group-hover:brightness-50 group-hover:saturate-100 transition-all duration-0
            ${isViewList?'w-96 h-full rounded-r rounded-l-none':'w-full h-full rounded'}`}
          src={imgUrl}
        />}
        {window && showPreview && (
          <div className="absolute inset-0">
            <YouTube
              videoId={youtubeId}
              opts={opts}
              onReady={onPlayerReady}
              onError={onError}
              onStateChange={onPlayerStateChange}
              title={title}
              className={`z-0 object-cover hover:scale-110 group-hover:brightness-50 group-hover:saturate-100 transition-all duration-0
                ${isViewList?'w-96 h-full rounded-r rounded-l-none':'w-full aspect-video mt-auto rounded'}`}
            />
          </div>
        )}
        {!isViewList && <YoutubeIcon size={30} 
        className='absolute size-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-primary group-hover:text-transparent cursor-pointer group-hover:scale-125 transition-all duration-100' />}
      </Card>
    </div>
    }
    </>
  )
}

export default VideosCard