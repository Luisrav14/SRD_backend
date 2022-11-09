import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

import dbConnection from "./src/database/config";
import routes from "./src/routes/routes";

dotenv.config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

// Rutas
app.use("/api/", routes);

app.listen(process.env.PORT, () => {
  console.log(`[SERVER] Running on port: ${process.env.PORT}`);
});
