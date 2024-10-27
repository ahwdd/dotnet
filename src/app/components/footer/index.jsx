"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import LogoImg from "/public/logos/footer-logo.png";
import { footerData, socialIcons } from "./data";
import Link from "next/link";
import NewsLetter from "./newsletter";
import ChipRed from "@/app/ui/chip-red";

function BoldText({ text }) {
  return (
    <p className="font-bold lg:text-large sm:text-small text-tiny">{text}</p>
  );
}

function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer
      id="footer"
      className="w- bg-white dark:bg-black relative z-40 overflow-hidden"
    >
      <div className="w-full lg:max-w-[70vw] mx-auto p-grid">
        <NewsLetter />
        <section className="w-full pt-8 pb-8 lg:pt-28 lg:pb-14 flex flex-col items-center justify-center relative">
          <div className="absolute  bg-mainColor2 w-screen h-full top-0 lg:-left-[15vw] -z-10" />
          <div className="w-full flex lg:flex-row flex-col flex-wrap lg:gap-8 gap-4 lg:items-start lg:justify-between items-center justify-center lg:mb-8 mb-2">
            <div className="space-y-2 lg:ml-8">
              <Image
                src={LogoImg}
                alt="arabhardware logo"
                className="sm:size-24 size-12 dark:filter dark:invert"
              />
            </div>
            <div className="flex-1 flex max-lg:gap-8 max-sm:gap-4 lg:grid grid-cols-4 gap-y-4 lg:gap-y-8 lg:text-xxs">
              {footerData?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="lg:space-y-8 space-y-4 col-span-1"
                  >
                    <BoldText text={data.title} />
                    <div className="sm:space-y-4 lg:block flex-wrap items-center justify-center gap-4 hidden text-medium">
                      {data.sections.map((_, i) => {
                        return (
                          <div
                            key={i}
                            className={`max-sm:w-1/4 flex items-center max-sm:min-w-fit gap-4`}
                          >
                            <p>{_.title}</p>
                            {_.isNew && (
                              <ChipRed>
                                <div className="relative bg-white dark:bg-gray-900 pb-1 px-2 rounded">
                                  جديد
                                </div>
                              </ChipRed>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Divider className="my-4 w-screen -mr-[15vw] max-lg:hidden hidden" />
          <div className="flex-1 w-full my-14 flex max-lg:flex-col-reverse items-center lg:justify-between justify-center lg:gap-8 gap-2 flex-wrap max-lg:text-small max-sm:text-xxs">
            <div className="flex items-center justify-center">
              <p className="">
                جميع الحقوق محفوظة لعرب هاردوير ©<span>{currentYear}</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 max-lg:mt-8">
              {socialIcons.map((_, i) => {
                return (
                  <a
                    key={i}
                    href={_.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={_.icon}
                      alt={_.title}
                      className="lg:size-6 sm:size-8 size-6 dark:invert-0 invert"
                    />
                  </a>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-2 lg:text-tiny text-black dark:text-white">
              <Link href={`https://arabhardware.net/pages/privacy-policy`}>
                وثيقة الخصوصية
              </Link>
              <Divider orientation="vertical" className="w-0.5 h-3 mt-1.5" />
              <Link href={`https://arabhardware.net/authors`}>
                فريق التحرير
              </Link>
              <Divider orientation="vertical" className="w-0.5 h-3 mt-1.5" />
              <Link href={`https://arabhardware.net/sitemap.html`}>
                خريطة الموقع
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
