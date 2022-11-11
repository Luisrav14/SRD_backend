import mongoose from "mongoose";
const { Schema } = mongoose;

const RoleSchema = Schema(
  {
    key_name: {
      type: String,
    },
    nombre: {
      type: String,
    },
    tipo: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

export default mongoose.model("role", RoleSchema);
