import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { json } from "express";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );

    console.log(
      `Mongo DB connection established. Connection Instance: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Mongo DB connection error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
