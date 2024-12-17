import React from "react";
import Image from "next/image";
import slide1 from "../../public/slide1.jpg"; // Correct image import

const CarouselItem: React.FC = () => {
  return (
    <div
      className="flex items-center justify-between text-white h-screen px-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${slide1.src})`, 
      }}
    >
      {/* Text Content */}
      <div className="max-w-md">
        <p className="uppercase text-sm tracking-wide mb-4">Summer 2020</p>
        <h1 className="text-4xl font-bold mb-4">New Collection</h1>
        <p className="text-lg mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <a
          href="#"
          className="bg-green-500 text-white uppercase font-semibold py-3 px-6 rounded shadow hover:bg-green-600 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
