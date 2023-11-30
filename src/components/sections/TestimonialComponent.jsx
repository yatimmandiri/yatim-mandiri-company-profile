"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItemsComponent from "./TestimonialItemsComponent";
import { Navigation } from "swiper/modules";

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
        {/* TESTIMONIAL END */}
      </section>
    </>
  );
}
