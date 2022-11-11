import mongoose from "mongoose";
const { Schema } = mongoose;

const PropiedadSchema = Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("propiedade", PropiedadSchema);
