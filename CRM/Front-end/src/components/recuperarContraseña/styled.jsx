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
  align-items: center;
  justify-content: center;
  /* align-items: center; */
  width: 20%;
  height: 50%;
  border-radius: 15px;
  box-shadow: 4px 4px 55px -29px rgba(0,0,0,0.77);
`;

export const Titulo = styled.h1`
  text-align: center;
  font-style: italic;
  color: #000000;
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  margin-top: 40px;
`;

export const Parrafo = styled.p`
    font-size: 22px;
    font-weight: 200;
    font-style: italic;
    display: flex;
    margin-left: 5%;
    margin-right:5%;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
`

export const ConteinerBonton = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* display: flex; */
`

export const Boton1 = styled.button`
  background-color: rgb(82 186 250);
  color: white;
  width: 35%;
  height: 30%;
  border: none;
  margin-right: 20px;
  margin-top: 30px;
  font-size: 15px;
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

export const Boton2 = styled.button`
    background-color: white;
    color: #00aaffcd;
    width: 100%;
    height: 100%;
    font-size: 15px;
    margin-top: 30px;
    border: solid 1px gray;
    cursor: pointer;

    &:hover {
        background-color: #3eabee76;
        color: #808080aa;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);}
`

export const Input = styled.input`
  width: 80%;
  height:9%;
  border: none;
  margin-bottom: 20px;
  font-size: 16.5px;
  padding-left: 8px;
  background-color: #0ba0e63c;
`;