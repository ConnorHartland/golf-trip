import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  paidBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiptImg: { type: String, required: true },
  splitBetween: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Expense = mongoose.model("Expense", ExpenseSchema);

export default Expense;
