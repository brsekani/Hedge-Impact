import AboutPreview from "./_components/AboutPreview";
import DonateSection from "./_components/DonateSection";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <DonateSection />
      <Marquee />
    </div>
  );
}
