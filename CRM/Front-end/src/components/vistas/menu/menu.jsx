// Importación de librerías y recursos necesarios
import styled from "styled-components";
import "../../../App.css";

export const Contenedor = styled.div`
  height: 10%;
  width: 100%;
  box-shadow: var(--box-shadow) 0px 3px 5px;
  background-color: var(--color-contenedor);
  color: var(--colorTitulo);
  display: flex;
  align-items: center;
`;
// Navegación, contiene el logo y otros elementos
export const Navegacion = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 1%;
`;
// Logo de la aplicación
export const Logo = styled.img`
  height: 55px;
`;
// Contenedor de los elementos del menú
export const Menucontainer = styled.ul`
  height: 100%;
  width: 45%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Ítem individual del menú
export const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease; // Transición suave para todos los cambios
  &:last-child {
    margin-right: 45px;
  }
  &:hover {
    width: 65%;
    color: var(--color-MenuItem);
    transform: scale(1.2); // Aumentar ligeramente el tamaño al hacer hover
    text-decoration: underline;
  }
  font-size: 20px;
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
  @media screen and (max-width: 700px) {
    margin-inline-end: 40px;
  }
`;

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
`;
