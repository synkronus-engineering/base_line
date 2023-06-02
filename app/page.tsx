
import ProductCategories from "@/src/@page-sections/landing/ProductCategories";
import ProductHero from "@/src/@page-sections/landing/ProductHero";
import ProductValues from "@/src/@page-sections/landing/ProductValues";

export default function Page() {
  return (
    <>
    <div>Landing..</div>
        <ProductHero />
        <ProductValues />
        <ProductCategories />
      {/*
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero /> */}
    </>
  );
}
