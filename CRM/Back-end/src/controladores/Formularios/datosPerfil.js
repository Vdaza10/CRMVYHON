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

export const datosAdicionalesPerfil = async (req, res) =>{
    try {
        const {idRegistro}= req.params
        const {identificacion,tipo_documento,fechaNacimiento,nacionalidad,Telefono,lugarResidencia,sexo,edad} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO datospersonales (identificacion,registro,tipo_documento,fechaNacimiento,nacionalidad,Telefono,lugarResidencia,edad,sexo) VALUES (? ,(SELECT idRegistro FROM registro WHERE idRegistro = ?) , (SELECT tipo_documento.id_personal FROM tipo_documento where id_personal = ?),? ,? ,? ,? , FLOOR(DATEDIFF(NOW(), fechaNacimiento) / 365),(SELECT genero.id_sexo FROM genero WHERE id_sexo = ?));",
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

// export const datosAdicionalesPerfil = async (req, res) =>{
//     try {
//         // const idRegistro= req.params.idRegistro
//         const {identificacion,registro,tipoDocumento,fechaNacimiento,nacionalidad,contacto,lugarResidencia,sexo,edad} = req.body;
//         const [rows] = await pool.query(
//             "INSERT INTO datosperfil (identificacion,registro,tipoDocumento,fechaNacimiento,nacionalidad,contacto,lugarResidencia,sexo,edad) VALUES (?, (SELECT idRegistro FROM registro WHERE idRegistro = ?) ,(SELECT tipo_documento FROM datossecundarios WHERE tipo_documento = ?) ,? ,? ,? ,? ,(SELECT genero_sexo FROM datossecundarios WHERE genero_sexo = ?) ,FLOOR(DATEDIFF(NOW(), fechaNacimiento) / 365))",
//             [identificacion,registro,tipoDocumento,fechaNacimiento,nacionalidad,contacto,lugarResidencia,sexo,edad]
//             );
//             console.log(rows); 

//             res.send({
//                 identificacion,
//                 registro,
//                 tipoDocumento,
//                 fechaNacimiento,
//                 nacionalidad,
//                 contacto,
//                 lugarResidencia,
//                 sexo,
//                 edad
//             });

//     } catch (error) {
//         console.log(error,"paila");
//         return res.status(500).json({messege: "algo va mal"})
//     }
// } 




export const getTipoDocumento = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT tipo_documento FROM tipo_documento');
        res.json(rows)

    } catch (error) {
        return res.status(500).json({message: 'NO VA'})
    }
};
export const getGenero = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT sexo FROM genero');
        res.json(rows)

    } catch (error) {
        return res.status(500).json({message: 'NO VA'})
    }
};