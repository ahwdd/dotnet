"use client"
import {useRef, useEffect, useState} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDrag } from 'react-use-gesture';
import { ChevronsRight } from 'lucide-react';
import RightSectoin from '../right-sections/right-section';

gsap.registerPlugin(ScrollTrigger);

function DragToOpen({ isOpen, setIsOpen, isLoading, ...props }) {
    const sectionRef = useRef();
    const buttonRef = useRef()
    const dragToOpenRef = useRef();
    const innerWidth = window?.innerWidth || 1
    const [isDragging, setIsDragging] = useState(false);
    const [clickTimeout, setClickTimeout] = useState(null);

    useEffect(() => {
        if (isOpen) {
          gsap.to(sectionRef.current, { x: 0, duration: 0.5 });
          gsap.to(buttonRef.current, {
            x: innerWidth>=1280?innerWidth/5-32:innerWidth-40, 
            duration: 0.5 })
        } else {
          gsap.to(sectionRef.current, { x: -innerWidth*1.5, duration: 0.5 });
          gsap.to(buttonRef.current, {x: 0, duration: 0.5 })
        }
    }, [isOpen, innerWidth]);

    useEffect(() => {
        const footer = document.querySelector("#footer");
        const dragToOpenSection = dragToOpenRef.current;
        let scrollTriggerInstance;

        if (footer && dragToOpenSection) {
            // Create a new ScrollTrigger instance
            scrollTriggerInstance = ScrollTrigger.create({
                trigger: footer,
                start: "top bottom",
                end: "bottom bottom",
                onEnter: () => {
                    gsap.to(dragToOpenSection, { autoAlpha: 0, duration: 0.5 });
                },
                onLeaveBack: () => {
                    gsap.to(dragToOpenSection, { autoAlpha: 1, duration: 0.5 });
                },
            });
        }

        return () => {
            if (scrollTriggerInstance) { scrollTriggerInstance.kill(); }
        };
    }, [isLoading]);
    
    const bind = useDrag(({ down, movement: [mx], memo = isOpen, event }) => {
        const isTouch = event.pointerType === 'touch';

        if (!down) {
            let value = true
            if (mx >= innerWidth/6 && !memo) {
                // console.log('change to true')
                setIsOpen(true);
            } else if (mx < -innerWidth/6 && memo) {
                // console.log('change to false')
                setIsOpen(false);
                value = false
            } else{
                value = null
            }
            // resonable drag and not the same old value
            if(value && value != isOpen){
                sessionStorage.setItem('isRightOpen', JSON.stringify(value))
                if (clickTimeout) {
                    // console.log('clear click timeout')
                    clearTimeout(clickTimeout);
                    setClickTimeout(null);
                }
                // console.log('dragging...', value, isOpen)
                setIsDragging(true);
                setTimeout(() => {
                    setIsDragging(false);
                }, 300);
            }
        }
        return memo;
    });
    const handleClick = () => {
        if (!isDragging) {
                // console.log('clicking...')
            const timeout = setTimeout(() => {
                setIsOpen(prev => !prev);
            }, 300); // Adding a slight delay to ensure drag event completes
            setClickTimeout(timeout);
        }
    };

  return (
    <div ref={dragToOpenRef} {...bind()} className="z-20 relative touch-none">
        <div className={`fixed left-0 top-0 h-dvh`}>
          <button ref={buttonRef} onClick={handleClick}
            className="flex items-center justify-center px-2 h-dvh float-right">
                <div className="flex items-center justify-center p-2 rounded-full relative">
                    <div className={`absolute size-full bg-black dark:bg-white opacity-50 blur-lg rounded-full z-10
                        ${isOpen?'left-0':'-left-1/2 '}`} />
                    <div className={`absolute w-full h-[200%] -top-1/2 border-black dark:border-white border border-solid 
                        ${isOpen?'!border-r-transparent left-full xl:opacity-0':'!border-l-transparent -left-full '} rounded z-10 transition-all duration-500`} />
                    <ChevronsRight className={`${isOpen?'!rotate-180':''} 
                    transition-all duration-500 rounded-full animate-move-to-right`} />
                </div>
          </button>
        </div>
        <div ref={sectionRef} className=' -translate-x-[150vw] fixed left-0 top-0 bottom-0 w-4/5 xl:w-1/5 shadow-medium max-xl:bg-white dark:max-xl:bg-black'>
            <div className="h-full w-full">
                <RightSectoin {...props} />
            </div>
        </div>
    </div>
  )
}

export default DragToOpen