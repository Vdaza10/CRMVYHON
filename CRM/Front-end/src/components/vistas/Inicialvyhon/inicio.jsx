import React from "react";
import {Container,ContainerTarjetas,Contenedor1,ContenedorImagen,ContenedorInicial,Footer,Logo,Menucontainer,Opciones,TarjetasInformativas,TextoFooter} from "./styled";
import imagen from "../../img/logito.svg";
import inicio from "../../img/crminicio.jpg";
import herramientas from "../../img/herramientas.png";
import graficas from "../../img/graficas.jpeg";
import seguridad from "../../img/seguridad.webp";
import { Link } from "react-router-dom";
import "../../../App.css"


const Inicio = () => {
  return (
    <>
      <ContenedorInicial style={{backgroundColor:"blue"}}>
        <Contenedor1>
          <Logo src={imagen}></Logo>
        </Contenedor1>
        <Menucontainer>
          <Link
            to="registrarse"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Opciones>Crear su cuenta</Opciones>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Opciones>Iniciar sesion</Opciones>
          </Link>
        </Menucontainer>
      </ContenedorInicial>
      <Container
        style={{
          backgroundImage: `url(${inicio})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height:"90%"
        }}
      >
        <ContainerTarjetas className="boxTarjet">
          <TarjetasInformativas>
            <h2>VISTA GRAFICA </h2>
            <ContenedorImagen
              style={{ backgroundImage: `url(${graficas})` }}
            ></ContenedorImagen>
            <p >
              <b>Feedback Visual:</b> Proporcionar retroalimentación visual
              cuando los usuarios interactúan con la aplicación, como resaltar
              botones presionados o mostrar mensajes de éxito o error
              <p>
                <b>Usabilidad:</b> La usabilidad se centra en hacer que la
                aplicación sea fácil de usar. Esto implica la disposición lógica
                de los elementos, la navegación intuitiva y la minimización de
                la fricción en la interacción del usuario.
              </p>
              <p>
                <b>Jerarquía Visual:</b> Utilizar tamaños, colores y estilos
                para indicar la jerarquía de la información. Esto ayuda a los
                usuarios a identificar rápidamente lo más importante.
              </p>
            </p>
          </TarjetasInformativas>
          <TarjetasInformativas>
            <h2>SEGURIDAD</h2>{" "}
            <ContenedorImagen
              style={{ backgroundImage: `url(${seguridad})` }}
            ></ContenedorImagen>
            <p style={{ marginLeft: "1em", marginRight: "1em" }}>
              <p>
                <b>Control de Acceso Basado en Roles(RBAC):</b> Permite asignar
                roles y permisos específicos a los usuarios, restringiendo su
                acceso solo a las funciones y datos necesarios para realizar su
                trabajo. Esto minimiza el riesgo de acceso no autorizado
              </p>
            </p>
          </TarjetasInformativas>
          <TarjetasInformativas>
            <h2>HERRAMIENTAS</h2>
            <ContenedorImagen
              style={{ backgroundImage: `url(${herramientas})` }}
            ></ContenedorImagen>
            <p style={{ marginLeft: "1em", marginRight: "1em" }}>
              <p>
                <b>Gestión de Contactos:</b> Estas herramientas permiten
                gestionar de manera eficiente la información de contacto de los
                clientes, incluyendo nombres, direcciones de correo electrónico,
                números de teléfono, historial de comunicación, etc.
              </p>
              <p>
                {" "}
                <b>Gestión de Ventas:</b> Herramientas de automatización de
                ventas que ayudan a los equipos de ventas a rastrear
                oportunidades, gestionar el ciclo de ventas y cerrar tratos de
                manera efectiva
              </p>{" "}
              <b>Automatización de Flujo de Trabajo:</b> Software que automatiza
              procesos internos, como la asignación de tareas, la aprobación de
              documentos y la gestión de flujos de trabajo.
            </p>
          </TarjetasInformativas>
        </ContainerTarjetas>
        <Footer>
          <TextoFooter>informacion de contacto </TextoFooter>
        </Footer>
      </Container>
    </>
  );
};
export default Inicio;
