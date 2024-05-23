import React from 'react'
import MaagiPartyCard from './card/MaagiPartyCard'
import Image from 'next/image'

export default function MaagiPartyComponent() {
    return (
        <div className='xl:max-w-[1150px] mx-auto py-32'>
            <div className=' flex justify-start items-center py-6 w-full'>
                <MaagiPartyCard />
            </div>
            <div className=' flex justify-end items-center py-6 w-full'>
                <MaagiPartyCard />
            </div>
            <div className=' flex justify-start items-center py-6 w-full'>
                <MaagiPartyCard />
            </div>
            <div className=' flex justify-end items-center py-6 w-full'>
                <MaagiPartyCard />
            </div>
            <Image src='/images/snake.svg' alt="snake bg" layout="fill" />
        </div>
    )
}
