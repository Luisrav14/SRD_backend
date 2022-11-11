import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

import dbConnection from "./src/database/config";
import administradorRoutes from "./src/routes/administrador";
import authRoutes from "./src/routes/auth";
import cuotaRoutes from "./src/routes/cuota";
import propietarioRoutes from "./src/routes/propietario";

dotenv.config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

// Rutas
app.use("/api/propietarios", propietarioRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/administrador", administradorRoutes);
app.use("/api/cuota", cuotaRoutes);

app.listen(process.env.PORT, () => {
  console.log(`[SERVER] Running on port: ${process.env.PORT}`);
});
