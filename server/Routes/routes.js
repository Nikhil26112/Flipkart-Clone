import express from "express";
import { userSignup } from "../controller/user-controller.js";

const router = express.Router();

router.get("/signup", userSignup);

export default router;
