import express from "express";
import { hello } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/hello', hello);

export default router;