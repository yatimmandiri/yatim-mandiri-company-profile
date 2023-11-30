import React from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <>
      <nav className="flex justify-between items-center px-5 h-20 bg-orange-500">
        <Image
          src="/images/Logo YM.svg"
          alt="Logo"
          width={200}
          height={200}
          className="w-12 h-8"
        />
        <div>
          <Button type="primary" size="large" className="bg-blue-500">
            Donasi
          </Button>
          <Button
            size="large"
            icon={<MenuOutlined />}
            className="border-none"
          />
        </div>
      </nav>
    </>
  );
}
