import { Router } from "express";
import { check } from "express-validator";

import { addAdministrador, getAdminisradores } from "../controllers/administrador.js";

import { validarCampos } from "../middlelwares/validarCampos.js";

const administradorRoutes = Router();

administradorRoutes.get('/', getAdminisradores)

administradorRoutes.post(
    '/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isLength({ min: 6 }),
        validarCampos
    ],
    addAdministrador
)

export default administradorRoutes;
