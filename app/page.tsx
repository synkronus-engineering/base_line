
import AppFooter from "@/src/@page-sections/layouts/AppFooter";
import ProductCategories from "@/src/@page-sections/landing/ProductCategories";
import ProductHero from "@/src/@page-sections/landing/ProductHero";
import ProductValues from "@/src/@page-sections/landing/ProductValues";

export default function Page() {
  return (
    <>
        <ProductHero />
        <ProductValues />
        <ProductCategories />
        <AppFooter />
    </>
  );
}
