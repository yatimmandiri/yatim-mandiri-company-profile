"use client";
import React from "react";

import { Button, Card, Group, Image } from "@mantine/core";

export default function InspirasiComponent() {
  return (
    <>
      <section>
        <div className="flex items-center gap-3 mx-5 pt-9 pb-5">
          <div className="w-2 h-6 bg-orange-500"></div>
          <h1>INSPIRASI DAN HIKMAH</h1>
        </div>

        <div>
          <InspirasiItemsComponent />
        </div>
      </section>
    </>
  );
}

export function InspirasiItemsComponent() {
  return (
    <>
      <section className="mx-5">
        <Card>
          <Card.Section mb={24}>
            <Image
              src={"https://picsum.photos/480/480"}
              alt="image"
              h={200}
              radius={"lg"}
            />
          </Card.Section>
          <Group mb={24}>
            <button className="text-indigo-500">Blog</button>
            <button className="text-indigo-500">Inspirasi</button>
            <button className="text-indigo-500">Zakat</button>
          </Group>

          <h2 className="mb-3 font-semibold">
            Pengertian Zakat: Syarat, Hukum, Rukun, dan Macam-macamnya
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            alias aspernatur molestias. selengkapnya...
          </p>

          <Group mt={16} gap={"xs"}>
            <p>28 Februari 2023</p>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <p>09:20 WIB</p>
          </Group>
        </Card>
      </section>
    </>
  );
}
