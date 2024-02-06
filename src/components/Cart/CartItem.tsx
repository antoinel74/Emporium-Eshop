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

export const CartItem: React.FC<CartItemProps> = ({ cartItem, onRemoveItem }) => {
  return (
    <div className="my-4 flex gap-2 border-b pb-2">
      <figure className="h-24  w-20 relative">
        <Image src={cartItem.image} alt={cartItem.name} fill className="object-cover rounded" />
      </figure>

      <div>
        <p className="font-medium">{cartItem.name}</p>
        <p className="opacity-50 text-sm">Quantity: {cartItem.quantity}</p>
        <button
          onClick={onRemoveItem}
          className="p-1 link-hover hover:border-black hover:bg-transparent bg-gray-100 px-2 text-xs rounded my-2"
        >
          Remove
        </button>
      </div>
      <span className="ml-auto">€{cartItem.cost / 100}</span>
    </div>
  );
};
