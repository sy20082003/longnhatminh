import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnersAndCta from "@/components/PartnersAndCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      <PartnersAndCta />
    </>
  );
}
