import express, { Router } from "express";
import { login } from "../controller/auth";
import { signup } from "../controller/auth";

const router: Router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

export default router;
