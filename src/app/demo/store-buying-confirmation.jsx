import React from 'react'
import CheckImg from './check.svg'
import Image from 'next/image'

function StoreBuyingConfirmation() {
  return (
    <div className='w-full min-h-dvh flex items-center justify-center bg-neutral-400 text-black shadow-xl'>
        <div className="size-18 max-w-sm flex flex-col items-center justify-center gap-4 bg-white/50 rounded-sm p-2">
            <Image src={CheckImg} alt='check' className='!relative' />

            <h2 className="font-bold text-large">
                Your order has been created
            </h2>

            <p className="text-medium text-center text-gray-600">
                We will let you know if it meets our shipment standard in the next 24 hours or less.
                You can also get updates in Order Center.
            </p>

            <div className="w-full shadow-xl text-small bg-white/50 py-2 rounded-lg">
                <div className="w-full flex items-center justify-between px-2 py-4">
                    <p className=''>Status</p>
                    <p className='text-green-700'>In reviews</p>
                </div>
                <div className="h-0.5 w-4/5 bg-black/50 mx-auto" />
                <div className="w-full flex items-center justify-between px-2 py-4">
                    <p className=''>Goal</p>
                    <p className=''>Get more messages</p>
                </div>
                <div className="h-0.5 w-4/5 bg-black/50 mx-auto" />
                <div className="w-full flex items-center justify-between px-2 py-4 text-medium">
                    <p className=''>Total budget</p>
                    <p className=''>$8.00 USD</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreBuyingConfirmation