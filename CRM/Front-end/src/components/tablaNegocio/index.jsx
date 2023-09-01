import React  from "react";
import Menu from "../menu/principal";
import { ContainerPrincipal , Heder , ContainerInput, Input, HederTabla , Caja1 , Parrafo, BodyTabla, CajaIcono, FooterTabla, Boton} from "./styled";
import { AiOutlineClose , AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState } from "react";
import CrearNegocios from "../crearNegocios";

function TablaNegocio() {

    const [active, setActive] = useState(false);


    return (
        <>
            <Menu/> {/* Muestra el componente Menu */}
                <ContainerPrincipal>
                    <Heder>
                        <h1>Tabla Negocio</h1>
                        <ContainerInput>
                            <AiOutlineSearch style={{fontSize:"25px" , color:"#4b4848"}}/>
                            <Input placeholder="Buscar ..."></Input>
                            <AiOutlineClose style={{fontSize:"20px", color:"gray"}}/>
                        </ContainerInput>
                    </Heder>
                    <HederTabla>
                        <Caja1><Parrafo>Nombre negocio</Parrafo></Caja1>
                        <Caja1><Parrafo>Etapas</Parrafo></Caja1>
                        <Caja1><Parrafo>Fuente</Parrafo></Caja1>
                        <Caja1><Parrafo>Empresa</Parrafo></Caja1>
                        <Caja1><Parrafo>Contacto</Parrafo></Caja1>
                        <Caja1><Parrafo>Acción</Parrafo></Caja1>
                    </HederTabla>
                    <BodyTabla>
                        <Caja1></Caja1>
                        <Caja1></Caja1>
                        <Caja1></Caja1>
                        <Caja1></Caja1>
                        <Caja1></Caja1>
                        <Caja1>
                            <CajaIcono style={{justifyContent:"end"}}><MdDelete style={{fontSize:"30px"}}/></CajaIcono>
                            <CajaIcono> <BiSolidEditAlt style={{fontSize:"30px"}}/></CajaIcono>
                        </Caja1>
                    </BodyTabla>
                    <FooterTabla>
                        <Boton onClick={() => setActive(!active)}>Crear negocio</Boton>
                    </FooterTabla>
                    {active && <CrearNegocios></CrearNegocios>}
                </ContainerPrincipal>
        </>
    );
}
export default TablaNegocio;