import { NextResponse } from "next/server";
import mongoose from "mongoose";
import DBConnect from "@/lib/DBconnect";

// The App Router requires named exports for HTTP methods (e.g., GET, POST).
// Default exports and the (req, res) signature are not supported here.
export async function GET() {
  try {
    // Attempt to connect to the database
    // Ensure that the path "@/src/lib/DBconnect" correctly points to your dbConnect function.
    await DBConnect();

    // Check Mongoose readyState. 1 means connected.
    const isConnected = mongoose.connection.readyState === 1;

    if (isConnected) {
      console.log("SUCCESS: Database connection verified!");

      // Use NextResponse.json() to return a JSON response in the App Router
      return NextResponse.json(
        {
          success: true,
          message: "Successfully connected to Azure DocumentDB!",
          databaseName: mongoose.connection.db.databaseName,
          connectionState: isConnected,
        },
        { status: 200 }
      ); // Explicitly set the status code
    } else {
      throw new Error("Mongoose readyState not 1 after connect attempt.");
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    console.error("ERROR: Database connection failed!", error);

    // Return a 500 error response using NextResponse.json()
    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to the database.",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
