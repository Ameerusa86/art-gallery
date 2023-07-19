import User from "../../../Model/User";
import ConnectDB from "../../../lib/ConnectDB";
import { NextResponse } from "next/server";

// HTTP Method GET /users
// Get all users
// Route: /api/users
export const GET = async (request) => {
  try {
    await ConnectDB();
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json("Error connecting to database", { status: 500 });
  }
};

// HTTP Method POST /users
// Post a new user
// Route: /api/users

export const POST = async (request) => {
  const { username, password, email } = request.json();

  try {
    await ConnectDB();
    const newUser = await User.create({ username, password, email });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json("Error connecting to database", { status: 500 });
  }
};
