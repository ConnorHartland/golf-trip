// Create Model for Groceries
// ********************************************************

// Imports
import mongoose from "mongoose";

// Schema
const GrocerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  purchased: { type: Boolean, required: true, default: false },
  date: { type: Date, required: true, default: Date.now },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Model
const Grocery = mongoose.model("Grocery", GrocerySchema);

// Export
export default Grocery;
