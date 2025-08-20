import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
export default class Colores {
    constructor() {
        this.app= express()
        this.port= process.env.PORT || 3000
        this.middlewares()
        }
        middlewares(){
            this
        }
    }
