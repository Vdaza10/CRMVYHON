import { pool } from "../../db.js";
import { encryptPassword } from "../../helpers/Bycrypt.js";
import jwt from "jsonwebtoken";
import { Secret } from "../../db.js";
import crypto from 'crypto'
import nodemailer from 'nodemailer'


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

export const createUsers = async (req, res) => {
    try {
        const { nombreUsuario, nombreEmpresa, correo, contraseña } = req.body;
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
                contraseña,
                mensaje: "registro_exitoso"
            });
        
            
        
    } catch (error) {
    
        console.error(error); // Puedes agregar un registro del error para debug
        return res.status(500).json({ message: 'Algo va mal...' });
    }
}

// export const  recuperar = async(req, res) =>{
//     try {
//         const {correo} = req.body
//         const existe = 'SELECT correo FROM registro where correo = ?'
//         const evaluar = [correo];
//         const [resultado] = await pool.query(existe, evaluar);
//         if (resultado.length > 0) {

//             return res.json({ message: "correo_existe" });
//         }else{
//             return res.json({ message: "correo_no_existe" });
//         }

//     }
//     catch (error){
//         console.error(error); // Puedes agregar un registro del error para debug
//         return res.status(500).json({ message: 'Algo va mal' });
//     }
// } 

// export const  recuperar = async(req, res) =>{
//     try {
//         const {correo} = req.body
//         const existe = 'SELECT correo, contraseña FROM registro where correo = ?'
//         const evaluar = [correo];
//         const [resultado] = await pool.query(existe, evaluar);
//         if (resultado.length > 0) {
//             const usuario = resultado[0];
//             const contrasenaValida = crypto.randomBytes(20).toString('hex');// aleatorio
//             const contraseñaExpirada = new Date(Date.now() + 3600000);// expiracion
//             await pool.query('INSERT INTO reset_tokens (usuario, correo, contrasenaValida, contraseñaExpirada) VALUES (?, ?, ?, ?)', [usuario, correo, contrasenaValida, contraseñaExpirada]);
            
//             const transporter = nodemailer.createTransport({
//                 service: 'vyhoncrm@gmail.com',
//                 auth:{
//                     user: 'hdealba30@gmail.com',
//                     pass: '$2a$10$rvwmTd94t/Xa.J2X0TYQOu/TkMJS5FTLHUX3QTI/xSlVVscdmOKO6',
//                 }
//             })
//             const mailOptions = {
//                 from: 'hdealba30@gmail.com',
//                 to: usuario.correo,
//                 subject: 'contraseña generada',
//                 text: `tu contraseña es: ${contrasenaValida}`
//             }
//             transporter.sendMail(mailOptions, (error, info)=> {
//                 if(error){
//                     console.error(error);
//                     return res.status(500).json({
//                         message: 'enviar correo'});
//                 } else{
//                     console.log('correo enviando:' +info.response);
//                     return res.json({message: 'correo_existe'})
//                 }
//             })
//         }else{
//             return res.json({ message: "correo_no_existe" });
//         }
//     }
//     catch (error){
//         console.error(error); // Puedes agregar un registro del error para debug
//         return res.status(500).json({ message: 'prueba...' });
//     }
// } 

export const  recuperar = async(req, res) =>{
    try {
        const {correo} = req.body
        const existe = 'SELECT correo, contraseña FROM registro where correo = ?'
        const evaluar = [correo];
        const [resultado] = await pool.query(existe, evaluar);
        if (resultado.length > 0) 
        
        {
            const contrasenaValida = crypto.randomBytes(20).toString('hex');// aleatorio
            console.log('Contraseña generada:', contrasenaValida);
            console.log('Longitud de la contraseña generada:', contrasenaValida.length);
            const linkAleatorio = generateRandomLink();
            const contraseñaExpirada = new Date(Date.now() + 3600000);// expiracion
            await pool.query('INSERT INTO reset_tokens (correo, contrasenaValida, contraseñaExpirada) VALUES (?, ?, ?)', [correo, contrasenaValida, contraseñaExpirada]);
            
            const transporter = nodemailer.createTransport({
                service: 'crmVyhon@outlook.com',
                auth:{
                    user: 'crmVyhon@outlook.com',
                    pass: 'Vyhon2023',
                }
            })
            const mailOptions = {
                from: 'crmVyhon@outlook.com',
                to: correo,
                subject: 'contraseña generada',
                text: `tu contraseña es: ${contrasenaValida} Recupera tu contraseña aqui: ${linkAleatorio}`
            }
            transporter.sendMail(mailOptions, (error, info)=> {
                if(error){
                    console.error(error);
                    return res.status(500).json({
                        message: 'enviar correo'});
                } else{
                    console.log('correo enviando:' +info.response);
                    return res.json({message: 'correo_existe'})
                }
            })
        }else{
            return res.json({ message: "correo_no_existe" });
        }
    }
    catch (error){
        console.error(error); // Puedes agregar un registro del error para debug
        return res.status(500).json({ message: 'prueba...' });
    }
} 

function generateRandomLink (){
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const linkLength = 32;
    let link = '';
    for (let i = 0; i < linkLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length)
        link += characters.charAt(randomIndex);
    }
    const sitioUrl = 'http://localhost:3000/restablecer'
    return sitioUrl + link
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
