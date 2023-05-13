import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/users";

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODBCLOUD!);
    console.log("MongoDB connection successful");
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

connectToDatabase();

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
