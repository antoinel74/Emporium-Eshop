import { usePathname } from "next/navigation";
import React from "react";

export const CheckoutStatus = () => {
  const pathname = usePathname();
  const processing = pathname === "/checkout-form";
  const success = pathname === "/success";

  return (
    <div className="hidden md:flex gap-8 text-sm py-2 mt-12 justify-center">
      <p className={`flex items-center gap-2 font-semibold ${processing ? "text-green-500" : ""}`}>
        <span
          className={`flex justify-center items-center rounded-full h-10 w-10 ${processing ? "bg-green-500" : "bg-black"} text-white`}
        >
          1
        </span>
        Shopping cart
      </p>
      <p className="flex items-center gap-2 font-semibold">
        <span className="flex justify-center items-center rounded-full h-10 w-10 bg-black text-white">2</span>
        Checkout details
      </p>
      <p className={`flex items-center gap-2 font-semibold ${processing ? "opacity-50" : ""}`}>
        <span className="flex justify-center items-center rounded-full h-10 w-10 bg-black text-white">3</span>
        Order complete
      </p>
    </div>
  );
};
