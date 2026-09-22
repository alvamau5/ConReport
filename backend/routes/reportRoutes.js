import express from "express";
import { createReports, getReports } from "../controllers/reportController.js";

const router = express.Router();

router.post("/", createReports);
router.get("/", getReports);

export default router;
