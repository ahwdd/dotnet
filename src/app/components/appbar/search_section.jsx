"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import { Search, X } from 'lucide-react'
import { en, ar } from '@/public/strings_manager'
import { ChevronDown } from 'lucide-react'
import SearchDropdown from './dropdown_lists/search_dropdown'

function SearchSection({isExpanded, setIsExpanded, typeValue, setTypeValue, searchValue, setSearchValue, searchCachValue='', setSearchCachValue}) {

  console.log(searchCachValue)
  const handleSearchBtnClick = (e) => {
    e.preventDefault()
    if(searchCachValue?.length > 1){
      setSearchValue(searchCachValue)
      // location.href = `/search?for=${typeValue}&s=${searchCachValue}`
    }
  }

  useEffect(()=>{
    if(searchValue && searchCachValue!==searchValue)
    setSearchCachValue(searchValue)
  }, [searchValue])
  
  return (
    <form onSubmit={handleSearchBtnClick}
    className="flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200  relative">
      <button type='submit' onClick={()=>handleSearchBtnClick}
      className=" size-10 flex items-center justify-center">
        <Search strokeWidth={1} className='p-1' />
      </button>
      <div className=" flex items-center justify-between max-lg:w-[55vw]">
        <input id='search_value' name='search_value'
        className="border-0 outline-0 pr-0 pb-1 ml-4 max-lg:w-1/2 bg-transparent text-sm max-lg:text-xxs placeholder:text-zinc-700 focus:border-0 focus-within:border-0 focus-visible:border-0 dark:text-white dark:placeholder:text-white placeholder:font-light" 
        type="text" value={searchCachValue==null? searchValue: searchCachValue} onChange={(e)=>setSearchCachValue(e.target.value)}
        placeholder={ar.navbar.searchPlaceholder}/>
        <button type='button' disabled={searchCachValue==''} onClick={()=>setSearchCachValue('')}
          className=' disabled:opacity-0 text-white bg-black/70 rounded-full dark:text-black dark:bg-white/70 ml-2'>
          <X strokeWidth={1} className='p-0.5 size-4' />
        </button>
        <div id='search_dropdown_btn' className="bg-black/20 dark:bg-white text-prime h-10 px-2 flex items-center justify-center cursor-pointer"
        onClick={()=>setIsExpanded(prev=>!prev)}>
          <div className="text-xs max-lg:text-xxs flex items-center justify-center gap-1">
            <ChevronDown className='size-8' />
            {/* <span className='pb-1 w-12 text-center min-w-fit lg:block hidden'>
              {typeValue? typeValue:'الجميع'}
            </span>
            <span className='pb-1 w-12 text-center min-w-fit lg:hidden'>
              {typeValue? typeValue:'الجميع'}
            </span> */}
          </div>
        </div>
      </div>

      <SearchDropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setTypeValue} />
    </form>
  )
}

export default SearchSection