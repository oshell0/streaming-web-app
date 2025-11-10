import mongoose from "mongoose";

// function to connect to MongoDB
export const connectDB = async () => {
  try {
    // if already connected, don’t reconnect
    if (mongoose.connection.readyState >= 1) return;

    console.log("MONGODB_URI:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
