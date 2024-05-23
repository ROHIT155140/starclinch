import Image from "next/image";
import HeroComponent from "./_components/HeroComponent";
import CelebritiesTabGallery from "./_components/CelebritiesTabGallery";
import MaagiPartyComponent from "./_components/MaagiPartyComponent";
import TestimonialSliderComponent from "./_components/TestimonialSliderComponent";
import TalentedFolkComponent from "./_components/TalentedFolkComponent";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <CelebritiesTabGallery />
      <MaagiPartyComponent />
      <TestimonialSliderComponent />
      <TalentedFolkComponent />

    </div>
  );
}

