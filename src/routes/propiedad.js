import { Router, response } from "express";
import { check } from "express-validator";

import { actualizarPropiedad, agregarPropiedad, deletePropidad, getPropiedades } from "../controllers/PropiedadController";
import { validarCampos } from "../middlelwares/validarCampos";

const propiedadRoutes = Router();

// Propiedades Routes

propiedadRoutes.get("/", getPropiedades);
propiedadRoutes.post("/agregar", agregarPropiedad);
propiedadRoutes.post("/actualizar/:pid", actualizarPropiedad);
propiedadRoutes.post("/eliminar/:pid", deletePropidad);

export default propiedadRoutes;
