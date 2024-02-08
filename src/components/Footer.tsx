import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DynamicClock } from ".";

export const Foot = () => {
  return (
    <footer className="bg-[#181819] py-12 pr-4 text-white md:pr-16">
      <div className="flex flex-col items-end">
        <div className="pb-4 w-[80%] md:w-[70%]">
          <h3 className="text-[clamp(1.5rem,2vw,2.5rem)] text-slate-400">We are always glad to chat with you.</h3>
          <Link
            href="mailto@test@info.be"
            className="text-[clamp(1rem,2vw,1.5rem)] block pt-6 underline underline-offset-8"
          >
            Get in touch
          </Link>

          <nav className="flex flex-col w-full py-12 text-slate-400 gap-2 ">
            <Link href="/">Home</Link>
            <Link href="/#product">Products</Link>
            <Link href="/">Account</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <DynamicClock />
        </div>
      </div>
      <div className="bg-white flex justify-between items-center rounded h-16 w-1/5 ml-4">
        <h3 className="text-slate-400 text-xl px-4 uppercase font-semibold hidden md:block">Emporium</h3>
        <button className="text-black flex items-center gap-2">Back to top</button>
      </div>
    </footer>
  );
};
