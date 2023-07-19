import Post from "../../../../Model/Post";
import ConnectDB from "../../../../lib/ConnectDB";
import { NextResponse } from "next/server";

// HTTP GET /api/gallery/:id
// Get a post by id
// Route /api/gallery/:id
export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    await ConnectDB();
    const post = await Post.findOne({ _id: id });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

// HTTP DELETE /api/gallery/:id
// Delete a post by id
// Route /api/gallery/:id

export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    await ConnectDB();
    const post = await Post.findOneAndDelete({ _id: id });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
