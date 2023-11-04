import mongoose from "mongoose";

const watchListSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "userId must be there"],
  },
  mediaType: {
    type: String,
    required: [true, "type must be there"],
    unique: true,
  },
  mediaId: {
    type: String,
    required: [true, "mediaId must be there"],
    unique: true,
  },
  mediaImage: {
    type: String,
    required: true,
  },
  mediaTitle: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: [true, "Date is required"],
  },
});

const WatchLists =
  mongoose.models.watchLists || mongoose.model("watchLists", watchListSchema);

export default WatchLists;
