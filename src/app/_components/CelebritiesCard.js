import Image from 'next/image'
import React from 'react'

export default function CelebritiesCard({ img }) {
    return (
        <div className='rounded-md'>
            <Image src={img} width={320} height={450} alt="celebrities" />
        </div>
    )
}
