import React from "react";
import { CheckoutStatus } from "@/components/CheckoutStatus";

const Success = () => {
  return (
    <div className="min-h-screen w-full bg-white mt-24">
      <h2 className="md:text-3xl text-4xl font-semibold text-center">Order Complete !</h2>
      <CheckoutStatus />
    </div>
  );
};

export default Success;
