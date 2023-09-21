import React, { useState, useEffect } from "react";
import { Fondo, Header, Parrafo, Parrafo1, Main, ContenedorPerfil, InformacionActivacion, ImagenPerfil, Fecha, ContenedorRegistro, Registro, DatosUsuario, Informacion, Nombre, Editar, Caja, Container, ContenedorPassword } from "./styled";
import IPerfil from "../../img/perfil.jpg";
import Menu from "../../menu/principal";
import UserEditar from "../../ModalactualizarUser";
import { useNavigate } from "react-router-dom";
import Notificación from "../vistaNotificaciones/notificaciones";
import jwt_decode from "jwt-decode";


function PerfilUsuario() {
    const [modalAbierta, setModalAbierta] = useState(false);
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({});
    // const [userToke, setToken] = useState("");


    let navigate = useNavigate();


    useEffect(() => {
        const userToken = localStorage.getItem("user");
        console.log(userToken);
        if(userToken){
            try {
            const token = jwt_decode(userToken);
    setUserData(token);
    setLoading(false);
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                navigate('/'); 
            }
        }else{
            navigate('');
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
                    <UserEditar
                status={modalAbierta}
                changeStatus={setModalAbierta}
                userData={userData}
            />

                    {/* header */}
                    <Menu />
                    <Header>
                        <Parrafo>Editar perfil</Parrafo>
                        <Parrafo style={{ fontSize: "15px", color: "gray", margin: "0", marginLeft: "20px" }}>perfil</Parrafo>
                        <Caja>
                            <Parrafo1>Mi perfil</Parrafo1>
                            <Parrafo1>Notificaciones
                            <Notificación/>
                            </Parrafo1>
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
                                        <Fecha >{userData.date}</Fecha>
                                    </Registro>
                                    <br />
                                    <Registro>Actualizado por última vez el:
                                        <Fecha ></Fecha>
                                    </Registro>
                                </ContenedorRegistro>
                            </InformacionActivacion>
                            <DatosUsuario>
                                <h3>Datos personales</h3>
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
                                        <ContenedorPassword  type="password" value={userData.password} ></ContenedorPassword>
                                        
                                    </Informacion>
                                </Container>
                                <Editar onClick={() => {
                                setModalAbierta(!modalAbierta)}}>Editar</Editar>
                            </DatosUsuario>
                        </ContenedorPerfil>
                    </Main>
                </Fondo>
            )}
        </>
    )
}

export default PerfilUsuario;