import { Router, response } from "express";
import { check } from "express-validator";

import { actualizarRole, agregarRole, deleteRole, getRoles } from "../controllers/RolesController";
import { validarCampos } from "../middlelwares/validarCampos";

const rolesRoutes = Router();

// Roles Routes

rolesRoutes.get("/", getRoles);
rolesRoutes.post("/agregar", agregarRole);
rolesRoutes.post("/actualizar/:rid", actualizarRole);
rolesRoutes.post("/eliminar/:rid", deleteRole);

export default rolesRoutes;
