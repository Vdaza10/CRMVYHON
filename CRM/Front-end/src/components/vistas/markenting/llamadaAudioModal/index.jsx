import React,{useEffect,useState} from "react";
import {Container,ContenedorModal,Header,Body,Input1,Caja,Boton,Select1,
} from "./styled";
import { GrClose } from "react-icons/gr";
import Axios from "axios";

const Audiollamada = ({ estado, cambiarEstado }) => {
  const [negocio, setNegocio] = useState([]);
  const [selectNegocio, setSelectNegocio] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [telefonoFijo, setTelefonoFijo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [llamadaInicio, setLlamadaInicio] = useState("");
  const [llamadaFinal, setLlamadaFinal] = useState("");


  const fetchNegocio = async () => {
    try {
      const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/negocio`);
      setNegocio(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener segmentos:", error);
    }
  };

  useEffect(() => {
    fetchNegocio();
  }, []);



  const CrearLlamada = (ev) => {
    ev.preventDefault();

    // Buscar si el valor seleccionado en selectNegocio existe en el estado negocio
    const selectedNegocio = negocio.find((n) => n.idNegocio === parseInt(selectNegocio));
    if (!selectedNegocio) {
      alert('El negocio seleccionado no es válido');
      return;
    }

    if (cedula && negocio && nombre && apellido && telefono && telefonoFijo && direccion && correo && llamadaInicio && llamadaFinal) {
      Axios.post(`${process.env.REACT_APP_URL_BACKEND}/llamada`, {
        negocio: selectedNegocio.idNegocio,
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        telefonoFijo: telefonoFijo,
        direccion: direccion,
        correo: correo,
        llamadaInicio: llamadaInicio,
        llamadaFinal: llamadaFinal,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Ingresa todos los valores');
    }
    setTimeout(() => {

      window.location.href = "/Marketing"
    }, 0);
  }


  return (
    <>
      {estado && (
        <Container>
          <ContenedorModal>
            <Header>
              <h1>Llamada</h1>
              <GrClose
                onClick={() => cambiarEstado(false)}
                style={{ marginRight: "30px", color: "red", fontSize: "20px" }}
              ></GrClose>
            </Header>
            <Body>
              <Select1 value={selectNegocio} onChange={(event) => {
                setSelectNegocio(event.target.value);
              }}>

                <option value="option">selecionar negocio</option>
                {negocio.map(negocio => (
                  <option key={negocio.idNegocio} value={negocio.idNegocio}>
                    {negocio.nombreNegocio}
                  </option>
                ))};
              </Select1>
              <Input1
                placeholder="Ingresar nombre"
                onKeyPress={(event) => {
                  const inputValue = event.key;
                  const regex = /[a-zA-Z ]/;
                  if (!regex.test(inputValue)) {
                    event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                  }
                }}
                onChange={(event) => {
                  setNombre(event.target.value)
              }}
              ></Input1>
              <Input1
                placeholder="Ingresar apellido"
                onKeyPress={(event) => {
                  const inputValue = event.key;
                  const regex = /[a-zA-Z ]/;
                  if (!regex.test(inputValue)) {
                    event.preventDefault(); 
                  }
                }}
                onChange={(event) => {
                  setApellido(event.target.value)
              }}
              ></Input1>
              <Input1
                placeholder="Ingresar Identificacion"
                onKeyPress={(event) => {
                  const inputValue = event.key;
                  const regex = /[0-9]/;
                  if (!regex.test(inputValue)) {
                    event.preventDefault(); 
                  }
                }}
                onChange={(event) => {
                  setCedula(event.target.value)
              }}
              ></Input1>
              <Caja>
                <Input1
                  placeholder="Ingresar telefono personal"
                  onKeyPress={(event) => {
                    const inputValue = event.key;
                    const regex = /[0-9]/;
                    if (!regex.test(inputValue)) {
                      event.preventDefault(); 
                    }
                  }}
                  onChange={(event) => {
                    setTelefono(event.target.value)
                }}
                  className="InputPequeño"
                ></Input1>
                <Input1
                  placeholder="Ingresar telefono fijo"
                  onKeyPress={(event) => {
                    const inputValue = event.key;
                    const regex = /[0-9]/;
                    if (!regex.test(inputValue)) {
                      event.preventDefault();
                    }
                  }}
                  className="InputPequeño"

                  onChange={(event) => {
                    setTelefonoFijo(event.target.value)
                }}
                ></Input1>
              </Caja>
              <Input1
                placeholder="Ingresar dirrecion"
                onKeyPress={(event) => {
                  const inputValue = event.key;
                  const regex = /[a-zA-Z0-9 -#.]/;
                  if (!regex.test(inputValue)) {
                    event.preventDefault();
                  }
                }}

                onChange={(event) => {
                  setDireccion(event.target.value)
              }}
              ></Input1>
              <Input1
                placeholder="Ingresar Correo electronico"
                onKeyPress={(event) => {
                  const inputValue = event.key;
                  const regex = /[_.@a-zA-Z0-9]/;
                  if (!regex.test(inputValue)) {
                    event.preventDefault(); 
                  }
                }}
                onChange={(event) => {
                  setCorreo(event.target.value)
              }}
              ></Input1>
              <Caja>
                <fieldset className="Cajafieldset">
                  <legend>Hora inicio</legend>
                  <input className="InputHora" type="datetime-local" onChange={(event) => {
                                setLlamadaInicio(event.target.value)
                            }} />
                </fieldset>
                <fieldset className="Cajafieldset">
                  <legend>Hora final</legend>
                  <input className="InputHora" type="datetime-local" onChange={(event) => {
                                setLlamadaFinal(event.target.value)
                            }}/>
                </fieldset>
              </Caja>
            </Body>
            <Boton onClick={CrearLlamada}> Guardar</Boton>
          </ContenedorModal>
        </Container>
      )}
    </>
  );
};
export default Audiollamada;
