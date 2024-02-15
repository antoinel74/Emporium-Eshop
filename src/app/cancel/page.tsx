import React from "react";
import { CheckoutStatus } from "@/components";
import Link from "next/link";

const Cancel = () => {
  return (
    <div className="my-24 w-full bg-white">
      <h2 className="text-center text-4xl font-medium">Order canceled</h2>
      <CheckoutStatus />
      <div className="mx-auto mt-12 max-w-sm space-y-4 bg-white p-4 text-center shadow-lg">
        <span className="block text-xl font-medium text-gray-400">
          Oh no... 😭
        </span>
        <h3 className="text-3xl font-medium">Order canceled</h3>
        <p className="py-4 opacity-50">
          But don&apos;t worry, we&apos;ve keeped the item warm for you, safe in
          your cart until your next visit.
        </p>
        <Link
          href="/"
          className="block w-full rounded bg-black p-2 px-4 text-white hover:opacity-80">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
