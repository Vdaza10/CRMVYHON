import { pool } from "../../db.js"

export const getTablaNegocio = async(req, res) => {
    try{
        const [rows]= await pool.query('SELECT negocio.nombreNegocio, negocio.etapas, negocio.fuente, contacto.nombreContacto, empresa.nombreEmpresa FROM negocio INNER JOIN contacto ON negocio.contacto = contacto.idContacto INNER JOIN empresa ON negocio.empresa = empresa.idEmpresa')
        res.json(rows)
}catch(error){
    console.error(error)
    return res.status(500).json({ message: "Algo anda mal" });
}
}