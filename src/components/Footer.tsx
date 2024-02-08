import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DynamicClock } from ".";
import { BackToTop } from "./BackToTop";

export const Foot = () => {
  const navigationLinks = [
    { text: "Home", url: "/" },
    { text: "Products", url: "/" },
    { text: "Account", url: "/" },
    { text: "Contact", url: "/" },
  ];

  return (
    <footer className="bg-[#181819] py-12 pr-4 text-white md:pr-16" id="contact">
      <div className="flex flex-col items-end">
        <div className="pb-4 w-[80%] md:w-[70%]">
          <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-slate-400">We are always glad to chat with you.</h3>
          <Link
            href="mailto:test@info.be"
            className="text-[clamp(1rem,2vw,1.5rem)] block pt-6 underline underline-offset-8 hover:tracking-wide transition-all"
          >
            Get in touch
          </Link>
          <nav className="flex flex-col w-full py-12 text-slate-400 gap-3 ">
            {navigationLinks.map((link, index) => (
              <Link key={index} href={link.url} className="hover:underline underline-offset-4">
                {link.text}
              </Link>
            ))}
          </nav>
          <DynamicClock />
        </div>
      </div>
      <BackToTop />
    </footer>
  );
};
