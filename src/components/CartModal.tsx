import React from "react";
import useCart from "@/stores/cart.store";
import ReactDOM from "react-dom";

export default function CartModal() {
  const closeModal = useCart((state?: any) => state.setOpenModal);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div onClick={closeModal} className="bg-transparent absolute inset-0"></div>
      <div className="flex flex-col absolute right-0 top-0 h-screen bg-white shadow w-screen sm:w-96 max-w-screen gap-4 p-4">
        <div className="flex justify-between relative">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          <button onClick={closeModal}>X</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal") ?? document.body
  );
}
