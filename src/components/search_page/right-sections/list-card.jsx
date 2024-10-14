import React from 'react'
import { Loader2Icon } from 'lucide-react'
import { Card, Skeleton } from '@nextui-org/react'

function ListCard({title='', subjects=[], maxWidth, sameOnDark=false}) {
  
  return (<>
    {(Array.isArray(subjects) && subjects.length > 0)
      ?<div className={`${sameOnDark?'backdrop-blur-lg bg-black/30 dark:bgblack/20':'bg-white/35 hover:bg-white/90 dark:bg-black/15 dark:hover:bg-black/90'} 
      shadow-medium transition w-full rounded p-2 space-y-2`}
      style={maxWidth?{maxWidth}:{}}>
          <h4 className={`${sameOnDark?'text-primaryLight':'text-darkGray dark:text-primaryLight '} 
          drop-shadow-xl dark:drop-shadow-none font-bold flex gap-4 items-center mr-2`}>
            <span className={`rounded ${sameOnDark?'bg-primaryLight':'bg-prime'} text-transparent select-none`}>cc</span>
            <span>{title}</span>
          </h4>
          <ol className="grid grid-cols-2 gap-y-1 gap-x-2 w-fit mr-2 text-tiny">
            {subjects.map((_, i)=>{
              return <li key={i}>
                <a href={_?.slug || _?.url} target="_blank" rel="noopener noreferrer" 
                className="flex gap-1 cursor-pointer">
                  <span className={`${sameOnDark?'text-primaryLight':'text-darkGray dark:text-primaryLight '} 
                  drop-shadow-xl dark:drop-shadow-none`}>
                    {`${i+1}. `}
                  </span>
                  <span className="line-clamp-2 ">
                    {_?.name || _?.title}
                  </span>
                </a>
              </li>
            })}
          </ol>
      </div>
      :<Card className="shadow-medium transition w-full rounded p-2 space-y-2">
          <h4 className="drop-shadow-xl dark:drop-shadow-none font-bold flex gap-4 items-center mr-2">
            <Skeleton className="rounded w-8 h-8" />
            <Skeleton className="w-1/2 h-6" />
          </h4>
          <ol className="grid grid-cols-2 gap-y-1 gap-x-2 w-fit mr-2 text-tiny">
            {[...Array(4)].map((_, i) => (
              <li key={i}>
                <div className="flex gap-1 cursor-pointer">
                  <Skeleton className="w-4 h-4" />
                  <Skeleton className="w-full h-4" />
                </div>
              </li>
            ))}
          </ol>
        </Card>
    }
  </>)
}

export default ListCard