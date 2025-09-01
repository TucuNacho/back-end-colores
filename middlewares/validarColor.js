import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
const validarColor = [
  body("nuevoColor")
    .notEmpty()
    .withMessage("Ingrese un color valido")
    .isLength({ min: 3, max: 15 })
    .withMessage("El nombre del color debe tener entre 3 y 15 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validarColor;
