import Image from "next/image";
import React from "react";

export default function CategoriesComponent() {
  return (
    <>
      <section className="flex justify-between items-center mt-5 px-10">
        <button className="flex flex-col items-center">
          <Image
            src="/images/image 26.svg"
            alt="Categories"
            width={200}
            height={200}
            className="w-14 h-14"
          />
          <p className="flex flex-col text-center">
            <span>Kalkulator</span> <span>Zakat</span>
          </p>
        </button>
        <button className="flex flex-col items-center">
          <Image
            src={"/images/image 27.svg"}
            alt="Categories"
            width={200}
            height={200}
            className="w-14 h-14"
          />
          <p className="flex flex-col text-center">
            <span>Rekening</span> <span>Donasi</span>
          </p>
        </button>
        <button className="flex flex-col items-center">
          <Image
            src={"/images/image 28.svg"}
            alt="Categories"
            width={200}
            height={200}
            className="w-14 h-14"
          />
          <p className="flex flex-col text-center">
            <span>Jemput</span> <span>Donasi</span>
          </p>
        </button>
        <button className="flex flex-col items-center">
          <Image
            src={"/images/image 29.svg"}
            alt="Categories"
            width={200}
            height={200}
            className="w-14 h-14"
          />
          <p className="flex flex-col text-center">
            <span>Konfirmasi</span> <span>Donasi</span>
          </p>
        </button>
      </section>
    </>
  );
}
