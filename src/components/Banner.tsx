import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { KeyTextField } from "@prismicio/client";

interface IBanner {
  subtitle?: KeyTextField;
  title?: KeyTextField;
  content?: KeyTextField;
  img?: any;
}

export const Banner: React.FC<IBanner> = ({ subtitle, title, content, img }) => {
  return (
    <div className="min-h-[80vh] w-full md:flex bg-slate-100">
      <div className="relative h-full min-h-[40vh] w-full md:h-full md:min-h-[80vh] md:w-1/2">
        <PrismicNextImage field={img} fill className="absolute h-full w-full object-cover" />
      </div>
      <div className="my-auto w-full space-y-4 px-8 py-8 md:w-1/2 md:py-0">
        <span className="font-semibold uppercase text-blue-500">{subtitle}</span>
        <h2 className="text-[clamp(2.5rem,4vw,5rem)] font-semibold leading-tight">{title}</h2>
        <p className="pb-4 xl:text-xl">{content}</p>
        <PrismicNextLink href="/products" className="link-hover">
          Discover now -&gt;
        </PrismicNextLink>
      </div>
    </div>
  );
};
