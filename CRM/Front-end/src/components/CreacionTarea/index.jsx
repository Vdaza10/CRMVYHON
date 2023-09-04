import React,{useState, useEffect} from "react";
import { Container,Principal,Caja1,Parrafo,Img,Caja2,Parrafo1,Input,Caja3,Boton1,Boton2,ContainerInput,Select} from "./styled.jsx";
import imagen from "../img/img_x.webp"
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Axios from "axios";



    
const CrearTarea = ()=> {
     //CONEXION DEL BACKEND Y EL FRONTEND
        const [selectNegocio, setSelectNegocio] = useState("");
        const [asunto, seAsunto] = useState("")
        const [responsable,setResponsable]=useState("");
        const [tipotarea, setTipotarea] = useState("")
        const [fecha, setFecha] = useState("")
        const [hora, setHora] = useState("");
        const [negocio, setNegocio] = useState([])


        const fetchNegocio = async () => {
            try {
                const response = await Axios.get("http://localhost:3005/negocio");
                setNegocio(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error al obtener segmentos:", error);
            }
        };
        
        useEffect(() => {
            fetchNegocio();
        }, []);

        const Compromiso = (ev) => {
            ev.preventDefault();
        
            // Buscar si el valor seleccionado en selectNegocio existe en el estado negocio
            const selectedNegocio = negocio.find((n) => n.idNegocio === parseInt(selectNegocio));
            if (!selectedNegocio) {
                alert('El negocio seleccionado no es válido');
                return;
            }
        
            if (negocio && asunto && responsable && tipotarea && fecha && hora) {
                Axios.post("http://localhost:3005/tareas", {
                    negocio: selectedNegocio.idNegocio,
                    asunto: asunto,
                    responsable: responsable,
                    tipoTarea: tipotarea,
                    fecha: fecha,
                    hora: hora,
                })
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                alert('Ingresa todos los valores');
            }
        };
        

    const [cerrar, setCerrar] = useState(true);
    const cerrarcomponente = () => {
        setCerrar(false);
    }
    if (!cerrar){
        return null 
    }
    return (
        <div>
            <Container>
                <Principal>
                    <Caja1>
                        <Parrafo><h3>Crear tarea</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick= {cerrarcomponente}></Img>
                    </Caja1>
                    <hr />
                    <Caja2>
                        <Parrafo1><h3>Negocio</h3></Parrafo1>
                        <Select value={selectNegocio}  onChange={(event) =>{
                setSelectNegocio(event.target.value)
            }}>

            <option value="option">option</option>
            {negocio.map(negocio => (
                <option key={negocio.idNegocio} value={negocio.idNegocio}>
                    {negocio.nombreNegocio}
                </option>
            ))};
            </Select>

                        <Parrafo1><h3>Asunto de la tarea</h3></Parrafo1>
                        <Input  onChange={(event) =>{
                seAsunto(event.target.value)
            }} placeholder="ingresar asunto de tarea"></Input>
                        <Parrafo1><h3>Responsable</h3></Parrafo1>
                        <ContainerInput>
                        <Input onChange={(event) =>{
                setResponsable(event.target.value)
            }} placeholder="Ingresar nombre del responsable" style={{color:'gray',height:"90%",width:"90%", border:"none" ,outline: "none"}} ></Input>
                        <FaUser style={{marginRight:"5px"}}/>
                        </ContainerInput>
                        <Parrafo1><h3>Tipo de tarea</h3></Parrafo1>
                        <ContainerInput>
                        <Input  onChange={(event) =>{
                setTipotarea(event.target.value)
            }} placeholder="Ingresar tipo de tarea" style={{color:'gray',height:"90%",width:"90%", border:"none" ,outline: "none" }} ></Input>
                        <BsFillCalendar2CheckFill style={{marginRight:"5px"}}/>
                        </ContainerInput>
                        <Parrafo1><h3>Fecha</h3></Parrafo1>
                        <Input type="date" style={{color:'gray'}}   onChange={(event) =>{
                setFecha(event.target.value)
            }}></Input>
                        <Parrafo1><h3>Horario de la tarea</h3></Parrafo1>
                        <Input type="time" style={{color:'gray'}} onChange={(event) =>{
                setHora(event.target.value)
            }} ></Input>
                    </Caja2>
                        <hr />
                    <Caja3>
                        <Boton1 onClick={Compromiso} >Crear tarea</Boton1>
                        <Boton2>Cancelar</Boton2>
                    </Caja3>
                </Principal>
            </Container>
        </div>
    );
} 

export default CrearTarea;