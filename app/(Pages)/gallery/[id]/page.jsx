import React from "react";
import Image from "next/image";
import DeleteButton from "@/Components/DeleteButton";

const getData = async (id) => {
  const response = await fetch(`http://localhost:3000/api/gallery/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function generateMetadata({ params }) {
  const data = await getData(params.id);

  return {
    title: data.title,
    description: data.desc,
  };
}

const GalleryPage = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="flex flex-col justify-center items-center mt-9">
      <div className="flex space-x-10 items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-lg leading-5">{data.content}</p>
        </div>
        <Image
          src={data.image}
          width={500}
          height={500}
          alt="image"
          className="rounded-lg"
        />
      </div>
      <DeleteButton id={data._id} />
    </div>
  );
};

export default GalleryPage;
