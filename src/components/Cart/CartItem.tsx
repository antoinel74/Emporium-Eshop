import React from "react";

interface CartItemProps {
  cartItem: {
    quantity: number;
    name: string;
    cost: number;
  };
  onRemoveItem: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, onRemoveItem }) => {
  return (
    <div className="my-4 border-b pb-2">
      <div className="flex justify-between font-medium">
        <p>{cartItem.name}</p>
        <span>€{cartItem.cost / 100}</span>
      </div>
      <p className="opacity-50">Quantity: {cartItem.quantity}</p>
      <button
        onClick={onRemoveItem}
        className="p-1 border hover:border-black hover:bg-transparent bg-gray-100 px-2 rounded my-2"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
