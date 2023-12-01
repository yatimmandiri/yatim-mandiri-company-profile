"use client";
import React from "react";
// import BeritaItemsComponent from "./BeritaItemsComponent";
import { Card, Group, Image, Text } from "@mantine/core";

export default function BeritaComponent() {
  return (
    <>
      <section className="bg-slate-100">
        <div className="flex items-center gap-3 mx-5 pt-9 pb-5">
          <div className="w-2 h-6 bg-orange-500"></div>
          <h1>BERITA TERBARU</h1>
        </div>

        <div>
          <BeritaItemsComponent />
          <BeritaItemsComponent />
          <BeritaItemsComponent />
          <BeritaItemsComponent />
          <BeritaItemsComponent />
        </div>
      </section>
    </>
  );
}

export function BeritaItemsComponent() {
  return (
    <>
      <section className="mx-5">
        <Card radius={"lg"} color="#FBEDE9">
          <Card.Section>
            <Image
              src={"https://picsum.photos/480/480"}
              alt="image"
              h={200}
              radius={"lg"}
            />
          </Card.Section>
          <Group gap={"xs"}>
            <Text size="md">By Ika Faztin</Text>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <Text size="md">28 Februari 2023</Text>
          </Group>
          <Text size="md" fw={500} mt={12}>
            Tim Ambulance Yatim Mandiri Bantu Korban Tragedi Kanjuruhan
          </Text>
        </Card>
      </section>
    </>
  );
}
