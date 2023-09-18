import React, { useState, useEffect } from "react";
import { Container, Parrafo, Boton } from "./styled";
import imagen from "../img/negocios.jpg";
import Menu from "../menu/principal";
import CrearNegocios from "../crearNegocios";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import TablaNegocio from "../tablaNegocio";

function Retorno2() {
  const [active, setActive] = useState(false); // Estado para controlar la visualización del componente CrearNegocios
  const [negocios, setNegocios] = useState([]);

  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

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

  const ReflejarDatos = async () => {
    try {
      const response = await Axios.get("http://localhost:3005/negociotabla");
      setNegocios(response.data);
    } catch (error) {
      console.error("Error al obtener datos de negocios:", error);
    }
  };

  useEffect(() => {
    ReflejarDatos();
  }, [setNegocios]); // Este efecto se ejecuta solo una vez al montar el componente

  return (
    <>
      {loading ? (
        <h1>Cargando......</h1>
      ) : (
        <>
          {negocios.length <= 0 ? (
            <>
              <Menu />
              <Container>
                <img
                  src={imagen}
                  alt="img"
                  style={{ width: "30%", height: "50%", marginTop: "4%" }}
                />
                <Parrafo>
                  <h3>Crea negocios</h3>
                </Parrafo>
                <Parrafo>
                  Crea un nuevo negocio sin importar sus contactos, empresas y
                  negocios existentes.
                </Parrafo>
                <Boton onClick={() => setActive(!active)}>Crear negocio</Boton>
                {/* Muestra el componente CrearNegocios si 'active' es true */}
                {active && <CrearNegocios />}
              </Container>
            </>
          ) : (
            <>
              <TablaNegocio />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Retorno2;
