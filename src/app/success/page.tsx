import React from "react";
import { CheckoutStatus } from "@/components";
import Link from "next/link";

const Success = () => {
  return (
    <div className="my-24 flex w-full flex-col items-center justify-center bg-white">
      <h2 className="text-center text-3xl font-medium md:text-4xl">
        Order Complete !
      </h2>
      <CheckoutStatus />
      <div className="mx-auto mt-12 max-w-sm space-y-4 bg-white p-4 text-center shadow-lg">
        <span className="block text-xl font-medium text-gray-400">
          Thank you ! 🎉{" "}
        </span>
        <h3 className="text-2xl font-medium md:text-3xl">
          Your order has been received
        </h3>
        <p className="py-4 opacity-50">
          I&apos;m currently working on shipment tracking and order data resume
          displaying, come back later to see the updates !
        </p>
        <Link
          href="/"
          className="block w-full rounded bg-black p-2 px-4 text-white hover:opacity-75">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Success;
