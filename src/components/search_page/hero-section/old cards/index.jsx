"use client"
import { useState, useEffect } from 'react';
import NewsCard from './news-card';
import BlogsCard from './blogs-card';
import ReviewsCard from './reviews-card';
import HowCard from './how-card';

const newsCards=[
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/9/367/267'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/41/1280/805'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/43/1280/805'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/45/1280/805'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/49/1280/792'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/54/3264/2176'
    },
]
const blogsCards=[
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/9/367/267'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/9/367/267'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/10/2500/1667'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/10/2500/1667'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/23/3887/4899'
    },
    {
        title: 'الذكاء الاصطناعي يحمل شعلة الأولمبياد', 
        desc: 'الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، الذي بدأ في إحداث...', 
        likes: '128', 
        views: '256', 
        author: 'مصطفى يسري', 
        date: '26 مارس. 2024',
        img: 'https://picsum.photos/id/23/3887/4899'
    },
]
const howCards = [
    {
        title:"طريقة اعادة ضبط المصنع للآيفون", 
        desc: 'تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون', 
        img: 'https://picsum.photos/id/41/1280/805'
    },
    {
        title:"طريقة اعادة ضبط المصنع للآيفون", 
        desc: 'تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون', 
        img: 'https://picsum.photos/id/43/1280/831'
    },
    {
        title:"طريقة اعادة ضبط المصنع للآيفون", 
        desc: 'تعلم اسهل طريقة لإعادة ضبط المصنع لجهازك الآيفون', 
        img: 'https://picsum.photos/id/45/1280/831'
    },
]
function SearchHeroSection({cards=[], id='blogs', changeTab}) {
    const [categories, setCategories] = useState(null)
  
    useEffect(()=>{
      if(id == 'all'){
        const maxCardsPerCategory = {
          blogs: 6,
          products: 0,
          videos: 0,
          news: 5,
          reviews: 1,
          how: 3,
        };
        const categories = Object.keys(maxCardsPerCategory); // categories array
        const categorizedCards = categories.reduce((cat, i) => { 
          cat[i] = []; return cat; 
        }, {}); // object with catigories & an initial value of []
        
        cards.forEach(card => {
          if (categorizedCards[card.type] && categorizedCards[card.type].length < maxCardsPerCategory[card.type]) {
            categorizedCards[card.type].push(card);
          }
        });
        setCategories(categorizedCards);
      }else{
        setCategories([...cards])
      }
    }, [])

    // console.log('categories?.blogs', cards)

  return (
    <section className='mb-4'>
        <div className="col-span-4 grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="w-full h-full space-y-4">
                <NewsCard cards={categories?.news} changeTab={changeTab} />
                <BlogsCard cards={categories?.blogs} changeTab={changeTab} />
            </div>
            <div className="w-full h-full space-y-4">
                <ReviewsCard cards={categories?.reviews} changeTab={changeTab} />
                <HowCard cards={categories?.how} changeTab={changeTab} />
            </div>
        </div>
    </section>
  )
}

export default SearchHeroSection