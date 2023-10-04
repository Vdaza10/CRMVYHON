import { pool } from "../../db.js";

export const datosAdicionalesPerfil = async (req, res) =>{
    try {
        const {idRegistro}= req.params
        const {identificacion,tipo_documento,fechaNacimiento,nacionalidad,Telefono,lugarResidencia,sexo,edad} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO datospersonales (identificacion,registro,tipo_documento,fechaNacimiento,nacionalidad,Telefono,lugarResidencia,edad,sexo) VALUES (? ,(SELECT idRegistro FROM registro WHERE idRegistro = ?) , (SELECT tipo_documento.id_personal FROM tipo_documento where id_personal = ?),? ,? ,? ,? , FLOOR(DATEDIFF(NOW(), fechaNacimiento) / 365),(SELECT sexo.id_sexo FROM sexo WHERE id_sexo = ?));",
            [identificacion,idRegistro,tipo_documento,fechaNacimiento,nacionalidad,Telefono,lugarResidencia,sexo,edad]
            );
            console.log(rows);

            res.send({
                identificacion,
                tipo_documento,
                fechaNacimiento,
                nacionalidad,
                Telefono,
                lugarResidencia,
                edad,
                sexo
            });

    } catch (error) {
        console.log(error,"paila");
        return res.status(500).json({messege: "algo va mal"})
    }
}


export const getTipoDocumento = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT*  FROM tipo_documento');
        res.json(rows)

    } catch (error) {
        return res.status(500).json({message: 'NO VA'})
    }
};
export const getGenero = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT* FROM sexo');
        res.json(rows)

    } catch (error) {
        return res.status(500).json({message: 'NO VA'})
    }
};
