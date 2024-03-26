"use client"

import BannerMain from "@/components/bannerMain";
import CarrouselVertical from "@/components/slideVerticalHome";


export default function Home() {



  return (
    <>
      <main className="bg-white h-full w-full">
          <BannerMain />
          <CarrouselVertical/>
      </main>
    </>
  );
}
