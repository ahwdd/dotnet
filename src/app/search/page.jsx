"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import AppBar from "@/components/appbar";
import Footer from "@/components/footer";
import SearchPage from "@/components/search_page";
import { searchData } from "@/components/search_page/data";
import { useState, useEffect } from "react";
const MediaPlayer = dynamic(() => import("./media-player"));
const SearchParamsComponent = dynamic(() => import("./searchParamsComponent"));
const BlogsPlayer = dynamic(() => import("./blogs-player"));
const ProductsPlayer = dynamic(() => import("./products-player"));
import toast from "react-hot-toast";
import ToasterComponent from "@/components/toaster_top";
import Content from "../content/page";
import {
  findMaxTotal,
  getRates,
  processData,
  getfetchedData,
  checkLocation,
  getTempData,
  getNewestShorts,
  getDailyNews,
  getTrendingData,
} from "./utils/functions";

export default function Page({}) {
  const router = useRouter();
  const [bgImg, setBgImg] = useState(searchData[0].backgroundImg);
  const [searchValue, setSearchValue] = useState(null);
  const [searchCachValue, setSearchCachValue] = useState(null);
  const [initialSearchValue, setInitialSearchValue] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBlogPopupOpen, setIsBlogPopupOpen] = useState(false);
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [actionDropdownValue, setActionDropdownValue] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [searchTypeDropdownValue, setSearchTypeDropdownValue] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(null);
  const [totalAvailable, setTotalAvailable] = useState(null);
  const [suggested, setSuggested] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [vidDis, setVidDis] = useState("full"); //full / small
  const [currentVid, setCurrentVid] = useState(null);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [activeVidIndex, setActiveVidIndex] = useState(0);
  const [currencyValue, setCurrencyValue] = useState("EGP");
  const [isMounted, setIsMounted] = useState(false);
  const [statusData, setStatusData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shortsTotal, setShortsTotal] = useState(null);

  const [fetchedData, setFechedData] = useState(null);
  const [newSearchData, setNewSearchData] = useState(null);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [terndingData, setTrendingData] = useState(null);
  const [dailyNews, setDailyNews] = useState(null);
  const [rates, setRates] = useState(null);

  // useEffect(() => {
  //   setIsMounted(true);

  //   if (isMounted) {
  //     checkLocation({ setLocation, location, setWeather, toast });
  //     getTrendingData({ setTrendingData, toast });
  //     getDailyNews({ setDailyNews, toast });
  //     // getNewestShorts({ setStatusData, toast })
  //     getRates({ c: currencyValue, setRates, toast, rates });
  //   }
  // }, [isMounted]);
  // // console.log('statusData', statusData)

  // useEffect(() => {
  //   setIsMounted(true);
  //   document.title = `البحث عن: ${searchValue ?? ""}`;
  //   if (searchValue != null) {
  //     // console.log('searchValue', searchValue)
  //     setIsLoading(true);
  //     getfetchedData({
  //       searchValue,
  //       perPage,
  //       currentPage,
  //       setFechedData,
  //       setNewSearchData,
  //       setStatusData,
  //       setShortsTotal,
  //       setTotalPages,
  //       setHasMore,
  //       setTotalAvailable,
  //       setSuggested,
  //       setIsLoading,
  //       toast,
  //       searchData,
  //       newSearchData,
  //     });
  //   }
  // }, [currentPage]);

  // useEffect(() => {
  //   document.title = `البحث عن: ${searchValue ?? ""}`;
  //   setSearchCachValue(searchValue);
  //   if (searchValue != null && searchValue == initialSearchValue) {
  //     setIsLoading(true);
  //     getfetchedData({
  //       searchValue,
  //       perPage,
  //       currentPage,
  //       setFechedData,
  //       setNewSearchData,
  //       setStatusData,
  //       setShortsTotal,
  //       setTotalPages,
  //       setHasMore,
  //       setTotalAvailable,
  //       setSuggested,
  //       setIsLoading,
  //       toast,
  //       searchData,
  //       newSearchData,
  //     });
  //   } else if (searchValue != initialSearchValue) {
  //     const newLoc = `/search?s=${searchValue}&for=${
  //       searchTypeDropdownValue ?? ""
  //     }`;
  //     history.replaceState(null, "", newLoc);
  //     window.location.reload();
  //     console.log("newLoc", newLoc);
  //   }
  // }, [searchValue]);

  // useEffect(() => {
  //   console.log(
  //     searchCachValue != initialSearchValue,
  //     searchCachValue,
  //     initialSearchValue
  //   );
  //   if (searchCachValue && searchCachValue != initialSearchValue) {
  //     const newLoc = `/search?s=${searchCachValue}&for=${
  //       searchTypeDropdownValue ?? ""
  //     }`;
  //     router.replace(newLoc);
  //     console.log("newLoc", newLoc);
  //   }
  // }, [searchTypeDropdownValue]);

  // useEffect(() => {
  //   if (isMounted) {
  //     getRates({ c: currencyValue, setRates, toast });
  //   }
  // }, [currencyValue, isMounted]);

  // useEffect(() => {
  //   if (location && location.latitude && location.longitude) {
  //     getTempData({
  //       latitude: location.latitude,
  //       longitude: location.longitude,
  //       setWeather,
  //       toast,
  //     });
  //   }
  // }, [location]);
  // console.log('total', totalAvailable)

  return (
    <main className="w-full  min-h-screen overflow-hidden relative bg-white dark:bg-black">
      <SearchParamsComponent
        setSearchTypeDropdownValue={setSearchTypeDropdownValue}
        setSearchValue={setSearchValue}
        setPerPage={setPerPage}
        perPage={perPage}
        setCurrentPage={setCurrentPage}
        setInitialSearchValue={setInitialSearchValue}
      />
      <ToasterComponent />
      {/* blurred background background */}
      {/* <div className="absolute inset-0 w-full h-[70vh] animate-hue-change">
        <div
          className="size-full bg-cover bg-no-repeat animate-background-transition"
          style={{
            backgroundImage: `url(${bgImg?.src || bgImg})`,
            filter: "blur(80px)",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-white via-white via-[70vh] dark:via-black dark:from-black/5 dark:to-black" /> */}

      <AppBar
        shadow="transparent"
        bgTransparent={false}
        searchValue={searchValue ?? ""}
        setSearchValue={setSearchValue}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
        searchCachValue={searchCachValue}
        setSearchCachValue={setSearchCachValue}
        searchTypeDropdownValue={searchTypeDropdownValue}
        setSearchTypeDropdownValue={setSearchTypeDropdownValue}
      />

      {/* <SearchPage
        data={newSearchData}
        setBgImg={setBgImg}
        searchDropdownValue={searchTypeDropdownValue}
        setVidDis={setVidDis}
        statusData={statusData}
        setCurrentVid={setCurrentVid}
        isLoading={isLoading}
        setCurrentProduct={setCurrentProduct}
        rates={rates}
        weather={weather}
        setActiveVidIndex={setActiveVidIndex}
        setIsBlogPopupOpen={setIsBlogPopupOpen}
        setCurrentBlog={setCurrentBlog}
        searchValue={searchValue ?? ""}
        openStatus={setIsPopupOpen}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
        trendingData={terndingData}
        tagsData={fetchedData?.tags?.data}
        dailyNews={dailyNews}
        setIsProductPopupOpen={setIsProductPopupOpen}
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        hasMore={hasMore}
        total={totalAvailable}
        currentPage={currentPage}
        suggested={suggested}
        shortsTotal={shortsTotal}
      /> */}

      <Content />

      <MediaPlayer
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        isExpanded={isExpanded}
        vidDis={vidDis}
        setVidDis={setVidDis}
        setCurrentVid={setCurrentVid}
        currentVid={currentVid}
        setActiveVidIndex={setActiveVidIndex}
        statusData={statusData}
        activeVidIndex={activeVidIndex}
        setIsExpanded={setIsExpanded}
        actionDropdownValue={actionDropdownValue}
        setActionDropdownValue={setActionDropdownValue}
      />

      {/* <BlogsPlayer isPopupOpen={isBlogPopupOpen} setIsPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog} currentBlog={currentBlog} /> */}
      <ProductsPlayer
        isPopupOpen={isProductPopupOpen}
        setIsPopupOpen={setIsProductPopupOpen}
        setCurrentProduct={setCurrentProduct}
        currentProduct={currentProduct}
      />
      <Footer />
    </main>
  );
}
