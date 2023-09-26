import jwt from "jsonwebtoken";
import { Secret } from "../db.js";

export const validatetoken = async (req,res,next) => {
    const accessToken = req.header("accessToken");

    console.log(accessToken)

    if(!accessToken) return res.json({message: 'Usuario no logueado'})
    try {
        const validtoken = jwt.verify(accessToken,Secret);
        console.log(validatetoken,"👌👌👌");
        console.log(validtoken)
        req.Username = validtoken.username
        req.UserId = validtoken.idRegistro;
        req.useremail = validatetoken.email;
        req.userpass = validatetoken.password;
        

        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}
// console.log(validatetoken,"👌👌👌");
