import Image from "next/image";
import React from "react";

export default function QRCodeComponent() {
  return (
    <>
      <section className="bg-[#FBEDE9] px-5 pt-9 pb-10">
        <div className="">
          <div className="mb-5">
            <h2 className="font-semibold text-base">Donasi lebih mudah</h2>
            <h2 className="font-semibold text-base">
              <span className="text-[#f16022]">dimana saja </span> dan{" "}
              <span className="text-[#f16022]">kapan saja </span> sekali klik
            </h2>
          </div>

          <div className="flex flex-col gap-4 mb-9">
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-6 h-6 bg-orange-500 rounded-full text-white font-medium text-xs">
                1
              </div>
              <p className="font-medium">Buka app e-wallet</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-6 h-6 bg-orange-500 rounded-full text-white font-medium text-xs">
                2
              </div>
              <p className="font-medium">Scan Barcode</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-6 h-6 bg-orange-500 rounded-full text-white font-medium text-xs">
                3
              </div>
              <p className="font-medium">Isi & Bayar Donasimu</p>
            </div>
          </div>

          {/* SCAN QR */}

          <div className="mb-8">
            <Image
              src={"/images/image 30.svg"}
              width={300}
              height={300}
              className="w-full h-72"
            />
          </div>

          {/* SUPPORT SECTION */}
          <div>
            <h2 className="font-medium text-base">Support Apps:</h2>
            <div className="grid grid-cols-3 gap-5 mt-8">
              <Image
                src={"/images/image 31.svg"}
                alt="image"
                width={300}
                height={300}
                className="w-20 h-9"
              />
              <Image
                src={"/images/image 32.svg"}
                alt="image"
                width={300}
                height={300}
                className="w-20 h-9"
              />
              <Image
                src={"/images/image 33.svg"}
                alt="image"
                width={300}
                height={300}
                className="w-20 h-9"
              />
              <Image
                src={"/images/image 34.svg"}
                alt="image"
                width={300}
                height={300}
                className="w-20 h-9"
              />
              <Image
                src={"/images/image 35.svg"}
                alt="image"
                width={300}
                height={300}
                className="w-20 h-9"
              />
              <Image
                src={"/images/image 36.svg"}
                alt="image"
                width={300}
                height={300}
                className="w-20 h-9"
              />
            </div>
          </div>
          {/* SUPPORT END */}
        </div>
      </section>
    </>
  );
}
