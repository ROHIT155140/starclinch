import Image from 'next/image'
import React from 'react'

export default function MaagiPartyCard() {
    return (
        <div className=' [&_img]:scale-100 [&_img]:opacity-[0.4] [&_img]:hover:opacity-[1]  [&_img]:hover:scale-110 [&_img]:hover:-rotate-[14deg] transition-all ease-in-out duration-700 flex justify-center items-center gap-8   max-w-[750px]  max-h-[460px] my-10'>
            <h2 className='text-[40px] text-right text-white'>Late Night Maggie Party for the boost</h2>
            <div className=''>
                <Image src="/images/newMaagi.png" width={400} height={400} className='transition-all ease-in-out duration-700 rounded-2xl ' />
            </div>

        </div>
    )
}
