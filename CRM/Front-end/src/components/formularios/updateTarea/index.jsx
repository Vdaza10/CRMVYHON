import React, { useState, useEffect } from "react";
import { Container, Principal, Caja1, Parrafo, Img, Caja2, Parrafo1, Input, Caja3, Boton1, Boton2, ContainerInput, Select } from "./styled.jsx";
import imagen from "../../img/img_x.webp"
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Axios from "axios";



const UpdateTarea = ({ tarea }) => {
    const [cerrar, setCerrar] = useState(true);
    const [selectNegocio, setSelectNegocio] = useState("");
    const [asunto, setAsunto] = useState("")
    const [responsable, setResponsable] = useState("");
    const [tipoTarea, setTipotarea] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("");
    const [negocio, setNegocio] = useState([])

    useEffect(() => {
        const fetchNegocio = async () => {
            try {
                const response = await Axios.get(`${process.env.REACT_APP_URL_BACKEND}/negocio`);
                setNegocio(response.data);
            } catch (error) {
                console.error("Error al obtener Negocio:", error);
            }
        };

        fetchNegocio();
    }, []);


    useEffect(() => {
        if (tarea) {
            setSelectNegocio(setNegocio.negocio);
            setAsunto(tarea.asunto);
            setResponsable(tarea.responsable);
            setTipotarea(tarea.tipotarea);
            setFecha(tarea.fecha);
            setHora(tarea.hora)
        }
    }, [tarea]);


    const cerrarcomponente = () => {
        setCerrar(false);
        setTimeout(() => {
            window.location.href = "/tareas";
        }, 1000)
    }
    if (!cerrar) {
        return null
    }

    const actualizarTarea = async () => {
        try {
            const res = await Axios.patch(
                `${process.env.REACT_APP_URL_BACKEND}/tareastabla/${tarea.idTarea}`,
                {
                    negocio: selectNegocio,
                    asunto,
                    responsable,
                    tipoTarea,
                    fecha,
                    hora,
                }
            );
            setTimeout(() => {
            window.location.href = "/tareas";
        }, 1000);
                return res.data
        } catch (error) {
            console.error(error);
        }
        
    };

    return (
        <div>
            <Container>
                <Principal>
                    <Caja1>
                        <Parrafo><h3>Actualizar tarea</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick={cerrarcomponente}></Img>
                    </Caja1>
                    <hr />
                    <Caja2>
                        <Parrafo1><h3>Negocio</h3></Parrafo1>
                        <Select value={selectNegocio} onChange={(e) => {
                            setSelectNegocio(e.target.value)
                        }}>

                            <option value="option">option</option>
                            {negocio.map(negocio => (
                                <option key={negocio.idNegocio} value={negocio.idNegocio}>
                                    {negocio.nombreNegocio}
                                </option>
                            ))};
                        </Select>

                        <Parrafo1><h3>Asunto de la tarea</h3></Parrafo1>
                        <Input value={asunto} onChange={(e) => {
                            setAsunto(e.target.value)
                        }} placeholder="ingresar asunto de tarea"></Input>
                        <Parrafo1><h3>Responsable</h3></Parrafo1>
                        <ContainerInput>
                            <Input value={responsable} onChange={(e) => {
                                setResponsable(e.target.value)
                            }} placeholder="Ingresar nombre del responsable" style={{ color: 'gray', height: "90%", width: "90%", border: "none", outline: "none" }} ></Input>
                            <FaUser style={{ marginRight: "5px" }} />
                        </ContainerInput>
                        <Parrafo1><h3>Tipo de tarea</h3></Parrafo1>
                        <ContainerInput>
                            <Input value={tipoTarea} onChange={(e) => {
                                setTipotarea(e.target.value)
                            }} placeholder="Ingresar tipo de tarea" style={{ color: 'gray', height: "90%", width: "90%", border: "none", outline: "none" }} ></Input>
                            <BsFillCalendar2CheckFill style={{ marginRight: "5px" }} />
                        </ContainerInput>
                        <Parrafo1><h3>Fecha</h3></Parrafo1>
                        <Input type="date" style={{ color: 'gray' }} value={fecha} onChange={(e) => {
                            setFecha(e.target.value)
                        }}></Input>
                        <Parrafo1><h3>Horario de la tarea</h3></Parrafo1>
                        <Input type="time" style={{ color: 'gray' }} value={hora} onChange={(e) => {
                            setHora(e.target.value)
                        }} ></Input>
                    </Caja2>
                    <hr />
                    <Caja3>
                        <Boton1 onClick={actualizarTarea}>Actualizar</Boton1>
                        <Boton2>Cancelar</Boton2>
                    </Caja3>
                </Principal>
            </Container>
        </div>
    );
}

export default UpdateTarea;