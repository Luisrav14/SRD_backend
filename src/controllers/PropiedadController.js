import { response } from "express";
import Propiedad from "../models/Propiedad";

export const getPropiedades = async (req, res = response) => {
  const propiedades = await Propiedad.find();

  if (propiedades) {
    res.status(201).json({
      status: "success",
      propiedades,
    });
  }
};

export const agregarPropiedad = async (req, res = response) => {
  const propiedad = new Propiedad(req.body);

  if (propiedad) {
    try {
      const propiedadSaved = await propiedad.save();

      res.status(201).json({
        status: "success",
        propiedadSaved,
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

export const actualizarPropiedad = async (req, res = response) => {
  const propiedad = req.body;
  const { pid } = req.params;

  if (propiedad) {
    try {
      const propiedadSaved = await propiedad.update({ _id: pid });

      res.status(201).json({
        status: "success",
        propiedadSaved,
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

export const deletePropidad = async (req, res = response) => {
  const { pid } = req.params;
  const propiedad = await Propiedad.deleteOne({ _id: pid });

  if (propiedad) {
    res.status(201).json({
      status: "success",
      propiedad,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Error deleting",
    });
  }
};
