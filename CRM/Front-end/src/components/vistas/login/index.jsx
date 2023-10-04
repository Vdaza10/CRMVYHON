import React, { useState } from "react";
import {Fondo,Contenedor,Titulo,Parrafo,Input,Button,Olvidar,ContainerUltimo,Message} from "./styled";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../../App.css"

function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const Login = (ev) => {
    ev.preventDefault();
    setError(null);
    if (email && password) {
    
      Axios.post(`${process.env.REACT_APP_URL_BACKEND}/login`, {
        correo: email,
        contraseña: password,
      })
        .then((response) => {
          const result = response.data
          if (response.data === "") {
            alert("Bienvenido VYHON");
          } else {
            localStorage.setItem("user", JSON?.stringify(result));
            setTimeout(() => {
              window.location.href = "/vistaprincipal";
             
            }, 1000)
          }
        })
        .catch((error) => {
          console.error(error);
          // alert("Error en la solicitud");
          alert("el usuario no existe");
        });
    } else {
      setError(`ingrese tanto el usuario como la contraseña`);
    }
  }; 

  return (
        <Fondo>
          <Contenedor>
            <Titulo>!Welcome to VYHON!</Titulo>
            <Message>{error}</Message>

            <Parrafo>
              <h4 style={{ margin: "0" }}>Email</h4>
            </Parrafo>

            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            ></Input>
            <Message>{error}</Message>

            <Parrafo>
              <h4 style={{ margin: "0" }}>password</h4>
            </Parrafo>

            <Input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            ></Input>

            <ContainerUltimo>
              <Button type="submit" onClick={Login}>
                Log in 
              </Button>
              <Link to={"/recuperar"} style={{ color: "white" }}>
                <Olvidar style={{ margin: "0" }}>
                  <h4 style={{ margin: "0" }}>Did you forget your password?</h4>
                </Olvidar>
              </Link>
              <Olvidar>
                <Link to={"/registrarse"} style={{ color: "white" }}>
                  <h4 style={{ color: "white", marginTop: "" }}>
                  Sign up
                  </h4>
                </Link>
              </Olvidar>
            </ContainerUltimo>
          </Contenedor>
        </Fondo>

)
}
      export default Login;
