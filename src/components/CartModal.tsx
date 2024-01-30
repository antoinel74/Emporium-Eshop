import React from "react";
import useCart from "@/stores/cart.store";
import ReactDOM from "react-dom";
import { useRouter } from "next/navigation";

export default function CartModal() {
  const closeModal = useCart((state?: any) => state.setOpenModal);
  const cartItems = useCart((state?: any) => state.cart);
  console.log(cartItems);
  const router = useRouter();

  const total = cartItems.reduce((acc: number, item: any) => acc + (item.cost / 100 || 0) * (item.quantity || 0), 0);
  const vatRate = 0.21;
  const subtotal = total - total * vatRate;

  async function checkout() {
    const lineItems = cartItems.map((cartItems: any) => {
      return {
        price: cartItems.price_id,
        quantity: 1,
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });

    const data = await res.json();
    router.push(data.session.url);
  }

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
        <div>
          {!cartItems ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="overflow-scroll py-6">
              {cartItems.map((cartItem: { quantity: number; name: string; cost: number }, itemIndex: number) => {
                return (
                  <div key={itemIndex}>
                    <p>Quantity: {cartItem.quantity}</p>
                    <p>Name: {cartItem.name}</p>
                    <p>€{cartItem.cost / 100}</p>
                  </div>
                );
              })}
            </div>
          )}
          <div className="my-4 px-4">
            <div className="mt-auto flex w-full justify-between border-b-2 border-slate-200 opacity-75 pb-4">
              <span className="block">Subtotal &#40;excl. VAT&#41;</span>
              <span className="block font-semibold">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex w-full justify-between pt-4 text-xl font-medium">
              <span className="block">Total</span>
              <span className="block font-semibold">€{total.toFixed(2)}</span>
            </div>
            <button onClick={checkout} className="my-2 w-full rounded bg-black px-4 py-2 text-white hover:opacity-75">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal") ?? document.body
  );
}
