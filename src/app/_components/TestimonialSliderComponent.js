'use client'
import Image from "next/image";
import { useState } from "react";


export default function TestimonialSliderComponent() {
    const [index, setIndex] = useState(0)
    const sliderData = [
        {
            img: '/images/nora.jpg',
            text: {
                name: 'Nora Fatehi  ',
                detail: 'for an event hosted by XYZ performed',
                address: 'at Pune .'
            }
        },
        {
            img: '/images/kapilShrma.png',
            text: {
                name: 'Nora Fatehi  ',
                detail: 'for an event hosted by XYZ performed',
                address: 'at Pune .'
            }
        },
        {
            img: '/images/cricket.png',
            text: {
                name: 'Nora Fatehi  ',
                detail: 'for an event hosted by XYZ performed',
                address: 'at Pune .'
            }
        }
    ]
    return (
        <div className="xl:max-w-[1150px] mx-auto py-32 text-white">
            <div className="  text-center">
                <h1 className=" text-[32px] lg:text-[50px] xl:text-[80px]">Recent shows made star-studded via StarClinch</h1>
            </div>
            {/* slider section start here */}
            <section className="mt-32 relative px-10">
                <div className="grid grid-cols-12 ga-4 mx-14">
                    <div className="col-span-12 md:col-span-8">
                        <div>
                            <Image src={sliderData[index]?.img} width={600} height={660} alt="testimonial" className="rounded-t-full" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex justify-center items-center">
                        <p className="text-white/60 text-[32px]">
                            <span className="text-white">{sliderData[index]?.text.name}</span >
                            {sliderData[index]?.text.detail}
                            <sapn className="text-white">{sliderData[index]?.text.address}</sapn> .</p>
                    </div>

                </div>

                <button onClick={() => setIndex(index - 1)} disabled={index == 0 ? true : false} className=" absolute left-0 top-1/2 -translate-y-1/2">
                    <Image src="/images/prev.svg" width={50} height={50} alt="testimonial" />
                </button>
                <button onClick={() => setIndex(index + 1)} disabled={sliderData.length - 1 == index ? true : false} className=" absolute right-0 top-1/2 -translate-y-1/2">
                    <Image src="/images/next.svg" width={50} height={50} alt="testimonial" />
                </button>

            </section>
        </div>
    )
}
