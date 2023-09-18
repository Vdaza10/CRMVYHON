import React from "react";
import {
  Contenedor,
  Input,
  Boton,
  Seleccionar,
  Contenedor1,
  Checkbox,
  Titulo,
  TextoImput,
  TextoCheckbox,
  ContaienrBoton,
  Contenedor2,
} from "./styled";
import { useState } from "react";
import Axios from "axios";
import validator from "validator";
import VentanaModal1 from "../../mensajeRegistro";
import UserExiste from "../../mensajeRegistroYaExiste";
import swal from "sweetalert"

const Registrarse = () => {
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");

  const [correoExistente, setCorreoExistente] = useState(false);

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);

  const VentanaModal = () => {
    cambiarEstadoModal1(!estadoModal1);
  };

  const VentanaModal4 = () => {
    cambiarEstadoModal4(!estadoModal4);
  };
  const Validacion = (e) => {
    let emai = e.target.value;

    if (validator.isEmail(emai)) {
      setEmail(emai);
    } else {
      // setEmail('enter valid Email');
    }
  };
  const Registro = (ev) => {
    ev.preventDefault();
    if (email && password && nombre && empresa) {
      Axios.post("http://localhost:3005/users", {
        correo: email,
        contraseña: password,
        nombreUsuario: nombre,
        nombreEmpresa: empresa,
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.error) {
            setCorreoExistente(true);
            VentanaModal4();
          } else {
            VentanaModal();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      swal({
        title: "ingresa informacion en los campo",
        text: "porfavor revisa que todos los datos esten bien",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Contenedor>
        <Contenedor2>
          <Titulo>
            <h2 style={{ fontWeight: "500", fontStyle: "italic" }}>
              Registrate en Vyhon
            </h2>
          </Titulo>

          <Contenedor1 style={{ marginTop: "20px" }}>
            <TextoImput>
              <h3 style={{ margin: "0", fontWeight: "500" }}>
                ¿Cuál es tu nombre?
              </h3>
            </TextoImput>
            <Input
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              type="text"
              required
            ></Input>
          </Contenedor1>

          <Contenedor1>
            <TextoImput>
              <h3 style={{ margin: "0", fontWeight: "500" }}>
                ¿ Para que empresa trabajas ?
              </h3>
            </TextoImput>
            <Input
              onChange={(event) => {
                setEmpresa(event.target.value);
              }}
              type="text"
              required
            ></Input>
          </Contenedor1>

          <Contenedor1>
            <TextoImput>
              <h3 style={{ margin: "0", fontWeight: "500" }}>
                ¿Cuál es tu correo electrónico?
              </h3>
            </TextoImput>
            <Input
              // placeholder="Ingrese su correo electronico"
              onChange={(e) => Validacion(e)}
              type="email"
              // placeholder ="ejemplo@kmas.com"
              required
            ></Input>
            {correoExistente && (
              <span
                style={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                {email}
              </span>
            )}
          </Contenedor1>

          <Contenedor1>
            <TextoImput>
              <h3 style={{ margin: "0", fontWeight: "500" }}>
                Crea una contraseña para tu cuenta
              </h3>
            </TextoImput>
            <Input
              // placeholder="Ingrese su contraseña"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              required
            ></Input>
          </Contenedor1>

          <Checkbox>
            <Seleccionar type="checkbox"></Seleccionar>
            <TextoCheckbox>
              Estoy deacuerdo con los terminos de uso del software y conozco{" "}
              <br />
              la polica de privacidad
            </TextoCheckbox>
          </Checkbox>

          <ContaienrBoton>
            <Boton onClick={Registro}>Crear cuenta</Boton>
          </ContaienrBoton>
        </Contenedor2>
      </Contenedor>
      <VentanaModal1
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
      ></VentanaModal1>
      <UserExiste
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
      ></UserExiste>
    </>
  );
};

export default Registrarse;
