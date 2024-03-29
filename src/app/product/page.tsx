"use client";
import React, { useState } from "react";
import useCart from "@/stores/cart.store";
import Image from "next/image";
import { PopUp } from "@/components/Popup";

export default function Product(props?: any) {
  const { searchParams } = props;
  const { price_id } = searchParams;

  const product = useCart((state?: any) => state.product);
  const addItem = useCart((state?: any) => state.addItem);
  const toggleModal = useCart((state?: any) => state.setOpenModal);

  const { cost, productInfo, name, description, type } = product;
  const brand = name.split(" ")[0];
  const nameWithoutBrand = name.split(" ").slice(1).join(" ");

  const [showPopup, setShowPopup] = useState(false);

  /*   console.log(product);
  console.log(searchParams); */

  if (!product?.name) {
    window.location.href = "/";
  }

  const handleAddToCart = () => {
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
      image: productInfo.images[0],
    };
    addItem({ newItem });
    toggleModal();
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="mb-12">
      {name && (
        <div className="mt-16 flex min-h-screen w-full flex-col lg:mt-24 lg:flex-row lg:px-16">
          <figure className="relative mx-auto min-h-[500px] w-full lg:w-1/2">
            <Image
              src={productInfo.images[0]}
              fill
              alt={name}
              className="object-cover"
            />
          </figure>
          <div className="w-full px-4 py-4 lg:w-1/2 lg:px-16 lg:py-0">
            <span className="mb-2 block text-sm font-semibold uppercase opacity-50">
              {brand}
            </span>
            <h3 className="text-3xl font-semibold uppercase">
              {nameWithoutBrand}
            </h3>
            <p className="my-4 opacity-50 lg:text-xl">
              {productInfo.description}
            </p>
            <span className="block text-2xl font-semibold">€{cost / 100}</span>
            <div className="my-8 lg:my-12">
              <button
                onClick={togglePopup}
                className="flex w-full items-center justify-center gap-2 rounded border-2 border-black py-2">
                <img src="/heart.svg" className="h-5 w-5" />
                Add to Wishlist
              </button>

              <button
                onClick={handleAddToCart}
                className={`my-2 block w-full rounded bg-black px-4 py-2 text-white`}>
                + Add to Cart
              </button>
              <span className="my-4 block h-[2px] w-full bg-gray-200"></span>
            </div>
            <p className="my-4 flex items-center gap-2 gap-2 text-sm font-semibold uppercase opacity-50">
              Category :<span className="block">{productInfo.type}</span>
            </p>
            {showPopup && <PopUp onClose={togglePopup} />}
          </div>
        </div>
      )}
    </div>
  );
}
