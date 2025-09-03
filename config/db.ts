import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log(`\n MongoDB connected !!`);
  } catch (error) {
    console.log("mongoDB connection FAILED: ", error);
  }
};

export default connectDB;
