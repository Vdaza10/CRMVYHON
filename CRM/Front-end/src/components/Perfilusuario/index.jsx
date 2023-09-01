import React from "react";
import { Fondo, Header, Parrafo, Parrafo1, Main, ContenedorPerfil, InformacionActivacion, ImagenPerfil, Fecha, ContenedorRegistro, Registro, DatosUsuario, Informacion, Nombre, Editar, Caja , Container } from "./styled";
import IPerfil from "../img/perfil.jpg";
import Menu from "../menu/principal";

function PerfilUsuario() {
    return (
        <>
            <Fondo>
                {/* header */}
                <Menu />
                <Header>
                    <Parrafo>Editar perfil</Parrafo>
                    <Parrafo style={{ fontSize: "15px", color: "gray", margin: "0", marginLeft: "20px" }}>perfil</Parrafo>
                    <Caja>
                        <Parrafo1>Mi perfil</Parrafo1>
                        <Parrafo1>Notificaciones</Parrafo1>
                    </Caja>
                </Header>
                {/* body */}
                <Main>
                    {/* informacion */}
                    <ContenedorPerfil>
                        <InformacionActivacion>
                            <ImagenPerfil src={IPerfil}></ImagenPerfil>
                            <ContenedorRegistro>
                                <Registro style={{ marginTop: "25px" }}>
                                    Registrado el:
                                    <Fecha type="date">14/08/2023 08:33</Fecha>
                                </Registro>
                                <br />
                                <Registro>Actualizado por última vez el:
                                    <Fecha type="date">09/08/2023 08:12</Fecha>
                                </Registro>
                            </ContenedorRegistro>
                            {/* <hr></hr> */}
                        </InformacionActivacion>
                        <DatosUsuario>
                            <h3 style={{marginLeft:"30px",color:"#646262"}}>Datos personales</h3>
                            <Container>
                                <Informacion>
                                    <Nombre style={{marginLeft:"20px"}}>Nombre:</Nombre>
                                    <Nombre style={{marginLeft:"20px"}}>Email:</Nombre>
                                    <Nombre style={{marginLeft:"20px"}}>contraseña:</Nombre>
                                </Informacion>
                                <Informacion>
                                    <Nombre style={{ textAlign: "right" ,marginRight:"20px"}}>el nombre del usuario</Nombre>
                                    <Nombre style={{ textAlign: "right" ,marginRight:"20px" }}>correo con inicio sesion</Nombre>
                                    <Nombre style={{ textAlign: "right" ,marginRight:"20px"}}> ****** </Nombre>
                                </Informacion>
                            </Container>
                            <Editar>Editar</Editar>
                        </DatosUsuario>
                    </ContenedorPerfil>
                </Main>
            </Fondo>
        </>


    )
}
export default PerfilUsuario;

