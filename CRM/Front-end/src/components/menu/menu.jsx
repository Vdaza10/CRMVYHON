// Importación de librerías y recursos necesarios
import styled from "styled-components"
import perfil from "../img/perfil.jpg"

// Contenedor principal de la barra de navegación
export const Contenedor = styled.div`
    height: 30%;
    width: 100%;
    background-color: #0099ffac;
    color: #000000;
    display: flex;
    align-items: center;
`
// Navegación, contiene el logo y otros elementos
export const Navegacion = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 1%;
`
// Logo de la aplicación
export const Logo = styled.img`
    height: 55px;
`;
// Contenedor de los elementos del menú
export const Menucontainer = styled.ul`
    list-style: none;
    display: flex;
    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`
// Ítem individual del menú
export const MenuItem = styled.li`
    margin-right: 5%;
    margin-left: 3%;
    cursor: pointer;
    transition: all 0.2s ease; // Transición suave para todos los cambios
    &:last-child {
        margin-right: 45px;
    }     
    &:hover {
        width: 65%;
        color: #333;
        transform: scale(1.2); // Aumentar ligeramente el tamaño al hacer hover
    }
    @media screen {
        display: flex;
    }
`;


// Menú desplegable (para el ítem "Analisis")
export const Despegable = styled.ul`
    display: ${({ desplegado }) => (desplegado ? "block" : "none")};
    background-color: #ffffff;
    height: 9%;
    width: 13%;
    
    list-style: none;
    /* text-align: center; */
    position: absolute;
    top: 10%;
    left: 35%;  
    padding: 0;
    border: 1px solid #0e0e0e;
    ;
    @media screen and ( max-width:60% ) {
        top: 7%;
        left: 90%;  
        transform: translate(-50%, 0);
        padding: 0;
        
    }
`
// Flecha que indica si el menú desplegable está abierto o cerrado
export const Flecha = styled.li`
    margin-left: 5px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

// Contenedor para el ícono de búsqueda y menú de usuario
export const Ajustes = styled.div`
    height: 60px;
    width: 200px;
    color: white;
    display: flex;
    align-items: center;
    position: absolute;
    /* background-color: #640817; */
    right: 0px;
    margin-inline-end: 170px;
    justify-content: flex-end;
    @media screen and (max-width:700px) {
        margin-inline-end: 40px;

    }
` 

// Imagen de perfil de usuario
export const ImagenPerfil = styled.div`
    background-image: url(${perfil});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    &:last-child {
    margin-right: 0;
    }    
    &:hover{
        background-color: #ee3ed192;
        color: #661313;
    }
    
`;

// Menú desplegable del perfil de usuario
export const Menudesplegable = styled.div`
    display: ${({ perfilDesplegable }) => (perfilDesplegable ? "block" : "none")};
    width: 130%;
    height: 350px;
    list-style: none;
    position: absolute;
    top: 130%;
    left: 105px;  
    padding: 0;
    border: 1px solid  gray;
    background-color: white;
`


