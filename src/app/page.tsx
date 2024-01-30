import Stripe from "stripe";
import ProductCard from "@/components/ProductCard";
import { createClient } from "@/prismicio";
import { Slider } from "@/components/Slider";
import { Header } from "@/components/Header";

export async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {});
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <main>
      <Slider img={page.data.slidertest} />
      <Header />
      <section className="md:px-4" id="products">
        <h2 className="font-semibold text-3xl">Latest products</h2>
        <div className="flex w-full flex-wrap justify-center gap-2 md:justify-start md:gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
