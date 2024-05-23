import Image from 'next/image'
import React from 'react'

export default function TalentedFolkComponent() {
    return (
        <div style={{ backgroundImage: 'url(/images/talentedbg.svg)', backgroundSize: 'auto' }}
            className='py-32 '
        >
            <div className='relative xl:max-w-[1150px] pb-20 mx-auto text-center text-white talentFalkBorderGradiant rounded-full py-5 talentedFolkBg'>
                <div className='relative'>
                    <h1 className=" text-[32px] lg:text-[50px] xl:text-[80px] py-12">20+Talented Folks</h1>
                    <button className=" absolute top-[120px] left-[170px] rounded-full px-7 py-2 text-sm font-bold -rotate-[20deg] bg-transparent border border-white">Fun</button>
                    <button className=" absolute top-[40px] right-[190px] rotate-[20deg] rounded-full px-7 py-3 text-lg bg-transparent border border-white">Inclusive</button>
                </div>
                <p className='max-w-[40%] text-lg mx-auto'>From passion-driven dedication to impactful contribution, we do it all here. We are growing and will be excited to hear from you !</p>
                <button className="rounded-full px-7 py-4 text-lg btn-gradiant my-8">Join Our Team</button>
                <div className='text-[#E598CB] flex justify-center items-start space-x-2 absolute top-16 left-36 -rotate-[30deg]'>
                    <p>we are the team of</p>
                    <Image src="/images/uIcon.svg" width={35} height={36} alt="" />
                </div>

                <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center space-x-2 justify-center   '>
                    <button className="  rotate-[15deg] rounded-full px-7 py-3 text-lg bg-transparent opacity-[0.5] scale-[0.8] border border-white">focused</button>
                    <button className="  -rotate-[15deg] rounded-full px-7 py-3 text-lg bg-transparent opacity-[0.5] scale-[0.8] border border-white">Collaborative</button>
                    <button className="  rotate-[15deg] rounded-full px-7 py-3 text-lg bg-transparent opacity-[0.5] scale-[0.8] border border-white">United</button>
                    <button className="  -rotate-[15deg] rounded-full px-7 py-3 text-lg bg-transparent opacity-[0.5] scale-[0.8] border border-white">Vibrant</button>
                    <button className="  rotate-[15deg] rounded-full px-7 py-3 text-lg bg-transparent opacity-[0.5] scale-[0.8] border border-white">Dynamic</button>
                    <button className="  -rotate-[15deg] rounded-full px-7 py-3 text-lg bg-transparent opacity-[0.5] scale-[0.8] border border-white">Motivated</button>
                </div>

            </div>

        </div>
    )
}
