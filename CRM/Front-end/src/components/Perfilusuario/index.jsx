import React, { useState, useEffect } from "react";
import { Fondo, Header, Parrafo, Parrafo1, Main, ContenedorPerfil, InformacionActivacion, ImagenPerfil, Fecha, ContenedorRegistro, Registro, DatosUsuario, Informacion, Nombre, Editar, Caja, Container, ContenedorPassword } from "./styled";
import IPerfil from "../img/perfil.jpg";
import Menu from "../menu/principal";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


function PerfilUsuario() {
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({});

    let navigate = useNavigate();

    useEffect(() => {

        const userToken = localStorage.getItem("user");
        if(userToken){
            try {
            const token = jwt_decode(userToken);
        console.log(token, "❤️❤️💕💕💕❤️");
        setUserData(token);
        setLoading(false);
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                navigate('/'); 
            }
        }else{
            navigate('/');
        }
    
    },[navigate])

    return (
        <>
            {loading ? (
                <>
                    <h1>Cargando......</h1>
                </>
            ) : (

                <Fondo>
                    {/* <UserEditar
                status={modalAbierta}
                changeStatus={setModalAbierta}
                userData={userData}
            /> */}

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
                                <h3>Datos personales</h3>
                                <Container>
                                    <Informacion>
                                        <Nombre>Nombre:</Nombre>
                                        <Nombre>Email:</Nombre>
                                        <Nombre>contraseña:</Nombre>
                                    </Informacion>
                                    <Informacion>
                                        <Nombre>{userData.username}</Nombre>
                                        <Nombre>{userData.email}</Nombre>
                                        <ContenedorPassword  type="password" value={userData.password} ></ContenedorPassword>

                                        {/* <Nombre> {token.password} </Nombre> */}
                                    </Informacion>
                                </Container>
                                  <Editar>Editar</Editar>

                            </DatosUsuario>
                        </ContenedorPerfil>
                    </Main>
                </Fondo>
            )}
        </>
    )
}

export default PerfilUsuario;