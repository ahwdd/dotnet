"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { ApiBaseNet } from "@/config/api";
import toast from 'react-hot-toast';
import ToasterComponent from "@/components/toaster_top"
import axios from "axios";
import { UserIcon } from "lucide-react";
import { useTheme } from "next-themes";

import OfficeBg from '@/public/images/backgrounds/office.jpg'
import Logo from '@/public/images/logo_icon.png'

function LoginWelcome({children}) {
  const { theme, setTheme } = useTheme();
  const [themeToggle, setThemeToggle] = useState(theme=='dark');

  function getGreetingMessage() {
    const now = new Date();
    const hour = now.getHours();
    // console.log('hour', hour)
    if (hour < 13 && hour >= 4) {
      return 'صباح الخير! ';
    } else if (hour < 4 || hour >= 13) {
      return 'مساء الخير! ';
    } else {
      return 'يسعد اوقاتك! ';
    }
  }

  const handleToggle = () => {
    setThemeToggle((prev) => {
      setTheme(prev?'light':'dark')
      return !prev
    });
  };
    
    return (<div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-cover bg-no-repeat dark:bg-blend-saturation relative text-white"
    style={{backgroundImage: `url(${OfficeBg?.src || OfficeBg})`}}>
      <ToasterComponent />

      <a href="https://arabhardware.net" className="absolute top-[5%] right-[5%]">
        <Image src={Logo} alt="arabhardware" className="size-12" />
      </a>
      <a href="#" className="absolute top-[5%] left-[5%]">
        <UserIcon className="size-12 text-white" />
      </a>
      <div className="xl:w-3/4 w-4/5 h-3/4 max-w-grid flex items-center justify-center flex-col backdrop-blur-[8px] bg-white/20 dark:bg-transparent gap-[5%]">
        <div className="flex items-center justify-center flex-col max-w-2xl w-full m-4 gap-4">
          <p className="text-5xl text-white font-bold welcome-message">
            <span className="">{getGreetingMessage()}</span>
            <span className="text-primaryLight welcome-message-from">من عرب هاردوير</span>
          </p>
          {/* <p className="text-lg mt-4">
          قريباً ستتمكنون من استخدام صفحة &quot;حسابي&quot; لتحسين تجربتكم على منصات عرب هاردوير
          </p> */}
        </div>


        {children}


      </div>
      <button
        className={`absolute bottom-[4%] left-1/2 -translate-x-1/2 w-20 h-6 transition-transform bg-primary`}
        onClick={handleToggle}
      >
        <div
          className={`absolute w-8 h-8 transform transition-transform -top-1
          ${themeToggle ? 'bg-black' : 'bg-white'} ${themeToggle ? '-translate-x-12' : 'translate-x-0'}`}
        />
      </button>

    </div>);
}

export default LoginWelcome