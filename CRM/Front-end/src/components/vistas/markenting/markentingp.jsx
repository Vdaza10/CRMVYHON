import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { BoxModulos, MenuContainer } from "./styled";

const Campaña = () => {
  const [modalAbierta, setModalAbierta] = useState(false);
  const [loading, setLoading] = useState(true);
  const [acordeonAbierto, setAcordeonAbierto] = useState([
    false,
    false,
    false,
    false,
  ]);

  let navigate = useNavigate();

  // Definir los módulos y submódulos
  const modulos = [
    {
      nombre: "Módulo 1",
      submodulos: [
        { nombre: "Submódulo 1.1", ruta: "/submodulo1-1" },
        { nombre: "Submódulo 1.2", ruta: "/submodulo1-2" },
      ],
    },
    {
      nombre: "Módulo 2",
      submodulos: [
        { nombre: "Submódulo 2.1", ruta: "/submodulo2-1" },
        { nombre: "Submódulo 2.2", ruta: "/submodulo2-2" },
      ],
    },
    {
      nombre: "Módulo 3",
      submodulos: [
        { nombre: "Submódulo 3.1", ruta: "/submodulo3-1" },
        { nombre: "Submódulo 3.2", ruta: "/submodulo3-2" },
      ],
    },
    {
      nombre: "Módulo 4",
      submodulos: [
        { nombre: "Submódulo 4.1", ruta: "/submodulo4-1" },
        { nombre: "Submódulo 4.2", ruta: "/submodulo4-2" },
      ],
    },
    {
      nombre: "Módulo 4",
      submodulos: [
        { nombre: "Submódulo 4.1", ruta: "/submodulo4-1" },
        { nombre: "Submódulo 4.2", ruta: "/submodulo4-2" },
      ],
    },
    {
      nombre: "Módulo 4",
      submodulos: [
        { nombre: "Submódulo 4.1", ruta: "/submodulo4-1" },
        { nombre: "Submódulo 4.2", ruta: "/submodulo4-2" },
      ],
    },
    // Agrega más módulos y submódulos según sea necesario
  ];

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

  const toggleAcordeon = (index) => {
    const nuevosEstados = [...acordeonAbierto];
    nuevosEstados[index] = !nuevosEstados[index];
    setAcordeonAbierto(nuevosEstados);
  };

  return (
    <>
      {loading ? (
        <>
          <h1>cargando.....</h1>
        </>
      ) : (
          <MenuContainer>
            {modulos.map((modulo, index) => (
              <BoxModulos key={index}>
                <button onClick={() => toggleAcordeon(index)}>
                  {modulo.nombre}
                </button>
                {acordeonAbierto[index] && (
                  <ul>
                    {modulo.submodulos.map((submodulo, subIndex) => (
                      <li key={subIndex}>
                        <a href={submodulo.ruta}>{submodulo.nombre}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </BoxModulos>
            ))}
          </MenuContainer>
      )}
    </>
  );
};

export default Campaña;
