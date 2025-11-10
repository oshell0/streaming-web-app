import mongoose, { Schema, model, models } from "mongoose";

const VideoSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  category: { type: String, default: "Uncategorized" },
  uploadedAt: { type: Date, default: Date.now },
});

const Video = models.Video || model("Video", VideoSchema);
export default Video;
