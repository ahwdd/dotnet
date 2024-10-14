
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SearchParamsComponent({setSearchTypeDropdownValue, setInitialSearchValue,
  setSearchValue, setCurrentPage, setPerPage, perPage=6}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()

    useEffect(()=>{
      setIsMounted(true)
      if(isMounted){
        // fetch data
      }

      let forWhat = searchParams.get('for') ?? ''
      let search = searchParams.get('s') ?? ''
      let itemsPerPage = searchParams.get('i') ?? perPage
      let pageNumber = searchParams.get('p') ?? 1
      // if(!searchParams.get('s')) location.href = '/'
      setSearchTypeDropdownValue(forWhat)
      setSearchValue(search??'')
      setInitialSearchValue(search??'')
      setPerPage(itemsPerPage)
      setCurrentPage(pageNumber)
    }, [])
  
  // OCSESSID
    return (
      <>
      </>
    )
  }