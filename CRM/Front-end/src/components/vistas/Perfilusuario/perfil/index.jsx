import React, { useState, useEffect } from "react";
import {
  Fondo,
  Header,
  Parrafo1,
  Main,
  Box_container,
  Cajaheader,
  Box_perfil,
  Box_imgPerfil,
  ImgPerfil,
  InforPerfil,
  Box_InfoPerfil,
  Box_Informacion,
  SectionInfor,
  HeaderInfor,
  EditButton,
  InfoPersonal,
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
                    <Parrafo1 style={{
                      background: currentPath === "/perfilusuario" ? "#787676d5" : "#ffffff",
                      textDecoration: "none",
                    }}>Mi perfil</Parrafo1>
                    <Parrafo1 onClick={notificacionClick}>
                      Notificaciones
                    </Parrafo1>
                  </Cajaheader>
                </Header>
                {/* body */}
                <Main>
                  {/* informacion */}
                  <Box_container>
                    <Box_perfil>
                      <Box_imgPerfil>
                        <ImgPerfil>
                        </ImgPerfil>
                      </Box_imgPerfil>
                      <Box_InfoPerfil>
                        <InforPerfil>
                          <p>NOT INFORMATION</p>
                        </InforPerfil>
                        <InforPerfil>
                          <p>NOT INFORMATION</p>
                        </InforPerfil>
                        <InforPerfil>
                          <p>NOT INFORMATION</p>
                        </InforPerfil>
                      </Box_InfoPerfil>
                    </Box_perfil>

                    <Box_Informacion>
                      <SectionInfor>
                        <HeaderInfor>
                          <h3>Informacion para editar</h3>
                          <EditButton>Editar</EditButton>
                        </HeaderInfor>
                        <InfoPersonal>
                          <h1>En Reparacion</h1>
                          <h1>⚒️</h1>
                        </InfoPersonal>
                      </SectionInfor>
                    </Box_Informacion>

                  </Box_container>
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
