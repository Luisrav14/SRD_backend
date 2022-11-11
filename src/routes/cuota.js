import { Router } from "express";
import { check } from "express-validator";
import { addCuota, deleteCuota, getCuotas, updateCuota } from "../controllers/cuota";

import { validarCampos } from "../middlelwares/validarCampos";

const cuotaRoutes = Router();

cuotaRoutes.post(
    '/',
    [
        check('uid', 'El uid es obligatorio').not().isEmpty(),
        check('concepto', 'El concepto es obligatorio').not().isEmpty(),
        check('monto', 'El monto es obligatorio').not().isEmpty(),
        validarCampos
    ],
    addCuota
)

cuotaRoutes.get('/', getCuotas);

cuotaRoutes.post(
    '/update',
    [
        check('id', 'El id es obligatorio').not().isEmpty(),
        check('uid', 'El uid es obligatorio').not().isEmpty(),
        check('concepto', 'El concepto es obligatorio').not().isEmpty(),
        check('monto', 'El monto es obligatorio').not().isEmpty(),
        validarCampos
    ],
    updateCuota
)

cuotaRoutes.post(
    '/delete',
    [
        check('id', 'El id es obligatorio').not().isEmpty(),
        validarCampos
    ],
    deleteCuota
)

export default cuotaRoutes;
