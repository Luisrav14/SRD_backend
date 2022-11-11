import mongoose from "mongoose";
const { Schema } = mongoose;

const AdministradorSchema = Schema(
  {
    nombre: {
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
    role: {
      type: String,
      default: 'admin'
    },
  },
  { timestamps: true }
);

export default mongoose.model("Administrador", AdministradorSchema);
