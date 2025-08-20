import Colores from "./colors.routes.js"
import { Router } from "express"

const router = Router()

router.use('/colores',Colores)

export default router
