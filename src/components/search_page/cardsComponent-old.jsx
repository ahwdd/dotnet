import React from "react";
import { useState, useEffect } from "react";
import CardComponent from "./cardComponent";
import Ad1 from "./ad-sense/ad1";
import Ad2 from "./ad-sense/ad2";
import { getChunkSize } from "./functions";

export default function CardsComponent({cards=[], id='all', openStatus, setVidDis, setCurrentVid, setIsBlogPopupOpen, isLoading,
  setCurrentBlog, changeTab, hasMore, suggested, currentPage, setCurrentPage, setCurrentProduct, setIsProductPopupOpen,
  isViewList, setIsViewList, isAccordionExpanded, setIsAccordionExpanded  }) {
  const [categories, setCategories] = useState(null)
  const [maxCardsPerCategory, setMaxCardsPerCategory] = useState({
    news: 6,
    products: 6,
    videos: 6,
    blogs: 6,
    reviews: 6,
    how: 6,
  })

  const setTheCategories = (maxCards=maxCardsPerCategory) => {
    // console.log('maxCards', maxCards)
    if(id == 'all'){
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
    }else{
      setCategories([...cards])
    }
  }

  useEffect(()=>{
    if(currentPage==1){
      const theMaxCardsPerCategory = {
        news: getChunkSize({type: 'news'}),
        products: getChunkSize({type: 'products'}),
        videos: getChunkSize({type: 'videos'}),
        blogs: getChunkSize({type: 'blogs'}),
        reviews: getChunkSize({type: 'reviews'}),
        how: getChunkSize({type: 'how'}),
      }
      // console.log(currentPage, theMaxCardsPerCategory, window.innerWidth, getChunkSize('products'))
      localStorage.setItem('maxCardsPerCategory', JSON.stringify(theMaxCardsPerCategory))
      setMaxCardsPerCategory(theMaxCardsPerCategory)
      setTheCategories(theMaxCardsPerCategory)
    }else if(localStorage.getItem('maxCardsPerCategory') && JSON.parse(localStorage.getItem('maxCardsPerCategory'))){
      // console.log(localStorage.getItem('maxCardsPerCategory'))
      setMaxCardsPerCategory(JSON.parse(localStorage.getItem('maxCardsPerCategory')))
      setTheCategories(JSON.parse(localStorage.getItem('maxCardsPerCategory')))
    }else{
      console.log('not: ', currentPage)
    }
    
  }, [cards])
  // console.log('categories', cards, categories)
  
  return (
    <div className={`max-w-grid flex flex-col gap-8 items-center justify-between`}>
      {id=='all' 
      ?categories && Object.keys(categories).map((_, i)=>{
        return <div key={i} className="w-full flex items-center justify-center flex-col">
        {/* ad space */}
        {categories[_][0]?.type == 'products' && <Ad1 />}
        <CardComponent key={i} category={categories[_]} setIsBlogPopupOpen={setIsBlogPopupOpen} isLoading={isLoading} setVidDis={setVidDis}
        changeTab={changeTab} suggested={suggested} currentPage={currentPage} setCurrentPage={setCurrentPage} setCurrentBlog={setCurrentBlog}
        openStatus={openStatus} isAccordionExpanded={isAccordionExpanded} setIsAccordionExpanded={setIsAccordionExpanded} isViewList={isViewList}
        setIsViewList={setIsViewList} setCurrentProduct={setCurrentProduct} hasMore={hasMore} setCurrentVid={setCurrentVid} id={id}
        setMaxCardsPerCategory={setMaxCardsPerCategory} setIsProductPopupOpen={setIsProductPopupOpen} />
        
        {categories[_][0]?.type == 'videos' && <Ad2 />}
        </div>
      })
      :categories && <CardComponent category={categories} setIsBlogPopupOpen={setIsBlogPopupOpen} isLoading={isLoading} suggested={suggested}
      hasMore={hasMore} setCurrentBlog={setCurrentBlog} setCurrentProduct={setCurrentProduct} setIsViewList={setIsViewList}
      openStatus={openStatus} setVidDis={setVidDis} setCurrentVid={setCurrentVid} changeTab={changeTab} id={id} currentPage={currentPage}
      isAccordionExpanded={isAccordionExpanded} setIsAccordionExpanded={setIsAccordionExpanded} setCurrentPage={setCurrentPage}
      isViewList={isViewList} setMaxCardsPerCategory={setMaxCardsPerCategory} setIsProductPopupOpen={setIsProductPopupOpen} />}
    </div>
  );
}
