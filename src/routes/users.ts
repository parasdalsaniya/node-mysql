import express, { Router } from "express";
import isAuth from "../middleware/isAuth";
import { uploadProfile } from "../controller/users";

const router: Router = express.Router();

router.post("/upload-profile", isAuth ,uploadProfile);

export default router;