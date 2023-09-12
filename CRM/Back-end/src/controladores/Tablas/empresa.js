import { pool } from "../../db.js"

export const getTablaEmpresa = async(req, res) => {
    try{

        const [rows]=await  pool.query('SELECT empresa.idEmpresa, empresa.nombreEmpresa, segmento.segmento, empresa.url, empresa.descripcion FROM empresa INNER JOIN segmento ON empresa.segmento = segmento.idSegmento ')

        res.json(rows)
}catch(error){
    console.error(error)
    return res.status(500).json({ message: "Algo anda mal" });
}
}

export const updatetablaEmpresa = async (req, res) => {
    try {
        const {nombreEmpresa, segmento, url, descripcion} = req.body;
        const {idEmpresa}=req.params;
        const updateData = await pool.query(
            'UPDATE empresa SET nombreEmpresa = IFNULL(?, nombreEmpresa), segmento = IFNULL(?,segmento), url = IFNULL(?,url), descripcion = IFNULL(?,descripcion) WHERE idEmpresa = ?',
            [nombreEmpresa, segmento, url, descripcion,idEmpresa]
        );
        res.status(200).json({ message: 'Actualizada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error al actualizar' });
    }
};

export const deleteTablaEmpresa = async (req, res) => {
    try {
        const [row] = await pool.query('DELETE FROM empresa WHERE idEmpresa = ?', [req.params.idEmpresa]);
        res.status(200).json({message:' registro eliminado'})
    }catch (error){
        res.status(500).json({message:'No se pudo eliminar el registro'})
    }
}