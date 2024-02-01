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
  const nameWithoutBrand = name.split(" ").slice(1).join(" ");
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
      className="group h-full w-full max-w-xs relative mt-4 rounded hover:-translate-y-2 transition-all"
    >
      <figure className="relative h-[400px] w-full">
        <Link href={`/product/?price_id=${price_id}`}>
          <Image src={productInfo.images[0]} alt={name} fill className="object-cover h-full w-full" />
        </Link>
      </figure>

      <Link href={`/product/?price_id=${price_id}`}>
        <div className="mt-2 w-full">
          <span className="block text-sm opacity-75">{brand}</span>
          <h2 className="overflow-x-hidden uppercase opacity-75">{nameWithoutBrand}</h2>
          <span className="mt-2 block font-semibold">{cost / 100}€</span>
        </div>
      </Link>
    </div>
  );
}
