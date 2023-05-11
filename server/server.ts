import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 5001;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODBCLOUD!);
    console.log("MongoDB connection successful");
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
  }
};

connectToDatabase();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
