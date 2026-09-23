import Report from "../models/Report.js";

const createReports = async (req, res) => {
  try {
    const { name, type, urgency, creator, date } = req.body;
    const report = new Report({ name, type, urgency, creator, date });
    const saved = await report.save();
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.msg || "Error creating report" });
  }
};
const getReports = async (req, res) => {
  // res.send({ msg: "Reports fetched successfully" });
  try {
    const reports = await Report.find().sort({ date: -1 });
    res.status(200).json(reports);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.msg || "Error fetching reports" });
  }
};

const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).send({ msg: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
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
      return res.status(404).send({ msg: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) {
      return res.status(404).send({ msg: "Report not found" });
    }
    res.status(200).json({ msg: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createReports, getReports, updateReport, getReportById, deleteReport };
