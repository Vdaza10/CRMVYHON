import { pool } from "../../db.js";
import { encryptPassword } from "../../helpers/Bycrypt.js";
import jwt from "jsonwebtoken";
import { Secret } from "../../db.js";
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
export const getUsersid = async(req,res)=>{
    try {
        const id= req.params;
        const [rows] = await pool.query('SELECT * FROM registro WHERE id_registro=?',[id]);
    }catch{
        return res.status(401).json({message:'No se encuentra el usuario'});
    }
}
//       
export const createUsers = async (req, res) => {
    try {
        const { nombreUsuario, nombreEmpresa, correo, contraseña } = req.body;
        
        // Verificar si el correo ya existe en la base de datos
        const existe = 'SELECT correo FROM registro where correo = ? ';
        const evaluar = [correo];
        const [resultado] = await pool.query(existe, evaluar);
       
        if(!resultado.length > 0){
            return res.json({ message: "corre_no_existe" });
        }

        else if (resultado.length > 0) {
            return res.json({ message: "correo_existe" });
        } else {
            // Si el correo no existe, crear un nuevo registro
            const encrypt = await encryptPassword(contraseña)
            const [rows] = await pool.query(
                'INSERT INTO registro (nombreUsuario, nombreEmpresa, correo, contraseña) VALUES (?,?,?,?)',
                [nombreUsuario, nombreEmpresa, correo, encrypt]
            );

            return res.json({
                id: rows.insertId,
                nombreUsuario,
                nombreEmpresa,
                correo,
                contraseña, // No se debe devolver la contraseña en texto claro
                mensaje: "registro_exitoso"
            });
        }
        
    } catch (error) {
        console.error(error); // Puedes agregar un registro del error para debug
        return res.status(500).json({ message: 'Algo va mal' });
    }
}
export const updateUsers = async (req, res) => {
    const { idRegistro } = req.params;
  try {
    const { nombreUsuario, nombreEmpresa, correo, contraseña } = req.body;
  
    const [rows]  = await pool.query(
        'UPDATE registro SET nombreUsuario = COALESCE(?, nombreUsuario), nombreEmpresa = COALESCE(?, nombreEmpresa), correo = COALESCE(?, correo), contraseña = COALESCE(?, contraseña) WHERE idRegistro = ?',
    [nombreUsuario,nombreEmpresa,correo, encrypt,idRegistro]
    );
    encrypt = await encryptPassword(contraseña)
    console.log(encrypt, "contraseña incriptada exitosa");
    const refreshToken = jwt.sign(
        { idRegistro: idRegistro,username:nombreUsuario, email: correo, password:contraseña  },
        Secret,
        {
          expiresIn: "1h",
        }
    );
   
    res.json({refreshToken,
        data:{
            idRegistro,
            nombreUsuario,
            nombreEmpresa,
            correo,
            contraseña
        }})
    console.log(refreshToken,"lalala");

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
