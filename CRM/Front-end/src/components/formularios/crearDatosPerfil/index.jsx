import React, { useState } from "react";
import { InputInfor, Caja, Select1 } from "./styled";
import { Container, ContenedorModal, Header, Body, Boton } from "../../vistas/markenting/llamadaAudioModal/styled";
import { GrClose } from "react-icons/gr";
import { BiSolidUser } from 'react-icons/bi';
import { BsTelephoneFill, BsGeoAltFill } from 'react-icons/bs';
import { FaFlag } from 'react-icons/fa';
import axios from "axios";

function DatosPerfil({ estado, cambiarEstado }) {

  const [formulario, setFormulario] = useState({
    tipoDocumento: "",
    identificacion: "",
    fechaNacimiento: "",
    nacionalidad: "",
    contacto: "",
    lugarResidencia: "",
    sexo: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };
  


  const GuardarDatosPerfil = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/datosPerfil`,
        formulario // Enviar el estado del formulario como datos
      );
      console.log(response.data); // Manejar la respuesta del servidor
    } catch (error) {
      console.error("Hubo un error al enviar los datos:", error);
    }
  };
  


  return (
    <>
      {estado && (
        <Container>
          <ContenedorModal>
            <Header>
              <h1>Datos adicionales</h1>
              <GrClose
                onClick={() => cambiarEstado(false)}
                style={{ marginRight: "30px", color: "red", fontSize: "20px" }}
              ></GrClose>
            </Header>
            <Body>
              <Caja>
              <Select1>
                  <option value="">Tipo de documento</option>
                  <option value="">c.c</option>
                  <option value="">t.i</option>
                </Select1>
                <fieldset className="Cajafieldset">
                  <legend>Identificación</legend>
                  <InputInfor placeholder="Ingresar datos..." value={formulario.identificacion} onChange={handleInputChange} ></InputInfor>
                  <BiSolidUser className="Icono"></BiSolidUser>
                </fieldset>
                <fieldset className="Cajafieldset">
                  <legend>Fecha de nacimiento</legend>
                  <InputInfor className="InputFecha" type="date"  value={formulario.fechaNacimiento} onChange={handleInputChange}></InputInfor>
                </fieldset>
                
                <fieldset className="Cajafieldset">
                  <legend>Nacionalidad</legend>
                  <InputInfor placeholder="Ingresar datos..."  value={formulario.nacionalidad} onChange={handleInputChange} ></InputInfor>
                  <FaFlag className="IconoGrandes"></FaFlag>
                </fieldset>
                <fieldset className="Cajafieldset">
                  <legend>Contacto</legend>
                  <InputInfor placeholder="Ingresar datos..."  value={formulario.contacto} onChange={handleInputChange}></InputInfor>
                  <BsTelephoneFill className="IconoGrandes"></BsTelephoneFill>
                </fieldset>
                
                <fieldset className="Cajafieldset">
                  <legend>Lugar de residencia</legend>
                  <InputInfor placeholder="Ingresar datos..."  value={formulario.lugarResidencia} onChange={handleInputChange}></InputInfor>
                  <BsGeoAltFill className="Icono"></BsGeoAltFill>
                </fieldset>
                <Select1>
                  <option value="">Sexo</option>
                  <option value="">Femenino</option>
                  <option value="">Masculino</option>
                </Select1>
              </Caja>
            </Body>
            <Boton onClick={GuardarDatosPerfil}>Agregar</Boton>
          </ContenedorModal>
        </Container>
      )}
    </>
  )
}
export default DatosPerfil;