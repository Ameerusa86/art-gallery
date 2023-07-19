"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

// import { UploadButton } from "@/uploadthing/react";
import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../uploadthing/core";

import { useState } from "react";
import Link from "next/link";

export default function UploadDnD() {
  const [images, setImages] =
    useState <
    {
      fileUrl,
      fileKey,
    } >
    [];

  const title = images.length ? (
    <>
      <p>Upload Completed</p>
      <p className="mt-2">{images.length} files</p>
    </>
  ) : null;

  const imgList = (
    <>
      {title}
      <ul>
        {images.map((img) => (
          <li key={img.fileUrl} className="mt-2">
            <Link href={img.fileUrl} target="_blank">
              {img.fileUrl}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <main className="flex flex-col items-center justify-start mb-4">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            // Do something with the response
            setImages(res);
            const json = JSON.stringify(res);
            console.log(json);
          }
          // alert("Upload Completed");
          <h1>Upload Completed</h1>;
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imgList}
    </main>
  );
}
