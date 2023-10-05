import React, { useState , useEffect } from "react";
import { InputInfor, Caja, Select1 } from "./styled";
import { Container, ContenedorModal, Header, Body, Boton } from "../../vistas/markenting/llamadaAudioModal/styled";
import { GrClose } from "react-icons/gr";
import axios from "axios";

function DatosPerfil({ estado, cambiarEstado,userData }) {

  const [tipoDocumentoSelect, setTipoDocumentoSelect] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [contacto, setContacto] = useState("");
  const [lugarResidencia, setLugarResidencia] = useState("");
  const [sexoSelect, setSexoSelect] = useState("");

  const [genero, setGenero] = useState([]);
  const [tipoDocumeto, setTipoDocumeto] = useState([]);

  
  const fetchGenero = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/genero`);
      setGenero(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener sexo:", error);
    }
  };

  useEffect(() => {
    fetchGenero();
  }, []);

  const fetchDocumeto = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/tipoDocumeto`);
      setTipoDocumeto(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener tipo de documento:", error);
    }
  };

  useEffect(() => {
    fetchDocumeto();
  }, []);


  const GuardarDatosPerfil = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/datosPerfil/${userData.idRegistro}`,
        {
          identificacion: identificacion,
          tipo_documento : tipoDocumentoSelect,
          fechaNacimiento : fechaNacimiento,
          nacionalidad : nacionalidad,
          Telefono: contacto,
          lugarResidencia : lugarResidencia,
          sexo : sexoSelect,
        }
      );
      setTimeout(() => {

        window.location.href = "/perfilusuario"
    }, 0);
      console.log(response.data); // Manejar la respuesta del servidor
    } catch (error) {
      console.log(error);
      console.error("Hubo un error al enviar los datos:", error);
    }
  };


  return (
    <>
      {estado && (
        <Container>
          <ContenedorModal>
            <Header>
              <h1>Agregar informacion personal</h1>
              <GrClose
                onClick={() => cambiarEstado(false)}
                style={{ marginRight: "30px", color: "red", fontSize: "20px" }}
              ></GrClose>
            </Header>
            <Body>
              <Caja>
              <fieldset className="Cajafieldset">
                  <legend>Fecha de nacimiento</legend>
                  <InputInfor className="InputFecha" type="date" onChange={(e) => setFechaNacimiento(e.target.value)}></InputInfor>
                </fieldset>
              <Select1 value={tipoDocumentoSelect} onChange={(e) => setTipoDocumentoSelect(e.target.value)}>
                <option value=''>tipo documento</option>
                {tipoDocumeto.map((documento) => (
                  <option key={documento.id_personal} value={documento.id_personal}>
                    {documento.tipo_documento}
                    </option>
                ))}
                </Select1>
                  <InputInfor placeholder="Ingresar Identificacion" onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[0-9]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }} onChange={(e) => setIdentificacion(e.target.value)}></InputInfor>
                  <InputInfor placeholder="Ingresar nacionalidad"onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[a-zA-ZÑñ]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }}  onChange={(e) => setNacionalidad(e.target.value)} ></InputInfor>
                  <InputInfor placeholder="Ingresar contacto" onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[0-9]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }} onChange={(e) => setContacto(e.target.value)}></InputInfor>
                  <InputInfor placeholder="Ingresar lugar de residencia"onKeyPress={(event) => {
              const inputValue = event.key;
              const regex = /[a-zA-ZÑñ ]/;
              if (!regex.test(inputValue)) {
                event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
              }
            }}  onChange={(e) => setLugarResidencia(e.target.value)}></InputInfor>
                <Select1 value={sexoSelect}
                onChange={(e) => setSexoSelect(e.target.value)}>
                  <option value=''>sexo</option>
                  {genero.map((genero) => (
                    <option key={genero.id_sexo} value={genero.id_sexo}>
                      {genero.sexo}
                    </option>
                  ))}
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