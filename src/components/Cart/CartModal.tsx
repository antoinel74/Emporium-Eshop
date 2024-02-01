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

  /*   console.log(cartItems); */

  const total = cartItems.reduce((acc: number, item: any) => acc + (item.cost / 100 || 0) * (item.quantity || 0), 0);
  const vatRate = 0.21;
  const subtotal = total - total * vatRate;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div onClick={closeModal} className="bg-transparent absolute inset-0"></div>
      <div className="flex flex-col absolute right-0 top-0 h-screen bg-white shadow w-screen sm:w-96 max-w-screen gap-4 p-4">
        <div className="flex justify-between relative">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          <button onClick={closeModal} className="link-hover">
            X
          </button>
        </div>
        <div className="relative h-full">
          {!cartItems ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="overflow-x-scroll max-h-[65vh] py-6">
              {cartItems.map((cartItem: { quantity: number; name: string; cost: number }, itemIndex: number) => {
                return (
                  <CartItem key={itemIndex} cartItem={cartItem} onRemoveItem={() => handleRemoveItem(itemIndex)} />
                );
              })}
            </div>
          )}
          <div className="my-4 absolute bottom-0 inset-x-0">
            <div className="mt-auto flex w-full justify-between border-b-2 border-slate-200 opacity-75 pb-4">
              <span className="block">Subtotal &#40;excl. VAT&#41;</span>
              <span className="block font-semibold">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex w-full justify-between pt-4 text-xl font-medium">
              <span className="block">Total</span>
              <span className="block font-semibold">€{total.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout-form"
              onClick={handleCheckoutClick}
              className="my-2 block text-center w-full rounded bg-black px-4 py-2 text-white hover:opacity-75"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal") ?? document.body
  );
}
