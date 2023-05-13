import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  golfCourse: { type: mongoose.Schema.Types.ObjectId, ref: "GolfCourse" },
});

const Team = mongoose.model("Team", TeamSchema);

export default Team;
