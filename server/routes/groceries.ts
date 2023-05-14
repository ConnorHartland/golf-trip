// Create routes for groceries
// ********************************************************

// Imports
import express from "express";
import {
  createGrocery,
  deleteGrocery,
  getAllGroceries,
} from "../controllers/groceries";

// Create router
const router = express.Router();

// Create routes
router.post("/", createGrocery);
router.get("/", getAllGroceries);
router.delete("/:id", deleteGrocery);

// Export
export default router;
