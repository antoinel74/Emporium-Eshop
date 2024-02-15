import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  handleClose: () => void;
};

export const MobileMenu: React.FC<Props> = ({ handleClose }) => {
  return (
    <div className="fixed left-0 top-0 z-[400] min-h-screen w-screen bg-white">
      <button
        onClick={handleClose}
        className="ml-auto block p-4 text-3xl transition-all hover:scale-75">
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
            className="block w-full bg-white p-4 text-3xl hover:invert">
            {title}
          </PrismicNextLink>
        ))}
      </ul>
      <div className="absolute bottom-4 right-4 flex gap-3">
        <PrismicNextLink href="https://facebook.com">
          <Image
            src="/square-facebook.svg"
            alt="Facebook"
            height={30}
            width={30}
          />
        </PrismicNextLink>
        <PrismicNextLink href="https://facebook.com">
          <Image
            src="/square-instagram.svg"
            alt="Instagram"
            height={30}
            width={30}
          />
        </PrismicNextLink>
        <PrismicNextLink href="https://facebook.com">
          <Image src="/youtube.svg" alt="Youtube" height={40} width={40} />
        </PrismicNextLink>
      </div>
    </div>
  );
};
