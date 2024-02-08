import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { KeyTextField } from "@prismicio/client";

interface IBanner {
  content?: KeyTextField;
  img?: any;
}

export const Banner: React.FC<IBanner> = ({ content, img }) => {
  return (
    <div className="min-h-[80vh] w-full px-8 md:px-16">
      <figure className="relative h-full w-full aspect-[16/9] flex justify-center items-center">
        <PrismicNextImage field={img} fill className="absolute h-full w-full object-cover rounded-lg" />
        <div className="absolute z-20 bg-white  w-2/3 h-2/3"></div>
      </figure>
      <div className="flex flex-col items-end py-24 mr-8 md:mr-16">
        <div className="pb-4 w-[80%] md:w-[70%]">
          <p className="text-[clamp(1.5rem,2vw,2.5rem)]">{content}</p>
          <PrismicNextLink
            href="/"
            className="text-slate-400 group text-[clamp(1rem,2vw,1.5rem)] block pt-6 underline hover:tracking-wide underline-offset-8 transition-all"
          >
            Discover Now &gt;
          </PrismicNextLink>
        </div>
      </div>
    </div>
  );
};
