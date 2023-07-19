import mongoose from "mongoose";
import { NextResponse } from "next/server";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    return NextResponse.json(
      { message: "Connected to MongoDB" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error connecting to MongoDB" },
      { status: 500 }
    );
  }
};

export default ConnectDB;
