import { response } from "express";
import Refrendo from "../models/Refrendo";

export const getRefrendo = async (req, res = response) => {
  const refrendos = await Refrendo.find();

  if (refrendos) {
    res.status(201).json({
      status: "success",
      refrendos,
    });
  }
};

export const agregarRefrendo = async (req, res = response) => {
  const refrendo = new Refrendo(req.body);

  if (refrendo) {
    try {
      const refrendoSaved = await refrendo.save();

      res.status(201).json({
        status: "success",
        refrendoSaved,
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

export const actualizarRefrendo = async (req, res = response) => {
  const refrendo = req.body;
  const { rid } = req.params;

  if (refrendo) {
    try {
      const refrendoSaved = await refrendo.update({ _id: rid });

      res.status(201).json({
        status: "success",
        refrendoSaved,
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

export const deleteRefrendo = async (req, res = response) => {
  const { pid } = req.params;
  const refrendo = await Refrendo.deleteOne({ _id: pid });

  if (refrendo) {
    res.status(201).json({
      status: "success",
      refrendo,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Error deleting",
    });
  }
};
