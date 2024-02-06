import React from "react";
import { CheckoutStatus } from "@/components";
import Link from "next/link";

const Cancel = () => {
  return (
    <div className="w-full bg-white my-24">
      <h2 className="text-4xl font-medium text-center">Order canceled</h2>
      <CheckoutStatus />
      <div className="shadow-lg bg-white max-w-sm mt-12 mx-auto space-y-4 p-4 text-center">
        <span className="block text-xl text-gray-400 font-medium">Oh no... 😭 </span>
        <h3 className="text-3xl font-medium">Order canceled</h3>
        <p className="opacity-50 py-4">
          But don't worry, we've keeped the item warm for you, safe in your cart until your next visit.
        </p>
        <Link href="/" className="block rounded hover:opacity-75 bg-black w-full text-white p-2 px-4">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
