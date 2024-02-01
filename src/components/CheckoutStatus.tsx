"use client";
import { usePathname } from "next/navigation";
import React from "react";

export const CheckoutStatus = () => {
  const pathname = usePathname();
  const processing = pathname === "/checkout-form";
  const success = pathname === "/success";

  return (
    <div className="hidden md:flex gap-8 text-sm py-2 mt-12 justify-center">
      <p
        className={`flex items-center gap-2 font-semibold pb-6 pr-12 border-b-4 ${processing || success ? "text-green-500 border-green-500" : ""}`}
      >
        <span
          className={`flex justify-center items-center rounded-full h-10 w-10 ${processing || success ? "bg-green-500" : "bg-black"} text-white`}
        >
          1
        </span>
        Shopping cart
      </p>
      <p
        className={`flex items-center gap-2 font-semibold pb-6 pr-12 border-b-4 ${success ? "border-green-500 text-green-500" : "border-black"}`}
      >
        <span
          className={`flex justify-center items-center rounded-full h-10 w-10 text-white ${success ? "bg-green-500" : "bg-black"}`}
        >
          2
        </span>
        Checkout details
      </p>
      <p
        className={`flex items-center gap-2 font-semibold pb-6 pr-12 border-b-4 border-black ${processing ? "opacity-50" : ""} ${success ? "opacity-100 border-green-500 text-green-500" : ""}`}
      >
        <span
          className={`flex justify-center items-center rounded-full h-10 w-10 text-white ${success ? "bg-green-500" : "bg-black"}`}
        >
          3
        </span>
        Order complete
      </p>
    </div>
  );
};
