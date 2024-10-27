"use client"
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import OfficeBg from '@/public/images/backgrounds/office.jpg'
import Logo from '@/public/images/logos/footer-logo.svg'
import FooterBg from '@/public/images/footer/footer-bg.png'
import { Divider } from '@nextui-org/react'
import { useTheme } from 'next-themes'

import xIcon from '@/public/images/icons/x.svg'
import facebookIcon from '@/public/images/icons/facebook.svg'
import instagramIcon from '@/public/images/icons/instagram.svg'
import linkedinIcon from '@/public/images/icons/linkedin.svg'
import tiktokIcon from '@/public/images/icons/tiktok.svg'
import youtubeIcon from '@/public/images/icons/youtube.svg'
import LeftSlider from './left-slider'
import Link from 'next/link'


function Footer() {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const [currentActive, setCurrentActive] = useState(0)
    const {theme, setTheme} = useTheme();

    const socialIcons = [
        {icon: youtubeIcon, title: "youtube", href:"https://www.youtube.com/@Arabhardware"}, 
        {icon: xIcon, title: "x", href:"https://x.com/arabhardware"}, 
        {icon: tiktokIcon, title: "tiktok", href:"https://www.tiktok.com/@arabhardware"}, 
        {icon: linkedinIcon, title: "linkedin", href:"https://www.linkedin.com/company/arabhardware.net"}, 
        {icon: instagramIcon, title: "instagram", href:"https://www.instagram.com/arabhardware/"}, 
        {icon: facebookIcon, title: "facebook", href:"https://www.facebook.com/arabhardware/"}, 
    ]
    const footerNav = [
        {title: "اعمال عرب هاردوير", href: "https://arabhardware.net/business"},
        {title: "المتجر", href: "https://ahw.store"},
        {title:  "الرياضة الالكترونية", href: "https://arabhardware.net/articles/esports-gamers-guide"},
        {title: "تواصل معنا", href: "https://arabhardware.net/business/contact"},
    ]

  return (
    <footer id='footer'
    className='w-screen xl:h-64 h-96 bg-black relative text-zinc-400 flex-col flex items-center justify-end max-lg:text-tiny'>
        <div className="bg-gradient-to-b dark:from-black from-white from-10% dark:to-[#031d26]/10 to-black/10 absolute inset-0 backdrop-blur-sm" />

        {/* red card */}
        <div className="p-4 w-full overflow-hidden rounded-lg my-8 h-64 dark:bg-black relative">
            <div className="dark:hidden absolute inset-0 bg-cover bg-right-top bg-no-repeat" 
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.63) 0%, rgba(132, 132, 132, 0.126) 100%), url(${FooterBg.src})`,
            }} />
            <div className="absolute flex items-center justify-between p-grid size-full max-w-[1212px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-between flex-wrap max-xl:h-2/3 text-white w-full">
                    <div className="flex items-center justify-center lg:gap-8 gap-4">
                        <Image src={Logo} alt='arabhardware logo' className='size-16 object-contain max-xl:size-8' />
                        <div className="flex items-center justify-center lg:gap-8 gap-4">
                            {footerNav.map((_, i)=>{
                                return <Link href={_.href} key={i}>{_.title}</Link>
                            })}
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 flex-col max-xl:w-full">
                        <div className="flex items-center justify-center xl:gap-8 gap-4 text-white">
                            {socialIcons.map((_, i)=>{
                                return <a key={i} href={_.href} target="_blank" rel="noopener noreferrer">
                                    <Image src={_.icon} alt={_.title} className='xl:size-8 size-6' />
                                </a>
                            })}
                        </div>
                        <div className="flex items-center justify-center gap-2 text-tiny">
                            <Link href={`https://arabhardware.net/pages/privacy-policy`}>وثيقة الخصوصية</Link>
                            <Divider orientation='vertical' className='bg-white w-0.5 h-3 mt-1.5' />
                            <Link href={`https://arabhardware.net/authors`}>فريق التحرير</Link>
                            <Divider orientation='vertical' className='bg-white w-0.5 h-3 mt-1.5' />
                            <Link href={`https://arabhardware.net/sitemap.html`}>خريطة الموقع</Link>
                        </div>

                    </div>
                </div>
                <div className=" absolute w-fit left-1/2 -translate-x-1/2 bottom-4 text-white text-center max-lg:text-xxs">
                    <p className="">جميع الحقوق محفوظة لعرب هاردوير © 
                    <span>{currentYear}</span>
                    </p>
                </div>
            </div>

            
        </div>
    </footer>
  )
}

export default Footer