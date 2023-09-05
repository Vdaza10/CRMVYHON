import { pool } from "../../db.js";

//login 
export const Login = async(req,res) =>{
    try {
        const {correo,contraseña} = req.body;     
        console.log(req.body);
        const [rows] = await pool.query('SELECT * FROM registro where correo = ? AND contraseña = ?',[correo,contraseña]);
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message: 'Algo va mal'})
    }
}