import axios from "axios";
import useSWR from 'swr';
import NoResultFoundImg from '@/public/images/random/no-results/no-result-found.png'
import { defaultData } from "./default-data";

// process the search data
export function getYouTubeVideoInfo(url, isShort=false) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        const videoId = match[2];
        const isShorts = url.includes("/shorts/");
        const contentType = (isShorts||isShort) ? "shorts" : "full";

        if(isShort) return { videoId, contentType, url: `https://www.youtube.com/shorts/${videoId}` }
        return { videoId, contentType };
    } else if (url.includes("/shorts/")) {
        // Extract video ID from YouTube Shorts URL
        const videoId = url.split("/shorts/")[1];
        return { videoId, contentType: "shorts" };
    } else {
        console.log('The supplied URL is not a valid YouTube URL:', url);
        return { videoId: 'l_1sVxt6ric', contentType: "full" };
    }
}

const processStore = (cards, page=1) => {
  let processed = []
  if(cards.length>0||page!==1){
    processed = cards?.map((card, index)=>{
      return{
        type: 'products', 
        model: card?.model,
        brandId: card?.brand_id,
        title: card?.name,
        desc: card?.description,
        quantity: card?.quantity,
        price: card?.price,
        inStock: card?.quantity>0,
        imgUrl: card?.image,
        url: `https://ahw.store/${card?.url}`
      }
    })|| []
  }else{
    processed = [{
      type: 'products', 
      model: null,
      brandId: null,
      title: 'لا يوجد نتائج',
      desc: "للأسف لم نستطع ايجاد نتيجة لبحثك",
      quantity: null,
      price: null,
      inStock: null,
      imgUrl: NoResultFoundImg.src,
      url: '#no-result'
    }]
  }
    // console.log('store: ', processed)
    return processed
}

const processTypes = (cards, type='blogs', page=1) => {
  let processed = []
  if(cards.length>0||page!==1){
    processed = cards?.map((card, index)=>{ // keeping the same sturcutre and number of elements
      return{
        type, 
        ty: card?.type,
        title: card?.title,
        desc: card?.excerpt,
        imgUrl: card?.thumbnail,
        publishAt: card?.published_at,
        author: card?.author,
        views: card?.views,
        likes: card?.likes,
        url: card?.slug
      }
    }).sort((a, b) => new Date(b.publishAt) - new Date(a.publishAt)) || []
  }else{
    processed = [{
      type, 
      ty: type,
      title: 'لا يوجد نتائج',
      desc: "للأسف لم نستطع ايجاد نتيجة لبحثك",
      imgUrl: NoResultFoundImg.src,
      publishAt: '',
      author: null,
      views: null,
      likes: null,
      url: '#no-result'
    }]
  }
    return processed
}

const processvideos = (cards, isShort) => {
  // console.log('video cards', cards)
  const processed = cards?.map((card, index)=>{ // keeping the same sturcutre and number of elements
    const videoInfo = getYouTubeVideoInfo(card?.url, isShort)
    return{
      type: 'videos', 
      ty: videoInfo.contentType,
      title: card?.title,
      youtubeId: videoInfo.videoId,
      imgUrl: `https://img.youtube.com/vi/${videoInfo.videoId}/hqdefault.jpg`,
      url: videoInfo.url
    }
  })|| []
  // console.log('videos: ', processed)
  return processed
}

const processData = ({results, page=1, searchData, newSearchData}) => {
  const newRes = [...searchData];
  // console.log('results', results)
  if(!newSearchData){
    // console.log('page, !newSearchData', page==1 && !newSearchData)
    newRes[1].cards = processTypes(results.news?.data, 'news', page)
    newRes[2].cards = processStore(results.store?.data, page)
    newRes[3].cards = processvideos(results.videos?.data)
    newRes[4].cards = processTypes(results.articles?.data, 'blogs', page)
    newRes[5].cards = processTypes(results.reviews?.data, 'reviews', page)
    newRes[6].cards = processTypes(results.how?.data, 'how', page)
  }else{
    // console.log('else')
    newRes[1].cards = newSearchData[1].cards.concat(processTypes(results.news?.data, 'news', page))
    newRes[2].cards = newSearchData[2].cards.concat(processStore(results.store?.data, page))
    newRes[3].cards = newSearchData[3].cards.concat(processvideos(results.videos?.data))
    newRes[4].cards = newSearchData[4].cards.concat(processTypes(results.articles?.data, 'blogs', page))
    newRes[5].cards = newSearchData[5].cards.concat(processTypes(results.reviews?.data, 'reviews', page))
    newRes[6].cards = newSearchData[6].cards.concat(processTypes(results.how?.data, 'how', page))
  }
     //news products videos blogs reviews how
  if(page==1 || !localStorage.getItem('maxCardsPerCategory')){
    newRes[0].cards = newRes[1].cards.concat(newRes[2].cards, newRes[3].cards, newRes[4].cards, newRes[5].cards, newRes[6].cards)
  }else{
    newRes[0].cards = newRes[1].cards.concat(newRes[2].cards, newRes[3].cards, newRes[4].cards, newRes[5].cards, newRes[6].cards)
  }
// console.log('newRes', newRes[0].cards)
    return newRes
}

