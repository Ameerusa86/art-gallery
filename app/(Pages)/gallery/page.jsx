import React from "react";
import Link from "next/link";
import Card from "../../../Components/Card";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/gallery", {
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

const GalleryPage = async () => {
  const data = await getData();
  return (
    <div className="w-full flex flex-wrap gap-5 mt-5 mx-auto">
      {data.map((item) => (
        <div key={item._id}>
          <Link href={`http://localhost:3000/gallery/${item._id}`}>
            <Card
              title={item.title}
              content={item.content}
              image={item.image}
              createdAt={item.createdAt}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
