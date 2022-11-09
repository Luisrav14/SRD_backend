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
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Propietario", PropietarioSchema);
