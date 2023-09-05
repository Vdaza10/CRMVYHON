import React  from "react";
import Menu from "../menu/principal";
import { ContainerPrincipal , Heder , ContainerInput, Input, HederTabla , Caja1 , Parrafo, BodyTabla, CajaIcono , Boton , FooterTabla} from "./styled";
import { AiOutlineClose , AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState,useEffect } from "react";
import Retorno4 from "../crearcontacto";
import  Axios  from "axios";

function TablaContacto() {
    const [active, setActive] = useState(false)
    const [contacto, setContacto] = useState([])

    const TablagetContacto = async () => {
        const contactos = await Axios.get("http://localhost:3005/contactotabla");
        setContacto(contactos.data)
    }

    useEffect(() => {
        TablagetContacto();
    }, [setContacto]);

    return (
        <>
            <Menu/> {/* Muestra el componente Menu */}
                <ContainerPrincipal>
                    <Heder>
                        <h1>Tabla Contacto</h1>
                        <ContainerInput>
                            <AiOutlineSearch style={{fontSize:"25px" , color:"#4b4848"}}/>
                            <Input placeholder="Buscar ..."></Input>
                            <AiOutlineClose style={{fontSize:"20px", color:"gray"}}/>
                        </ContainerInput>
                    </Heder>
                    <HederTabla>
                        <Caja1><Parrafo>Nombre del contacto</Parrafo></Caja1>
                        <Caja1><Parrafo>Cargo</Parrafo></Caja1>
                        <Caja1><Parrafo>Telefono</Parrafo></Caja1>
                        <Caja1><Parrafo>Correo</Parrafo></Caja1>
                        <Caja1><Parrafo>Contacto de la empresa</Parrafo></Caja1>
                        <Caja1><Parrafo>Accion</Parrafo></Caja1>
                    </HederTabla>
                    {contacto.map((item, i) => (
                    <BodyTabla key={i} >
                        <Caja1>
                            <Parrafo>{item.nombreContacto}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.cargo}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.telefono}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.correo}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.nombreEmpresa}</Parrafo>
                        </Caja1>
                        
                        <Caja1>
                            <CajaIcono style={{ justifyContent: "end" }}><MdDelete style={{ fontSize: "30px" }} /></CajaIcono>
                            <CajaIcono> <BiSolidEditAlt style={{ fontSize: "30px" }} /></CajaIcono>
                        </Caja1>
                    </BodyTabla>
                ))}

                    <FooterTabla>
                        <Boton onClick={() => setActive(!active)}>Crear Contacto</Boton>
                    </FooterTabla>
                    {active && <Retorno4/>}
                </ContainerPrincipal>
        </>
    );
}
export default TablaContacto;   