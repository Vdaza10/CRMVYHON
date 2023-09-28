import React, { useState, useEffect } from "react";
import {
  Fondo,
  Header,
  Parrafo1,
  Main,
  Container,
  Cajaheader,
  ContainPerfil,
  BoxImgPerfil,
  ImgPerfil,
  InforPerfil,
  Boxperfil,
  SectionInfor,
  HeaderInfor,
  EditButton,
  InfoPersonal,
  BoxInfo,
  InforperfilLetra,
} from "./styled";

import UserEditar from "../../../formularios/ModalactualizarUser";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Notificacion from "../notificaciones/notificaciones";

function PerfilUsuario() {
  const [modalAbierta, setModalAbierta] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [userToken, setUserToken] = useState(localStorage.getItem("user"));

  const [mostrarnotifcacion, setMostrarnotificacion] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  const notificacionClick = () => {
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
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate, userToken]);

  const actualizarUsuario = () => {
    const updateUserToken = localStorage.getItem("user");
    console.log(`Variable updateuserToken -->${updateUserToken}`);
    if (updateUserToken) {
      try {
        const token = jwt_decode(updateUserToken);
        setUserData(token);
        setUserToken(updateUserToken);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/");
      }
    }
    console.log(updateUserToken, "🤷‍♂️🤷‍♂️");
  };

  return (
    <>
      {loading ? (
        <>
          <h1>Cargando......</h1>
        </>
      ) : (
        <>
          {mostrarnotifcacion ? (
            <>
              <Fondo>
                <UserEditar
                  status={modalAbierta}
                  changeStatus={setModalAbierta}
                  userData={userData}
                  onUserUpdate={actualizarUsuario}
                />
                {/* header */}
                <Header>
                  <Cajaheader>
                    <Parrafo1
                      style={{
                        background:
                          currentPath === "/perfilusuario"
                            ? "#787676d5"
                            : "#ffffff",
                        textDecoration: "none",
                      }}
                    >
                      Mi perfil
                    </Parrafo1>
                    <Parrafo1 onClick={notificacionClick}>
                      Notificaciones
                    </Parrafo1>
                  </Cajaheader>
                </Header>
                {/* body */}
                <Main>
                  {/* informacion */}
                  <Container>
                    <ContainPerfil>
                      <BoxImgPerfil>
                        <ImgPerfil></ImgPerfil>
                      </BoxImgPerfil>
                      <Boxperfil>
                        <InforPerfil>
                          <InforperfilLetra>
                            <h4>Email:</h4>
                          </InforperfilLetra>
                          <p>JASIL@GMAIL.COM</p>
                        </InforPerfil>
                        <InforPerfil>
                          <InforperfilLetra>
                            <h4>Password:</h4>
                          </InforperfilLetra>
                          <p>Contraseña</p>
                        </InforPerfil>
                        <InforPerfil>
                          <InforperfilLetra>
                            <h4>Empresa:</h4>
                          </InforperfilLetra>
                          <p>WowDesarrolloDigital</p>
                        </InforPerfil>
                      </Boxperfil>
                    </ContainPerfil>

                    <BoxInfo>
                      <SectionInfor>
                        <HeaderInfor>
                          <h3>Informacion para editar</h3>
                          <EditButton>Editar</EditButton>
                        </HeaderInfor>

                        <InfoPersonal>
                          <ul className="listInfor">
                            <li>
                              <strong>Nombre:</strong>
                              <p>Jasil</p>
                            </li>
                            <li>
                              <strong>Apellido:</strong>
                              <p>Florez</p>
                            </li>
                            <li>
                              <strong>Edad:</strong>
                              <p>20</p>
                            </li>
                            <li>
                              <strong>Fecha de inicio de Registro:</strong>
                              <p>25/10/1925</p>
                            </li>
                          </ul>
                        </InfoPersonal>
                      </SectionInfor>
                    </BoxInfo>
                  </Container>
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
