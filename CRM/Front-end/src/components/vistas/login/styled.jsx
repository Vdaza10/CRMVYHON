import styled from "styled-components";
import "../../../App.css"

export const Fondo = styled.div`
background: var(--color-fondo);
background: -moz-linear-gradient(180deg, var(--color-fondoo) 0%, rgba(238,238,238,1) 100%);
background: -webkit-linear-gradient(180deg, var(--color-fondoo) 0%, rgba(238,238,238,1) 100%);
background: linear-gradient(180deg, var(--color-fondoo) 0%, rgba(238,238,238,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= var(--color-background),endColorstr="#eeeeee",GradientType=1);
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
  width: 25em;
  height: 30em;
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
  background-color: var(--color-input);
`;
export const Olvidar = styled.a`
  /* text-decoration: none; */

  color: #070707;
  /* font-family:'Open Sans', sans-serif; */
  font-size: 15px;
  margin-left: 15px;
`;

export const Button = styled.button`
  background-color: var(--color-button);
  margin-top: 7px;
  color: white;
  width: 55%;
  height: 24%;
  border: none;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-buttonHover);
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 1px 2px 15px  (--color-buttonFocus);
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
    font-size: 15px;
    align-items: center;
    color: red;
    margin-left: 50px;
`
