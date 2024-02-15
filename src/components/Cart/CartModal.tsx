"use client";
import React from "react";
import useCart from "@/stores/cart.store";
import ReactDOM from "react-dom";
import Link from "next/link";
import { CartItem } from "..";

export default function CartModal() {
  const closeModal = useCart((state?: any) => state.setOpenModal);
  const cartItems = useCart((state?: any) => state.cart);
  const removeItem = useCart((state?: any) => state.removeItem);

  const handleCheckoutClick = () => {
    closeModal();
  };

  const handleRemoveItem = (itemIndex: number) => {
    removeItem({ itemIndex });
  };

  if (typeof document === "undefined") {
    return null;
  }

  /*   console.log(cartItems); */

  const total = cartItems.reduce(
    (acc: number, item: any) =>
      acc + (item.cost / 100 || 0) * (item.quantity || 0),
    0
  );
  const vatRate = 0.21;
  const subtotal = total - total * vatRate;

  return ReactDOM.createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-screen">
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-transparent"></div>
      <div className="max-w-screen absolute right-0 top-0 flex h-screen w-screen flex-col gap-4 bg-white p-4 shadow sm:w-96">
        <div className="relative flex justify-between">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          <button onClick={closeModal} className="link-hover">
            X
          </button>
        </div>
        <div className="relative h-full">
          {!cartItems ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="max-h-[65vh] overflow-x-scroll py-6">
              {cartItems.map(
                (
                  cartItem: {
                    quantity: number;
                    name: string;
                    cost: number;
                    image: string;
                  },
                  itemIndex: number
                ) => {
                  return (
                    <CartItem
                      key={itemIndex}
                      cartItem={cartItem}
                      onRemoveItem={() => handleRemoveItem(itemIndex)}
                    />
                  );
                }
              )}
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 my-4">
            <div className="mt-auto flex w-full justify-between border-b-2 border-slate-200 pb-4 opacity-75">
              <span className="block">Subtotal &#40;excl. VAT&#41;</span>
              <span className="block font-semibold">
                €{subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex w-full justify-between pt-4 text-xl font-medium">
              <span className="block">Total</span>
              <span className="block font-semibold">€{total.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout-form"
              onClick={handleCheckoutClick}
              className="my-2 block w-full rounded bg-black px-4 py-2 text-center text-white hover:opacity-75">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal") ?? document.body
  );
}
