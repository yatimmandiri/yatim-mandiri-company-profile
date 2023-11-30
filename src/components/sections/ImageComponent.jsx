import Image from "next/image";
import React from "react";

export default function ImageComponent() {
  return (
    <>
      <section className="relative mx-10 mt-10 h-72">
        {/* BORDER SECTION */}
        <div>
          <div className="relative flex flex-col items-center ">
            <div className="absolute top-10 w-44 h-36 border border-black rounded-lg"></div>
            <div className="absolute top-28 left-0 w-44 h-28 border border-black rounded-lg"></div>
            <div className="absolute top-40 right-0 w-44 h-28 border border-black rounded-lg"></div>
          </div>

          <Image
            src={"/images/Frame 1984.svg"}
            alt="image"
            width={480}
            height={480}
            className="absolute top-12 left-3 w-[184px] h-[155px]"
          />
          <Image
            src={"/images/Frame 1985.svg"}
            alt="image"
            width={480}
            height={480}
            className="absolute bottom-6 right-3 w-[184px] h-[155px]"
          />
        </div>

        {/* END BORDER */}

        {/* IMAGE SECTION */}
        {/* END IMAGE */}
      </section>
    </>
  );
}
