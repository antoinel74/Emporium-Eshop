"use client";
import React from "react";
import useCart from "@/stores/cart.store";
import { useRouter } from "next/navigation";
import {
  OrderForm,
  ShippingForm,
  CheckoutStatus,
  CartItem,
  CartDisclaimer,
} from "@/components/";

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

  const total = cartItems.reduce(
    (acc: number, item: any) =>
      acc + (item.cost / 100 || 0) * (item.quantity || 0),
    0
  );
  const vatRate = 0.21;
  const subtotal = total - total * vatRate;

  return (
    <div className="mt-24 w-full bg-white">
      <h2 className="text-center text-5xl font-medium">Check Out</h2>
      <CheckoutStatus />
      <div className="my-6 flex flex-col justify-center gap-4 px-4 md:flex-row md:gap-8 md:px-8">
        <div className="w-full space-y-4 md:w-[60%]">
          <OrderForm />
          <ShippingForm />
          <button
            onClick={checkout}
            className="w-full rounded bg-black p-2 text-white hover:opacity-80">
            Place Order
          </button>
        </div>
        <div className="w-full space-y-4 md:w-[40%]">
          <CartDisclaimer />
          <div className="rounded border border-black p-4">
            <h3 className="text-2xl font-medium">Summary</h3>
            {!cartItems ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="overflow-scroll py-4">
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
            <p className="flex justify-between border-b py-2">
              Shipping{" "}
              <span className="font-semibold text-green-600">Free</span>
            </p>
            <p className="flex justify-between border-b py-2">
              Subtotal &#40;excl. VAT&#41;
              <span className="font-semibold">€{subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between py-2 text-xl font-semibold">
              Total <span>€{total.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
