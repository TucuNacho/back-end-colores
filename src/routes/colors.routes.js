import { Router } from "express";
import {test} from "../controllers/colores.controllers.js"
const router= Router()

router.route('/prueba').get(test)

export default router
