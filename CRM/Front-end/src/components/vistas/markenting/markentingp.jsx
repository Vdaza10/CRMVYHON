import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Enlace, PanelControl, Modulo, Submodulo } from "./styled";

const Campaign = () => {
  const [loading, setLoading] = useState(true);
  const [moduloAbierto, setModuloAbierto] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      try {
        const token = jwt_decode(userToken);
        console.log(token, "❤️❤️💕💕💕❤️");
        setLoading(false);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  const toggleModulo = (modulo) => {
    if (moduloAbierto === modulo) {
      setModuloAbierto(null);
    } else {
      setModuloAbierto(modulo);
    }
  };

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <PanelControl>
            <h2>Panel de Control</h2>
            <Modulo
              onClick={() => toggleModulo("moduloCampañas")}
              className={moduloAbierto === "moduloCampañas" ? "abierto" : ""}
            >
              Communicattio
            </Modulo>
            {moduloAbierto === "moduloCampañas" && (
              <Submodulo>
                <Enlace href="/submodulo1-1">Email Campaign</Enlace>
                <Enlace href="/submodulo1-2">Audio Call</Enlace>
                <Enlace href="/submodulo1-3">SMS Campaign</Enlace>
              </Submodulo>
            )}

            <Modulo
              onClick={() => toggleModulo("moduloOtro")}
              className={moduloAbierto === "moduloOtro" ? "abierto" : ""}
            >
              Sale process
            </Modulo>
            {moduloAbierto === "moduloOtro" && (
              <Submodulo>
                <Enlace href="/submodulo2-1">menbership</Enlace>
                <Enlace href="/submodulo2-2">orders</Enlace>
              </Submodulo>
            )}

            <Modulo
              onClick={() => toggleModulo("moduloPerdido")}
              className={moduloAbierto === "moduloPerdido" ? "abierto" : ""}
            >
              MODULO PERDIDO
            </Modulo>
            {moduloAbierto === "moduloPerdido" && (
              <div>
                <Submodulo>
                  <Enlace href="/submodulo2-1">Submódulo 2.1</Enlace>
                  <Enlace href="/submodulo2-2">Submódulo 2.2</Enlace>
                </Submodulo>
              </div>
            )}
          </PanelControl>
        </>
      )}
    </>
  );
};

export default Campaign;
