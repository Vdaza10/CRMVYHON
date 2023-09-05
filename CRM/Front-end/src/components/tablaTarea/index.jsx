import React from "react";
import Menu from "../menu/principal";
import { ContainerPrincipal, Heder, ContainerInput, Input, HederTabla, Caja1, Parrafo, BodyTabla, CajaIcono, FooterTabla, Boton } from "./styled";
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
                    <Caja1><Parrafo>Asunto</Parrafo></Caja1>
                    <Caja1><Parrafo>Responsable</Parrafo></Caja1>
                    <Caja1><Parrafo>Tipo de tarea</Parrafo></Caja1>
                    <Caja1><Parrafo>Fecha</Parrafo></Caja1>
                    <Caja1><Parrafo>Hora</Parrafo></Caja1>
                    <Caja1><Parrafo>Acción</Parrafo></Caja1>
                </HederTabla>
                {tarea.map((item, i) => (
                    <BodyTabla key={i} >
                        <Caja1>
                            <Parrafo>{item.negocio}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.asunto}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.responsable}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.tipoTarea}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.fecha}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <Parrafo>{item.hora}</Parrafo>
                        </Caja1>
                        <Caja1>
                            <CajaIcono style={{ justifyContent: "end" }}><MdDelete style={{ fontSize: "30px" }} /></CajaIcono>
                            <CajaIcono> <BiSolidEditAlt style={{ fontSize: "30px" }} /></CajaIcono>
                        </Caja1>
                    </BodyTabla>
                ))}

                <FooterTabla>
                    <Boton onClick={() => setActive(!active)}>Crear Tarea</Boton>
                </FooterTabla>
                {active && <CrearTarea></CrearTarea>}
            </ContainerPrincipal>
        </>
    );
}
export default TablaTarea;