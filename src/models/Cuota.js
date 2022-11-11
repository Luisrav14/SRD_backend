import mongoose from "mongoose";
const { Schema } = mongoose;

const CuotaSchema = Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    concepto: {
      type: Number,
      required: true,
    },
    monto: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Cuota", CuotaSchema);