export const getfetchedData = async ({ searchValue, perPage, currentPage, setFechedData, setNewSearchData, setShortsTotal,
    setTotalPages, setHasMore, setSuggested, setIsLoading, toast, searchData, newSearchData, setStatusData, setTotalAvailable }) => {
    console.log('fetchingData...')
    let results = defaultData;
    try {
      const res = await axios.post('/api/search', { s: searchValue ?? '', for: '', i: perPage, p: currentPage });
      results = res.data;
      console.log('results', results);
      setFechedData(results);

    } catch (e) {
      console.error(e.message);
      toast.error(e.message);
      // ///////////////////////dev only
      // setFechedData([]);
      // setNewSearchData(searchData)
      // setHasMore(false)
      // setSuggested({
      //   "blogs": true, "reviews": true, "products": true,  "videos": true, "how": true, "news": true 
      // })
    } finally {
      const newSearchRes = processData({ results, page: currentPage, searchData, newSearchData });
      // console.log('newSearchRes', newSearchRes)
      const processedShorts = processvideos(results?.shorts?.data || [], true)
      setShortsTotal(results?.shorts?.total==12&&results?.shorts?.suggested_results==true? 0: results?.shorts?.total)
      setStatusData(processedShorts);
      setNewSearchData(newSearchRes);
      findMaxTotal({ results, perPage, setTotalPages });
      setTotalAvailable({
        "blogs": results.articles.total,
        "reviews": results.reviews.total,
        "products": results.store.total, 
        "videos": results.videos.total,
        "how": results.how.total,
        "news": results.news.total 
      });
      setHasMore((prev)=>{
        const checkHasMore = (value) => {// 0 = has more
          return value ? 0 : currentPage
        }
        if(!prev)
          return {
            'news': checkHasMore(results.news.has_more),
            'products': checkHasMore(results.store.has_more),
            'videos': checkHasMore(results.videos.has_more),
            'blogs': checkHasMore(results.articles.has_more), 
            'reviews': checkHasMore(results.reviews.has_more),
            'how': checkHasMore(results.how.has_more) 
          }
        else
          return {
            news: prev.news > 0 ? prev.news : checkHasMore(results.news.has_more),
            products: prev.products > 0 ? prev.products : checkHasMore(results.store.has_more),
            videos: prev.videos > 0 ? prev.videos : checkHasMore(results.videos.has_more),
            blogs: prev.blogs > 0 ? prev.blogs : checkHasMore(results.articles.has_more),
            reviews: prev.reviews > 0 ? prev.reviews : checkHasMore(results.reviews.has_more),
            how: prev.how > 0 ? prev.how : checkHasMore(results.how.has_more),
          }
      });
      setSuggested({
        "blogs": results.articles.suggested_results?currentPage:0,
        "reviews": results.reviews.suggested_results?currentPage:0,
        "products": results.store.suggested_results?currentPage:0, 
        "videos": results.videos.suggested_results?currentPage:0,
        "how": results.how.suggested_results?currentPage:0,
        "news": results.news.suggested_results?currentPage:0 
      });
      setIsLoading(false);
    }
};

// find total pages
export const findMaxTotal = ({results, perPage, setTotalPages}) => {
    const maxTotal = Math.max(
      results.articles.total,
      results.reviews.total,
      results.store.total,
      results.videos.total
    );
    // console.log('maxTotal', maxTotal, Math.ceil(maxTotal/perPage))
    setTotalPages(Math.ceil(maxTotal/perPage))
}

// get exchange-rates
export const getRates = async ({c='EGP', setRates, toast}) => {
    await axios.post(`/api/exchange-rates`, {c}
    ).then(res=>{
      setRates(res.data)
    }).catch(e=>{
      console.error(e)
      toast.error(e.message)
      setRates(null)
    })
}

// get temperature
export const getTempData = async ({ latitude, longitude, setWeather, toast }) => {
    try {
      const res = await axios.post('/api/weather', { lat: latitude, long: longitude });
      setWeather(res.data);
    } catch (e) {
      console.error(e);
      toast.error(e.message);
      setWeather({ current: { temp: 0, wind_speed: 0 } });
    }
};

// check the user location and fetch the weather accordingly
export const checkLocation = ({ setLocation, location, setWeather, toast }) => {
    if (location && location.latitude && location.longitude) {
      console.log('location ', location);
      getTempData({ latitude: location.latitude, longitude: location.longitude, setWeather, toast });
    } else {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // console.log('latitude', latitude);
            // console.log('longitude', longitude);
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error(error.message);
            toast.error(error.message);
            // console.log('error + get default temperature')
            getTempData({ latitude: "", longitude: "", setWeather, toast });
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        toast.error('Geolocation is not supported by this browser.');
        getTempData({ latitude: "", longitude: "", setWeather, toast });
      }
    }
};

// get the shorts
export const getNewestShorts = async ({ setStatusData, toast }) => {
    try {
      const res = await axios.post('/api/shorts');
      const results = res.data;
      const processedData = processvideos(results.data, true)
      setStatusData(processedData);
    } catch (e) {
      console.error(e);
      toast.error(e.message);
      setStatusData([]);
    }
};

// daily news/ editors choice
export const getDailyNews = async ({ setDailyNews, toast }) => {
    try {
      const res = await axios.post('/api/editors-choice');
      const results = res.data;
      setDailyNews(results);
    } catch (e) {
      console.error(e);
      toast.error(e.message);
      setDailyNews([]);
    }
};

// get the latest news
export const getTrendingData = async ({ setTrendingData, toast }) => {
    try {
      const res = await axios.post('/api/trends');
      const results = res.data;
      setTrendingData(results);
    } catch (e) {
      console.error(e);
      toast.error(e.message);
      setTrendingData([]);
    }
};