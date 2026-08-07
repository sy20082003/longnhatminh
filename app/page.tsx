import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServicesOverview from "@/components/ServicesOverview";
import PartnersAndCta from "@/components/PartnersAndCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
      <ServicesOverview />
      <PartnersAndCta />
    </>
  );
}
