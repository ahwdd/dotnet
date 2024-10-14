"use client"
import { useState, useEffect, useCallback, useRef } from "react";
import { useTheme } from 'next-themes';
import { useScroll } from "../hooks/useScroll";
import { useResize } from "../hooks/useResize";
import SearchResultPreview from "./parts/search-result-preview";
import TabsComponent from "./parts/tabs-component";
import { gsap } from 'gsap';
import { ScrollToPlugin, Power2 } from "gsap/all";
import DragToOpen from "./parts/drag-to-open";

const SearchPage = ({ data=null, setBgImg=()=>{console.log('define setBgImg ')}, setVidDis, trendingData, tagsData, setCurrentVid,
setActiveVidIndex, setCurrentPage, setIsBlogPopupOpen, setCurrentBlog, hasMore, totalPages, currentPage, isLoading, setCurrentProduct,
statusData=[], searchValue, openStatus, activeTabIndex, setActiveTabIndex, searchDropdownValue, weather, dailyNews, rates, shortsTotal,
currencyValue, setCurrencyValue, suggested, setIsProductPopupOpen, total }) => {
  gsap.registerPlugin(ScrollToPlugin);
  const { theme } = useTheme();
  const buttonRef = useRef()
  const isScrolled = useScroll();
  const innerWidth = useResize();
  const [activeTab, setActiveTab] = useState('all')
  const [isViewList, setIsViewList] = useState(() => {
    const saved = localStorage?.getItem('isViewList');
    return saved ? saved === 'true' : true;
  });
  const [isRightOpen, setIsRightOpen] = useState(() => {
    const storedValue = sessionStorage.getItem('isRightOpen');
    if (storedValue !== null &&  window.innerWidth >= 1280) {
      const parsedValue = JSON.parse(storedValue);
      return typeof parsedValue === 'boolean' ? parsedValue : true;
    }else if(window.innerWidth < 1280){
      return false
    }
    return true;
  });
  const [tabWidths, setTabWidths] = useState([]);
  const [isAccordionExpanded, setIsAccordionExpanded] = useState({ blogs: true, products: true, videos: true, news: true, reviews: true, how: true });

  const handleTabChange = useCallback((newTab, withScroll = true) => {
    const accElement = document.getElementById(`accordion-${newTab}`);
    const defaultSelected = { blogs: true, products: true, videos: true, news: true, reviews: true, how: true };

    if (accElement) {
      const elementPosition = accElement.getBoundingClientRect().top + window.scrollY;
      // const offsetPosition = elementPosition - 160;
      if (withScroll) {
        gsap.to(window, { duration: 0.5, scrollTo: { y: elementPosition, offsetY: 160 }, ease: Power2.easeInOut });
      }
    } else {
      if (withScroll) {
        gsap.to(window, { duration: 0.5, scrollTo: { y: 0, offsetY: 160 }, ease: Power2.easeInOut });
      }
    }

    if (tabWidths.length === 0) {
      const widths = data?.map((_, i) => document.getElementById(`btn-${i}`)?.offsetWidth);
      setTabWidths(widths);
    }

    const newTabIndex = data?.map((_) => _.id)?.findIndex((element) => element === newTab);
    const timeToChange = newTabIndex===0 ? 1000 : 0;
    setTimeout(() => {
      setActiveTabIndex(newTabIndex ?? 0);
      setActiveTab(newTab);
      // console.log('newTab', newTab, timeToChange)
    }, timeToChange);

    localStorage.setItem('isAccordionExpanded', JSON.stringify(defaultSelected));
    setIsAccordionExpanded(defaultSelected);
  }, [data, tabWidths]);

  useEffect(()=>{
    if(data) setBgImg(data[activeTabIndex]?.cards[0]?.imgUrl || data[activeTabIndex]?.bgImg[theme])
  }, [activeTabIndex, data, theme])

  useEffect(()=>{
    if(searchDropdownValue && data){ 
      let newTabIndex = data?.map((_)=>_.label)?.findIndex(element => element === searchDropdownValue)
      handleTabChange(data[newTabIndex]?.id || 'all')
    }
  }, [searchDropdownValue, data])

  return (
  <div className="max-w-grid p-grid mt-20 md:w-screen text-black dark:text-white min-h-[150vh]">
    <div className={`w-full grid mx-auto transition-all ${isRightOpen?'grid-cols-5 ':' grid-cols-1'}`}>
      <div className={`relative transition-all ${isRightOpen?'col-span-5 xl:col-span-4 ':''}`}>

        <SearchResultPreview searchValue={searchValue} isScrolled={isScrolled} />
        {
        // !data ? <LoaderSkeletons isViewList={isViewList} /> : 
        <TabsComponent
          data={data} isScrolled={isScrolled} currentPage={currentPage} setVidDis={setVidDis} setCurrentBlog={setCurrentBlog}
          handleTabChange={handleTabChange} activeTab={activeTab} openStatus={openStatus} setCurrentPage={setCurrentPage}
          isViewList={isViewList} isAccordionExpanded={isAccordionExpanded} setCurrentVid={setCurrentVid} suggested={suggested}
          isLoading={isLoading} innerWidth={innerWidth} statusData={statusData} setActiveVidIndex={setActiveVidIndex}
          setIsBlogPopupOpen={setIsBlogPopupOpen} setIsViewList={setIsViewList} shortsTotal={shortsTotal} total={total}
          setIsAccordionExpanded={setIsAccordionExpanded} hasMore={hasMore} tabWidths={tabWidths} isCentered={isRightOpen}
          setCurrentProduct={setCurrentProduct} setIsProductPopupOpen={setIsProductPopupOpen}
        />}
      </div>
      
      <DragToOpen
        isOpen={isRightOpen}
        setIsOpen={setIsRightOpen}
        trendingData={trendingData}
        tagsData={tagsData} isLoading={isLoading} 
        weather={weather}
        dailyNews={dailyNews}
        length={data?.[1]?.cards?.length ?? 0}
        page={currentPage ?? 0}
        rates={rates}
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}
        isStoreTabOpen={activeTab === 'products'}/>
    </div>
  </div>
  );
};

export default SearchPage;