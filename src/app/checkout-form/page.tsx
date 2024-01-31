"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCart from "@/stores/cart.store";
import { OrderForm } from "@/components/Forms/ContactInfo";
import { ShippingInfo } from "@/components/Forms/ShippingInfo";
import { CheckoutStatus } from "@/components/CheckoutStatus";

const CheckoutForm = () => {
  const cartItems = useCart((state?: any) => state.cart);
  console.log(cartItems);
  const router = useRouter();

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

  const total = cartItems.reduce((acc: number, item: any) => acc + (item.cost / 100 || 0) * (item.quantity || 0), 0);
  const vatRate = 0.21;
  const subtotal = total - total * vatRate;

  return (
    <div className="w-full bg-white mt-24">
      <h2 className="text-5xl font-medium text-center">Check Out</h2>
      <CheckoutStatus />
      <div className="flex gap-4 md:gap-8 justify-center px-4 md:px-8 my-6">
        <div className="w-[60%] space-y-4">
          <OrderForm />
          <ShippingInfo />
          <button onClick={checkout} className="w-full bg-black text-white p-2 rounded">
            Place Order
          </button>
        </div>
        <div className="w-[40%]">
          <div className="border border-black rounded p-4">
            <h3 className="text-2xl font-medium">Summary</h3>
            {!cartItems ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="overflow-scroll py-4">
                {cartItems.map((cartItem: { quantity: number; name: string; cost: number }, itemIndex: number) => {
                  return (
                    <div key={itemIndex} className="my-4 border-b pb-2">
                      <div className="flex justify-between font-medium">
                        <p>{cartItem.name}</p>
                        <span>€{cartItem.cost / 100}</span>
                      </div>
                      <p className="opacity-50">Quantity: {cartItem.quantity}</p>
                    </div>
                  );
                })}
              </div>
            )}
            <p className="flex justify-between border-b py-2">
              Shipping <span className="font-semibold text-green-600">Free</span>
            </p>
            <p className="flex justify-between border-b py-2">
              Subtotal &#40;excl. VAT&#41;<span className="font-semibold">€{subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between py-2 font-semibold text-xl">
              Total <span>€{total.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
