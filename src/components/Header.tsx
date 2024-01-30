import React from "react";
import { DynamicClock } from "./Clock";
import { KeyTextField } from "@prismicio/client";

interface Iheader {
  name: KeyTextField;
}

export const Header: React.FC<Iheader> = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 px-4 py-10 md:flex-row md:gap-0 md:px-16">
      <div className="h-full w-full md:w-1/2">
        <h1 className="flex flex-col text-[clamp(2.5rem,4vw,5rem)] font-semibold leading-tight">
          {name}
          <span>Winter Co.</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="block h-2 w-2 animate-spin-slow bg-blue-200"></span>
          <DynamicClock />
        </div>
      </div>
      <p className="w-full md:w-1/2 xl:text-xl">
        At <span className="font-bold">{name}</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
        unde, magni omnis nisi sapiente quaerat facilis non molestiae. Lorem ipsum dolor sit.
      </p>
    </div>
  );
};
