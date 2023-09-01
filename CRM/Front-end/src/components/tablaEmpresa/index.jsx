import React  from "react";
import Menu from "../menu/principal";
import { ContainerPrincipal , Heder , ContainerInput, Input, HederTabla , Caja1 , Parrafo, BodyTabla, CajaIcono, Boton , FooterTabla} from "./styled";
import { AiOutlineClose , AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState } from "react";
import Retorno8 from "../creacionempresa";

function TablaEmpresa() {


    const [active, setActive] = useState(false);

    return (
        <>
            <Menu/> {/* Muestra el componente Menu */}
                <ContainerPrincipal>
                    <Heder>
                        <h1>Tabla empresa</h1>
                        <ContainerInput>
                            <AiOutlineSearch style={{fontSize:"25px" , color:"#4b4848"}}/>
                            <Input placeholder="Buscar ..."></Input>
                            <AiOutlineClose style={{fontSize:"20px", color:"gray"}}/>
                        </ContainerInput>
                    </Heder>
                    <HederTabla>
                        <Caja1><Parrafo>nombre empresa</Parrafo></Caja1>
                        <Caja1><Parrafo>segmento</Parrafo></Caja1>
                        <Caja1><Parrafo>url</Parrafo></Caja1>
                        <Caja1><Parrafo>Descripción</Parrafo></Caja1>
                        <Caja1><Parrafo>acción</Parrafo></Caja1>
                    </HederTabla>
                    <BodyTabla>
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
                        <Boton onClick={() => setActive(!active)}>Crear Empresa</Boton>
                    </FooterTabla>
                    {active && <Retorno8></Retorno8>}
                </ContainerPrincipal>
        </>
    );
}
export default TablaEmpresa;