"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Image from "next/image";
import user from "/public/latestNews/news4.png";
import ThemeSwitch from "@/app/ThemeSwitch.jsx";
import logo from "/public/logo.png";
import { SearchIcon } from "./SearchIcon.jsx";
import DropDown from "./GridDropDown.jsx";
import GridDropDown from "./GridDropDown.jsx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["اخبار", "المراجعات", "مقالات", "الفيديوهات", "الأحداث"];

  return (
    <Navbar
      className=" bg-navBg !justify-normal z-50"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="flex w-full gap-2 justify-between  sm:px-10">
        <div className="flex items-center">
          <Link href={"/"} className="ml-3">
            <Image
              src={logo}
              className="w-[47px] h-[47px] object-contain"
              alt="arabhardare-logo"
            />
          </Link>
          <Input
            classNames={{
              base: "w-full md:w-72 h-10 py-2",
              mainWrapper: "h-full",
              input: "text-small text-mainColor !focus:outline-none",
              inputWrapper:
                "h-full font-normal !rounded-none !bg-[##3F3F46] text-mainColor ",
            }}
            placeholder="عن ماذا تبحث اليوم"
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </div>

        <ul className="hidden gap-10  lg:flex items-center">
          {menuItems.map((_, i) => (
            <li key={_}>
              <Link
                href="#"
                aria-current="page"
                className="text-mainColor hover:text-red-500 transition duration-200"
              >
                {_}
              </Link>
            </li>
          ))}
          {/* <li>
            <Link href="#" aria-current="page" className="text-white">
              المراجعات
            </Link>
          </li>
          <li>
            <Link href="#" aria-current="page" className="text-white">
              مقالات
            </Link>
          </li>
          <li>
            <Link href="#" aria-current="page" className="text-white">
              الفيديوهات
            </Link>
          </li>
          <li>
            <Link href="#" aria-current="page" className="text-white">
              الأحداث
            </Link>
          </li> */}
        </ul>

        <div className="hidden lg:flex gap-3 items-center">
          <ThemeSwitch />

          <GridDropDown />
        </div>

        <div className="hidden lg:flex gap-3 items-center">
          <p>صباح الخير سارة!</p>
          <Image src={user} className="w-12 h-12" />
        </div>
      </div>

      {/* Drop down button is here */}
      {/* 
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent> */}

      {/* <NavbarContent
        className="hidden lg:flex w-full gap-4 container "
        justify=""
      >
        <NavbarBrand>
          <Link href="/">
            <Image
              src={logo}
              className="w-[30px] h-[30px]"
              alt="arabhardware-logo"
            />
          </Link>
          <input type="search" className="w-[300px]" placeholder="serach" />
        </NavbarBrand>

        <NavbarBrand className=" flex [&>*]:text-white justify-center items-center gap-12">
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-white">
              اخبار
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-white">
              المراجعات
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-white">
              مقالات
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-white">
              الفيديوهات
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-white">
              الأحداث
            </Link>
          </NavbarItem>
        </NavbarBrand>

        <NavbarBrand className=" flex gap-5 justify-center ">
          <SwitchMode />
          <button>A</button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="flex gap-20">
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        Kosom el sisi
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarMenuToggle
        className="bg-blue-500  w-10 h-10 lg:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      />
    </Navbar>
  );
}
