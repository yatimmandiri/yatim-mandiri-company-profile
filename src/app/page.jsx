import BannerComponent from "@/components/sections/BannerComponent";
import CategoriesComponent from "@/components/sections/CategoriesComponent";
import ImageComponent from "@/components/sections/ImageComponent";
import LaporanComponent from "@/components/sections/LaporanComponent";
import NavbarComponent from "@/components/sections/NavbarComponent";
import TestimonialComponent from "@/components/sections/TestimonialComponent";
import React from "react";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <BannerComponent />
      <CategoriesComponent />
      <section className="relative">
        <LaporanComponent />
        <ImageComponent />
      </section>
      <TestimonialComponent />
    </>
  );
}
