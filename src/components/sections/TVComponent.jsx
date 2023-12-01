"use client";

import { Card } from "@mantine/core";
import React from "react";

export default function TVComponent() {
  return (
    <>
      <section className="mx-5">
        <TVItemsComponent />
        <TVItemsComponent />
        <TVItemsComponent />
        <TVItemsComponent />
      </section>
    </>
  );
}

export function TVItemsComponent() {
  return (
    <>
      <Card>
        <Card.Section mb="xs">
          <iframe
            className="mt-7 rounded-lg w-full h-44"
            src="https://www.youtube.com/embed/9bZkp7q19f0"
            frameborder={0}
          />
        </Card.Section>
        <h2 className="font-semibold text-base">
          Profil Siswa - siswi Asrama Mandiri Enterpreneur Center (MEC)
        </h2>
      </Card>
    </>
  );
}
