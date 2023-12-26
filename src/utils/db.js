import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB database ", error.message);
    process.exit(1);
  }
};
