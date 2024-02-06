import React from "react";
import { CheckoutStatus } from "@/components";
import Link from "next/link";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white my-24">
      <h2 className="text-3xl md:text-4xl font-medium text-center">Order Complete !</h2>
      <CheckoutStatus />
      <div className="shadow-lg bg-white max-w-sm mt-12 mx-auto space-y-4 p-4 text-center">
        <span className="block text-xl text-gray-400 font-medium">Thank you ! 🎉 </span>
        <h3 className="text-2xl md:text-3xl font-medium">Your order has been received</h3>
        <p className="opacity-50 py-4">
          I'm currently working on shipment tracking and order data resume displaying, come back later to see the
          updates !
        </p>
        <Link href="/" className="block rounded hover:opacity-75 bg-black w-full text-white p-2 px-4">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Success;
