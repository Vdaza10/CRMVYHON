import { pool } from "../../db.js";



export const getTablaContacto = async(req, res) => {
    try{
        const [rows]=await  pool.query('SELECT contacto.nombreContacto, contacto.cargo,contacto.telefono, contacto.correo, contacto.nombreContacto, empresa.nombreEmpresa FROM contacto INNER JOIN empresa ON contacto.contactoEmpresa = empresa.idEmpresa ')

        res.json(rows)
}catch(error){
    console.error(error)
    return res.status(500).json({ message: "Algo anda mal" });
}
}