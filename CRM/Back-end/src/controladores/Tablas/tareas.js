import { pool } from "../../db.js";

export const getTablaTarea = async(req, res) => {
    try{

        const [rows]=await  pool.query('SELECT negocio.nombreNegocio , tarea.asunto , tarea.responsable , tarea.tipoTarea , tarea.fecha , tarea.hora FROM tarea INNER JOIN negocio ON tarea.negocio = negocio.idNegocio')

        res.json(rows)
}catch(error){
    console.error(error)
    return res.status(500).json({ message: "Algo anda mal" });
}
}