import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Contenido, Enlace, PanelControl, Modulo, Submodulo } from "./styled";

const Campaign = () => {
  const [loading, setLoading] = useState(true);
  const [moduloAbierto, setModuloAbierto] = useState(null); // Estado para el módulo abierto
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
      // Si el mismo módulo está abierto, ciérralo
      setModuloAbierto(null);
    } else {
      // Si otro módulo estaba abierto, ciérralo antes de abrir el nuevo
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
            {/* Módulo 1 */}
            <Modulo
              onClick={() => toggleModulo("moduloCampañas")}
              className={moduloAbierto === "moduloCampañas" ? "abierto" : ""}
            >
              Módulo de Campañas
            </Modulo>
            {moduloAbierto === "moduloCampañas" && (
              <div>
                <Submodulo>
                  <Enlace href="/submodulo1-1">Email Campaign</Enlace>
                </Submodulo>
                <Submodulo>
                  <Enlace href="/submodulo1-2">Audio Call</Enlace>
                </Submodulo>
                <Submodulo>
                  <Enlace href="/submodulo1-3">SMS Campaign</Enlace>
                </Submodulo>
              </div>
            )}

            {/* Módulo 2 */}
            <Modulo
              onClick={() => toggleModulo("moduloOtro")}
              className={moduloAbierto === "moduloOtro" ? "abierto" : ""}
            >
              Otro Módulo
            </Modulo>
            {moduloAbierto === "moduloOtro" && (
              <div>
                <Submodulo>
                  <Enlace href="/submodulo2-1">Submódulo 2.1</Enlace>
                </Submodulo>
                <Submodulo>
                  <Enlace href="/submodulo2-2">Submódulo 2.2</Enlace>
                </Submodulo>
              </div>
            )}

          </PanelControl>
          <Contenido>
            <h1>Contenido de la Vista Campaign</h1>
          </Contenido>
        </>
      )}
    </>
  );
};

export default Campaign;
