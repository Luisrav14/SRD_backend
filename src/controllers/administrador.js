import { response } from "express";
import Administrador from "../models/Administrador";

export const addAdministrador = async (req, res = response) => {

    const { nombre, correo, password, role } = req.body;

    const admin = new Administrador({ nombre, correo, password, role });

    try {

        const newAdmin = admin.save();

        res.status(200).json({
            ok: true,
            newAdmin
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error, llame al administrador'
        });
    }

}

export const getAdminisradores = async (req, res = response) => {

    const administradores = await Administrador.find();

    res.status(200).json({
        ok: true,
        administradores
    })

}