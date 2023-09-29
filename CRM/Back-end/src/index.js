import express from "express";
// import router from "./rutas/totals.routes.js";
import { router } from "./rutas/totals.routes.js";
import cors from "cors"

const app = express();


app.use(express.json());
app.use(cors())
app.listen(3005, () => {
    console.log('Servidor corriendo en puerto 3005')
})

//ruta index//
app.use(router)

