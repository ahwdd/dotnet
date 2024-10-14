import React from 'react'
import {Tabs, Tab} from "@nextui-org/react";
import CardsComponent from '../cardsComponent'
import StatusBar from '../status-bar';

function TabsComponent({ data, isScrolled, handleTabChange, activeTab, isViewList, isAccordionExpanded, isLoading, innerWidth,
    currentPage, statusData, openStatus, setVidDis, setCurrentVid, setActiveVidIndex, setIsBlogPopupOpen, setIsViewList,
    setIsAccordionExpanded, setCurrentPage, setCurrentBlog, setCurrentProduct, setIsProductPopupOpen, hasMore, suggested
 }) {

  return (
    <Tabs
    key={`${currentPage}-${data?.[1]?.cards?.length}-${isViewList}-${JSON?.stringify(isAccordionExpanded)}-${isLoading}-${innerWidth}`}
    variant="underlined"
    aria-label="Arabhardware Companies"
    color="prime"
    classNames={{
      tabList: `gap-2 md:gap-6 relative p-0 overflow-x-scroll gap-y-1 fixed w-full max-xs:scrollbar-default pr-[5%] -mr-[5%] xl:mr-0 xl:pr-0 xl:w-[calc(80%-7rem)]
      ${isScrolled ? 'top-16 backdrop-blur-md bg-white/50 dark:bg-black/50' : 'top-28'} z-40`,
      cursor: "w-2/5 bg-prime",
      tab: "max-w-fit px-0 h-8",
      tabContent: "group-data-[selected=true]:text-prime drop-shadow-xl group-data-[hover-unselected]:text-black text-black dark:group-data-[hover-unselected]:text-white dark:text-white"
    }}
    onSelectionChange={handleTabChange}
    selectedKey={activeTab}
    items={data || []}
  >
    {(item) => (
      <Tab key={item.id} title={<div className="flex items-center space-x-2"><span>{item.label}</span></div>}>
        {statusData && statusData.length > 0 && (
          <div className="col-span-5 xl:col-span-4 w-full relative mb-4">
            <StatusBar statusData={statusData} openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} setActiveVidIndex={setActiveVidIndex} />
          </div>
        )}
        <CardsComponent
          cards={item.cards}
          id={item.id}
          openStatus={openStatus}
          setVidDis={setVidDis}
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
          hasMore={hasMore}
          suggested={suggested}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Tab>
    )}
  </Tabs>
  )
}

export default TabsComponent