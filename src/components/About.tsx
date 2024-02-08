import React from "react";
import { DynamicClock } from "./Clock";
import { KeyTextField } from "@prismicio/client";

interface Iheader {
  name: KeyTextField;
}

export const Header: React.FC<Iheader> = ({ name }) => {
  return (
    <div className="flex flex-col justify-between gap-2 px-4 py-12 md:flex-row md:gap-0 md:px-14">
      <div className="h-full w-full md:w-1/2">
        <h2 className="flex flex-col text-[clamp(1rem,2vw,1.25rem)] opacity-50">About us</h2>
      </div>
      <p className="w-full font-light md:w-1/2 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
        At {name} we provide winter equipments for you since 1997. Whether you&apos;re shredding the slopes on freeride
        skis, carving through powder on a snowboard, or conquering the peaks with alpinism gear, wev&apos;e got you
        covered with the best quality items you can get and as we are as passioned as you, we test all our items in real
        conditions. Gear up and conquer the slopes with us!
      </p>
    </div>
  );
};
