import { compare } from "../../helpers/Bycrypt.js";
import { pool } from "../../db.js";
import { Secret } from "../../db.js";
import jwt from "jsonwebtoken";
//login 
export const getLogin = async (req, res) => {
    try {
        const {correo} = req.body
        const [row] = await pool.query('SELECT nombreUsuario, correo, contraseña FROM registro WHERE correo = ?',[correo])
        res.json(row);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Algo anda mal" });
    }
    
}

export const Login = async(req,res) =>{
    try {
        const {correo,contraseña} = req.body;     
        const [rows] = await pool.query('SELECT * FROM registro where correo = ?',[correo]);
        const contraseñaEncrypt = rows[0].contraseña
        const verify = await compare(contraseña,contraseñaEncrypt)
        if(!verify){
            return res.status(404).json({message: "contraseña invalida"})
        }
        const accessToken = jwt.sign(
            { id: rows[0].idRegistro, username: rows[0].nombreUsuario, email: rows[0].correo, password: rows[0].contraseña},
            Secret,
            {
            expiresIn: "1h",
            }
        );
        res.json(accessToken)
        console.log(accessToken, '💕💕💕💕💕💕💕');
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Algo va mal'})
    }
}