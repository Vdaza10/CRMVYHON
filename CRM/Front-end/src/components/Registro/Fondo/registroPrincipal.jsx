import React from "react";
import { Fondo, Ladero, Ladero1, Img, Ladero2, Parrafo , Parrafo1, Ingresar } from "./styledRegistro";
import Registrarse from "../Input/Registro";
import Vyhon from "../../img/logito.svg"
import { useState } from "react";
import VentanaModal1 from "../../mensajeRegistro";
import { Link } from "react-router-dom";


const Registro = () => {

const[estadoModal, cambiarEstadoModal] = useState(false)

    return (
        <>
        <Fondo>
            <Ladero>
                <Ladero1>
                </Ladero1>

                <Ladero2>
                    <Parrafo><h2 style={{margin:"0"}}>crea tu cuenta en Vyhon CRM</h2></Parrafo>
                    <Parrafo1>Únete a nosotros y crea tu cuenta para disfrutar  de una nueva y efectiva  forma de agilizar tus procesos, mejorar la rentabilidad  de tu negocio y, lo  más  importante,  mantener una comunicación  constante con tus clientes. En  Vyhon, estamos comprometidos contigo en cada paso del camino, brindándote soluciones  que te respaldan siempre. ¡Únete a nuestra comunidad y descubre cómo podemos ayudarte a alcanzar tus objetivos!</Parrafo1>
                </Ladero2>
                <Ladero1>
                    <Img src={Vyhon} alt="" />
                    <Parrafo> ¡Eleva tu eficiencia a un nuevo nivel con Vyhon CRM! </Parrafo>
                </Ladero1>

            </Ladero>
                <Registrarse></Registrarse>
                <Registrarse></Registrarse>
                <Link to={"/"} style={{textDecoration:"none", color:"black"}}><Ingresar>Ingrese a tu cuenta</Ingresar></Link>

            <VentanaModal1 
                estado={estadoModal}
                cambiarEstado = {cambiarEstadoModal}
            >
            </VentanaModal1>

        </Fondo>
        </>
    )
}
export default Registro