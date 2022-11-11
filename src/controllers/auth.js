import { generarJWT } from "../helpers/jwt";
import Propietario from "../models/Propietario";
import Usuario from "../models/Usuario";

export const auth = async (req, res = response) => {

    const { email, password } = req.body;

    const propietario = await Propietario.find({ correo: email, password })

    const user = await Usuario.find({ correo: email, password })

    if (propietario || user) {

        if (propietario[0].password === password || user[0].password === password) {

            const token = await generarJWT(user.id, user.name, user);

            const uid = propietario[0]._id || user[0]._id;

            const name = propietario[0].curp || user[0].nombre_completo;

            res.status(200).json({
                ok: true,
                body: {
                    uid,
                    name,
                    rol: 'user',
                    metodo: user.metodo_pago_pro,
                    token
                }
            })

        } else {

            res.status(203).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            })

        }

    } else {

        res.status(404).json({
            ok: false,
            msg: 'Usuario no encontrado'
        })

    }

}