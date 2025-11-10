import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

(async () => {
  try {
    const uri = process.env.MONGODB_URI;
    console.log("Connecting to:", uri);
    await mongoose.connect(uri);
    console.log("Connected successfully!");
  } catch (err) {
    console.error("Connection failed:", err.message);
  } finally {
    process.exit(0);
  }
})();
