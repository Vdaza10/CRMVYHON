import React, { useState, useEffect } from "react";
import { Fondo, Header, Parrafo, Parrafo1, Main, ContenedorPerfil, InformacionActivacion, ImagenPerfil, Fecha, ContenedorRegistro, Registro, DatosUsuario, Informacion, Nombre, Editar, Cajaheader, Container, ContenedorPassword } from "./styled";
import IPerfil from "../../../img/perfil.jpg";
import Menu from "../../menu/principal";
import UserEditar from "../../../formularios/ModalactualizarUser";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Notificacion from "../notificaciones/notificaciones";

function PerfilUsuario() {
    const [modalAbierta, setModalAbierta] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [userToken, setUserToken] = useState(localStorage.getItem("user"));


    const [mostrarnotifcacion, setMostrarnotificacion] = useState(true);

    const notificacionClick = () => {
        // Cambia el estado mostrarNotificacion
        setMostrarnotificacion(!mostrarnotifcacion);
    };
    
    let navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            try {
                const token = jwt_decode(userToken);
                setUserData(token);
                setLoading(false);
                console.log(token, "💕💕💕💕");
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                navigate('/');
            }
        } else {
            navigate('/');
        }
    }, [navigate,userToken]);

    const actualizarUsuario = () => {
        const updateUserToken = localStorage.getItem("user");
        console.log(`Variable updateuserToken -->${updateUserToken}`);
        if (updateUserToken) {
         try {
            const token = jwt_decode(updateUserToken);
            setUserData(token);
            setUserToken(updateUserToken)
          } catch (error) {
            console.error("Error al decodificar el token:", error);
            navigate('/');
          }
        }
        console.log(updateUserToken,"🤷‍♂️🤷‍♂️");
      };


    return (
        <>
            {loading ? (
                <>
                    <h1>Cargando......</h1>
                </>
            ) : (
                <>
                    {mostrarnotifcacion  ? (
                        <>
                            <Fondo>
                                <UserEditar
                                    status={modalAbierta}
                                    changeStatus={setModalAbierta}
                                    userData={userData}
                                    onUserUpdate={actualizarUsuario}
                                />
                                {/* header */}
                                <Menu />
                                <Header>
                                    <Parrafo>Editar perfil</Parrafo>
                                    <Cajaheader>
                                        <Parrafo1>Mi perfil</Parrafo1>
                                        <Parrafo1 onClick={notificacionClick}>Notificaciones</Parrafo1>
                                    </Cajaheader>
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
                                                    <Fecha type="date">{userData.date}</Fecha>
                                                </Registro>
                                                <br />
                                                <Registro>Actualizado por última vez el:
                                                    <Fecha type="date">09/08/2023 08:12</Fecha>
                                                </Registro>
                                            </ContenedorRegistro>
                                        </InformacionActivacion>
                                        <DatosUsuario>
                                            <h3 style={{ marginLeft: "20px" }}>Datos personales</h3>
                                            <Container>
                                                <Informacion>
                                                    <Nombre>Nombre:</Nombre>
                                                    <Nombre>Empresa:</Nombre>
                                                    <Nombre>Email:</Nombre>
                                                    <Nombre>contraseña:</Nombre>
                                                </Informacion>
                                                <Informacion>
                                                    <Nombre>{userData.username.toUpperCase()}</Nombre>
                                                    <Nombre>{userData.nombreEmpresa.toUpperCase()}</Nombre>
                                                    <Nombre>{userData.email.toUpperCase()}</Nombre>
                                                    <ContenedorPassword type="password" value={userData.password}></ContenedorPassword>
                                                </Informacion>
                                            </Container>
                                            <Editar onClick={() => {
                                                setModalAbierta(!modalAbierta);
                                            }}>Editar</Editar>
                                        </DatosUsuario>
                                    </ContenedorPerfil>
                                </Main>
                            </Fondo>
                        </>
                    ) : (
                        <>
                            <Notificacion cambiarAperfil={notificacionClick} />
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default PerfilUsuario;