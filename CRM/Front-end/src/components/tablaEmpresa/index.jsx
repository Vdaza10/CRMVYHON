import React from "react";
import Menu from "../menu/principal";
import { ContainerPrincipal , Heder , ContainerInput, Input, HederTabla , Caja1 , Parrafo, BodyTabla, CajaIcono, Boton , FooterTabla , ContainerSecundario} from "./styled";
import { AiOutlineClose , AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState, useEffect } from "react";
import Retorno8 from "../creacionempresa";
import EmpresaUpdate from "../updateEmpresa";
import Axios from "axios";

function TablaEmpresa() {
  const [active, setActive] = useState(false);
  const [activeEditar, setActiveEditar] = useState(false);
  const [empresa, setEmpresa] = useState([]);
  const [empresaEditar, setEmpresaEditar] = useState(null);


  const handleEditarClick = (item) => {
    setEmpresaEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
    setActiveEditar(true); // Activa el componente de edición
  };


  const Getempresa = async () => {
    const empresas = await Axios.get("http://localhost:3005/companytabla");
    setEmpresa(empresas.data);
    console.log(empresas.data);
  };

  const TabladeleteEmpresa = async (item) => {
    try {
      const res = await Axios.delete(
        `http://localhost:3005/companytabla/${item.idEmpresa}`
      );
      console.log("Contacto eliminado con éxito.", res.data);
      Getempresa()
    } catch (error) {
      console.log("Error al eliminar la empresa:", error);
    }
    
  };

  useEffect(() => {
    Getempresa();
  }, []);

  return (
    <>
      <Menu /> {/* Muestra el componente Menu */}
      <ContainerPrincipal>
        <Heder>
          <h1>Tabla empresa</h1>
          <ContainerInput>
            <AiOutlineSearch style={{ fontSize: "25px", color: "#4b4848" }} />
            <Input placeholder="Buscar ..."></Input>
            <AiOutlineClose style={{ fontSize: "20px", color: "gray" }} />
          </ContainerInput>
        </Heder>
        <HederTabla>
          <Caja1>
            <Parrafo>nombre empresa</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>segmento</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>url</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>Descripción</Parrafo>
          </Caja1>
          <Caja1>
            <Parrafo>acción</Parrafo>
          </Caja1>
        </HederTabla>
        <ContainerSecundario>
        {empresa.map((item, i) => (
          <BodyTabla key={i}>
            <Caja1>
              <Parrafo>{item.nombreEmpresa}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.segmento}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.url}</Parrafo>
            </Caja1>
            <Caja1>
              <Parrafo>{item.descripcion}</Parrafo>
            </Caja1>
            <Caja1>
              <CajaIcono style={{ justifyContent: "end" }}>
                <MdDelete
                  style={{ fontSize: "30px" }}
                  onClick={() => TabladeleteEmpresa(item)}
                />
              </CajaIcono>
              <CajaIcono>
                <BiSolidEditAlt style={{ fontSize: "30px" }} onClick={() => handleEditarClick(item)} />
              </CajaIcono>
            </Caja1>
          </BodyTabla>
        ))}
        </ContainerSecundario>
        <FooterTabla>
          <Boton onClick={() => setActive(!active)}>Crear Empresa</Boton>
        </FooterTabla>
        {active && <Retorno8></Retorno8>}
        {activeEditar && <EmpresaUpdate empresa={empresaEditar}></EmpresaUpdate>}
      </ContainerPrincipal>
    </>
  );
}
export default TablaEmpresa;
