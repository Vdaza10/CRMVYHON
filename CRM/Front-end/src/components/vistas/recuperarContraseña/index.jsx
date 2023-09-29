import React from "react";
import { Fondo,Contenedor,Titulo, Parrafo , ConteinerBonton , Boton1, Boton2 , Input} from "./styled";
import { Link } from "react-router-dom";
import VentanaModal2 from "../../modales/mensajeRecuperarContraseña"
import VentanaModal3 from "../../modales/mensajeContraseñaCorreo";
import { useState } from "react";   
import Axios from "axios";
import "../../../App.css"
import emailjs from '@emailjs/browser'


function Recuperar  () {

    const [email,setEmail]=useState("")

    const[estadoModal2, cambiarEstadoModal2] = useState(false)

    const VentanaModal = () =>{
        cambiarEstadoModal2(!estadoModal2)
    }

    const[estadoModal3, cambiarEstadoModal3] = useState(false)

    const VentanaModalNoencontrado = () =>{
        cambiarEstadoModal3(!estadoModal3)
    }


    const sendEmail = (user_email) => {
        const templateparams = {
            to_email: user_email,
        }
        emailjs
        .send(
            "service_sgj6zkl",
            "template_tkhf0aj",
            templateparams,
            "JiRl7pYlYGJshjdVB",
        ).then((response)=>{
            console.log("Correo electrónico enviado con éxito", response)
        }).catch((error)=>{
            console.log("Error al enviar el correo electrónico", error)
        })
    }


    const cuentaRecuperada = () => {
        if (email) {
            Axios.post(`${process.env.REACT_APP_URL_BACKEND}/users`, {
                correo: email
            })
            .then((response) => {
                if (response.data.message === "correo_existe") {
                    VentanaModal();
                    sendEmail(email); 
                } else {
                    VentanaModalNoencontrado();
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
            <Titulo>Recuperar cuenta</Titulo>
            <Parrafo>Te solicitamos amablemente que proporciones tu dirección de correo electrónico con el fin de llevar a cabo la búsqueda de tu cuenta.</Parrafo>
            <Input  type="email" placeholder="ingresar correo electronico"  onChange={(e)=> setEmail(e.target.value)} ></Input>
            <ConteinerBonton>
                <Boton1 onClick={cuentaRecuperada}>Buscar</Boton1>
                <Link to={"/"} style={{width:"35%", height:"30%"}}><Boton2>Cancelar</Boton2></Link>
            </ConteinerBonton>
            </Contenedor>
            <VentanaModal2
            estado1={estadoModal2}
            cambiarEstado1 = {cambiarEstadoModal2}
            >

            </VentanaModal2>

            <VentanaModal3
            estado3={estadoModal3}
            cambiarEstado3 = {cambiarEstadoModal3}
            >
            </VentanaModal3>
        </Fondo>
    )
}
export default Recuperar;