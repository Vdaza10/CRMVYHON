import jwt from "jsonwebtoken";
// import { Secret } from "../db.js";
import { SECRET } from "../config.js";


export const validatetoken = async (req,res,next) => {
    const accessToken = req.header('Authorization');

    console.log(accessToken, "este es token en validar❤️❤️")

    if(!accessToken) return res.status(403).json({message: 'Usuario no logueado'})
    try {
        const validtoken = jwt.verify(accessToken,SECRET);
        console.log(validtoken,"👌👌👌");
        // req.Username = validtoken.username
        // req.UserId = validtoken.idRegistro;
        next()
    } catch (error) {
        console.log("nada",error);
        return res.status(401).json({error: error.message});
        
    }
}

// export const validatetoken = async (req, res, next) => {
//     // ...
  
//     if (!req.headers.Authorization) {
//       return res.status(403).json({message: 'Usuario no logueado'});
//     }
  
//     const token = req.headers.Authorization.split(' ')[1];
  
//     try {
//       const decodedToken = jwt.verify(token, Secret);
//       console.log(decodedToken, "👌👌👌");
//       req.Username = decodedToken.username
//       req.UserId = decodedToken.idRegistro;
//       req.useremail = validatetoken.email;
//       req.userpass = validatetoken.password;
      
  
//       next();
//     } catch (error) {
//       return res.status(401).json({error: error.message});
//     }
//   };