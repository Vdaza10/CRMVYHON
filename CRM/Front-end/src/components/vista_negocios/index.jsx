import React, { useState, useEffect } from "react";
import { Container, Parrafo, Boton } from "./styled";
import imagen from "../img/negocios.jpg";
import Menu from "../menu/principal";
import CrearNegocios from "../crearNegocios";
import Axios from "axios";
import TablaNegocio from "../tablaNegocio";

function Retorno2() {
  const [active, setActive] = useState(false); // Estado para controlar la visualización del componente CrearNegocios
  const [negocios, setNegocios] = useState([]);

  const ReflejarDatos = async () => {
    // ev.preventDefault();
    const negociar = await Axios.get("http://localhost:3005/negociotabla");
    console.log(negociar.data);
    setNegocios(negociar.data);
  };
  useEffect(() => {
    ReflejarDatos();
  }, [setNegocios]);

  return (
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
            Crea un nuevo negocio sin importar sus contactos, empresas y negocios existentes.
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
  );
}

export default Retorno2;