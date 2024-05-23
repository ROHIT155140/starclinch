'use client'
import React, { Fragment, useState } from 'react'
import SimpleImageCard from './card/SimpleImageCard'

export default function CelebritiesTabGallery() {
    const [activeTab, setActive] = useState('photo')
    const celebritesData = [
        {
            img: "/images/catreena.jpg",
            style: "threeCorner"
        },
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
        {
            img: "/images/catreena.jpg",
            style: "threeCorner"
        },
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
        {
            img: "/images/comaidianHero.jpg",
            style: "simple"
        },
        {
            img: "/images/zakirKhan.jpg",
            style: "simple"
        },
        {
            img: "/images/comaidianHero.jpg",
            style: "simple"
        },
        {
            img: "/images/zakirKhan.jpg",
            style: "simple"
        },

    ]

    const arjeet = [
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
        {
            img: "/images/arjeet.jpg",
            style: "simple"
        },
    ]
    return (
        <Fragment>

            <div className='galleryGradiantBg rounded-t-full mt-5 border-t border-l border-r border-white/10 pb-5'>
                <div className='flex justify-center items-center gap-4 py-32'>
                    <button className={`px-5 py-2 text-lg ${activeTab == 'photo' ? 'bg-white text-black' : 'bg-white/60 text-white'} rounded-full`}>Photos</button>
                    <button onClick={() => { setActive('photo') }}
                        className={`px-5 py-2 text-lg ${activeTab == 'image' ? 'bg-white text-black' : 'bg-white/60 text-white'}  rounded-full`}>Image</button>
                </div>
                {activeTab == 'photo' && <div className='grid grid-cols-12 gap-4 xl:max-w-[1150px] mx-auto '>
                    {
                        celebritesData?.map((celebrity, id) => {
                            return (<div key={id} className='col-span-12 md:col-span-6 lg:col-span-3'>
                                <div onClick={() => { setActive('image') }} className=' cursor-pointer'>
                                    <SimpleImageCard data={celebrity} />
                                </div>
                            </div>)
                        })
                    }
                </div>}
                {activeTab == 'image' && <div className='grid grid-cols-12 gap-4 xl:max-w-[1150px] mx-auto '>
                    {
                        arjeet?.map((celebrity, id) => {
                            return (<div key={id} className='col-span-12 md:col-span-6 lg:col-span-3'>
                                <SimpleImageCard data={celebrity} />
                            </div>)
                        })
                    }
                </div>}
            </div>

        </Fragment>
    )
}
