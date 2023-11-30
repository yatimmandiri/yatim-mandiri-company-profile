import { Button, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import Image from "next/image";

export default function LaporanComponent() {
  return (
    <>
      <section className="mx-10 mt-10">
        <div>
          <h1 className="font-bold mb-3">
            <span className="text-orange-500">Transparansi</span> adalah{" "}
            <span className="text-orange-500">Prioritas</span>
          </h1>
          <p className="font-medium flex flex-col">
            <span>Kami terus berupaya meningkatkan dan </span>
            <span>menjaga kepercayaan donatur Yatim Mandiri</span>
          </p>
          {/* CARD SECTION */}
          <div className="flex justify-between bg-orange-600 rounded-lg text-white p-8 mt-5">
            <div className="flex flex-col justify-between">
              <h2 className="font-semibold flex flex-col">
                <span>Lihat laporan </span> <span>dan audit keuangan</span>
              </h2>
              <button className="w-6 h-6">
                <ArrowRightOutlined className="text-white " />
              </button>
            </div>

            <figure className="flex items-center justify-center h-16 w-24 bg-white rounded-lg">
              <Image
                src={"/images/image 109.svg"}
                alt="laporan keuangan"
                width={200}
                height={200}
                className="w-14 h-8"
              />
            </figure>
          </div>
          {/* END CARD */}

          <div className="mt-6">
            <p>Yatim Mandiri rutin menyerahkan laporan audit keuangan ke:</p>
            <div className="flex items-center mt-3">
              <Image
                src={"/images/image 110.svg"}
                alt="baznas"
                width={200}
                height={200}
                className="w-20 h-16"
              />
              <Image
                src={"/images/Frame 1983.svg"}
                alt="kemenag RI"
                width={200}
                height={200}
                className="w-20 h-16"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
