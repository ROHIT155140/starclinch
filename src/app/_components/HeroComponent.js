import Image from "next/image";
import CelebritesComponents from "./CelebritesComponents";

export default function HeroComponent() {
    return (
        <div className=" relative bg-black text-white h-[90vh] overflow-hidden">
            <div className=" absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-2/3 text-center">
                <CelebritesComponents />
                <h1 className=" text-[32px] lg:text-[50px] xl:text-[80px]">Explore our <span className=" btn-color">top performing</span> categories</h1>
                <button className="rounded-full px-4 py-3 text-lg btn-gradiant mt-10">View our top performing categories</button>
            </div>
            <Image src='/images/herobg.svg' alt="hero bg" layout="fill" />
        </div>
    )
}
