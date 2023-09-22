import { pool } from "../../db.js";
import { encryptPassword } from "../../helpers/Bycrypt.js";
import jwt from "jsonwebtoken";
export const getUsers = async(req,res) =>{
    try {
        const{correo}=req.body
        const email = 'SELECT correo FROM registro WHERE correo = ?'
        const guardar = [correo]
        const [enviar] = await pool.query(email,guardar)
        if(enviar.length > 0 ){
            return res.send('correo encontrado')
        }
        res.json(rows)

    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
        console.log(error.message.res.status(500));
    }
}
export const createUsers = async (req, res) => {
    try {
        
        const { nombreUsuario, nombreEmpresa, correo, contraseña } = req.body;
        const existe = 'SELECT correo FROM registro where correo = ? '
        const evaluar = [correo];
        const [resultado] = await pool.query(existe, evaluar);
        const encrypt = await encryptPassword(contraseña)
        if (resultado.length > 0) {
            return res.json({ error: "correo_existe" });
        }

        const [rows] = await pool.query(
            'INSERT INTO registro (nombreUsuario, nombreEmpresa, correo, contraseña) VALUES (?,?,?,?)',
            [nombreUsuario, nombreEmpresa, correo, encrypt]
        );

        return res.json({
            id: rows.insertId,
            nombreUsuario,
            nombreEmpresa,
            correo,
            contraseña,
            mensaje: "registro_exitoso"
        });
    } catch (error) {
        console.error(error); // Puedes agregar un registro del error para debug
        return res.status(500).json({ message: 'Algo va mal' });
}
}

export const updateUsers = async (req, res) => {
    const { id } = req.params;
  try {
    const { nombreUsuario, nombreEmpresa, correo, contraseña } = req.body;
    const [rows]  = await pool.query(
        'UPDATE registro SET nombreUsuario = COALESCE(?, nombreUsuario), nombreEmpresa = COALESCE(?, nombreEmpresa), correo = COALESCE(?, correo), contraseña = COALESCE(?, contraseña) WHERE idRegistro = ?',
    [nombreUsuario,nombreEmpresa,correo, contraseña,id]
    );
    const accessToken = jwt.sign(
        { idRegistro: rows[0].idRegistro, username: rows[0].nombreUsuario, email: rows[0].correo, password: rows[0].contraseña, nombreEmpresa: rows[0].nombreEmpresa, date: rows[0].fecha_ingreso},
        Secret,
        {
        expiresIn: "1h",
        }
    );
    res.json(accessToken)
    console.log(accessToken);

} catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar usuario' });
}
};

export const deleteUsers = async (req, res) => {
try {
} catch (error) {
    return res.status(404).json({
    message: "Register in database was not delete",
    });
}
};
