import React, { useEffect } from "react";
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
import { useState } from "react";
import CrearNegocios from "../crearNegocios";
import Axios from "axios";

function TablaNegocio() {
  const [active, setActive] = useState(false);
  const [negocios, setNegocios] = useState([]);

  const ReflejarDatos = async () => {
    // ev.preventDefault();
    const negociar = await Axios.get("http://localhost:3005/negociotabla");
    console.log(negociar.data);
    setNegocios(negociar.data);
  };

  const TabladeleteNegocio = async (item) => {
    const res = await Axios.delete(
      `http://localhost:3005/negociotabla/${item.idNegocio}`
    );
    console.log("Contacto eliminado con éxito.", res.data);

    setTimeout(() => {
                        
      window.location.href = "/negocios"  
       },0);
  };

  useEffect(() => {
    ReflejarDatos();
  }, [setNegocios]);

  return (
    <>
      <Menu /> {/* Muestra el componente Menu */}
      <ContainerPrincipal>
        <Heder>
          <h1>Tabla Negocio</h1>
          <ContainerInput>
            <AiOutlineSearch style={{ fontSize: "25px", color: "#4b4848" }} />
            <Input placeholder="Buscar ..."></Input>
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
        {negocios.map((item, i) => (
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
                <CajaIcono style={{justifyContent:"end"}}>
                  <MdDelete style={{fontSize:"30px"}} onClick={() => TabladeleteNegocio(item)}/>
                  </CajaIcono>
                <CajaIcono> 
                  <BiSolidEditAlt style={{fontSize:"30px"}} />
                  </CajaIcono>
            </Caja1>
          </BodyTabla>
        ))}
        </ContainerSecundario>
        <FooterTabla>
          <Boton onClick={() => setActive(!active)}>Crear negocio</Boton>
        </FooterTabla>
        {active && <CrearNegocios></CrearNegocios>}
      </ContainerPrincipal>
    </>
  );
}
export default TablaNegocio;
