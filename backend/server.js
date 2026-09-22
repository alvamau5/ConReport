import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();
dotenv.config();
connectDB();

/* Al hacer una peticion de url diferente del backend con
 * el frontend almacenara el dominio qu hace la peticion
 */
// const corsOptions = {
//   origin: function(origin, callback) {
//     if (!origin) {
//       //for bypassing postman req with  no origin
//       return callback(null, true);
//     }
//     if (allowedDomains.indexOf(origin) != -1) {
//       //the origin of the request is allowed
//       callback(null, true);
//     } else {
//       callback(new Error("No permitido por CORS"));
//     }
//   },
// };

// app.use(cors());

app.use(express.json());
app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
