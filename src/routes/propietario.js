import { Router, response } from "express";
import { check } from "express-validator";

import { getPropietarios, agregarPropietario } from "../controllers/PropietarioController";
import { validarCampos } from "../middlelwares/validarCampos";

const propietarioRoutes = Router();

// Propietarios Routes

propietarioRoutes.get("/propietarios", getPropietarios);
propietarioRoutes.post("/propietarios/agregar",
  [
    check('rfc', 'El rfc es obligatorio').not().isEmpty(),
    check('curp', 'El curp es obligatorio').not().isEmpty(),
    check('clave_catastral', 'El clave_catastral es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
  ],
  agregarPropietario
);

export default propietarioRoutes;
