"use client";
import React, { useState, useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { KeyTextField } from "@prismicio/client";

interface IBanner {
  content?: KeyTextField;
  img?: any;
  imgs?: any;
}

export const Banner: React.FC<IBanner> = ({ content, img, imgs }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  };

  useEffect(() => {
    const delay = 1000;
    const timeoutId = setTimeout(nextImg, delay);

    return () => clearTimeout(timeoutId);
  }, [currentImgIndex]);

  return (
    <div className="min-h-[80vh] w-full px-8 md:px-16">
      <figure className="relative flex aspect-[16/9] h-full w-full items-center justify-center">
        <PrismicNextImage
          field={img}
          fill
          className="absolute h-full w-full rounded-lg object-cover"
        />
        <div className="absolute z-20 h-2/3  w-2/3 bg-white">
          <PrismicNextImage
            field={imgs[currentImgIndex].img}
            fill
            className="object-cover"
          />
        </div>
      </figure>
      <div className="mr-8 flex flex-col items-end py-24 md:mr-16">
        <div className="w-[80%] pb-4 md:w-[70%]">
          <p className="text-[clamp(1.5rem,2vw,2.5rem)]">{content}</p>
          <PrismicNextLink
            href="/"
            className="group block pt-6 text-[clamp(1rem,2vw,1.5rem)] text-slate-400 underline underline-offset-8 transition-all hover:tracking-wide">
            Discover Now &gt;
          </PrismicNextLink>
        </div>
      </div>
    </div>
  );
};
