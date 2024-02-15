import React from "react";
import Image from "next/image";

interface CartItemProps {
  cartItem: {
    quantity: number;
    name: string;
    cost: number;
    image: string;
  };
  onRemoveItem: () => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  onRemoveItem,
}) => {
  return (
    <div className="my-4 flex gap-2 border-b pb-2">
      <figure className="relative  h-24 w-20">
        <Image
          src={cartItem.image}
          alt={cartItem.name}
          fill
          className="rounded object-cover"
        />
      </figure>
      <div>
        <p className="font-medium">{cartItem.name}</p>
        <p className="text-sm opacity-50">Quantity: {cartItem.quantity}</p>
        <button
          onClick={onRemoveItem}
          className="link-hover my-2 rounded bg-gray-100 p-1 px-2 text-xs hover:border-black hover:bg-transparent">
          Remove
        </button>
      </div>
      <span className="ml-auto">€{cartItem.cost / 100}</span>
    </div>
  );
};
