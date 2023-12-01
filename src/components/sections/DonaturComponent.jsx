"use client";

import { Avatar, Card, Group } from "@mantine/core";
import React from "react";

export default function DonaturComponent() {
  return (
    <>
      <section className="px-5 bg-[#f4f4f4] pb-14">
        <h2 className="text-orange-500 underline underline-offset-4 mb-5 text-center pt-11">
          Bagaimana Yatim Mandiri?
        </h2>
        <h1 className="font-semibold mb-10 text-center">
          <span className="text-orange-500">Dengarkan </span>dari Donatur Kami
        </h1>

        <Card radius={"lg"} px={35}>
          <div className="flex items-center justify-center gap-3">
            <Avatar src="https://picsum.photos/200/200" alt="avatar" />
            <div>
              <h2>Achmad Rachman</h2>
              <p className="font-medium">Donatur</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Card>
      </section>
    </>
  );
}
