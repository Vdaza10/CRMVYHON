import React from "react";
import Menu from "../menu/principal";
import { ContainerPrincipal, Heder, ContainerInput, Input, HederTabla, Registros, Campos , Parrafo, BodyTabla, CajaIcono, FooterTabla, Boton } from "./styled";
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState, useEffect } from "react";
import CrearTarea from "../CreacionTarea";
import Axios from "axios";
import UpdateTarea from "../updateTarea";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

function TablaTarea() {

    const [active, setActive] = useState(false);
    const [activeEditar, setActiveEditar] = useState(false);
    const [tarea, setTarea] = useState([]);
    const [tareaEditar, setTareaEditar] = useState(null);
    
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate();

    useEffect(() => {

        const userToken = localStorage.getItem("user");
        if(userToken){
            try {
            const token = jwt_decode(userToken);
      console.log(token, "❤️❤️💕💕💕❤️");
      setLoading(false);
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                navigate('/'); 
            }
        }else{
            navigate('/');
        }
      
    },[navigate])

      // barra de busqueda
const [buscar, setBuscar] = useState("")

//Funcion para traer los datos de la tabla, a buscar

//Inicio, Función de busqueda
  const BarraDeBusqueda = (e) => {
  setBuscar(e.target.value);
  console.log(e.target.value);
};

//Metodo de filtrado tabla empresa
  let resBusqueda = [];

  if (!buscar) {
  resBusqueda = tarea|| [];
} else {
  resBusqueda = tarea.filter(
      (dato) =>
      (dato.nombreNegocio && dato.nombreNegocio.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.asunto && dato.asunto.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.responsable  && dato.responsable.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.tipoTarea  && dato.tipoTarea.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.fecha && dato.fecha.toLowerCase().includes(buscar.toLowerCase())) ||
      (dato.hora && dato.hora.toLowerCase().includes(buscar.toLowerCase()))
);
}

    const handleEditarClick = (item) => {
        setTareaEditar(item); // Cuando se hace clic en Editar, almacena la tarea a editar en el estado
        setActiveEditar(true); // Activa el componente de edición
      };


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


        setTimeout(() => {
                        
            window.location.href = "/tareas"  
        }, 0);
    };
    useEffect(() => {
        ReflejarDatos();
    }, [setTarea]);


    return (
        <>
        {loading ? (
            <>
            <h1>cargando.....</h1>
            </>
        ):(
        <>
            <Menu /> {/* Muestra el componente Menu */}
            <ContainerPrincipal>
                <Heder>
                    <h1>Tabla Tarea</h1>
                    <ContainerInput>
                        <AiOutlineSearch style={{ fontSize: "25px", color: "#4b4848" }} />
                        <Input placeholder="Buscar ..."  value={buscar} onChange={BarraDeBusqueda}></Input>
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
                {resBusqueda.map((item, i) => (
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
                                <CajaIcono> <BiSolidEditAlt style={{ fontSize: "30px" }} onClick={() => handleEditarClick(item)} /* llama a la funcion para actualizar */ /></CajaIcono>
                        </Registros>
                    </BodyTabla>
                ))}
            </div>
                <FooterTabla>
                    <Boton onClick={() => setActive(!active)}>Crear Tarea</Boton>
                </FooterTabla>
                {active && <CrearTarea></CrearTarea>}
                {activeEditar && <UpdateTarea tarea={tareaEditar}></UpdateTarea>}
            </ContainerPrincipal>
        </>
        )}
        </>
    );
}
export default TablaTarea;