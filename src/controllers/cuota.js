import Cuota from "../models/Cuota";

export const addCuota = async (req, res = response) => {

    const { uid, concepto, monto } = req.body;

    const couta = new Cuota({ uid, concepto, monto });

    try {
        const newCuota = couta.save();
        res.status(200).json({
            ok: true,
            newCuota
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error, llame al administrador'
        })
    }

}

export const getCuotas = async (req, res = response) => {

    const cuotas = Cuota.find();

    res.status(200).json({
        ok: true,
        cuotas
    })

}

export const deleteCuota = async (req, res = response) => {

    const id = req.body.id;

    try {
        const cuota = await Cuota.findById(id);
        if (cuota) {
            const cuotaDelete = await Cuota.findByIdAndDelete(id);
            res.status(200).json({
                ok: true,
                msg: 'Cuota eliminada'
            })
        } else {
            res.status(404).json({
                ok: false,
                msg: 'Cuota no encontrada'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Id no valido'
        })
    }

}

export const updateCuota = async (req, res = response) => {

    const { uid, concepto, monto, id } = req.body;

    try {
        const cuota = await Cuota.findById(id);
        if (cuota) {
            try {
                const cuotaUpdated = await Cuota.findByIdAndUpdate(id, { uid, concepto, monto });
                res.status(200).json({
                    ok: true,
                    cuota: cuotaUpdated
                })
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'Error, llame al administrador'
                })
            }
        } else {
            res.status(404).json({
                ok: false,
                msg: 'Cuota no encontrada'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Id no valido'
        })
    }

}