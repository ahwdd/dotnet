"use client"
import { useEffect, useState, useRef } from 'react'
import BoxesBg from '@/components/ui/boxes-bg'
import Image from 'next/image'
import Logo from '@/public/images/logo_icon.png'
import { ChevronDown, ChevronsDown, ChevronsUp, ChevronUp, EllipsisIcon, SendHorizonal } from 'lucide-react'
import Comments from '@/components/search_page/status-popup/comments'
import RelatedVid from '@/components/search_page/status-popup/related-vid'
import AhwHeader from '@/components/search_page/status-popup/ahw-header'
import { moreVid, videoId, shortVideoId, actoins, commentsList } from '@/components/search_page/status-popup/data'
import { PauseIcon, PlayIcon, Volume2Icon, VolumeXIcon } from 'lucide-react'

function MediaPlayer({isPopupOpen, setIsPopupOpen, isExpanded, setIsExpanded, actionDropdownValue, setActionDropdownValue, vidDis, currentVid, 
    setCurrentVid ,statusData, activeVidIndex, setActiveVidIndex}) {
    const containerRef = useRef(null);
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);
    const mouseStartY = useRef(0);
    const mouseEndY = useRef(0);
    const isDragging = useRef(false);

    useEffect(()=>{
        const handleTouchStart = (event) => { touchStartY.current = event.touches[0].clientY; };
        const handleTouchEnd = (event) => { touchEndY.current = event.changedTouches[0].clientY; handleSwipe(); };
        const handleSwipe = () => {
            const swipeDistance = touchStartY.current - touchEndY.current;
            if (swipeDistance > 50) { handleNextVid(); } 
            else if (swipeDistance < -50) { handlePrevVid(); }
        }; // main swipe function to handle touch swipe
        const handleMouseDown = (event) => {
            console.log('handleMouseDown');
            mouseStartY.current = event.clientY; isDragging.current = true;
        };
        const handleMouseMove = (event) => {
            if (isDragging.current) { mouseEndY.current = event.clientY; }
        };
        const handleMouseUp = () => {
            console.log('handleMouseUp');
            if (isDragging.current) { isDragging.current = false; handleMouseSwipe(); }
        };
        const handleMouseSwipe = () => {
            const swipeDistance = mouseStartY.current - mouseEndY.current;
            console.log(`Mouse swipe distance: ${swipeDistance}`);
            if (swipeDistance > 50) {
                console.log('Mouse swiped up');
                handleNextVid();
            } else if (swipeDistance < -50) {
                console.log('Mouse swiped down');
                handlePrevVid();
            }
        }; // main swipe function to handle mouse swipe
        const container = containerRef.current;
        return () => {
        };
    }, [activeVidIndex])

    const handlePrevVid = () => {
        console.log('handlePrevVid', activeVidIndex)
        if(statusData[activeVidIndex-1]){ 
            setCurrentVid({youtubeId: statusData[activeVidIndex-1].youtubeId, title: statusData[activeVidIndex-1].title})
            setActiveVidIndex(activeVidIndex-1)
        }
    }
    const handleNextVid = () => {
        console.log('handleNextVid', activeVidIndex)
        if(statusData[activeVidIndex+1]){ 
            setCurrentVid({youtubeId: statusData[activeVidIndex+1].youtubeId, title: statusData[activeVidIndex+1].title})
            setActiveVidIndex(activeVidIndex+1)
        }
    }

  return (
    <>
        
    {isPopupOpen && currentVid && <div className="fixed z-[200] -top-[5%] left-0 w-screen h-[110dvh] flex items-center justify-center text-white">
        <BoxesBg setIsPopupOpen={setIsPopupOpen} >
            {vidDis=='full' && <div className={`absolute z-40 max-w-5xl w-full h-[90dvh] left-1/2 top-1/2 
                -translate-x-1/2 -translate-y-1/2  rounded overflow-y-scroll`}>
                <div className="relative">
                    <iframe  src={`https://www.youtube.com/embed/${currentVid.youtubeId}?rel=0&autoplay=1&mute=0`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen autoPlay
                    className='aspect-video w-full'
                    frameBorder="0"></iframe>
                </div>
                <div className="relative w-full bg-black">
                    <AhwHeader title='عرب هاردوير' desc={currentVid.title ?? 'محتوى اصلي'} Icon={EllipsisIcon} Logo={Logo}
                    isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setActionDropdownValue} items={actoins} />
                    <div className="w-full px-4 rounded text-white overflow-hidden flex items-center justify-between gap-2 relative">
                        <button type="submit" className='border border-solid border-white text-white bg-black font-bold h-14 px-4 rounded hidden'>
                            <SendHorizonal className='rotate-180' />
                        </button>
                        <input type="text" 
                        placeholder='اكتب تعليقاً عاما...'
                        className=' flex-1 text-left mx-4 outline-none border-0 border-b border-b-white border-solid bg-transparent' />
                        <Image src={Logo} alt='user profile image' className='size-10 rounded-full' />
                    </div>
                    {/* <RelatedVid moreVid={currentVid.moreVideos ?? moreVid} /> */}
                    
                    
                    <Comments commentsList={currentVid.comments} />
                    
                </div>
            </div>}
            {vidDis=='small' && 
            <div className="absolute bottom-1/2 right-[5%] translate-y-1/2 flex flex-col items-center justify-center gap-4">
                <button className="bg-white/10 hover:bg-white/20 rounded p-4 text-gray-100 size-fit disabled:hover:bg-white/10"
                onClick={handlePrevVid} disabled={activeVidIndex<=0}>
                    <ChevronUp className='size-8' />
                </button>
                <button className="bg-white/10 hover:bg-white/20 rounded p-4 text-gray-100 size-fit disabled:hover:bg-white/10"
                onClick={handleNextVid} disabled={activeVidIndex>=statusData?.length-1}>
                    <ChevronDown className='size-8' />
                </button>
            </div>}
            {vidDis=='small' && <div ref={containerRef} 
            className='absolute z-40 max-w-grid group left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className="flex items-center justify-center w-full h-10">
                    {activeVidIndex>=statusData?.length-1 && <ChevronsUp className='size-10 animate-pulse' onClick={handlePrevVid} />}
                </div>
                <div className="lg:h-[calc(100dvh-6rem)] max-lg:w-[80vw] aspect-shorts grid grid-cols-1 rounded overflow-hidden">
                    <div className="lg:h-[calc(100dvh-6rem)] max-lg:h-full relative flex flex-col justify-between shadow-2xl">
                        <div className="h-full relative">
                            <iframe 
                             src={`https://www.youtube.com/embed/${currentVid.youtubeId}?rel=0&autoplay=1&mute=0`} 
                            width={1000} height={1500}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen autoPlay
                            className='size-full rounded'
                            frameBorder="0"></iframe>
                            </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-10">
                    {activeVidIndex<=0 && <ChevronsDown className='size-10 animate-pulse' onClick={handleNextVid} />}
                </div>
            </div>}
        </BoxesBg>
    </div>}
    </>
  )
}

export default MediaPlayer