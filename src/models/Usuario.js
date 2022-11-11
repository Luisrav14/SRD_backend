import mongoose from "mongoose";
const { Schema } = mongoose;

const UsuarioSchema = Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    apellido_pat: {
      type: String,
      require: true,
    },
    apellido_mat: {
      type: String,
      require: true,
    },
    nombre_completo: {
      type: String,
      require: true,
    },
    fecha_nacimiento: {
      type: Date,
      require: true,
    },
    correo: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    celular: {
      type: Number,
      require: true,
    },
    telefono: {
      type: Number,
      require: true,
    },
    // razon_social_fac: {
    //   type: String,
    //   require: true,
    // },
    // correo_fac: {
    //   type: String,
    //   require: true,
    // },
    // rfc_fac: {
    //   type: String,
    //   require: true,
    // },
    // fraccionamiento_fac: {
    //   type: String,
    //   require: true,
    // },
    // calle_fac: {
    //   type: String,
    //   require: true,
    // },
    // num_interior_fac: {
    //   type: Number,
    //   require: false,
    // },
    // num_exterior_fac: {
    //   type: Number,
    //   require: true,
    // },
    // cp_fac: {
    //   type: Number,
    //   require: true,
    // },
    // ciudad_fac: {
    //   type: String,
    //   require: true,
    // },
    // estado_fac: {
    //   type: String,
    //   require: true,
    // },
    // pais_fac: {
    //   type: String,
    //   require: true,
    // },
    // forma_pago_fac: {
    //   type: Number,
    //   require: true,
    // },
    // metodo_pago_fac: {
    //   type: String,
    //   require: true,
    // },
    // cfdi_fac: {
    //   type: String,
    //   require: true,
    // },
    // regimen_fiscal_fac: {
    //   type: Number,
    //   require: true,
    // },
    calle_pro: {
      type: String,
      require: true,
    },
    numero_pro: {
      type: Number,
      require: true,
    },
    colonia_pro: {
      type: String,
      require: true,
    },
    cp_pro: {
      type: String,
      require: true,
    },
    // link_maps_pro: {
    //   type: String,
    // },
    // clave_unidad_pro: {
    //   type: String,
    //   require: true,
    // },
    descripcion_pro: {
      type: String,
      require: true,
    },
    metros_pro: {
      type: Number,
      require: true,
    },
    metodo_pago_pro: {
      type: String,
      require: true,
    },
    cuota_pro: {
      type: Number,
      require: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Usuario", UsuarioSchema);
