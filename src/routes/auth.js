import { Router } from "express";
import { check } from "express-validator";
import { auth } from "../controllers/auth";

import { validarCampos } from "../middlelwares/validarCampos";

const authRoutes = Router();

authRoutes.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe de ser de minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    auth
)

export default authRoutes;
