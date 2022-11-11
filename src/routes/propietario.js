import { Router, response } from "express";
import { check } from "express-validator";

import { getPropietarios, agregarPropietario, deletePropietario, actualizarPropietario } from "../controllers/PropietarioController";
import { validarCampos } from "../middlelwares/validarCampos";

const propietarioRoutes = Router();

// Propietarios Routes

propietarioRoutes.get("/", getPropietarios);
propietarioRoutes.post("/agregar", agregarPropietario);
propietarioRoutes.post("/actualizar/:pid", actualizarPropietario);
propietarioRoutes.post("/eliminar/:pid", deletePropietario);

export default propietarioRoutes;
