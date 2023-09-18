import React, { useState , useEffect } from "react";
import Axios from "axios";
import {  Container, Caja1,Parrafo , Caja2, Boton , IconContainer, SelectParrafo} from "./styled";
import imagen from "../img/tarea.jpg"
import { FaUserAlt } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillCalendar2CheckFill, BsFillClipboard2CheckFill } from "react-icons/bs";
import Menu from "../menu/principal";
import CrearTarea from "../CreacionTarea";
import TablaTarea from "../tablaTarea";
import Retorno6 from "../creacionTareasOpciones";


function Retorno5() {

    
    const [active, setActive] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [tarea, setTarea] = useState([])


    const ReflejarDatos = async () => {
        // ev.preventDefault();
        const tareas = await Axios.get("http://localhost:3005/tareasTabla");
        setTarea(tareas.data);
    };
    useEffect(() => {
        ReflejarDatos();
    }, [setTarea]);



    return (
        <> 
        {tarea.length <= 0 ? (
            <>
            <Menu/>
                <Container>
                    <Caja1>

                        <IconContainer onClick={() => setActiveDropdown(!activeDropdown)} style={{width:"10%"}}>
                            <FaUserAlt style={{marginLeft:"10px"}}/>
                            <SelectParrafo>Mis tareas</SelectParrafo>
                            <IoIosArrowDown style={{marginRight:"10px",width:"12px"}} ></IoIosArrowDown>
                            {activeDropdown && <Retorno6></Retorno6>}
                        </IconContainer>

                        <IconContainer>
                            <BsFillCalendar2CheckFill style={{marginLeft:"10px"}}/>
                            <SelectParrafo >Seleccionar periodo</SelectParrafo>
                            <IoIosArrowDown style={{marginRight:"10px",width:"12px"}} ></IoIosArrowDown>
                        </IconContainer>

                        <IconContainer>
                            <BsFillClipboard2CheckFill style={{marginLeft:"10px"}}/>
                            <SelectParrafo>Todo tipo de tareas</SelectParrafo>
                            <IoIosArrowDown style={{marginRight:"10px",width:"12px"}} ></IoIosArrowDown>
                        </IconContainer>
                    </Caja1>
                    <Caja2>
                    <img src={imagen} alt="img" style={{width:'40%',height:'40%' }} />

                    <Parrafo><h3>No hemos encontrado tareas en tu cuenta ni con los filtros <br/> que seleccionastes</h3></Parrafo>

                    <Parrafo>Crea tareas para no perder de vista las actividades y ganar mas tiempo para centrarte <br/> en lo que es más importante para tu empresa. o prueba a cambiar los filtros <br/>seleccionados para encontrar nuevos resultados.</Parrafo>

                    <Boton onClick={() => setActive(!active)}>Crear tarea</Boton>
                    {active && <CrearTarea></CrearTarea>}
                    </Caja2>
                </Container>
            </>
        ) : (
            <>
                <TablaTarea></TablaTarea>
            </>
        )}
        </>
    );
}
export default Retorno5;