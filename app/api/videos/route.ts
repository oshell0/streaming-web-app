import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb"
import Video from "../../../models/Video";

// GET: fetch videos
export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const filter = category ? { category } : {};
    const videos = await Video.find(filter).sort({ uploadedAt: -1 });

    return NextResponse.json(videos);
  } catch (err: any) {
    console.error("Error fetching videos:", err);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}

// POST: upload a new video
export async function POST(request: Request) {
  const body = await request.json();
  await connectDB();
  const newVideo = await Video.create(body);
  return NextResponse.json(newVideo);
}
