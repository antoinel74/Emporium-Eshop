import Image from "next/image";
import Stripe from "stripe";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {});
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  console.log(products);
  return <main className="bg-black flex min-h-screen flex-col text-white items-center justify-between p-24">home</main>;
}
