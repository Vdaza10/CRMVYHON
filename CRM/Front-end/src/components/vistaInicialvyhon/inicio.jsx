import React from "react";
import { Container, ContainerTarjetas, Contenedor1, ContenedorImagen, ContenedorInicial, Contenido, Footer, Informacion, Logo, Menucontainer, Opciones, TarjetasInformativas, TextoFooter, Titule } from "./styled";
import imagen from "../img/logito.svg"
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
            <TarjetasInformativas>
                <Titule>VISTA GRAFICA</Titule>
                <ContenedorImagen style={{backgroundImage: `url(${graficas})`}}/>
                <div style={{display:"flex", flexDirection:"column", height:"55%"}}>
                <Contenido>
                    <p>
                    <b>Feedback Visual: </b> 
                    Proporcionar retroalimentación visual cuando los usuarios interactúan con la aplicación, como resaltar botones presionados o mostrar mensajes de éxito o error.                        
                    </p>
                    <p>
                    <b>Usabilidad: </b> 
                    La usabilidad se centra en hacer que la aplicación sea fácil de usar. Esto implica la disposición lógica de los elementos, la navegación intuitiva y la minimización de la fricción en la interacción del usuario.                        
                    </p>
                    <p>
                    <b>Jerarquía Visual: </b>
                    Utilizar tamaños, colores y estilos para indicar la jerarquía de la información. Esto ayuda a los usuarios a identificar rápidamente lo más importante.                        
                    </p>
                </Contenido>                    
                </div>
            </TarjetasInformativas>               
            <TarjetasInformativas>
                <Titule>SEGURIDAD</Titule>
                <ContenedorImagen style={{backgroundImage: `url(${seguridad})`}}/>
                <Contenido>
                    <b>Control de Acceso Basado en Roles(RBAC):</b> 
                    Permite asignar roles y permisos específicos a los usuarios, restringiendo su acceso solo a las funciones y datos necesarios para realizar su trabajo. Esto minimiza el riesgo de acceso no autorizado.
                </Contenido>
            </TarjetasInformativas>
            <TarjetasInformativas>
                <Titule>HERRAMIENTAS</Titule>
                <ContenedorImagen style={{backgroundImage: `url(${herramientas})`}}/>
                <div style={{display:"flex", flexDirection:"column", height:"55%"}}>
                <Contenido>
                    <p>
                    <b>Gestión de Contactos:</b> 
                    Estas herramientas permiten gestionar de manera eficiente la información de contacto de los clientes, incluyendo nombres, direcciones de correo electrónico, números de teléfono, historial de comunicación, etc.
                    en el codigo de arriba mirad                        
                    </p>
                    <p>
                    <b>Gestión de Ventas:</b> 
                    Herramientas de automatización de ventas que ayudan a los equipos de ventas a rastrear oportunidades, gestionar el ciclo de ventas y cerrar tratos de manera efectiva.                        
                    </p>
                    <p>
                    <b>Automatización de Flujo de Trabajo:</b>
                    Software que automatiza procesos internos, como la asignación de tareas, la aprobación de documentos y la gestión de flujos de trabajo.                     
                    </p> 
                </Contenido>                    
                </div>
            </TarjetasInformativas>
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
