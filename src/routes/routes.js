import { Router, response } from "express";
import { check } from "express-validator";

import { getPropietarios, agregarPropietario } from "../controllers/PropietarioController";

const routes = Router();

routes.get("/", (req, res = response) => {
  res.send("Server OK!");
});

// Propietarios Routes

routes.get("/propietarios", getPropietarios);
routes.post("/propietarios/agregar", agregarPropietario);

export default routes;
