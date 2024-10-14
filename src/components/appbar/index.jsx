"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo_icon.png'
import { useTheme } from 'next-themes';
import GridDropdown from './dropdown_lists/grid_dropdown'
import UserDropdown from './dropdown_lists/user_dropdown';
import MoreDropdown from './dropdown_lists/more_dropdown'
import SearchSection from './search_section'
import NavbarTopMenu from './navbar_top_menu'
import PagesLinks from './pages_links'
import { moreDataa } from './dropdown_lists/data'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar';
import { Divider } from '@nextui-org/react'

function Appbar({shadow = null, bgTransparent=true, searchValue='', setSearchValue=()=>{}, 
searchTypeDropdownValue=0, setSearchTypeDropdownValue=()=>{}, searchCachValue='', setSearchCachValue=()=>{}}) {
  const router = useRouter()
  const [gridDropdownPopoverShow, setGridDropdownPopoverShow] = React.useState(false);
  const [userDropdownPopoverShow, setUserDropdownPopoverShow] = React.useState(false);
  const [moreDropdownPopoverShow, setMoreDropdownPopoverShow] = React.useState(false)
  const [searchTypeDropdownPopoverShow, setSearchTypeDropdownPopoverShow] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { theme, setTheme } = useTheme();
  const pagesLinksList = [
      {title: "اخبار", href: "https://arabhardware.net/news"},
      {title: "المتجر", href: "https://ahw.store"},
      {title: "مقالات", href: "https://arabhardware.net/articles"},
      {title: "رياضات إلكترونية", href: "https://arabhardware.net/tag/esports"}
  ]

  const goToPage = () => {
    location.href='/search'
  }

  return (
    <>
    <Navbar onMenuOpenChange={setIsMenuOpen} className={`text-black dark:text-white pt-12
    ${shadow? '':' shadow-md dark:shadow-zinc-300/20'} 
    ${bgTransparent?'':'bg-gray-100/90 dark:bg-gray-900/90'}
    w-screen fixed top-0 right-0 left-0 z-50`}>
      <div className="fixed left-0 flex items-center justify-center gap-4 top-0 z-10 bg-gradient-to-r from-gray-600 to-slate-400 w-screen h-12">
        {moreDataa.map((_, i)=>{
          return <div key={i} className='flex items-center justify-center gap-4'>
            <Link href={_.link} className="flex items-center justify-center cursor-pointer gap-2 text-white">
              <Image src={_.logo} alt={_.title} className='xl:size-6 size-4 object-contain rounded' />
              <p className="xl:text-small sm:text-tiny text-xxs">
                {_.title}
              </p>
            </Link>
            {i<moreDataa.length-1 && <Divider orientation='vertical' className='h-4 bg-white' />}
          </div>
        })}
      </div>
      <NavbarContent>
        <NavbarBrand>
          <button onClick={goToPage} >
            <Image src={Logo} alt="ArabHardware" className="size-12 lg:ml-8 ml-2 max-lg:min-w-12 max-sm:min-w-10 max-sm:size-10" />
          </button>
            <SearchSection isExpanded={searchTypeDropdownPopoverShow} setIsExpanded={setSearchTypeDropdownPopoverShow}
            typeValue={searchTypeDropdownValue} setTypeValue={setSearchTypeDropdownValue} searchValue={searchValue} 
            setSearchValue={setSearchValue} searchCachValue={searchCachValue} setSearchCachValue={setSearchCachValue} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <PagesLinks pagesLinksList={pagesLinksList} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="max-lg:hidden">
        <NavbarItem>
          <div className="flex flex-col justify-center items-between max-lg:hidden">
            <NavbarTopMenu setTheme={setTheme} theme={theme} 
            setMoreDropdownPopoverShow={setMoreDropdownPopoverShow} 
            setUserDropdownPopoverShow={setUserDropdownPopoverShow} />

            <MoreDropdown isExpanded={moreDropdownPopoverShow} setIsExpanded={setMoreDropdownPopoverShow} />
            <GridDropdown isExpanded={gridDropdownPopoverShow} setIsExpanded={setGridDropdownPopoverShow} />
            <UserDropdown isExpanded={userDropdownPopoverShow} setIsExpanded={setUserDropdownPopoverShow} />
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className="lg:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarMenu className='z-50 pt-14'>
        <NavbarMenuItem>
          <div className="flex flex-col justify-center items-between lg:hidden w-full">
            <NavbarTopMenu setTheme={setTheme} theme={theme} forMobile={true}
            setMoreDropdownPopoverShow={setMoreDropdownPopoverShow} 
            setUserDropdownPopoverShow={setUserDropdownPopoverShow} />

            <MoreDropdown isExpanded={moreDropdownPopoverShow} setIsExpanded={setMoreDropdownPopoverShow} />
            <GridDropdown isExpanded={gridDropdownPopoverShow} setIsExpanded={setGridDropdownPopoverShow} />
            <UserDropdown isExpanded={userDropdownPopoverShow} setIsExpanded={setUserDropdownPopoverShow} />
          </div>
        </NavbarMenuItem>
        {pagesLinksList.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === pagesLinksList.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}

      </NavbarMenu>
    </Navbar>
    </>
  )
}

export default Appbar