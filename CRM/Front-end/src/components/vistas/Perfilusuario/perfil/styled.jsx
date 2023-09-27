import styled from "styled-components";

// fondo
export const Fondo = styled.div`
  height: 100%;
  width: 100%;
  
`;
//Header y su contenido
export const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
//Contenedor del perfil
export const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
`;

export const ContenedorPerfil = styled.div`
  width: 27%;
  height: 75%;
  margin-top: 100px;
  box-shadow: #1f1f1f9c 0px 0px 10px 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #ececec;
`;
export const InformacionActivacion = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  border-bottom: 1px solid black;
`;
//  contenedor imagen
export const ImagenPerfil = styled.img`
  border-radius: 50%;
  width: 20%;
  height: 60%;
  margin: 5%;
`;
export const ContenedorRegistro = styled.div`
  width: 100%;
  height: auto;
`;
export const Registro = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  color: rgb(128, 128, 128);
  margin-left: 27%;

`;
export const Fecha = styled.p`
  text-decoration: none;
  color: #646262;
  margin: 0;

`;
export const DatosUsuario = styled.div`
  width: 100%;
  height: 65%;
  /* margin-Left: 30px; */
  color: #646262;

`;
export const Informacion = styled.div`
  width: 50%;
  height: 100%;

`;
export const Nombre = styled.p`
  color: gray;
  margin-left: 20px;
  margin-right: 50px;

`;
export const Editar = styled.button`
  background-color: #0099ffe2;
  width: 30%;
  height: 35px;
  border: 0;
  border-radius: 3px;
  margin-top: 30px;
  margin-left: 55%;
  &:hover {
    background-color: #3eabee76;
    color: gray;
  }
`;
export const Cajaheader = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  gap: 10px;
  border-bottom: 1px solid black;
  border-radius: 70px 0px 70px 0px;
  box-shadow: #0f0e0eb9 0px 4px 6px 0px;

`;

export const Parrafo1 = styled.button`
  height: 40px;
  width: 250px;
  font-size: 20px;
  border-radius: 0px 20px 0px 10px;
  background-color: #14141445;
  font-family: 'Times New Roman', Times, serif;
  border: none;
  &:hover{
    
    color: black;
    cursor: pointer;
    background-color: #53baff;
    border-radius: 10px;
    border-radius: 0px 25px 0px 25px;
      font-family: 'Times New Roman', Times, serif;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;
export const ContenedorPassword = styled.input`
  background: #fffbfb17;
  color: gray;
  border: none;
  outline: none;
  margin-left: 20px;
`;
