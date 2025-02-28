import Image from "next/image";
import HeroSlider from '@/components/homePageComponents/heroSlider'
import HomeProductsCategories from '@/components/homePageComponents/homeProductsCategories'
import HomeBestSellingProduct from '@/components/homePageComponents/homeBestSellingProduct'
import HomeNewProducts from '@/components/homePageComponents/homeNewProducts'
import TestimonialSection from '@/components/homePageComponents/homeTestimonials'

export default function Home() {
  return (
    <>
      <HeroSlider/>
      <HomeProductsCategories/>
      <HomeBestSellingProduct/>
      <HomeNewProducts/>
      <TestimonialSection/>
    </>
  );
}
