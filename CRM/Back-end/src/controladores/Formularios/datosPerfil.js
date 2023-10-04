import { pool } from "../../db.js";

// export const getDatosPerfil = async(req,res) => {
//     try {
//         const [rows] = await pool.query()

//         res.json(rows)
//     } catch (error) {
//         console.error(error)
//     return res.status(500).json({ message: "Algo anda mal" });
//     }
// }

// export const datosAdicionalesPerfil = async (req, res) => {
//     try {
//       const idRegistro = req.params.idRegistro; // Corregido: Debe ser req.params en lugar de res.params
  
//       const {
//         identificacion,
//         tipoDocumento,
//         fechaNacimiento,
//         nacionalidad,
//         contacto,
//         lugarResidencia,
//         sexo,
//         edad
//       } = req.body;
  
//       const [rows] = await pool.query(
//         "INSERT INTO datosperfil (identificacion, registro, tipoDocumento, fechaNacimiento, nacionalidad, contacto, lugarResidencia, sexo, edad) " +
//         "SELECT ?, registro.idRegistro, datossecundarios.tipo_documento, ?, ?, ?, ?, datossecundarios.genero_sexo, FLOOR(DATEDIFF(NOW(), ?) / 365) " +
//         "FROM registro " +
//         "INNER JOIN datossecundarios ON registro.idRegistro = datossecundarios.idRegistro " +
//         "WHERE registro.idRegistro = ?;",
//         [identificacion, fechaNacimiento, nacionalidad, contacto, lugarResidencia, sexo, fechaNacimiento, idRegistro]
//       );
  
//       console.log(rows);
  
//       res.send({
//         identificacion,
//         tipoDocumento,
//         fechaNacimiento,
//         nacionalidad,
//         contacto,
//         lugarResidencia,
//         sexo,
//         edad
//       });
//     } catch (error) {
//       console.error(error, "paila"); // Corregido: Debe ser console.error en lugar de console.log
//       return res.status(500).json({ message: "algo va mal" });
//     }
//   };

// export const getTipoDocumento = async (req, res) => {
//     try {
//         const [tipoDocumentoRows] = await pool.query('SELECT * FROM tipo_documento;');
//         res.json(tipoDocumentoRows);
//     } catch (error) {
//         return res.status(500).json({ message: 'NO VA' });
//     }
// };
export const getTipoDocumento = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM tipo_documento');
        res.json(rows)

    } catch (error) {
        return res.status(500).json({message: 'NO VA'})
    }
};

export const getGenero = async(req,res) =>{
    try {
        const [sexoRows] = await pool.query('SELECT * FROM sexo');
        res.json(sexoRows)

    } catch (error) {
        return res.status(500).json({message: 'NO VA'})
    }
};





export const datosAdicionalesPerfil = async (req, res) =>{
    try {
        const {idRegistro}= req.params
        const {identificacion,tipo_documento,fechaNacimiento,nacionalidad,Telefono,lugarResidencia,sexo,edad} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO datospersonales (identificacion,registro,tipo_documento,fechaNacimiento,nacionalidad,Telefono,lugarResidencia,edad,sexo) VALUES (? ,(SELECT idRegistro FROM registro WHERE idRegistro = ?) , (SELECT tipo_documento.id_personal FROM tipo_documento where id_personal = ?),? ,? ,? ,? , FLOOR(DATEDIFF(NOW(), fechaNacimiento) / 365),(SELECT sexo.id_sexo FROM sexo WHERE id_sexo = ?));",
            [identificacion,idRegistro,tipo_documento,fechaNacimiento,nacionalidad,Telefono,lugarResidencia,sexo, edad]
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



