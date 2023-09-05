import React from "react";
import { Container, ContainerTarjetas, Contenedor1, ContenedorImagen, ContenedorInicial, Footer, Informacion, Logo, Menucontainer, Opciones, TarjetasInformativas, TextoFooter } from "./styled";
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
    <Container style={{backgroundImage:`url(${inicio})` , backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
    <ContenedorInicial>
        <Contenedor1>
            <Logo src={imagen}></Logo>
        </Contenedor1>
        <Menucontainer>
            <Link to="registrarse" style={{textDecoration:"none", color:"white"}}><Opciones>Crear su cuenta</Opciones></Link>
            <Link to="principal" style={{textDecoration:"none", color:"white"}}><Opciones >Iniciar sesion</Opciones></Link>
        </Menucontainer>
    </ContenedorInicial>
    <Informacion >
        <ContainerTarjetas>
            <TarjetasInformativas>VISTA GRAFICA <ContenedorImagen style={{backgroundImage: `url(${graficas})`}}></ContenedorImagen><p>juhujhuh</p></TarjetasInformativas>
            <TarjetasInformativas>SEGURIDAD <ContenedorImagen style={{backgroundImage: `url(${seguridad})`}}></ContenedorImagen></TarjetasInformativas>
            <TarjetasInformativas>HERRAMIENTAS<ContenedorImagen style={{backgroundImage: `url(${herramientas})`}}></ContenedorImagen></TarjetasInformativas>
        </ContainerTarjetas>
    </Informacion> 
    <Footer>
        <TextoFooter>informacion de contacto</TextoFooter>
    </Footer>     
    </Container>     
    </>
    );
}
export default Inicio
