import { Router, response } from "express";
import { check } from "express-validator";

import { actualizarVehiculo, agregarVehiculo, deleteVehiculo, getVehiculos } from "../controllers/VehiculoController";
import { validarCampos } from "../middlelwares/validarCampos";

const vehiculoRoutes = Router();

// Propietarios Routes

vehiculoRoutes.get("/", getVehiculos);
vehiculoRoutes.post("/agregar", agregarVehiculo);
vehiculoRoutes.post("/actualizar/:pid", actualizarVehiculo);
vehiculoRoutes.post("/eliminar/:pid", deleteVehiculo);

export default vehiculoRoutes;
