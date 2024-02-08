"use client";
import React from "react";
import Image from "next/image";

export const BackToTop = () => {
  const companyName = "Emporium";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="bg-white flex xl:justify-between justify-center items-center rounded h-16 w-1/6 ml-4 px-4 cursor-pointer"
    >
      <span className="text-[#181819] text-2xl uppercase font-semibold hidden xl:block">{companyName}</span>
      <Image src="/arrow-up.svg" alt="back-to-top" className="mb-1" height={35} width={35} />
    </div>
  );
};
