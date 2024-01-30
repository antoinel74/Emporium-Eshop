import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import { KeyTextField, LinkField } from "@prismicio/client";

interface IFooter {
  companyName?: KeyTextField;
  companyBaseline?: KeyTextField;
  instagram?: LinkField;
  facebook?: LinkField;
  youtube?: LinkField;
}

export const Foot: React.FC<IFooter> = ({ companyBaseline, companyName, instagram, facebook, youtube }) => {
  return (
    <footer className="bg-black px-4 py-12 text-white md:px-16">
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex flex-col items-center md:flex-row md:gap-4">
          <h3 className="text-xl font-semibold">{companyName}</h3>
          <span className="opacity-75">{companyBaseline}</span>
        </div>
        <nav className="flex w-full flex-col items-center gap-4 py-2 font-light md:w-auto md:flex-row md:py-0">
          <PrismicNextLink href="/">Home</PrismicNextLink>
          <PrismicNextLink href="/">Products</PrismicNextLink>
          <PrismicNextLink href="/">Account</PrismicNextLink>
          <PrismicNextLink href="/">Contact</PrismicNextLink>
        </nav>
      </div>
      <span className="my-4 block h-[1px] w-full bg-white opacity-75"></span>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 font-light">
          <span className="mr-6 opacity-75">AL © 2024</span>
          <PrismicNextLink href="/">Privacy Policy</PrismicNextLink>
          <PrismicNextLink href="/">Terms of Use</PrismicNextLink>
        </div>
        <div className="flex items-center gap-4 opacity-80">
          <PrismicNextLink field={instagram}>
            <Image src="/square-instagram.svg" height={25} width={25} alt="instagram" />
          </PrismicNextLink>
          <PrismicNextLink field={facebook}>
            <Image src="/square-facebook.svg" height={25} width={25} alt="facebook" />
          </PrismicNextLink>
          <PrismicNextLink field={youtube}>
            <Image src="/youtube.svg" height={30} width={30} alt="youtube" />
          </PrismicNextLink>
        </div>
      </div>
    </footer>
  );
};
