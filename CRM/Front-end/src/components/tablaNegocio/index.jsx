import React, { useEffect, useState } from "react";
import Menu from "../menu/principal";
import {
  ContainerPrincipal,
  Heder,
  ContainerInput,
  Input,
  HederTabla,
  Caja1,
  Parrafo,
  BodyTabla,
  CajaIcono,
  FooterTabla,
  Boton,
  ContainerSecundario,
} from "./styled";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import CrearNegocios from "../crearNegocios";
import Axios from "axios";
import NegocioUpdate from "../updateNegocio";

function TablaNegocio() {
  const [active, setActive] = useState(false);
  const [activeEditar, setActiveEditar] = useState(false);
  const [negocios, setNegocios] = useState([]);
  const [negocioAEditar, setNegocioAEditar] = useState(null);


  // barra de busqueda
const [buscar, setBuscar] = useState("")

//Funcion para traer los datos de la tabla, a buscar

//Inicio, Función de busqueda
  const BarraDeBusqueda = (e) => {
  setBuscar(e.target.value);
  console.log(e.target.value);
};

//Metodo de filtrado tabla negocio
  let resBusqueda = [];

  if (!buscar) {
  resBusqueda = negocios|| [];
} else {
  resBusqueda = negocios.filter(
      (dato) =>
      dato.nombreNegocio &&
      dato.nombreNegocio.toLowerCase().includes(buscar.toLowerCase())
);
}

  const handleEditarClick = (item) => {
    setNegocioAEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
    setActiveEditar(true); // Activa el componente de edición
  };

  const ReflejarDatos = async () => {
    try {
      const response = await Axios.get("http://localhost:3005/negociotabla");
      setNegocios(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const TabladeleteNegocio = async (item) => {
    try {
      const res = await Axios.delete(`http://localhost:3005/negociotabla/${item.idNegocio}`);
      console.log("Negocio eliminado con éxito.", res.data);
      ReflejarDatos(); // Refresca la lista de negocios después de eliminar uno
    } catch (error) {
      console.error("Error al eliminar el negocio:", error);
    }
    setTimeout(() => {
      window.location.href = "/negocios"  
       },0)
  };

  useEffect(() => {
    ReflejarDatos();
  }, []);

  return (
    <>
      <Menu /> {/* Muestra el componente Menu */}
      <ContainerPrincipal>
        <Heder>
          <h1>Tabla Negocio</h1>
          <ContainerInput>
            <AiOutlineSearch style={{ fontSize: "25px", color: "#4b4848" }} />
            <Input placeholder="Buscar ..." value={buscar} onChange={BarraDeBusqueda}></Input>
            <AiOutlineClose style={{ fontSize: "20px", color: "gray" }} />
          </ContainerInput>
        </Heder>
        <HederTabla>
          <Caja1>
            <Parrafo>Nombre negocio</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Etapas</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Fuente</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Empresa</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Contacto</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Acción</Parrafo>
          </Caja1>
        </HederTabla>
        <ContainerSecundario>
          {resBusqueda.map((item, i) => (
            <BodyTabla key={i}>
              <Caja1>
                <Parrafo>{item.nombreNegocio}</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>{item.etapas}</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>{item.fuente}</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>{item.nombreEmpresa}</Parrafo>
              </Caja1>
              <Caja1>
                <Parrafo>{item.nombreContacto}</Parrafo>
              </Caja1>
              <Caja1>
                <CajaIcono style={{ justifyContent: "end" }}>
                  <MdDelete
                    style={{ fontSize: "30px" }}
                    onClick={() => TabladeleteNegocio(item)}
                  />
                </CajaIcono>
                <CajaIcono>
                  <BiSolidEditAlt
                    style={{ fontSize: "30px" }}
                    onClick={() => handleEditarClick(item)} // Llama a la función para editar
                  />
                </CajaIcono>
              </Caja1>
            </BodyTabla>
          ))}
        </ContainerSecundario>
        <FooterTabla>
          <Boton onClick={() => setActive(!active)}>Crear negocio</Boton>
        </FooterTabla>
        {active && <CrearNegocios />}
        {activeEditar && <NegocioUpdate negocio={negocioAEditar} />}
      </ContainerPrincipal>
    </>
  );
}

export default TablaNegocio;