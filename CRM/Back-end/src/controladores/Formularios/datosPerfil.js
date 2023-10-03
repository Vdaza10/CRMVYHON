import { pool } from "../../db.js";

export const datosAdicionalesPerfil = async (req, res) =>{
    try {
        const {identificacion,registro,tipoDocumento,fechaNacimiento,nacionalidad,contacto,lugarResidencia,sexo,edad} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO datosperfil (identificacion,registro,tipoDocumento,fechaNacimiento,nacionalidad,contacto,lugarResidencia,sexo,edad) VALUES (?, (SELECT idRegistro FROM registro WHERE idRegistro = ?), ?, ?, ?, ?, ?, ?, FLOOR(DATEDIFF(NOW(), fechaNacimiento) / 365))",
            [identificacion,registro,tipoDocumento,fechaNacimiento,nacionalidad,contacto,lugarResidencia,sexo,edad]
            );
            console.log(rows);

            res.send({
                identificacion,
                registro,
                tipoDocumento,
                fechaNacimiento,
                nacionalidad,
                contacto,
                lugarResidencia,
                sexo,
                edad
            });

    } catch (error) {
        console.log(error,"paila");
        return res.status(500).json({messege: "algo va mal"})
    }
} 