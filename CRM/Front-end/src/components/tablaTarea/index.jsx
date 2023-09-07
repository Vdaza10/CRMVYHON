import React from "react";
import Menu from "../menu/principal";
import { ContainerPrincipal, Heder, ContainerInput, Input, HederTabla, Registros, Campos , Parrafo, BodyTabla, CajaIcono, FooterTabla, Boton } from "./styled";
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState, useEffect } from "react";
import CrearTarea from "../CreacionTarea";
import Axios from "axios";

function TablaTarea() {

    const [active, setActive] = useState(false);
    const [tarea, setTarea] = useState([])

    const ReflejarDatos = async () => {
        // ev.preventDefault();
        const tareas = await Axios.get("http://localhost:3005/tareasTabla");
        console.log(tareas.data);
        setTarea(tareas.data);
    };

    const TabladeleteTarea = async (item) => {
        const res = await Axios.delete(
        `http://localhost:3005/tareastabla/${item.idTarea}`
        );
        console.log("Contacto eliminado con éxito.", res.data);
    };
    useEffect(() => {
        ReflejarDatos();
    }, [setTarea]);


    return (
        <>
            <Menu /> {/* Muestra el componente Menu */}
            <ContainerPrincipal>
                <Heder>
                    <h1>Tabla Tarea</h1>
                    <ContainerInput>
                        <AiOutlineSearch style={{ fontSize: "25px", color: "#4b4848" }} />
                        <Input placeholder="Buscar ..."></Input>
                        <AiOutlineClose style={{ fontSize: "20px", color: "gray" }} />
                    </ContainerInput>
                </Heder>
                <HederTabla>
                    <Campos><Parrafo>Negocio</Parrafo></Campos>
                    <Campos><Parrafo>Asunto</Parrafo></Campos>
                    <Campos><Parrafo>Responsable</Parrafo></Campos>
                    <Campos><Parrafo>Tipo de tarea</Parrafo></Campos>
                    <Campos><Parrafo>Fecha</Parrafo></Campos>
                    <Campos><Parrafo>Hora</Parrafo></Campos>
                    <Campos><Parrafo>Acción</Parrafo></Campos>
                </HederTabla>
                <div className="ContainerSecundario">
                {tarea.map((item, i) => (
                    <BodyTabla key={i} >
                        <Registros>
                            <Parrafo>{item.nombreNegocio}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.asunto}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.responsable}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.tipoTarea}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.fecha}</Parrafo>
                        </Registros>
                        <Registros>
                            <Parrafo>{item.hora}</Parrafo>
                        </Registros>
                        <Registros>
                            <CajaIcono style={{ justifyContent: "end" }}>
                                <MdDelete style={{ fontSize: "30px" }} onClick={()=> TabladeleteTarea(item)}/>
                                </CajaIcono>
                        </Registros>
                        <Registros>
                            <CajaIcono style={{ justifyContent: "end" }}><MdDelete style={{ fontSize: "30px" }} /></CajaIcono>
                            <CajaIcono> <BiSolidEditAlt style={{ fontSize: "30px" }} /></CajaIcono>
                        </Registros>
                    </BodyTabla>
                ))}
            </div>
                <FooterTabla>
                    <Boton onClick={() => setActive(!active)}>Crear Tarea</Boton>
                </FooterTabla>
                {active && <CrearTarea></CrearTarea>}
            </ContainerPrincipal>
        </>
    );
}
export default TablaTarea;