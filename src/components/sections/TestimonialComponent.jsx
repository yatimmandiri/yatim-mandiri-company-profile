"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import TestimonialItemsComponent from "./TestimonialItemsComponent";
import { Navigation } from "swiper/modules";
import { Carousel } from "@mantine/carousel";

export default function TestimonialComponent() {
  return (
    <>
      <section className="mt-6 bg-[#FBEDE9] pb-11">
        <h2 className="font-semibold text-center flex flex-col pt-7">
          <span>Yatim Mandiri senantiasa membantu dan</span>
          <span>menebar kebaikan untuk saudara yatim dhuafa</span>
        </h2>

        <div className="flex justify-around mt-8">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg">3000+</h3>
            <p className="font-medium">Penerima Manfaat</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg">12rb+</h3>
            <p className="font-medium">Donatur</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg">Rp2.400k+</h3>
            <p className="font-medium">Donasi disalurkan</p>
          </div>
        </div>

        {/* TESTIMONIAL SECTION */}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="bg-white mx-5 py-5 rounded-xl mt-10"
        >
          <SwiperSlide>
            <TestimonialItemsComponent />
          </SwiperSlide>
        </Swiper>
        {/* <Carousel height={200}>
          <Carousel.Slide>
            <TestimonialItemsComponent />
          </Carousel.Slide>
        </Carousel> */}
        {/* TESTIMONIAL END */}
      </section>
    </>
  );
}

export function TestimonialItemsComponent() {
  return (
    <>
      <section className="mx-3 p-4 border rounded-xl border-black bg-white">
        <h2 className="font-bold text-xl mb-2">Rizki Rachman,</h2>
        <p className="mb-4">Penerima Manfaat</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sed
          pariatur odio nemo unde sint culpa alias. Animi, iusto tempore?
        </p>
      </section>
    </>
  );
}
