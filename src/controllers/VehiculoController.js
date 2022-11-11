import { response } from "express";
import Vehiculo from "../models/Vehiculo";

export const getVehiculos = async (req, res = response) => {
  const vehiculos = await Vehiculo.find();

  if (vehiculos) {
    res.status(201).json({
      status: "success",
      vehiculos,
    });
  }
};

export const agregarVehiculo = async (req, res = response) => {
  const vehiculo = new Vehiculo(req.body);

  if (vehiculo) {
    try {
      const vehiculoSaved = await vehiculo.save();

      res.status(201).json({
        status: "success",
        vehiculoSaved,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  } else {
    res.status(500).json({
      status: "error",
      message: "No se envió ningún dato",
    });
  }
};

export const actualizarVehiculo = async (req, res = response) => {
  const vehiculo = req.body;
  const { vid } = req.params;

  if (vehiculo) {
    try {
      const vehiculoSaved = await vehiculo.update({ _id: vid });

      res.status(201).json({
        status: "success",
        vehiculoSaved,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  } else {
    res.status(500).json({
      status: "error",
      message: "No se envió ningún dato",
    });
  }
};

export const deleteVehiculo = async (req, res = response) => {
  const { vid } = req.params;
  const vehiculo = await Vehiculo.deleteOne({ _id: vid });

  if (vehiculo) {
    res.status(201).json({
      status: "success",
      vehiculo,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Error deleting",
    });
  }
};
