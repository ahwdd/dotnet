import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import ProductsCard from './cards/products-card';
import VideosCard from './cards/videos-card';
import ReviewsCard from './cards/reviews-card';

function SingleCard({
    type='blogs', index=0, title='', subTitle='', imgUrl, setCurrentBlog, setIsBlogPopupOpen, isOffer=false, isCentered,
    url, youtubeId, price=0, inStock=true, openStatus, setVidDis, moreVideos, comments, desc='', setIsProductPopupOpen,
    setCurrentVid, author, likes, views, publishAt, isViewList, setCurrentProduct, model, brandId, quantity, isCardLoading
  }) {
  return (
    <>
    {/* news */}
    {/*  isViewList={isViewList['blogs']} with the id of each card, if needed again */}
    {type=='news'  &&  <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} 
    url={url} isViewList={isViewList} setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog}
    author={author} likes={likes} views={views} publishAt={publishAt} isCardLoading={isCardLoading} isCentered={isCentered} />}
    {/* products */}
    {type=='products' && <ProductsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} isCardLoading={isCardLoading}
    price={price} inStock={inStock} url={url} isViewList={isViewList} model={model} brandId={brandId} desc={desc} isOffer={isOffer}
    setCurrentProduct={setCurrentProduct} setIsProductPopupOpen={setIsProductPopupOpen} quantity={quantity} isCentered={isCentered} />}
    {/* videos */}
    {type=='videos' && <VideosCard moreVideos={moreVideos} comments={comments} isViewList={isViewList}
    index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} openStatus={openStatus}
     youtubeId={youtubeId} setVidDis={setVidDis} setCurrentVid={setCurrentVid} isCardLoading={isCardLoading} isCentered={isCentered} />}
     {/* blogs */}
     {type=='blogs' &&  <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} 
     url={url} isViewList={isViewList} setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog} 
     author={author} likes={likes} views={views} publishAt={publishAt} isCardLoading={isCardLoading} isCentered={isCentered} />}
    {/* reviews */}
    {type=='reviews' &&  <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} 
    url={url} isViewList={isViewList} setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog}
     author={author} likes={likes} views={views} publishAt={publishAt} isCardLoading={isCardLoading} isCentered={isCentered} />}
     {/* how */}
     {type=='how' &&  <ReviewsCard index={index} title={title} subTitle={subTitle} imgUrl={imgUrl} desc={desc} 
     url={url} isViewList={isViewList} setIsBlogPopupOpen={setIsBlogPopupOpen} setCurrentBlog={setCurrentBlog}
     author={author} likes={likes} views={views} publishAt={publishAt} isCardLoading={isCardLoading} isCentered={isCentered} />}
    </>
  )
}

export default SingleCard