import connectDb from "@/connetDb";
import { NextRequest, NextResponse } from "next/server";
import WatchLists from "@/modals/watch-list";
connectDb();

export async function POST(request: NextRequest) {
  try {
    const { userId, mediaId } = await request.json();
    const mediaCard = await WatchLists.findOne({ userId, mediaId });
    console.log(mediaCard);
    if (!mediaCard) {
      return NextResponse.json(
        {
          error: "media is absent",
        },
        { status: 500 }
      );
    }
    const deleteCard = await mediaCard.deleteOne();
    return NextResponse.json(
      {
        message: "successfully deleted the media",
        success: true,
        deleteCard,
      },
      {
        status: 400,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: error,
    });
  }
}
