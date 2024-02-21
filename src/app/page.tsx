"use client"

import BannerMain from "@/components/bannerMain";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="bg-white h-full w-full">
          <BannerMain />
      </main>
    </>
  );
}
