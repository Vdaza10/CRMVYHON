import styled from "styled-components";

export const Fondo = styled.div`
background: rgb(0,153,255);
background: -moz-linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(238,238,238,1) 100%);
background: -webkit-linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(238,238,238,1) 100%);
background: linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(238,238,238,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0099ff",endColorstr="#eeeeee",GradientType=1);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contenedor = styled.div`
  border-radius: 3px solid;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 20%;
  height: 52%;
  border-radius: 15px;
  box-shadow: 4px 4px 55px -29px rgba(0,0,0,0.77);
`;
export const Titulo = styled.h1`
  text-align: center;
  font-style: italic;
  color: #000000;
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export const Parrafo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #000000f5;
  margin-left: 10%;
`;
export const Input = styled.input`
  width: 80%;
  height: 8%;
  margin-left: 10%;
  border: none;
  background-color: #0ba0e63c;
`;
export const Olvidar = styled.a`
  /* text-decoration: none; */

  color: #070707;
  /* font-family:'Open Sans', sans-serif; */
  font-size: 15px;
  margin-left: 15px;
`;

export const Button = styled.button`
  background-color: rgb(82 186 250);
  margin-top: 7px;
  color: white;
  width: 55%;
  height: 24%;
  border: none;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #3eabee76;
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

export const ContainerUltimo = styled.div`
  width: 100%;
  height: 35%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Message = styled.div`
    font-size: 10px;
    color: red;
    
`
