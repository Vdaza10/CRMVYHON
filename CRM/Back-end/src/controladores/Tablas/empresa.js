import { pool } from "../../db.js"

export const getTablaEmpresa = async(req, res) => {
    try{

        const [rows]=await  pool.query('SELECT empresa.nombreEmpresa, segmento.segmento, empresa.url, empresa.descripcion FROM empresa INNER JOIN segmento ON empresa.segmento = segmento.idSegmento ')

        res.json(rows)
}catch(error){
    console.error(error)
    return res.status(500).json({ message: "Algo anda mal" });
}
}