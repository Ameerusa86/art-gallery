"use client";

import "./styles/PostForm.css";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { UploadDropzone, FileUploadResponse } from "@uploadthing/react";
import "@uploadthing/react/styles.css";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          image: images.length ? images[0].fileUrl : "",
        }),
      });
      const data = await response.json();

      router.push(`/gallery`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const fileUrl = e.target.value;
    setImages([{ fileUrl, fileKey: "" }]);
  };

  return (
    <div className="flex justify-center items-center mt-4 mb-4">
      <div className="card">
        <span className="title">Add New Post</span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="group">
            <input
              placeholder="‎"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="name">Title</label>
          </div>

          <div className="group" style={{ display: "none" }}>
            <input
              placeholder="‎"
              type="text"
              value={images.length ? images[0].fileUrl : ""}
              onChange={handleImageChange}
            />
            <label htmlFor="name">Image</label>
          </div>

          <div className="group">
            <textarea
              placeholder="‎"
              id="comment"
              name="comment"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label htmlFor="comment">Content</label>
          </div>

          <button type="submit">Submit</button>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res) {
                setImages(res);
                const json = JSON.stringify(res);
                console.log(json);
              }
            }}
            onUploadError={(error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
          {images.length > 0 && (
            <div>
              <p>Upload Completed</p>
              <p className="mt-2">{images.length} file(s)</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostForm;
