import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  handleClose: () => void;
};

export const MobileMenu: React.FC<Props> = ({ handleClose }) => {
  return (
    <div className="min-h-screen fixed top-0 left-0 z-[400] w-screen bg-white">
      <button onClick={handleClose} className="block ml-auto p-4 text-3xl hover:scale-75 transition-all">
        X
      </button>
      <ul className="mt-12">
        {[
          ["Home", "/"],
          ["Products", "/#products"],
          ["Contact", "/#contact"],
          ["Join us", "https://instagram.com"],
        ].map(([title, url]) => (
          <PrismicNextLink
            onClick={handleClose}
            key={title}
            href={url}
            className="block w-full p-4 bg-white hover:invert text-3xl"
          >
            {title}
          </PrismicNextLink>
        ))}
      </ul>
      <div className="flex gap-3 absolute bottom-4 right-4">
        <PrismicNextLink href="https://facebook.com">
          <Image src="/square-facebook.svg" alt="Facebook" height={30} width={30} />
        </PrismicNextLink>
        <PrismicNextLink href="https://facebook.com">
          <Image src="/square-instagram.svg" alt="Instagram" height={30} width={30} />
        </PrismicNextLink>
        <PrismicNextLink href="https://facebook.com">
          <Image src="/youtube.svg" alt="Youtube" height={40} width={40} />
        </PrismicNextLink>
      </div>
    </div>
  );
};
