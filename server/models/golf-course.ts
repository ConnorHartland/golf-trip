import mongoose from "mongoose";

const golfCourseSchema = new mongoose.Schema({
  name: String,
  location: String,
  holes: Number,
  par: Number,
  rating: Number,
  slope: Number,
});

const GolfCourse = mongoose.model("GolfCourse", golfCourseSchema);

export default GolfCourse;
