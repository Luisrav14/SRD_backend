import mongoose from "mongoose";
const { Schema } = mongoose;

const VehiculoSchema = Schema(
  {
    uid: {
      type: String,
    },
    placas: {
      type: String,
    },
    marca: {
      type: String,
    },
    modelo: {
      type: String,
    },
  },

  { timestamps: true }
);

export default mongoose.model("vehiculo", CuotaSchema);
