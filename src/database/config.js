import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log("[DATABASE] Status: connected");
  } catch (error) {
    console.log(error);
    throw new Error("[DATABASE] Status: error");
  }
};

export default dbConnection;
