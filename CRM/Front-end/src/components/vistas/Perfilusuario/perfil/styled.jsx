import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 80%;
`;

// fondo
export const Fondo = styled.div`
  height: 100%;
  width: 100%;
  background-color: #038ce7;
  
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
export const Cajaheader = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-bottom: 1px solid black;
  border-radius: 100px 100px 0px 0px;
  box-shadow: #0f0e0ef0 0px 4px 6px 0px;
  background-color: #fcfcfc;

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

export const Box_perfil = styled.div`
  height: 97%;
  width: 90%;
  display: flex;
  background-color: white;
    justify-content: center;
  box-shadow: #08080899 10px 12px 6px 1px;
  border-radius: 20px;

`