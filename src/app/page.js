import HeroSlider from "@/components/home/HeroSlider";
import HowItWorks from "@/components/home/HowItWorks";
import AboutSection from "@/components/home/AboutSection";
import FeaturedStudios from "@/components/home/FeaturedStudios";
import StudioCategories from "@/components/home/StudioCategories";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedStudios />
      <StudioCategories />
      <HowItWorks />
      <AboutSection />
    </>
  );
}

