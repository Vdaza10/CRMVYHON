import React from "react";
import {
  Container,
  ContainerTarjetas,
  Contenedor1,
  ContenedorImagen,
  ContenedorInicial,
  Footer,
  Logo,
  Menucontainer,
  Opciones,
  TarjetasInformativas,
  TextoFooter,
} from "./styled";
import imagen from "../../img/logito.svg";
import inicio from "../../img/Fondo.jpeg";
import herramientas from "../../img/herramientas.png";
import graficas from "../../img/graficas.jpeg";
import seguridad from "../../img/seguridad.webp";
import { Link } from "react-router-dom";
import "../../../App.css";

const Inicio = () => {
  return (
    <>
      <ContenedorInicial>
        <Contenedor1>
          <Logo src={imagen}></Logo>
        </Contenedor1>
        <Menucontainer>
          <Link
            to="registrarse"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Opciones style={{ background: "#6ab9c0f9", textAlign: "center" }}>
              Create your account
            </Opciones>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <Opciones style={{ textAlign: "center", background: "#6ab9c0f9" }}>
              Log in
            </Opciones>
          </Link>
        </Menucontainer>
      </ContenedorInicial>
      <Container
        style={{
          height: "90%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${inicio})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.8,
          }}
        />
        <ContainerTarjetas className="boxTarjet">
          <TarjetasInformativas>
            <h2>GRAPHIC VIEW </h2>
            <ContenedorImagen
              style={{ backgroundImage: `url(${graficas})` }}
            ></ContenedorImagen>
            <p>
              <b>Visual Feedback:</b> Provide visual feedback when users
              interact with the app, such as highlighting buttons pressed or
              display success or error messages
              <p>
                <b>Usability:</b> Usability focuses on making the application is
                easy to use. This implies the logical arrangement of elements,
                intuitive navigation and minimization of friction in user
                interaction.
              </p>
              <p>
                <b>Visual Hierarchy:</b> Use sizes, colors, and styles to
                indicate the hierarchy of information. This helps the users to
                quickly identify what is most important.
              </p>
            </p>
          </TarjetasInformativas>
          <TarjetasInformativas>
            <h2>SECURITY</h2>{" "}
            <ContenedorImagen
              style={{ backgroundImage: `url(${seguridad})` }}
            ></ContenedorImagen>
            <p style={{ marginLeft: "1em", marginRight: "1em" }}>
              <p>
                <b>Role-Based Access Control(RBAC):</b> Allows you assign
                specific roles and permissions to users, restricting their
                access only to the functions and data necessary to perform your
                job. This minimizes the risk of unauthorized access
              </p>
            </p>
          </TarjetasInformativas>
          <TarjetasInformativas>
            <h2>TOOLS</h2>
            <ContenedorImagen
              style={{ backgroundImage: `url(${herramientas})` }}
            ></ContenedorImagen>
            <p style={{ marginLeft: "1em", marginRight: "1em" }}>
              <p>
                <b>Contact Management:</b> These tools allow Efficiently manage
                customer contact information customers, including names, email
                addresses, phone numbers, communication history, etc.
              </p>
              <p>
                {" "}
                <b>Gestión de Ventas:</b> automation tools sales that help sales
                teams track opportunities, manage the sales cycle and close
                deals effective way
              </p>{" "}
              <b>Workflow Automation:</b> Software that automates internal
              processes, such as assigning tasks, approving documents, and
              workflow management.
            </p>
          </TarjetasInformativas>
        </ContainerTarjetas>
        <Footer>
          <TextoFooter>contact information </TextoFooter>
        </Footer>
      </Container>
    </>
  );
};
export default Inicio;
