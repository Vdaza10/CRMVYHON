import styled from "styled-components";
import FondoVistas from "../../img/Fondos.svg"

export const ContainerPrincipal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${FondoVistas});
`;
export const CajaContenido= styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00000019;
  border-right: solid white 1px;
  .Tabla{
    height:73%;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 25px;
    background-color: white;
    border-radius: 12px;

    .CajaCheckbox{
    width:7%;
  }
  }
`;
export const Heder = styled.div`
  height: 20%;
  width: 98%;
  display: flex;
  flex-direction: column;
  border-bottom: white 1px solid;
`;
export const HederCaja1 = styled.div`
  /* height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; */
  height: 50%;
  width: 100%;
  border-radius: 15px;
  background-color: #f6f6f6;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  
  
  

  
`;
export const HederCaja2 = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  h1{
    color: white;
    font-weight: 300;
  }
  .EstiloIconos{
    font-size: 25px;
    color: white;
  }
`;
export const HederContenido = styled.div`
  height: 100%;
  width: 70%;  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
`;

export const BarraNavegacion = styled.div`
  /* height: 70%;
  width: 90%;
  border-radius: 15px;
  background-color: #b67373;
  list-style: none;
  align-items: center; */
  cursor: pointer;
  
  transition: all 0.2s ease;
  &:last-child {
    margin-right: 45px;
  }
  &:hover {
    width: 65%;
    color: var(--color-MenuItem);
    transform: scale(1.2); 
    text-decoration: underline;
  }
  font-size: 20px;
  
`;

export const ContainerInput = styled.div`
  width: 50%;
  height: 35px;
  display: flex;
  align-items: center;
  background-color: #ffffff75;
  border: solid 1px white;
`;

export const ImagenUser = styled.img`
  height: 90%;
  border-radius: 50px;
  height: 70%;
  margin-right: 6px;
`
export const ContainerSecundario = styled.div`
  width: 100%;
  max-height: 85%;
  min-height: 50px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const CajaIconos= styled.div`
  height: 35px;
  width: 35px;
  border-radius: 2px;
  border: solid 1px white;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#ffffff75 ;
`

export const Input = styled.input`
  height: 90%;
  width: 80%;
  background-color: transparent;
  font-size: 18px;
  border: none;
  outline: none;
  margin-left: 15px;
`;

export const HederTabla = styled.div`
  background-color: #9a9a9ad7;
  height: 8%;
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: white;
  
`;
export const Caja1 = styled.div`
  height: 100%;
  width: 16%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .Parrafo{
    color: white;
  }
`;

export const  Checkbox = styled.input`
  height: 20px;
  width: 20px;
`

export const Parrafo = styled.div`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  margin-left: 7px;
  color: gray;
`;

export const BodyTabla = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
`;

export const CajaIcono = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-left: 5%;
`;

export const FooterTabla = styled.span`
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const Boton = styled.button`
  background-color: #1308ec;
  color: #eaeff1;
  width: 100px;
  height: 35px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border-radius: 7px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-family: "Roboto Serif", serif;
  &:hover {
    background-color: #3eabee76;
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px var(--color-buttonFocus);
  }
`;
export const Icon = styled.div`
  cursor: pointer;
  margin-right: 20px;
  color: black;
`;

// export const FooterTabla = styled.div`
//   height: 8%;
//   width: 100%;
//   border-bottom: gray solid 1px ;
//   border-top: gray solid 1px;
// `;
