    import React, { useState } from "react";
    import { Link, NavLink, useLocation } from "react-router-dom";
    import {Contenedor,Logo, MenuItem,Menucontainer,Menudesplegable,Navegacion, Ajustes,
    } from "./menu";
    import imagen from "../img/logito.png";
    import Retorno1 from "../perfi";
    // import jwt_decode from "jwt-decode";
    import { RiSettings4Fill } from "react-icons/ri";

    const Menu = () => {
    // Estado para controlar la visibilidad del menú desplegable de perfil
    const [perfilDesplegable, setPerfilDesplegable] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    /* nos llevara a una vista con otras opciones */
    const desplegablePerfil = () => {
        setPerfilDesplegable(!perfilDesplegable);
    };

    // const [busca, setBusca] = useState("")

    const [, /* selectedOption */ setSelectedOption] = useState("inicio");
    const opcionElegida = (Option) => {
        console.log("opcionElegida:", Option);
        setSelectedOption(Option);
    };

    // const userData = JSON.parse(localStorage.getItem('user'));
    // const token = jwt_decode(localStorage.getItem("user"));

    return (
        <Contenedor>
        {/* Barra de navegación */}
            <Navegacion>
                <Link to="/vistaprincipal">
                    <Logo src={imagen}></Logo>
                </Link>
            </Navegacion>
        <Menucontainer>
            {/*utilizamos el <NavLink> de react para asi indicar la navegacion */}
            <NavLink
                to="/empresas"
                style={{
                color: currentPath === "/empresas" ? "#000000" : "#ffffff",
                textDecoration: "none",
                }}
                onClick={() => opcionElegida("empresas")}>
                <MenuItem>Empresas</MenuItem>
            </NavLink>
            <NavLink
                to="/contactos"
                style={{
                color: currentPath === "/contactos" ? "#000000" : "#ffffff",
                textDecoration: "none",
                }}
                onClick={() => opcionElegida("contactos")}>
                <MenuItem>Contactos</MenuItem>
            </NavLink>
            <NavLink
                to="/negocios"
                style={{
                color: currentPath === "/negocios" ? "#000000" : "#ffffff",
                textDecoration: "none",
                }}
                onClick={() => opcionElegida("negocios")}>
                <MenuItem>Negocios</MenuItem>
            </NavLink>
            <NavLink
                to="/tareas"
                style={{
                color: currentPath === "/tareas" ? "#000000" : "#ffffff",
                textDecoration: "none",
                }}
                onClick={() => opcionElegida("tareas")}>
                <MenuItem>Tareas</MenuItem>
            </NavLink>
            <NavLink
                to="/Marketing"
                style={{
                color: currentPath === "/Marketing" ? "#000000" : "#ffffff",
                textDecoration: "none",
                }}
                onClick={() => opcionElegida("marketing")}>
                <MenuItem>Marketing</MenuItem>
            </NavLink>
        </Menucontainer>

      <Ajustes>
          <RiSettings4Fill style={{fontSize:"35px", cursor:"pointer"}}
            onClick={desplegablePerfil}
            isOpen={perfilDesplegable}
          ></RiSettings4Fill>{" "}
          {/* se veran reflejada las vistas al momento de darle click */}
          <Menudesplegable perfilDesplegable={perfilDesplegable}>
            <Retorno1 />
          </Menudesplegable>
      </Ajustes>
    </Contenedor>
  );
};
export default Menu;
