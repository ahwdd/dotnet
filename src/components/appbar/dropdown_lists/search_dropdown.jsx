import {useRef, useEffect} from 'react'
import { en, ar } from '@/public/strings_manager'
import Link from 'next/link'
import { searchData } from "@/components/search_page/data";

import {Divider} from "@nextui-org/react";

function SearchDropdown({isExpanded=false, setIsExpanded, setValue, flexRow=false, noRedirect=false }) {
  // console.log('isExpanded', isExpanded)
  const dropdownRef = useRef(null)

  const handleOutsideClick = (e) => {
    const SearchDropdownBtn = document.getElementById('search_dropdown_btn')
    const isInsideButton = SearchDropdownBtn.contains(e.target);
    // console.log('SearchDropdownBtn', SearchDropdownBtn)
    // console.log('e.target', e.target)
    // console.log('isInsideButton', isInsideButton)
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) && e.target!=SearchDropdownBtn && !isInsideButton) {
      setIsExpanded(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`flex ${flexRow?'':'flex-col'} justify-center items-center gap-2 fixed right-[calc(5%+16rem)] py-2 w-max top-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-xl rounded z-[1000] pt-[19rem] max-h-64 overflow-y-scroll 
      ${isExpanded?'animate-dropdwon-appearance-in':'hidden'}`}
    ref={dropdownRef}>
      {searchData && searchData?.map((item, i)=>{
        return <div key={i} className={`flex items-start justify-center gap-4 p-2 text-sm cursor-pointer w-full hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
          <div
            className={`flex ${flexRow?'flex-col':''} items-start justify-center gap-4 p-2 w-full`}
            onClick={()=>{setValue(item.label); setIsExpanded(false)}}>
              {!flexRow && <item.icon className='size-6' />}
              <div className="space-y-2 w-full">
                <p className="font-bold flex items-center justify-between">
                  <span className=''>{item.label}</span>
                  {flexRow && <item.icon className='size-6' />}
                </p>
                <p className={`text-zinc-700 dark:text-zinc-300 w-full ${flexRow?'text-tiny line-clamp-1':''}`}>{item.desc}</p>
              </div>
            </div>
            {flexRow && i!=searchData.length-1 && <Divider orientation="vertical" className='h-16 w-0.5 bg-gray-400' />}
        </div>
      })}
    </div>
  )
}

export default SearchDropdown