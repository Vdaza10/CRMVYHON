import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  ContenedorModal,
  Encabezado,
  Contenido,
  Input1,
  Boton,
  ContainerFoto,
  Foto,
  ContainerInput,
  Texto,
} from "./styled";
import { GrClose } from "react-icons/gr";
import IPerfil from "../img/perfil.jpg";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const UserEditar = ({ status, changeStatus }) => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const emailInputRef = useRef(null);
  // const [loading, setLoading] = useState(true)
  const [userData ,setUserData] = useState({});

  let navigate = useNavigate();

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

    }
},[navigate])



  useEffect(() => {
    if (userData) {
      setNombreUsuario(userData.username);
      setNombreEmpresa(userData.nombreEmpresa);
      setCorreo(userData.email);
      setContraseña(userData.password);
    }
  }, [userData]);
  console.log("clgggggg",userData);

  const updateUser = async () => {
    // Verificar si el correo es válido antes de guardar los datos
    if (!emailInputRef.current.validity.valid) {
      alert("El correo ingresado no es válido.");
      
    }else{
      

    }

    try {
      const res = await Axios.patch(
        `http://localhost:3005/users/${userData.idRegistro}`,
        {
          nombreUsuario,
          nombreEmpresa,
          correo,
          contraseña,
        }
      );

      // Actualiza los datos en el localStorage después de una actualización exitosa
      const updatedUserData = {
        ...userData,
        nombreUsuario,
        nombreEmpresa,
        correo,
        contraseña,
      };
      localStorage.setItem("user", JSON.stringify(updatedUserData));
      console.log("Usuario actualizado.", res.data); 
    } catch (error) {
      console.error(error);
    }
    setTimeout(()=>{
      window.location.href = "/perfilusuario";
    },1000)
   
  };

  return (
    // <>
    
    // {loading ? (
    //             <>
    //                 <h1>Cargando......</h1>
    //             </>
    //         ) : (
              <>
      {status && (
        <Container>
          <ContenedorModal>
            <Encabezado>
              <h1>Cambiar datos personales</h1>
              <GrClose
                style={{ marginRight: "30px", color: "red", fontSize: "20px" }}
                onClick={() => changeStatus(false)}
              />
            </Encabezado>
            <Contenido>
              <ContainerFoto>
                <Foto src={IPerfil}></Foto>
              </ContainerFoto>
              <ContainerInput>
                <Texto>Nombre</Texto>
                <Input1
                  value={nombreUsuario}
                  onKeyPress={(event) => {
                    const inputValue = event.key;
                    const regex = /[a-zA-Z ]/;
                    if (!regex.test(inputValue)) {
                      event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                    }
                  }}
                  onChange={(e) =>
                    setNombreUsuario(
                      e.target.value.replace(/[^a-zA-Z0-9]/g, "")
                    )
                  }
                />

                <Texto>Empresa</Texto>
                <Input1
                  value={nombreEmpresa}
                  onKeyPress={(event) => {
                    const inputValue = event.key;
                    const regex = /[a-zA-Z0-9& ]/;
                    if (!regex.test(inputValue)) {
                      event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                    }
                  }}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                />

                <Texto>Correo</Texto>
                <Input1
                  type="email"
                  ref={emailInputRef}
                  value={correo}
                  onKeyPress={(event) => {
                    const inputValue = event.key;
                    const regex = /[_.@a-zA-Z0-9]/;
                    if (!regex.test(inputValue)) {
                      event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                    }
                  }}
                  onChange={(e) => setCorreo(e.target.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <Texto>Contraseña</Texto>
                <Input1
                  type="password"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </ContainerInput>
            </Contenido>
            <Boton onClick={updateUser}>Editar</Boton>
          </ContenedorModal>
        </Container>
      )}
    </>
    // )}
    // </>
  );
};

export default UserEditar;