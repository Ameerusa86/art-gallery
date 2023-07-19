import Image from "next/image";
import React, { FC } from "react";

const How_it_Works_Sections = ({ title, description, image }) => {
  return (
    <div className="w-[90%] m-auto lg:max-w[1920px] gap-10">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-stretch mt-5">
        <Image
          src={image}
          width={450}
          height={450}
          alt="hero"
          className="mb-5 lg:mb-0 rounded-lg"
        />
        <div className="text-center ">
          <h1 className="text-5xl text-blue-600 font-bold mb-5">{title}</h1>
          <p className="leading-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default How_it_Works_Sections;
