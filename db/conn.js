import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

mongoose.set("strictQuery", false);
const connection = async () => {
  const URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected Successfully!");
  } catch (err) {
    console.log("Unable to connect to database");
  }
};

export default connection;
