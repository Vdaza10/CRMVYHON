import React, { useEffect, useState } from "react";
import {DivContainer,Container,Caja1,Caja2,Caja4,Cajita,} from "./styled";
import imagen from "../img/img1.png";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Retorno1() {
  const navigate = useNavigate();
  const [perfilVisible, setPerfilVisible] = useState(false);
  // const userData = JSON?.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState({});
  const verPerfil = () => {
    setPerfilVisible(!perfilVisible);
  };

  const Logout = () => {
  localStorage.removeItem("user")
  navigate("/")
  };

  useEffect(() => {
    const userToken = localStorage.getItem("user");
    if(userToken){
        try {
        const token = jwt_decode(userToken);
  setUserData(token);
        } catch (error) {
            console.error("Error al decodificar el token:", error);
            navigate('/'); 
        }
    }else{
        navigate('/');
    }
},[navigate])


  return (
    <>
      <DivContainer>
        <Container>
          <Caja1>
            <p style={{fontStyle: "italic",fontSize: "13px",color: "gray",marginLeft: "7px"}}>{userData?.nombreEmpresa ? userData.nombreEmpresa.toUpperCase() : ''}</p>
            <p style={{fontStyle: "italic",fontSize: "15px",color: "gray",marginLeft: "7px",}}>Vendí este mes</p>
            <Cajita>
              <p style={{ fontSize: "18px", color: "black", marginLeft: "7px" }}><h1>cop 0,00</h1></p>
              <img src={imagen} alt="img" style={{ width: "30px", height: "30px" }}/>
            </Cajita>
       
          </Caja1>
          <Caja2 style={{marginTop:"10px"}}>
            <Link to="/perfilusuario" onClick={verPerfil} style={{ textDecoration: "none", color: "white"}}>
              <p style={{fontStyle: "italic",fontSize: "16px",color: "black",marginLeft: "7px"}}>perfil{" "}</p>
            </Link>
           
          </Caja2>
          <Caja2>
          <Link to="/grafica" onClick={verPerfil} style={{ textDecoration: "none", color: "white"}}>
              <p style={{fontStyle: "italic",fontSize: "16px",color: "black",marginLeft: "7px"}}>Historial grafico{" "}</p>
            </Link>
          </Caja2>
          <Caja2>
            <p
              style={{fontStyle: "italic",fontSize: "16px",color: "black",marginLeft: "7px",}}>Ajustes</p>
            <Link to="/markenting" onClick={verPerfil}style={{ textDecoration: "none", color: "white" }}>
            </Link>
          </Caja2>
          <Caja4>
            <p style={{fontStyle: "italic",fontSize: "16px",color: "black",marginLeft: "7px",}}>
              <button  onClick={Logout} style={{ textDecoration: "none", color: "black", outline:"none"}}>Salir</button>
            </p>
          </Caja4>
        </Container>
      </DivContainer>
    </>
  );
}
export default Retorno1;
