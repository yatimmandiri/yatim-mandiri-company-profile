"use client";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function NavbarComponent() {
  const [opened, { toggle }] = useDisclosure();
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
        <div className="flex items-center gap-2">
          <Button variant="filled" size="sm" radius="md" color="violet">
            Donasi
          </Button>
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
          {/* <Button type="primary" size="large" className="bg-blue-500">
            Donasi
          </Button>
          <Button
            size="large"
            icon={<MenuOutlined />}
            className="border-none"
          /> */}
        </div>
      </nav>
    </>
  );
}
