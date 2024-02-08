import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DynamicClock } from ".";

export const Foot = () => {
  return (
    <footer className="bg-[#181819] py-12 pr-4 text-white md:pr-16" id="contact">
      <div className="flex flex-col items-end">
        <div className="pb-4 w-[80%] md:w-[70%]">
          <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-slate-400">We are always glad to chat with you.</h3>
          <Link
            href="mailto:test@info.be"
            className="text-[clamp(1rem,2vw,1.5rem)] block pt-6 underline underline-offset-8"
          >
            Get in touch
          </Link>
          <nav className="flex flex-col w-full py-12 text-slate-400 gap-2 ">
            <Link href="/" className="hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/" className="hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/" className="hover:underline underline-offset-4">
              Account
            </Link>
            <Link href="/" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <DynamicClock />
        </div>
      </div>
      <div className="bg-white flex md:justify-between justify-center items-center rounded h-16 w-1/6 ml-4">
        <h3 className="text-[#181819] text-2xl px-4 uppercase font-semibold hidden md:block">Emporium</h3>
        <Image src="/arrow-up.svg" alt="back-to-top" className="mb-1 mr-2 cursor-pointer" height={35} width={35} />
      </div>
    </footer>
  );
};
