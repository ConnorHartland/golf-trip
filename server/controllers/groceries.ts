// Controllers for Groceries

// Imports
import { Request, Response } from "express";
import Grocery from "../models/groceries";

// Create
export const createGrocery = async (req: Request, res: Response) => {
  try {
    const grocery = await Grocery.create(req.body);
    return res.status(201).json({ grocery });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Read
export const getAllGroceries = async (req: Request, res: Response) => {
  try {
    const groceries = await Grocery.find();
    return res.status(200).json({ groceries });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete
export const deleteGrocery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Grocery.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Grocery deleted");
    }
    throw new Error("Grocery not found");
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
