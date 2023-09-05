import React, {useState}from "react";
import { Link } from "react-router-dom"
import { Contenedor, ContenedorBusqueda, ImagenPerfil, Logo, MenuItem, Menucontainer, Menudesplegable, Navegacion, NombreUsuario, PerfilUsiario,Buscar} from "./menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import imagen from "../img/logito.png";
import Retorno1 from "../perfi";

const Menu = () => {
    // Estado para controlar la visibilidad del menú desplegable de perfil
    const [perfilDesplegable, setPerfilDesplegable] = useState(false);


    /* nos llevara a una vista con otras opciones */
    const desplegablePerfil = () => {
        setPerfilDesplegable(!perfilDesplegable); 
    };
    
    // const [busca, setBusca] = useState("")
    return (
        <Contenedor >
            {/* Barra de navegación */}
            <Navegacion>
                <Logo src= {imagen}></Logo>
            </Navegacion>
            <Menucontainer>
                {/*utilizamos el <link> de react para asi indicar la navegacion */}
                    <Link to="/negocios" style={{textDecoration:"none", color: "white"}}><MenuItem>Negocios</MenuItem></Link> 
                    <Link to="/empresas" style={{textDecoration:"none", color: "white"}}><MenuItem >Empresas</MenuItem></Link>
                    <Link to="/contactos" style={{ textDecoration: "none", color: "white" }}><MenuItem >Contactos</MenuItem></Link>
                    <Link to="/tareas" style={{ textDecoration: "none", color: "white" }}><MenuItem>Tareas</MenuItem></Link>
                    
                    <Link to="/campaña" style={{textDecoration: "none", color:"white"}}><MenuItem>Marketing</MenuItem></Link> {/* Otro ítem del menú */}
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
                    <NombreUsuario>helena</NombreUsuario>
                </PerfilUsiario>
            </ContenedorBusqueda>
        </Contenedor>
    );
};
export default Menu;





