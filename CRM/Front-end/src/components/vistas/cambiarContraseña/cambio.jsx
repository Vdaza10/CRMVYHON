import React from "react";
import { Fondo,Contenedor,Titulo, Parrafo , ConteinerBonton , Boton1, Boton2 , Input} from "./styled";
import { useState } from "react";  
import { Link } from "react-router-dom";
import Axios from "axios";
import "../../../App.css"


function CambioContraseña () {

    const [email,setEmail]=useState("")

    const cuentaRecuperada = () => {
        if (email) {
            Axios.post(`${process.env.REACT_APP_URL_BACKEND}/user`, {
                correo: email
            })
            .then((response) => {
                if (response.data.message === "correo_existe") {

                } else {
                }
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            alert('Por favor, ingrese su correo para poder encontrar su cuenta');
        }
    }


    return(
        <Fondo>
            <Contenedor>
            <Titulo>Reset Account</Titulo>
            <Parrafo>We kindly request that you provide your email address so that we can reset your password..</Parrafo>
            <Input  type="email" placeholder="Old Password"  onChange={(e)=> setEmail(e.target.value)} ></Input>
            <Input  type="password" placeholder="New Password"  onChange={(e)=> setEmail(e.target.value)} ></Input>
            <ConteinerBonton>
                <Link to="/login"><Boton1 onClick={cuentaRecuperada}>restore</Boton1></Link>
                <Link to="/" style={{width:"35%", height:"30%"}}><Boton2>Cancel</Boton2></Link>
            </ConteinerBonton>
            </Contenedor>
        </Fondo>
    )
}
export default CambioContraseña