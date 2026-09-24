import mongoose from "mongoose";

const isValidId = (id) => mongoose.isValidObjectId(id);

const validateReportId = (req, res, next) => {
  if (!isValidId(req.params.id)) {
    res.status(400).send({ message: "Invalid report ID" });
    return;
  }
  next();
};

export { isValidId, validateReportId };
