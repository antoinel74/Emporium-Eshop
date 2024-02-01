"use client";
import React from "react";
import useCart from "@/stores/cart.store";
import { useRouter } from "next/navigation";
import { OrderForm, ShippingInfo, CheckoutStatus, CartItem, CartDisclaimer } from "@/components/";

const CheckoutForm = () => {
  const cartItems = useCart((state?: any) => state.cart);
  const removeItem = useCart((state?: any) => state.removeItem);
  const router = useRouter();

  console.log(cartItems);

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

  const handleRemoveItem = (itemIndex: number) => {
    removeItem({ itemIndex });
  };

  const total = cartItems.reduce((acc: number, item: any) => acc + (item.cost / 100 || 0) * (item.quantity || 0), 0);
  const vatRate = 0.21;
  const subtotal = total - total * vatRate;

  return (
    <div className="w-full bg-white mt-24">
      <h2 className="text-5xl font-medium text-center">Check Out</h2>
      <CheckoutStatus />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center px-4 md:px-8 my-6">
        <div className="w-full md:w-[60%] space-y-4">
          <OrderForm />
          <ShippingInfo />
          <button onClick={checkout} className="w-full bg-black text-white p-2 rounded hover:opacity-80">
            Place Order
          </button>
        </div>
        <div className="w-full md:w-[40%] space-y-4">
          <CartDisclaimer />
          <div className="border border-black rounded p-4">
            <h3 className="text-2xl font-medium">Summary</h3>
            {!cartItems ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="overflow-scroll py-4">
                {cartItems.map((cartItem: { quantity: number; name: string; cost: number }, itemIndex: number) => {
                  return (
                    <CartItem key={itemIndex} cartItem={cartItem} onRemoveItem={() => handleRemoveItem(itemIndex)} />
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
