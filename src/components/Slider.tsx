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

  const prevImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + img.length) % img.length);
  };

  const isLast = currentImgIndex !== 0;

  return (
    <div className="slider-container w-full">
      <figure className="relative aspect-[16/7] w-full">
        <Image
          src={img[currentImgIndex].img.url}
          fill
          alt={`${currentImgIndex + 1}`}
          className="absolute object-cover"
        />
        <div
          className={`absolute bottom-4 right-4 z-20 text-white flex items-center gap-2 rounded md:right-20 font-inconsolata`}
        >
          <button className="h-2 ml-2 w-auto flex items-center" onClick={nextImg}>
            0{currentImgIndex + 1}
            <span className="h-[1px] w-6 ml-2 bg-white inline-block" />
          </button>
          <button onClick={nextImg} className="hover:opacity-50">
            {currentImgIndex === 0 ? "Next" : "Prev"}
          </button>
        </div>
      </figure>
    </div>
  );
};
