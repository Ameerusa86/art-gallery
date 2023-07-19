import Post from "../../../Model/Post";
import ConnectDB from "../../../lib/ConnectDB";
import { NextResponse } from "next/server";

// HTTP GET /gallery
// Get All Posts
// Route : /api/gallery

export const GET = async (request) => {
  await ConnectDB();

  try {
    const posts = await Post.find();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json("Error connecting to Database", { status: 500 });
  }
};

// HTTP POST /posts
// Post New Post
// Route : /api/gallery

export const POST = async (request) => {
  await ConnectDB();
  const { title, content, image } = await request.json();
  try {
    const newPost = await Post.create({ title, content, image });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json("Error connecting to Database", { status: 500 });
  }
};
