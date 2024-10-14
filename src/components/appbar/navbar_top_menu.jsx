import React from 'react'
import { LayoutGrid, Bell, MoonIcon, SunMediumIcon } from 'lucide-react'
import Image from 'next/image'
// import PersonImg from '@/public/images/person.jpg'
import PersonImg from '@/public/images/demo_user.png'
import { en, ar } from '@/public/strings_manager'
import MorningList from './morning_list'

function NavbarTopMenu({setTheme, setMoreDropdownPopoverShow, theme, setUserDropdownPopoverShow, forMobile=false}) {
  return (
    <div className={`flex items-center ${forMobile?'justify-between mb-10':'justify-between'} gap-[10vw] text-black dark:text-white`}>
        <div className="flex items-center justify-center gap-8">
          {theme=='dark' 
          ?<MoonIcon strokeWidth={2} onClick={() => setTheme('light')}
          className='size-8 cursor-pointer' />
          :<SunMediumIcon strokeWidth={2} onClick={() => setTheme('dark')}
          className='size-8 cursor-pointer' />}
          <LayoutGrid id='more_dropdown_trigger' strokeWidth={2} onClick={()=>setMoreDropdownPopoverShow(prev=>!prev)}
          className='size-8 cursor-pointer' />
        </div>
        <div className="flex items-center gap-2">
          {/* <p className="mr-4">{ar.navbar.greeting}</p> */}
          {/* <MorningList /> */}
          <Image src={PersonImg} alt='user image' 
          className='size-12 rounded block cursor-pointer border border-primary border-solid'
          onClick={()=>setUserDropdownPopoverShow(prev=>!prev)} />
        </div>
    </div>
  )
}

export default NavbarTopMenu