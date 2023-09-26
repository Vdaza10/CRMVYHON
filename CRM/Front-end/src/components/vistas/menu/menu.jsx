// Importación de librerías y recursos necesarios
import styled from "styled-components"

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
    @media screen and (max-width: 865px) {
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
`;

// Flecha que indica si el menú desplegable está abierto o cerrado
export const Flecha = styled.li`
    margin-left: 5px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

// Contenedor para el ícono de búsqueda y menú de usuario
export const Ajustes = styled.div`
    height: 60px;
    width: 40px;
    color: white;
    position: absolute;
    display: flex;
    align-items: center;
    position: absolute;
    /* background-color: #640817; */
    right: 0px;
    margin-inline-end: 100px;
    justify-content: flex-end;
    @media screen and (max-width:700px) {
        margin-inline-end: 40px;

    }
` 

// // Imagen de perfil de usuario
// export const ImagenPerfil = styled.div`
//     background-image: url(${perfil});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     width: 50px;
//     height: 50px;
//     border-radius: 100%;
//     cursor: pointer;
//     &:last-child {
//     margin-right: 0;
//     }    
//     &:hover{
//         background-color: #ee3ed192;
//         color: #661313;
//     }
// `;

// Menú desplegable del perfil de usuario
export const Menudesplegable = styled.div`
    display: ${({ perfilDesplegable }) => (perfilDesplegable ? "block" : "none")};
    width: 250px;
    height: 560%;
    list-style: none;
    position: absolute;
    top: 133%;
    left: -111px;  
    padding: 0;
    background-color: white;
`


