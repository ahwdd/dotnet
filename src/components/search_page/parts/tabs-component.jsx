import {useState, useEffect, useRef} from 'react'
import {Tabs, Tab, Card, Skeleton} from "@nextui-org/react";
import CardsComponent from '../cardsComponent'
import StatusBar from '../status-bar';
import { motion} from 'framer-motion';
import { sectoinColors } from '../data';

function TabsComponent({ data=[], isScrolled, handleTabChange, activeTab, isViewList, isAccordionExpanded, isLoading, innerWidth,
    currentPage, statusData, openStatus, setVidDis, setCurrentVid, setActiveVidIndex, setIsBlogPopupOpen, setIsViewList, shortsTotal,
    setIsAccordionExpanded, setCurrentPage, setCurrentBlog, setCurrentProduct, setIsProductPopupOpen, 
    hasMore, suggested, tabWidths, isCentered=false, total
 }) {
  const [gapSize, setGapSize] = useState(24);
  const activeIndex = data?.findIndex(item => item.id === activeTab) || 0;
  const activeOffset = tabWidths?.slice(0, activeIndex).reduce((acc, width) => acc + width + gapSize, 0)-24;

  useEffect(() => {
    const updateGapSize = () => { setGapSize(window.innerWidth >= 768 ? 24 : 8); };
    updateGapSize();
    window.addEventListener('resize', updateGapSize);
    return () => { window.removeEventListener('resize', updateGapSize); };
  }, []);

  return (<>
  <div aria-label="Arabhardware Companies" data-slot="base" className="inline-flex">
    <div className={`z-30 fixed w-full flex items-center justify-start backdrop-blur-lg bg-white/50 dark:bg-black/50
      ${isCentered?'xl:w-[calc(80%-7rem)] xl:mr-0 xl:pr-4 pr-[5%] -mr-[5%]':'xl:w-full xl:max-w-grid xl:pr-[5%] xl:mr-0 -mr-[5%]'}
      ${isScrolled ? 'lg:top-28 top-24 backdrop-blur-md py-4' : 'top-28 pt-8 pb-0'}`}
      aria-label="Arabhardware Companies">
        
      <div className={`flex items-center justify-center flex-nowrap scrollbar-hide max-xs:scrollbar-default z-30 
      gap-2 md:gap-6 overflow-x-scroll overflow-y-visible pb-2 gap-y-1 w-fit transition-all relative`}>
        <motion.span
          className={`${isScrolled?'bottom-0 ':'bottom-0 '} absolute z-10 h-1.5 mr-[5%] xl:mr-0 transition-all 
          ${sectoinColors[activeTab]?.bg ?? 'bg-prime'}`}
          layoutId="underline"
          initial={false}
          animate={{ 
            right: activeOffset-12, 
            width: tabWidths[activeIndex]+12 || 0 
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <span className='absolute top-0 left-0 size-1.5 bg-black dark:bg-white transition-all' />
        </motion.span>

        {(data && data.length)
        ?data?.map(_=>({id: _.id, label: _.label, icon: _.icon})).map((item, i)=>{
          const isDataSelected = item.id==activeTab
          return <button tabIndex={i} data-key={item.id} key={item.id}
          id={`btn-${i}`} data-selected={isDataSelected}
          onClick={()=>handleTabChange(item.id)}
          className={`${i===0?'hidden':`
          z-0 w-full py-1 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent 
          data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 
          data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small xl:text-large rounded-none max-w-fit px-0 h-8
          `}`}>
            <div className={`relative z-10 whitespace-nowrap transition-colors drop-shadow-xl 
            ${sectoinColors[activeTab]?.textSelected ?? 'group-data-[selected=true]:text-prime'} 
              group-data-[hover-unselected]:text-black text-black dark:group-data-[hover-unselected]:text-white dark:text-white`}>
              <div className="flex justify-start items-center space-x-2 gap-1">
                {/* <item.icon className="max-lg:hidden size-4" /> */}
                <span>{item.label}</span>
              </div>
            </div>
          </button>
        }):<div className="w-full flex items-center justify-center gap-6 ">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              className={`z-0 w-full py-1 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent 
              data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 
              data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small xl:text-large rounded-none max-w-fit px-0 h-8`}
            >
              <div className="relative z-10 whitespace-nowrap transition-colors group-data-[selected=true]:text-prime drop-shadow-xl 
                  group-data-[hover-unselected]:text-black text-black dark:group-data-[hover-unselected]:text-white dark:text-white">
                <div className="flex items-center space-x-2">
                  <Skeleton className="w-16 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>}
      </div>
    </div>
  </div>
  <div className={`pt-3 pb-20 px-1 mt-20 data-[inert=true]:hidden outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 
    data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2`}>
      <div className="col-span-5 xl:col-span-4 w-full relative mb-4">
        <StatusBar statusData={statusData} openStatus={openStatus} setVidDis={setVidDis} shortsTotal={shortsTotal}
        setCurrentVid={setCurrentVid} setActiveVidIndex={setActiveVidIndex} isLoading={isLoading} />
      </div>
    {<CardsComponent
        cards={data?.find(_=>_.id=='all')?.cards}
        id={'all'}
        haveStatusData={!isLoading && statusData && statusData.length > 0}
        openStatus={openStatus}
        setVidDis={setVidDis} isCentered={!isCentered}
        changeTab={handleTabChange}
        setCurrentVid={setCurrentVid}
        setIsBlogPopupOpen={setIsBlogPopupOpen}
        isViewList={isViewList}
        setIsViewList={setIsViewList}
        isAccordionExpanded={isAccordionExpanded}
        setIsAccordionExpanded={setIsAccordionExpanded}
        isLoading={isLoading}
        setCurrentBlog={setCurrentBlog}
        setCurrentProduct={setCurrentProduct}
        setIsProductPopupOpen={setIsProductPopupOpen}
        hasMore={hasMore} total={total}
        suggested={suggested}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    }
  </div>
  </>)
}

export default TabsComponent