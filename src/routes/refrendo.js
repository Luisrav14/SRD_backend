import { Router, response } from "express";
import { check } from "express-validator";

import { actualizarRefrendo, agregarRefrendo, deleteRefrendo, getRefrendo } from "../controllers/RefrendoController";
import { validarCampos } from "../middlelwares/validarCampos";

const refrendoRoutes = Router();

// Propietarios Routes

refrendoRoutes.get("/", getRefrendo);
refrendoRoutes.post("/agregar", agregarRefrendo);
refrendoRoutes.post("/actualizar/:rid", actualizarRefrendo);
refrendoRoutes.post("/eliminar/:rid", deleteRefrendo);

export default refrendoRoutes;
