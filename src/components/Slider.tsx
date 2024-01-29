"use client";
import React, { useState } from "react";
import Image from "next/image";

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

  return (
    <div className="slider-container w-full">
      <figure className="relative aspect-[16/7] w-full">
        <Image
          src={img[currentImgIndex].img.url}
          fill
          alt={`${currentImgIndex + 1}`}
          className="absolute object-cover"
        />
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white md:right-20">
          <button onClick={prevImg}>&lt;</button>
          <div className="h-2 w-2 animate-bounce rounded-full bg-white"></div>
          <button onClick={nextImg}>&gt;</button>
        </div>
      </figure>
    </div>
  );
};
