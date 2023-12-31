"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button"

const WhatWeOffer = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto xl:h-fit">
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/truck.png" alt="hero" fill className="object-contain" />
        </div>

      </div>
      <div className="flex-1 pt-16 sm:px-16 px-6">
        <h2 className="2xl:text-[50px] sm:text-[40px] text-[32px] font-extrabold">
          WHAT WE OFFER
        </h2>

        <p className="text-[27px] text-black-100 font-light mt-5 mb-5">
        EFFECTIVE FLATBED TRANSPORTATION
        </p>

        <p className="text-lg leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
        </p>
        <p className="text-lg leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
        </p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
