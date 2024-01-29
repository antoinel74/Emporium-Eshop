"use client";
import React from "react";
import useCart from "@/stores/cart.store";

export default function Product(props?: any) {
  const { searchParams } = props;
  const { price_id } = props;
  const product = useCart((state?: any) => state.product);
  console.log(product);
  console.log(searchParams);

  if (!product?.name) {
    window.location.href = "/";
  }
  return <div>product</div>;
}
