import React from "react";
import { IMG1 } from "../public/index";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto grid md:grid-cols-2 items-center py-10 lg:text-left text-center lg:max-w-[1920px]">
        <div className="lg:mb-0 mb-10">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl font-bold uppercase mb-3">
            The <span className="text-blue-600">anonymous</span> Gallery
          </h1>
          <div>
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white">
              Start Sharing
            </button>
          </div>
        </div>
        <div>
          <Image
            src={IMG1}
            width={900}
            height={900}
            alt="Hero BG"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
