import React, { useState } from "react";
import {Fondo,Contenedor,Titulo,Parrafo,Input,Button,Olvidar,ContainerUltimo,Message} from "./styled";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../../../App.css"

function Login() {

  console.log(`${process.env.REACT_APP_URL_BACKEND}`,"voyytyy");
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
          console.log(response.data, "😊😊😊");
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
            <Titulo>¡Bienvenido a VYHON!</Titulo>
            <Message>{error}</Message>

            <Parrafo>
              <h4 style={{ margin: "0" }}>Correo electronico</h4>
            </Parrafo>

            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            ></Input>

            <Parrafo>
              <h4 style={{ margin: "0" }}>Contraseña</h4>
            </Parrafo>

            <Input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            ></Input>

            <ContainerUltimo>
              <Button type="submit" onClick={Login}>
                Iniciar sesión
              </Button>
              <br />
              <Link to={"/recuperar"} style={{ color: "black" }}>
                <Olvidar style={{ margin: "0" }}>
                  <h4 style={{ margin: "0" }}>Olvidaste tu contraseña?</h4>
                </Olvidar>
              </Link>
              <Olvidar>
                <Link to={"/registrarse"} style={{ color: "black" }}>
                  <h4 style={{ margin: "0", color: "black", marginTop: "" }}>
                    Registrate
                  </h4>
                </Link>
              </Olvidar>
              <br />
            </ContainerUltimo>
          </Contenedor>
        </Fondo>

)
}
      export default Login;
