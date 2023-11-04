import connectDb from "@/connetDb";
import { NextRequest, NextResponse } from "next/server";
import WatchLists from "@/modals/watch-list";
connectDb();

export async function POST(request: NextRequest) {
  try {
    const { userId, mediaType, mediaImage, mediaId, mediaTitle } =
      await request.json();
    const newMedia = new WatchLists({
      userId,
      mediaType,
      mediaImage,
      mediaId,
      mediaTitle,
      createdAt: Date.now(),
    });
    const savedMedia = await newMedia.save();
    return NextResponse.json({
      message: "media added successfully",
      success: true,
      savedMedia,
    });
  } catch (error) {
    NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
}
