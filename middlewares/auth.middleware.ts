import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

interface IRequest extends Request {
  role: string | JwtPayload;
}
interface MyJwtPayload extends JwtPayload {
  role: string;
}

export const authenticate = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.cookies.task;

    if (!token)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const user = jwt.verify(
      token,
      process.env.SECRET_KEY || "secret_key"
    ) as MyJwtPayload;

    req.role = user.role;

    next();
  } catch (error) {
    res
      .status(403)
      .json({ success: false, message: "Token expired or invalid" });
  }
};

export const authorize = (role: string) => {
  return (req: IRequest, res: Response, next: NextFunction) => {
    if (req.role !== role) {
      return res.status(401).json({
        success: false,
        message: "As per your role you are Unauthorized.",
      });
    }

    next();
  };
};
