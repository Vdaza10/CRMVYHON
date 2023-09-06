import React, {useState}from "react";
import {NavLink,useLocation } from "react-router-dom"
import { Contenedor, ContenedorBusqueda, ImagenPerfil, Logo, MenuItem, Menucontainer, Menudesplegable, Navegacion, NombreUsuario, PerfilUsiario,Buscar} from "./menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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

    const [/* selectedOption */, setSelectedOption] = useState('inicio');
    const opcionElegida = (Option) =>{
    console.log ("opcionElegida:", Option)
        setSelectedOption(Option);
    }

    return (
        <Contenedor >
            {/* Barra de navegación */}
            <Navegacion>
                <Logo src= {imagen}></Logo>
            </Navegacion>
            <Menucontainer>
                {/*utilizamos el <link> de react para asi indicar la navegacion */}
                    {/* <Link ></Link> 
                    <Link ></Link>
                    <Link ></Link>
                    <Link ></Link>
                    <Link ></Link> Otro ítem del menú */}
                    <NavLink to="/negocios" style={{ color: currentPath === '/negocios' ? "#000000" : "#ffffff", textDecoration: "none" }} onClick={() => opcionElegida('negocios')}><MenuItem>Negocios</MenuItem></NavLink>
                    <NavLink to="/empresas"  style={{ color: currentPath === '/empresas' ? "#000000" : "#ffffff", textDecoration: "none" }} onClick={() => opcionElegida('empresas')}><MenuItem>Empresas</MenuItem></NavLink>
                    <NavLink to="/contactos" style={{ color:currentPath === '/contactos' ? "#000000" : "#ffffff", textDecoration: "none" }} onClick={() => opcionElegida('contactos')}><MenuItem>Contactos</MenuItem></NavLink>
                    <NavLink to="/tareas" style={{ color: currentPath === '/tareas' ? "#000000" : "#ffffff", textDecoration: "none" }} onClick={() => opcionElegida('tareas')} ><MenuItem>Tareas</MenuItem></NavLink>
                    <NavLink to="/Marketing" style={{ color: currentPath === '/Marketing' ? "#000000" : "#ffffff", textDecoration: "none" }} onClick={() => opcionElegida('marketing')} ><MenuItem >Marketing</MenuItem></NavLink>
            </Menucontainer>
            <ContenedorBusqueda>
            <Buscar
                type="search"
                placeholder="buscar"
/>
                    <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: "with" }}/>

                {/* Menú desplegable de perfil de usuario */}
                <PerfilUsiario >
                    <ImagenPerfil onClick={desplegablePerfil}  isOpen={perfilDesplegable}></ImagenPerfil> {/* se veran reflejada las vistas al momento de darle click */}
                    <Menudesplegable perfilDesplegable = {perfilDesplegable}><Retorno1></Retorno1></Menudesplegable>
                    <NombreUsuario>Nombre usuario</NombreUsuario>
                </PerfilUsiario>
            </ContenedorBusqueda>
        </Contenedor>
    );
};
export default Menu;





