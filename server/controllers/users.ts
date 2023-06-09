import { Request, Response } from "express";
import User from "../models/users";

export const createUser = async (req: Request, res: Response) => {
  console.log(req);
  try {
    const user = await User.create(req.body);
    return res.status(201).json({ user });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
