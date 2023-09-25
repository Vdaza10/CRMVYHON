import React from "react";
import { Fondo, Idioma, Ladero, Ladero1, Img, Ladero2, ContainerSelect, Ingresar , Parrafo , Parrafo1 } from "./styledRegistro";
import Registrarse from "../Input/Registro";
import Vyhon from "../../img/logito.svg"
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import VentanaModal1 from "../../mensajeRegistro";


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
            {/* <Fondo3> */}
                <Registrarse></Registrarse>
            {/* </Fondo3> */}
            <ContainerSelect title="Elegir idioma">
                <BiWorld></BiWorld>
                    <Idioma name="idioma">
                    <option value="spañol">spañol</option>
                    <option value="ingles">ingles</option>
                    <option value="portugal">portugal</option>
                    <option value="brasil">brasil</option>
                    <option value="germany">germany</option>
                    <option value="arabe">arabe</option>
                </Idioma>
                <Link to={"/principal"} style={{textDecoration:"none", color:"black",}}><Ingresar title="navegar al login">Ingrese a tu cuenta</Ingresar></Link>
            </ContainerSelect>
            {/* <p style={{marginRight:"10px"}}></p> */}
            {/* <Fondo3> */}
                <Registrarse></Registrarse>
            {/* </Fondo3> */}
            

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