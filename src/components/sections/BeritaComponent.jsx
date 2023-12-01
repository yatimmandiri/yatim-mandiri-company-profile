import React from "react";
import BeritaItemsComponent from "./BeritaItemsComponent";

export default function BeritaComponent() {
  return (
    <>
      <section className="bg-slate-100">
        <div className="flex items-center gap-3 mx-5 pt-9 pb-5">
          <div className="w-2 h-6 bg-orange-500"></div>
          <h1>Berita Terbaru</h1>
        </div>

        <div>
          <BeritaItemsComponent />
        </div>
      </section>
    </>
  );
}
