import express from "express";
import {
  createReports,
  getReports,
  updateReport,
  getReportById,
  deleteReport,
} from "../controllers/reportController.js";
import { validateReportId } from "../middleware/validateId.js";

const router = express.Router();

router.post("/", createReports);
router.get("/", getReports);
router.get("/:id", validateReportId, getReportById);
router.put("/:id", validateReportId, updateReport);
router.delete("/:id", validateReportId, deleteReport);

export default router;
