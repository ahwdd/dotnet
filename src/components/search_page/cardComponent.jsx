import SingleCard from "./singleCard";
import { useState, useEffect, useCallback } from "react";
import { StoreIcon, ArrowUpLeft, ArrowDownLeft, ChevronLeft } from "lucide-react";
import ViewListToggle from "./view-list-toggle";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import AnimatedLoader from "../ui/icons/animated-loader";
import { chunkArray, getChunkSize } from "./functions";
import { cardData, sectoinColors } from "./data";
import { useCardLoading } from "../hooks/useCardLoading";

const CardComponent = ({id, category, openStatus, setVidDis, setCurrentVid, setIsBlogPopupOpen, setCurrentBlog, changeTab,
    haMore=false, currentPage=1, setCurrentPage, hasMore=false, isViewList, setIsViewList, setMaxCardsPerCategory, isLoading,
    isAccordionExpanded, setIsAccordionExpanded, suggested=0, setCurrentProduct, setIsProductPopupOpen, total,
    haveStatusData, isCentered, setCurrentIndex
}) => {
    const [isCardLoading, chageIsCardLoading] = useCardLoading();
    const [chunksArray, setChunksArray] = useState(null)
    const [isDummy, setIsDummy] = useState(true)
    const [maxPage, setMaxPage] = useState(null)
    const [selectedKeys, setSelectedKeys] = useState(() => {
        return new Set(Object.keys(isAccordionExpanded).filter(key => isAccordionExpanded[key]));
    });
    const heroTypes = [
        // "blogs", "news", "reviews", "how"
    ];
    const firstValue = Math.ceil((total?.[category[0]?.type]) / chunksArray?.[0]?.length);
    const secondValue = chunksArray?.length;

    const findTheMaxPageIndex = () => {
        const allNotZero = Object?.values(hasMore)?.every(value => value !== 0)
        if (allNotZero) {
            const maxValue = Math?.max(...Object?.values(hasMore));
            setMaxPage(maxValue)
        } else {
            setMaxPage(null)
        }
    }
    // if(category[0].type=='news'){
    //     console.log(firstValue , secondValue, hasMore)
    //     console.log('(firstValue > secondValue) ',(firstValue > secondValue))
    //     console.log('hasMore?.[category[0]?.type]==0 ',hasMore?.[category[0]?.type]==0)
    //     console.log((firstValue > secondValue) || hasMore?.[category[0]?.type]==0)
    // }
    const changeChunk = useCallback((moreElId) => {
        const type = category[0]?.type;
        const chunkSize = getChunkSize({ type, isCentered });
        sessionStorage.removeItem('scrollingAccordion');
    
        if (isLoading && moreElId && type === moreElId) {
          setChunksArray(chunkArray(category.concat(Array(chunkSize).fill({type})), chunkSize));
        } else if(isDummy){
          setChunksArray(chunkArray(Array(chunkSize).fill({type}), chunkSize));
        } else {
          setChunksArray(chunkArray(category, chunkSize));
        }
      }, [category, isLoading, isCentered]);

      const handleChangeTab = useCallback(() => {
        window.scrollTo({ top: 300, behavior: 'smooth' });
        changeTab(category[0]?.type);
        // setSelectedKeys(defaultSelected);
      }, [category, isDummy]);
      
      const loadMoreData = useCallback((id) => {
        sessionStorage.setItem('scrollingAccordion', id);
        setCurrentPage(prev => {
            if(maxPage) return prev
            else return (prev+1)
        });
        setCurrentIndex(prev=>prev+1)
        setMaxCardsPerCategory(prev => {
          const type = category[0].type;
          const final = { ...prev, [type]: prev[type] + getChunkSize({ type, isCentered }) };
          changeChunk(id);
          chageIsCardLoading({ loadingId: id, isLoading });
          localStorage.setItem('maxCardsPerCategory', JSON.stringify(final));
          return final;
        });
      }, [category, isCentered, isDummy]);

    const handleSingleAccordionChange = useCallback((key) => {
        setIsAccordionExpanded(prev => {
          const newExpanded = { ...prev, [key]: !prev[key] };
          const newSelectedKeys = new Set(Object.keys(newExpanded).filter(k => newExpanded[k]));
          localStorage.setItem('isAccordionExpanded', JSON.stringify(newExpanded));
          setSelectedKeys(newSelectedKeys);
          return newExpanded;
        });
      }, []);
    //   console.log(localStorage?.getItem('maxCardsPerCategory'))

    useEffect(()=>{
        if(hasMore && currentPage) findTheMaxPageIndex()
    }, [currentPage, hasMore])

    useEffect(()=>{
        setIsDummy(false)
        const loadingId = sessionStorage.getItem('scrollingAccordion')
        changeChunk(loadingId)
    }, [isLoading, category, isCentered, isDummy])

    useEffect(()=>{
        chageIsCardLoading({isLoading})
    }, [])
    // console.log('isCardLoading', Object?.keys(isCardLoading)?.filter(key => isCardLoading[key]))

    return <div className={`space-y-4 rounded relative w-full px-[2%] pb-2 pt-6
    ${hasMore?.[category[0]?.type]? 'pb-4': ''}
    ${(heroTypes.includes(category[0]?.type) && id=='all')?'hidden':''}
    ${category[0]?.type ?(`
        ${category[0]?.type == 'products'? 'bg-gradient-to-r from-transparent to-gray-200 dark:to-[#274253]':''}
    `):''
    } `}>
        {/* title */}
        {((category[0]?.type=='news' && id=='all') || (id!='all' && category[0]?.type!='products')) && 
        <div className={`absolute left-4 z-10 ${(haveStatusData||isLoading)?'top-2 ':'top-10'}`} 
        onClick={(e)=>{}}>
            <ViewListToggle isViewList={isViewList} setIsViewList={setIsViewList} id={`all`} />
        </div>}
        
        <Accordion 
        selectedKeys={selectedKeys} disabledKeys={selectedKeys}
        onSelectionChange={(keys) => {
            const newKeys = new Set(keys);
            const oldKeys = selectedKeys;
            const toggledKey = [...newKeys].find(key => !oldKeys.has(key)) || [...oldKeys].find(key => !newKeys.has(key)); // Determine which key was toggled
            if (toggledKey) { handleSingleAccordionChange(toggledKey); }
        }}
        >
        {category[0]?.type && !(heroTypes.includes(category[0]?.type) && id=='all') &&
        <AccordionItem 
        key={category[0]?.type} 
        aria-label={category[0]?.type} 
        classNames={{
            trigger: "col-span-6 relative flex flex-row-reverse items-center justify-start gap-2 pt-0 pb-6",
            base: " pointer-events-auto opacity-100", // because i disabled the accordion for now
        }}
        indicator={<></>}
        title={
            <div className="col-span-6 relative flex items-center justify-start gap-2 accordion-title "
            id={`accordion-${category[0]?.type}`}>
                {/* {category[0]?.type=='products' && <StoreIcon className="size-6" />} */}
                <div className="flex items-center justify-center">
                    {<span className={`${sectoinColors[category[0]?.type]?.bg ?? 'bg-prime'} h-6 w-1.5 relative ml-4`}>
                        <span className="absolute size-1.5 top-0 left-0 bg-black dark:bg-white"></span>
                    </span>}
                    <p className="font-bold text-3xl">
                        {cardData.titles[category[0]?.type]}
                    </p>
                    <ChevronLeft className={`${sectoinColors[category[0]?.type]?.text ?? 'text-prime'} mt-2 mr-2`} strokeWidth={3} />
                </div>
            </div>}
        >
            
            {/* cards */}
            {!(heroTypes.includes(category[0]?.type) && id=='all') &&
                <div className={`flex flex-wrap gap-4 items-center w-full ${category[0]?.url!='#no-result'?'justify-between ':'justify-center'}`}>
                    {suggested && suggested[category[0]?.type]==(localStorage?.getItem('maxCardsPerCategory')||0) && 
                    <div className="w-full text-medium">
                        لم نعثر على نتيجة للبحث، اليك بعض الاقتراحات
                    </div>}
                    {category && category.length > 0 && chunksArray && (() => {
                        return chunksArray.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className={`group/type w-full flex flex-wrap gap-4 ${category[0]?.url!='#no-result'?'justify-start gap-[1.5%] ':'justify-center'}`}>
                        {chunk.map((_, i) => {
                            const isLoadingCard = (_.type && isCardLoading[_.type] && chunkIndex == chunksArray.length - 1) || isDummy;
                            // console.log('type: ', _.type,' (',  chunkIndex, i,') isCardLoading: ', (isCardLoading[_.type] && chunkIndex==chunksArray.length-1),'isDummy: ',  isDummy)
                            return (<SingleCard key={i} likes={_.likes} views={_.views} comments={_.comments}
                            title={_.title} model={_.model} brandId={_.brandId} quantity={_.quantity} isCentered={isCentered}
                            setIsProductPopupOpen={setIsProductPopupOpen} index={i} openStatus={openStatus}
                            setVidDis={setVidDis} setCurrentVid={setCurrentVid} isViewList={isViewList} moreVideos={_.moreVideos}
                            url={_.url} youtubeId={_.youtubeId} type={_.type} imgUrl={_.imgUrl} isOffer={i==0&&chunkIndex==0}
                            setIsBlogPopupOpen={setIsBlogPopupOpen} author={_.author} isCardLoading={isLoadingCard}
                            setCurrentProduct={setCurrentProduct} setCurrentBlog={setCurrentBlog} desc={_.desc}
                            nStock={_.inStock} price={_.price} subTitle={_.subTitle} publishAt={_.publishAt}
                            />);
                        })}
                        </div>
                        ));
                    })()}
                </div>}
            {/* link to more in all */}
            {/* 2 * 6 / 3 */}
            {category[0]?.type && id=='all' && !heroTypes.includes(category[0]?.type) && 
            ((firstValue > secondValue) || hasMore?.[category[0]?.type]==0) && 
            <button disabled={isLoading} id={`load-more-${category[0]?.type}`}
            onClick={()=>loadMoreData(`${category[0]?.type}`)}
            className="font-bold text-small rounded w-full flex items-center justify-center text-black dark:text-white mt-4 bg-black/15 shadow-medium">
                {/* loading animation */}
                {isLoading? <div className="w-full h-20 my-1 relative !mt-0 bg-center">
                    <AnimatedLoader />
                </div>
                :<><span className=" py-8">عرض المزيد</span><ArrowDownLeft /></>}
            </button>}
            {category[0]?.type == 'products' && id=='all' && 
            <button 
            onClick={handleChangeTab} 
            className="absolute top-2 left-6 text-black dark:text-white p-2">
                <ArrowUpLeft />
            </button>}
        </AccordionItem>}
        </Accordion>
    </div>
}

export default CardComponent
