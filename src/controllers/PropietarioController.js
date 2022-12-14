import { response } from "express";
import Propietario from "../models/Propietario";

export const getPropietarios = async (req, res = response) => {
  const propietarios = await Propietario.find();

  if (propietarios) {
    res.status(201).json({
      status: "success",
      propietarios,
    });
  }
};

export const agregarPropietario = async (req, res = response) => {
  const propietario = new Propietario(req.body);

  if (propietario) {
    try {
      const propietarioSaved = await propietario.save();

      res.status(201).json({
        status: "success",
        propietarioSaved,
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

export const actualizarPropietario = async (req, res = response) => {
  const propietario = req.body;
  const { pid } = req.params;

  if (propietario) {
    try {
      const propietarioSaved = await propietario.update({ _id: pid });

      res.status(201).json({
        status: "success",
        propietarioSaved,
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

export const deletePropietario = async (req, res = response) => {
  const { pid } = req.params;
  const propietarios = await Propietario.deleteOne({ _id: pid });

  if (propietarios) {
    res.status(201).json({
      status: "success",
      propietarios,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Error deleting",
    });
  }
};
