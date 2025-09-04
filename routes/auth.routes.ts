import { Router } from "express";
import { signIn, signUp } from "../controllers/AuthController";

const AuthRouter = Router();

AuthRouter.route("/signup").post(signUp);
AuthRouter.route("/signin").post(signIn);

export default AuthRouter;
