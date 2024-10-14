import React from 'react'

function SearchResultPreview({ searchValue, isScrolled }) {
  return (
    <>
    {/* <div className={`h-10 w-full mt-0 
  ${isScrolled?'fixed top-16 z-40':'relative '}`}>
    <p className="text-large text-ellipsis md:line-clamp-1 space-x-2">
      <span className="font-bold">نتائج البحث عن : </span>
      {searchValue?.trim() === '' && <span></span>}
      <span>{searchValue}</span>
    </p>
  </div> */}
    </>)
}

export default SearchResultPreview