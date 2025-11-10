import mongoose from "mongoose";

// Function to connect to MongoDB
export const connectDB = async () => {
  try {
    // If already connected, don’t reconnect
    if (mongoose.connection.readyState >= 1) return;

    // Connect using your environment variable
    console.log("MONGODB_URI:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
