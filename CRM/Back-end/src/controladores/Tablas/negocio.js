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
export const updatetablaNegocio = async (req, res) => {
    try {
        const {nombreNegocio, etapas, fuente, empresa, contacto} = req.body;
        const {idNegocio}=req.params;
        const updateData = await pool.query(
            'UPDATE negocio SET nombreNegocio = IFNULL(?, nombreNegocio), etapas = IFNULL(?,etapas), fuente = IFNULL(?,fuente),empresa = IFNULL(?,empresa), contacto = IFNULL(?,contacto) WHERE idNegocio = ?',
            [nombreNegocio, etapas, fuente, empresa, contacto, idNegocio]
        );
        res.status(200).json({ message: 'Actualizada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error al actualizar' });
    }
};

export const deleteTablaNegocio = async (req, res) => {
    try {
        const [row] = await pool.query('DELETE FROM negocio where idNegocio = ?', [req.params.id]);
        res.status(200).json({message:' registro eliminado'})
    }catch (error){
        res.status(500).json({message:'No se pudo eliminar el registro'})
    }
}