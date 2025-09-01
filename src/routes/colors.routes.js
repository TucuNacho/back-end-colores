import { Router } from "express";
import {test, crearColor, leerColor,leerColorPorId, borrarColor, editarColor} from "../controllers/colores.controllers.js"
import validarColor from "../../middlewares/validarColor.js";
const router= Router()

router.route('/prueba').get(test)
router.route('/').post(validarColor,crearColor).get(leerColor)
router.route('/:id').get(leerColorPorId).delete(borrarColor).put(validarColor,editarColor)
export default router
