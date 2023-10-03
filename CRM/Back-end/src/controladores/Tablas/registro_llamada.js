import {pool} from "../../db.js"

export const getTablallamada = async(req, res) => {
    try{
        const [rows]=await  pool.query('SELECT llamada.cedula, negocio.nombreNegocio, llamada.nombre, llamada.apellido, llamada.telefono, llamada.telefonoFijo, llamada.direccion, llamada.correo, llamada.llamadaInicio, llamada.llamadaFinal, llamada.duracionLlamada FROM llamada INNER JOIN negocio ON negocio.idNegocio = llamada.negocio;')

        res.json(rows)
}catch(error){
    console.error(error)
    return res.status(500).json({ message: "Algo anda mal" });
}
}