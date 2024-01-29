"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/stores/cart.store";

export default function ProductCard(props?: any) {
  const { product } = props;
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;
  const brand = name.split(" ")[0];
  const setProduct = useCart((state?: any) => state.setProduct);

  function onClick() {
    const newProduct = {
      name,
      price_id,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
  }

  return (
    <div
      onClick={onClick}
      className="group relative mt-4 aspect-[9/14] w-40 rounded md:w-60 hover:scale-[102%] transition-all"
    >
      <figure className="relative h-full w-full">
        <Link href={`/product/?price_id=${price_id}`}>
          <Image src={productInfo.images[0]} alt={name} fill className="object-cover" />
        </Link>
      </figure>

      <Link href={`/product/?price_id=${price_id}`}>
        <div className="mt-2 w-full">
          <span className="block text-sm opacity-75">{brand}</span>
          <h2 className="overflow-x-hidden uppercase opacity-75">{name}</h2>
          <span className="mt-2 block font-semibold">{cost}€</span>
        </div>
      </Link>
    </div>
  );
}
