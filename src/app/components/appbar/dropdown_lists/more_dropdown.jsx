"use client"
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import AhwNet from '@/public/images/logos/ahw_logo.svg'
import AhwBusiness from '@/public/images/logos/ahw_business.png'
import AhwStore from '@/public/images/logos/ahw_store_w.png'
import AhwGaming from '@/public/images/logos/ahw_gaming.png'
import Link from 'next/link';
import { moreDataa } from './data';

const MoreDropdown = ({isExpanded, setIsExpanded}) => {
  const dropdownRef = useRef(null)
  

  const handleOutsideClick = (e) => {
    const moreBtn = document.getElementById('more_dropdown_trigger')
    // console.log('dropdownRef.current', dropdownRef.current)
    // console.log('e.target', e.target)
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) && e.target != moreBtn) {
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
    <div className={`absolute top-16 w-fit bg-white dark:bg-black/70 z-20 left-[calc(5%+6rem)] origin-top rounded shadow-lg
    ${isExpanded?'animate-appearance-in':'hidden'}`} ref={dropdownRef}>
      <div className="grid grid-cols-2 grid-rows-2">
        {moreDataa && moreDataa?.map((data, index)=>{
          return <Link key={index} href={data.link} className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 dark:hover:bg-zinc-600 rounded p-2">
          <Image src={data.logo} alt='ArabHardware' className='size-12 object-contain' />
          </Link>
        })}
      </div>
    </div>
  );
};

export default MoreDropdown;
