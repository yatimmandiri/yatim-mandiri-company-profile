import React from "react";

export default function VideoComponent() {
  return (
    <section className="mx-5 pt-7 pb-10">
      <div className="">
        <h2 className="font-semibold text-base flex flex-col mb-3">
          <span>Gerakan Nyata untuk</span>
          <span>Indonesia</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In maiores
          nulla modi iusto delectus rem?
        </p>
      </div>

      <iframe
        className="mt-7 rounded-lg w-full h-44"
        src="https://www.youtube.com/embed/9bZkp7q19f0"
        frameborder="0"
      ></iframe>
    </section>
  );
}
