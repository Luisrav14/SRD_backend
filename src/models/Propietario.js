import mongoose from "mongoose";
const { Schema } = mongoose;

const PropietarioSchema = Schema(
  {
    rfc: {
      type: String,
      default: "",
    },
    curp: {
      type: String,
      default: "",
    },
    clave_catastral: {
      type: String,
    },
    correo: {
      type: String,
    },
    password: {
      type: String,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Propietario", PropietarioSchema);
