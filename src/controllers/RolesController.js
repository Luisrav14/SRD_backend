import { response } from "express";
import Role from "../models/Role";

export const getRoles = async (req, res = response) => {
  const roles = await Role.find();

  if (roles) {
    res.status(201).json({
      status: "success",
      refrendos,
    });
  }
};

export const agregarRole = async (req, res = response) => {
  const role = new Role(req.body);

  if (role) {
    try {
      const roleSaved = await role.save();

      res.status(201).json({
        status: "success",
        roleSaved,
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

export const actualizarRole = async (req, res = response) => {
  const role = req.body;
  const { rid } = req.params;

  if (role) {
    try {
      const roleSaved = await role.update({ _id: rid });

      res.status(201).json({
        status: "success",
        roleSaved,
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

export const deleteRole = async (req, res = response) => {
  const { rid } = req.params;
  const role = await Role.deleteOne({ _id: rid });

  if (role) {
    res.status(201).json({
      status: "success",
      role,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Error deleting",
    });
  }
};
