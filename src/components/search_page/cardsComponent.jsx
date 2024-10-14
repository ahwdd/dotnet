import React from "react";
import { useState, useEffect } from "react";
import CardComponent from "./cardComponent";
import Ad1 from "./ad-sense/ad1";
import Ad2 from "./ad-sense/ad2";
import { getChunkSize } from "./functions";
import debounce from 'lodash.debounce';
import { tashkelaCards } from "./data";

export default function CardsComponent({cards=tashkelaCards, id='all', openStatus, setVidDis, setCurrentVid, setIsBlogPopupOpen, isLoading,
  setCurrentBlog, changeTab, hasMore, suggested, currentPage, setCurrentPage, setCurrentProduct, setIsProductPopupOpen,
  isViewList, setIsViewList, isAccordionExpanded, setIsAccordionExpanded, haveStatusData, isCentered, total }) {
  const [categories, setCategories] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(currentPage)
  const [maxCardsPerCategory, setMaxCardsPerCategory] = useState({
    news: 6,
    products: 6,
    videos: 6,
    blogs: 6,
    reviews: 6,
    how: 6,
  })
  const defaultMaxCardsPerCategory = {
    news: getChunkSize({type: 'news', isCentered}),
    products: getChunkSize({type: 'products', isCentered}),
    videos: getChunkSize({type: 'videos', isCentered}),
    blogs: getChunkSize({type: 'blogs', isCentered}),
    reviews: getChunkSize({type: 'reviews', isCentered}),
    how: getChunkSize({type: 'how', isCentered}),
  };

  const setTheCategories = (maxCards=maxCardsPerCategory) => {
    // console.log('setthecategories')
    const categories = Object.keys(maxCards); // categories array
    const categorizedCards = categories.reduce((cat, i) => { 
      cat[i] = []; return cat; 
    }, {}); // object with catigories & an initial value of []
    
    cards.forEach(card => {
      if (categorizedCards[card.type] && categorizedCards[card.type].length < maxCards[card.type]) {
        categorizedCards[card.type].push(card);
      }
    });
    // console.log('categorizedCards', categorizedCards)
    setCategories(categorizedCards);
  }

  useEffect(()=>{
    try {
      const localMaxCards = JSON.parse(localStorage.getItem('maxCardsPerCategory'));
      if (currentPage === 1) {
        // console.log('defaultMaxCardsPerCategory', defaultMaxCardsPerCategory)
        localStorage.setItem('maxCardsPerCategory', JSON.stringify(defaultMaxCardsPerCategory));
        setMaxCardsPerCategory(defaultMaxCardsPerCategory);
        setTheCategories(defaultMaxCardsPerCategory);
  
      } else if (localMaxCards) {
        // console.log('localMaxCards', localMaxCards)
        setMaxCardsPerCategory(localMaxCards);
        setTheCategories(localMaxCards);
      } else {
        console.log('Not page 1:', currentPage);
      }
  
    } catch (error) {
      console.error("Failed to retrieve or parse maxCardsPerCategory from localStorage", error);
    }
  }, [cards, currentPage, currentIndex])
  // console.log(total)

  useEffect(() => {
    const titles = document.querySelectorAll('.accordion-title');
    let isScrolling = false;

    const debouncedChangeTab = debounce((obsId) => {
      changeTab(obsId, false);
    }, 200);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const obsId = entry.target.getAttribute('id')?.split('accordion-')[1];
            debouncedChangeTab(obsId);
          }
        });
      },
      { threshold: 1 }
    );

    titles.forEach((title) => observer.observe(title));

    return () => {
      observer.disconnect();
    };
  }, [changeTab]);
  
  const adjustToNearestChunk = (currentValue, chunkSize) => {
    // console.log('currentValue', currentValue)
    // console.log('chunkSize', chunkSize)
    if(currentValue<chunkSize) return chunkSize
    const quotient = Math.floor(currentValue / chunkSize);
    return quotient * chunkSize;
  };

  useEffect(()=>{
    // console.log('isCentered', isCentered, currentPage)
    if (currentPage == 1) {
      // console.log('defaultMaxCardsPerCategory', defaultMaxCardsPerCategory)
      localStorage.setItem('maxCardsPerCategory', JSON.stringify(defaultMaxCardsPerCategory));
      setMaxCardsPerCategory(defaultMaxCardsPerCategory);
      setTheCategories(defaultMaxCardsPerCategory);
    }else{
      setMaxCardsPerCategory(prev => {
        const updatedCategory = {};
        console.log('prev', prev)
        for (const type in prev) {
          updatedCategory[type] = adjustToNearestChunk(Math.floor(prev[type]), getChunkSize({ type, isCentered }));
        }
        console.log('updatedCategory', updatedCategory);
        localStorage.setItem('maxCardsPerCategory', JSON.stringify(updatedCategory));
        setTheCategories(updatedCategory)
        return updatedCategory;
      });
    }
  }, [isCentered])

  
  return (
    <div className={`max-w-grid flex flex-col gap-4 items-center justify-between
    ${haveStatusData?'':(haveStatusData||isLoading?'':'-mt-8')}`}>
      {categories && Object.keys(categories).map((_, i)=>{
        return <div key={i} className="w-full flex items-center justify-center flex-col">

        {categories[_][0]?.type == 'products' && <Ad1 />}
        
        <CardComponent key={i} category={categories[_]} setIsBlogPopupOpen={setIsBlogPopupOpen} isLoading={isLoading} setVidDis={setVidDis}
        changeTab={changeTab} suggested={suggested} currentPage={currentPage} setCurrentPage={setCurrentPage} setCurrentBlog={setCurrentBlog}
        openStatus={openStatus} isAccordionExpanded={isAccordionExpanded} setIsAccordionExpanded={setIsAccordionExpanded} isViewList={isViewList}
        setIsViewList={setIsViewList} setCurrentProduct={setCurrentProduct} hasMore={hasMore} total={total}
        setCurrentVid={setCurrentVid} id={id} isCentered={isCentered} setCurrentIndex={setCurrentIndex}
        setMaxCardsPerCategory={setMaxCardsPerCategory} setIsProductPopupOpen={setIsProductPopupOpen} haveStatusData={haveStatusData} />
        
        {categories[_][0]?.type == 'videos' && <Ad2 />}
        </div>})
      }
    </div>
  );
}
