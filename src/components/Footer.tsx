import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Foot = () => {
  return (
    <footer className="bg-black px-4 py-12 text-white md:px-16">
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex flex-col items-center md:flex-row md:gap-4 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Emporium</h3>
          <span className="opacity-75">Blasing snow since 1991</span>
        </div>
        <nav className="flex w-full flex-col items-center gap-4 py-2 font-light md:w-auto md:flex-row md:py-0">
          <Link href="/">Home</Link>
          <Link href="/#product">Products</Link>
          <Link href="/">Account</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
      <span className="my-4 block h-[1px] w-full bg-white opacity-75"></span>
      <div className="flex flex-col-reverse items-center md:flex-row gap-4 md:gap-0 justify-between py-2">
        <div className="flex w-full flex-col-reverse md:flex-row items-center gap-4 font-light">
          <span className="md:mr-6 opacity-75">AL © 2024</span>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Use</Link>
        </div>
        <div className="flex justify-center items-center gap-4 opacity-80">
          <Link href="https://instagram.com">
            <Image src="/square-instagram.svg" height={25} width={25} alt="instagram" />
          </Link>
          <Link href="https://facebook.com">
            <Image src="/square-facebook.svg" height={25} width={25} alt="facebook" />
          </Link>
          <Link href="https://youtube.com">
            <Image src="/youtube.svg" height={30} width={30} alt="youtube" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
