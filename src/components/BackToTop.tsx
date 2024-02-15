"use client"
import React from "react"
import Image from "next/image"

export const BackToTop = () => {
  const companyName = "Emporium"

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      onClick={scrollToTop}
      className="ml-4 flex h-16 w-1/6 cursor-pointer items-center justify-center rounded bg-white px-4 xl:justify-between"
    >
      <span className="hidden text-2xl font-semibold uppercase text-[#181819] xl:block">
        {companyName}
      </span>
      <Image
        src="/arrow-up.svg"
        alt="back-to-top"
        className="mb-1"
        height={35}
        width={35}
      />
    </div>
  )
}
