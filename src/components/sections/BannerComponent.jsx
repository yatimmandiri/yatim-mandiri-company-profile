import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

export default function BannerComponent() {
  return (
    <>
      <div>
        <Image
          src="https://picsum.photos/1240/1240"
          alt="Banner"
          width={200}
          height={200}
          className="bg-cover bg-center w-full h-44"
        />
      </div>
    </>
  );
}
