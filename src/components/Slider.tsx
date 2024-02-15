"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ISlider {
  img?: any;
}

export const Slider: React.FC<ISlider> = ({ img }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  return (
    <div className="slider-container w-full px-4 md:px-14">
      <figure className="relative aspect-[16/7] w-full">
        {img && (
          <Image
            src={img[currentImgIndex].img.url}
            fill
            alt={`${currentImgIndex + 1}`}
            className="absolute rounded object-cover"
            priority={true}
          />
        )}

        <div className="absolute bottom-4 left-4 z-20  flex items-center gap-2 font-inconsolata text-white md:left-8">
          <span className="flex items-center">0{currentImgIndex + 1}</span>
          <span className="inline-block h-[1px] w-6 bg-white" />
          <button onClick={nextImg} className="hover:opacity-50">
            {currentImgIndex === 0 ? "Next" : "Prev"}
          </button>
        </div>
      </figure>
    </div>
  );
};
