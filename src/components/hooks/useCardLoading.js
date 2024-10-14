import { useState, useCallback } from "react";

export const useCardLoading = () => {
    const [isCardLoading, setIsCardLoading] = useState({
      blogs: true, products: true, videos: true, news: true, reviews: true, how: true
    });
  
    const chageIsCardLoading = useCallback(({ loadingId = 'news', isLoading=false }) => {
      setIsCardLoading(prev => ({ ...prev, [loadingId]: true }));
  
      if(!isLoading)
        setTimeout(() => {
          setIsCardLoading({
            blogs: false, products: false, videos: false, news: false, reviews: false, how: false
          });
        }, 200);
    }, []);
  
    return [isCardLoading, chageIsCardLoading];
};