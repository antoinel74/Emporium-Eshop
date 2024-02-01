import React from "react";

export const CartDisclaimer = () => {
  return (
    <div className="bg-yellow-100 border border-yellow-400 rounded p-4 text-gray-600 text-sm flex gap-2">
      <img src="/info.svg" className="h-5 w-5 opacity-75" />
      <p>
        <span className="font-semibold">Emporium Eshop</span> has been made for learning purpose, you can so simulate
        the full checkout process with Stripe but you don't have to use you real informations.{" "}
        <a href="https://stripe.com/docs/test-mode" className="underline link-hover">
          Learn more about Stripe Testmode
        </a>
      </p>
    </div>
  );
};
