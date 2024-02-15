import React from "react";

export const CartDisclaimer = () => {
  return (
    <div className="flex gap-2 rounded border border-yellow-400 bg-yellow-100 p-4 text-sm text-gray-600">
      <img src="/info.svg" className="h-5 w-5 opacity-75" />
      <p>
        <span className="font-semibold">Emporium Eshop</span> has been made for
        learning purpose, you can so simulate the full checkout process with
        Stripe but you don&apos;t have to use you real informations.
        <a
          href="https://stripe.com/docs/test-mode"
          className="ml-1 underline hover:text-black">
          Learn more about Stripe Testmode
        </a>
      </p>
    </div>
  );
};
