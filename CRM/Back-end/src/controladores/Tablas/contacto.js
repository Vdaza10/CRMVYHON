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

// export const deleteTablaEmpresa = async (req, res) => {
//     try {
//         const id_empresa= req.params;
//         const sqlDelete = `DELETE FROM empresa WHERE id_empresa=${id_empresa}`;
//         const result = await pool.query(sqlDelete);
//         if(!result[1].affectedRows> 0 ){
//             return   res.sendStatus(403);}
//             else{
//                 return    res.send("eliminado");}} catch (err) {console.log('Error', err)}}
//             }catch(error){
//                 console.error(error)
//                 return res.status(500).json({ message: "Algo anda mal" })
//             }
// }