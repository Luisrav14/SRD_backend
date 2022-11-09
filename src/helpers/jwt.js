import jwt from "jsonwebtoken";

export const generarJWT = (uid, name, rol) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name, rol };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          err;
          reject("Error al generar token");
        }

        resolve(token);
      }
    );
  });
};
