import ProductCard from "@/components/ProductCard";
import { createClient } from "@/prismicio";
import { Slider, Header, Banner, MainTitle } from "@/components";
import { getStripeProducts } from "@/libs/getStripeProducts";

export default async function Home() {
  const products = await getStripeProducts();
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <main>
      <MainTitle title="Emporium is a e-shop for extreme winter sports enthusiasts." />
      <Slider img={page.data.slidertest} />
      <Header name={page.data.companyname} />
      <section className="h-full min-h-screen w-full py-12" id="products">
        <h2 className="pl-4 text-[clamp(1rem,2vw,1.25rem)] text-slate-400 md:pl-14">
          Latest products
        </h2>
        <div className="grid h-full w-full grid-cols-2 py-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      <Banner
        img={page.data.bannerimg}
        content={page.data.bannercontent}
        imgs={page.data.bannerslider}
      />
    </main>
  );
}
