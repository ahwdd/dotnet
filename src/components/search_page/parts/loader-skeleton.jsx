import React from 'react'
import { Skeleton } from '@nextui-org/react'
import AnimatedLoader from '@/components/ui/icons/animated-loader'

function LoaderSkeletons({ isViewList }) {
  return (<div className="flex flex-wrap w-full gap-4 relative">
    <div className="absolute w-full h-64 top-1/2 -translate-y-1/2 bg-center z-10">
      <AnimatedLoader />
    </div>
    {Array(12).fill(0).map((_, i) => (
      <Skeleton key={i} className={`rounded ${isViewList ? 'w-full' : 'w-full lg:w-[calc(33.33%-1rem)] sm:w-[calc(50%-1rem)]'}`}>
        <div className={`${isViewList ? 'h-24' : 'h-44'} rounded bg-default-300`}></div>
      </Skeleton>
    ))}
  </div>)
}

export default LoaderSkeletons