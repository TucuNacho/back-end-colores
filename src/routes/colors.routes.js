import { Router } from "express";
import {test, crearColor, leerColor,leerColorPorId, borrarColor} from "../controllers/colores.controllers.js"
const router= Router()

router.route('/prueba').get(test)
router.route('/').post(crearColor).get(leerColor)
router.route('/:id').get(leerColorPorId).delete(borrarColor)
export default router
