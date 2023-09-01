import React from "react";
import { ContainerTarjetas, Contenedor1, ContenedorImagen, ContenedorInicial, Informacion, Logo, Menucontainer, Opciones, TarjetasInformativas } from "./styled";
import imagen from "../img/logito.svg"
// import imagen1 from "../img/pruebainicio.avif"
import inicio from "../img/crminicio.jpg"
import herramientas from "../img/herramientas.png"
import graficas from "../img/graficas.jpeg"
import seguridad from "../img/seguridad.webp"
import { Link } from "react-router-dom";


const Inicio = () => {
    return(
        <>
        
    <ContenedorInicial>
        <Contenedor1>
            <Logo src={imagen}></Logo>
            

        </Contenedor1>
        <Menucontainer>
            <Link to="registrarse" style={{textDecoration:"none", color:"white"}}><Opciones>Crear su cuenta</Opciones></Link>
            <Link to="principal" style={{textDecoration:"none", color:"white"}}><Opciones >Iniciar sesion</Opciones></Link>
            

        </Menucontainer>
        </ContenedorInicial>
        <Informacion style={{backgroundImage:`url(${inicio})` , backgroundRepeat: "no-repeat", backgroundSize:"cover"}}><ContainerTarjetas>
            <TarjetasInformativas>VISTA GRAFICA <ContenedorImagen style={{backgroundImage: `url(${graficas})` ,backgroundRepeat: "no-repeat", backgroundSize:"cover"}}></ContenedorImagen></TarjetasInformativas>
            <TarjetasInformativas>SEGURIDAD <ContenedorImagen style={{backgroundImage: `url(${seguridad})` ,backgroundRepeat: "no-repeat", backgroundSize:"cover"}}></ContenedorImagen></TarjetasInformativas>
            <TarjetasInformativas>HERRAMIENTAS<ContenedorImagen style={{backgroundImage: `url(${herramientas})` ,backgroundRepeat: "no-repeat", backgroundSize:"cover"}}></ContenedorImagen></TarjetasInformativas>
            
            </ContainerTarjetas>
            </Informacion> 
    
        </>
    );
}
export default Inicio
