import React from "react";
import { PrismicNextLink } from "@prismicio/next";

type Props = {
  handleClose: () => void;
};

export const MobileMenu: React.FC<Props> = ({ handleClose }) => {
  return (
    <div className="min-h-screen fixed top-0 left-0 z-[400] w-screen bg-red-200">
      <button onClick={handleClose} className="block ml-auto p-4 text-3xl hover:scale-75 transition-all">
        X
      </button>
      <ul className="flex flex-col">
        {[
          ["Home", "/"],
          ["Products", "/#products"],
          ["Contact", "/#contact"],
        ].map(([title, url]) => (
          <PrismicNextLink key={title} href={url} className="px-2 hover:opacity-75">
            {title}
          </PrismicNextLink>
        ))}
      </ul>
    </div>
  );
};
