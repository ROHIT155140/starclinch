import React from 'react'
import CelebritiesCard from './CelebritiesCard'

export default function CelebritesComponents() {
    return (
        <div className='flex items-center w-full'>
            <div className='z-10 -mr-20'>
                <CelebritiesCard img="/images/singer.svg" />
            </div>
            <div className='z-50'>
                <CelebritiesCard img="/images/actor.svg" />
            </div>
            <div className='z-10 -ml-20'>
                <CelebritiesCard img="/images/liveBand.svg" />
            </div>

        </div>
    )
}
