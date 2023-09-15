import React, { useState, useEffect, useRef } from 'react';
import { Container, ContenedorModal, Encabezado, Contenido, Input1, Boton, ContainerFoto, Foto, ContainerInput, Texto } from './styled';
import { GrClose } from "react-icons/gr";
import IPerfil from "../img/perfil.jpg";
import Axios from 'axios';

const UserEditar = ({ status, changeStatus, userData }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (userData) {
      setNombreUsuario(userData.nombreUsuario);
      setNombreEmpresa(userData.nombreEmpresa);
      setCorreo(userData.correo);
      setContraseña(userData.contraseña);
    }
  }, [userData]);

  const updateUser = async () => {
    // Verificar si el correo es válido antes de guardar los datos
    if (!emailInputRef.current.validity.valid) {
      alert('El correo ingresado no es válido.');
      return;
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
      localStorage.setItem('user', JSON.stringify(updatedUserData));
      console.log("Usuario actualizado.", res.data);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      window.location.href = "/perfilusuario";
    }, 0);
  }

  return (
    <>
      {status &&
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
                <Input1 value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))} />

                <Texto>Empresa</Texto>
                <Input1 value={nombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} />

                <Texto>Correo</Texto>
                <Input1 type='email' ref={emailInputRef} value={correo} onChange={(e) => setCorreo(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                <Texto>Contraseña</Texto>
                <Input1 type='password' value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
              </ContainerInput>
            </Contenido>
            <Boton onClick={updateUser}>Editar</Boton>
          </ContenedorModal>
        </Container>
      }
    </>
  )
}

export default UserEditar;