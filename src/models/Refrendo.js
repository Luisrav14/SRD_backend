import mongoose from "mongoose";
const { Schema } = mongoose;

const RefrendoSchema = Schema(
  {
    uid: {
      type: String,
    },
    concepto: {
      type: Number,
    },
    monto: {
      type: String,
    },
    pagada: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

export default mongoose.model("refrendo", RefrendoSchema);
