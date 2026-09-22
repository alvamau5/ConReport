import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "Reporte de Avance",
      "Reporte de Incidencia",
      "Reporte de Retrasos",
      "Minutas",
    ],
  },
  urgency: {
    type: String,
    required: true,
    enum: ["Alta", "Media", "Baja"],
  },
  creator: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Report", reportSchema);
