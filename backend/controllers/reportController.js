import Report from "../models/Report.js";

const createReports = async (req, res) => {
  try {
    const { name, type, urgency, creator, date } = req.body;
    const report = new Report({ name, type, urgency, creator, date });
    const saved = await report.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("[createReports]", error.message);
    res.status(500).send({ message: error.message || "Error creating report" });
  }
};
const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ date: -1 });
    res.status(200).json(reports);
  } catch (error) {
    console.error("[getReports]", error.message);
    res
      .status(500)
      .send({ message: error.message || "Error fetching reports" });
  }
};

const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).send({ message: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
    console.error("[getReportById]", error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!report) {
      return res.status(404).send({ message: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
    console.error("[updateReport]", error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) {
      return res.status(404).send({ message: "Report not found" });
    }
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    console.error("[deleteReport]", error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createReports, getReports, updateReport, getReportById, deleteReport };
