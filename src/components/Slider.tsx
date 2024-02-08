"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DynamicClock } from "@/components";

interface ISlider {
  img?: any;
}

export const Slider: React.FC<ISlider> = ({ img }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  return (
    <div className="slider-container w-full">
      <figure className="relative aspect-[16/7] w-full">
        <Image
          src={img[currentImgIndex].img.url}
          fill
          alt={`${currentImgIndex + 1}`}
          className="absolute object-cover"
        />
        <div className="absolute bottom-4 left-4 md:left-16  z-20 text-white flex items-center gap-2 font-inconsolata">
          <span className="flex items-center">0{currentImgIndex + 1}</span>
          <span className="h-[1px] w-6 bg-white inline-block" />
          <button onClick={nextImg} className="hover:opacity-50">
            {currentImgIndex === 0 ? "Next" : "Prev"}
          </button>
        </div>
      </figure>
    </div>
  );
};
