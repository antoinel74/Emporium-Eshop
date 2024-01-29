import React from "react";

export default function Product(props?: any) {
  const { searchParams } = props;
  const { price_id } = props;
  console.log(searchParams);
  return <div>product</div>;
}
