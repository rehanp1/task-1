import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";
dotenv.config();

export const signUp = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password }: UserDetails = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password }: { email: string; password: string } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      userExists.password!
    );

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    const userPayload = {
      id: userExists._id,
      firstName: userExists.firstname,
      email: userExists.email,
      role: userExists.role,
    };

    const token = jwt.sign(
      userPayload,
      process.env.SECRET_KEY || "secret_key",
      {
        expiresIn: "1h",
      }
    );

    res.cookie("task", token, {
      httpOnly: true,
      secure: false,
      sameSite: true,
      maxAge: 1 * 60 * 60 * 1000,
    });

    res.status(200).json({ success: true, user: userPayload });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
