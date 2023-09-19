import React, { useEffect, useState } from "react";
import {DivContainer,Container,Caja1,Caja2,Caja3,Caja4,Cajita,} from "./styled";
import imagen from "../img/img1.png";
import { Link, useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";

function Retorno1() {
  const navigate = useNavigate();
  const [perfilVisible, setPerfilVisible] = useState(false);
  const userData = JSON?.parse(localStorage.getItem("user"));
  const verPerfil = () => {
    setPerfilVisible(!perfilVisible);
  };

  const Logout = () => {
    // localStorage.removeItem("user");
  localStorage.removeItem("user")
  navigate("/")
    // console.log(localStorage.removeItem("user"));
  };

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData,navigate]);

  return (
    <>
      <DivContainer>
        <Container>
          <Caja1>
            <p style={{fontStyle: "italic",fontSize: "13px",color: "gray",marginLeft: "7px"}}>ID: Fundacion-et{" "}</p>
            <p style={{fontStyle: "italic",fontSize: "15px",color: "gray",marginLeft: "7px",}}>Vendí este mes</p>
            <Cajita>
              <p style={{ fontSize: "18px", color: "black", marginLeft: "7px" }}><h1>cop 0,00</h1></p>
              <img src={imagen} alt="img" style={{ width: "30px", height: "30px" }}/>
            </Cajita>
            <hr />
          </Caja1>
          <Caja2>
            <Link to="/perfilusuario" onClick={verPerfil} style={{ textDecoration: "none", color: "white" }}>
              <p style={{fontStyle: "italic",fontSize: "16px",color: "black",marginLeft: "7px"}}>perfil{" "}</p>
            </Link>
            <hr />
          </Caja2>
          <Caja3>
            <p
              style={{fontStyle: "italic",fontSize: "16px",color: "black",marginLeft: "7px",}}>Ajustes</p>
            <Link to="/markenting" onClick={verPerfil}style={{ textDecoration: "none", color: "white" }}>
          
            </Link>
            <hr />
          </Caja3>
          <Caja4>
            <p style={{fontStyle: "italic",fontSize: "16px",color: "black",marginLeft: "7px",}}>
              <button onClick={Logout} style={{ textDecoration: "none", color: "black"}}>Salir</button>
            </p>
          </Caja4>
        </Container>
      </DivContainer>
    </>
  );
}
export default Retorno1;
