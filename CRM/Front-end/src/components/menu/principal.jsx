    import React, { useState } from "react";
    import { Link, NavLink, useLocation } from "react-router-dom";
    import {Contenedor,ContenedorBusqueda,ImagenPerfil,Logo, MenuItem,Menucontainer,Menudesplegable,Navegacion,NombreUsuario,PerfilUsiario
    } from "./menu";
    // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //para selecionar 
    // import { faSearch } from "@fortawesome/free-solid-svg-icons"; //icono de buscar
    import imagen from "../img/logito.png";
    import Retorno1 from "../perfi";

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

    const userData = JSON.parse(localStorage.getItem('user'));

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

        <ContenedorBusqueda>
                {/* <Buscar type="search" placeholder="buscar" />  */}
                {/* <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: "with" }} /> comentado porque se va a utilizar en otro momento */}
            {/* Menú desplegable de perfil de usuario*/}
            <PerfilUsiario>
                <ImagenPerfil
                onClick={desplegablePerfil}
                isOpen={perfilDesplegable}>
                </ImagenPerfil>
            {/* se veran reflejada las vistas al momento de darle click */}
                <Menudesplegable perfilDesplegable={perfilDesplegable}>
                <Retorno1/>
                </Menudesplegable>
                <NombreUsuario>{userData?.nombreUsuario}</NombreUsuario>
            </PerfilUsiario>
        </ContenedorBusqueda>
        </Contenedor>
    );
    };
    export default Menu;
