import React from "react";
import Menu from "../menu/principal";
import { ContainerPrincipal, Heder, ContainerInput, Input, HederTabla, Caja1, Parrafo, ContainerSecundario, BodyTabla, CajaIcono, Boton, FooterTabla } from "./styled";
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState, useEffect } from "react";
import Retorno4 from "../crearcontacto";
import Axios from "axios";
import ContactoUpdate from "../updateContacto";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

function TablaContacto() {
const [active, setActive] = useState(false);
const [activeEditar, setActiveEditar] = useState(false);
const [ContactoEditar, setContactoEditar] = useState(false);
const [contacto, setContacto] = useState([]);


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
    resBusqueda = contacto|| [];
} else {
    resBusqueda = contacto.filter(
        (dato) =>
        (dato.nombreContacto && dato.nombreContacto.toLowerCase().includes(buscar.toLowerCase())) || 
        (dato.cargo && dato.cargo.toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.telefono && dato.telefono.toString().toLowerCase().includes(buscar.toLowerCase())) ||
        (dato.correo && dato.correo.toLowerCase().includes(buscar.toLowerCase()))||
        (dato.nombreEmpresa&& dato.nombreEmpresa.toLowerCase().includes(buscar.toLowerCase()))

);
}

const handleEditarClick = (item) => {
    setContactoEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
    setActiveEditar(true); // Activa el componente de edición
  };


  const TablagetContacto = async () => {
    const contactos = await Axios.get("http://localhost:3005/contactotabla");
    setContacto(contactos.data);
    console.log(contactos.data);
  };


  const TabladeleteContacto = async (item) => {
    try {
        const res = await Axios.delete(
            `http://localhost:3005/contactotabla/${item.idContacto}`
          );
          console.log("Contacto eliminado con éxito.", res.data);
    } catch (error) {
        console.log("Error al eliminar el contacto", error);
    }
    setTimeout(() => {
        window.location.href = "/contactos"  
        },0)
  };

useEffect(() => {
    TablagetContacto();
}, []);

const Borrar = () =>{
    setBuscar("")
}

    return (
        
        <>
        {loading ? (
            <>
            <h1>cargando.....</h1>
            </>
        ):(
        <>
            <Menu/> {/* Muestra el componente Menu */}
                <ContainerPrincipal>
                    <Heder>
                        <h1>Tabla Contacto</h1>
                        <ContainerInput>
                            <AiOutlineSearch style={{fontSize:"25px" , color:"#4b4848"}}/>
                            <Input placeholder="Buscar ..." value={buscar} onChange={BarraDeBusqueda}></Input>
                            <AiOutlineClose style={{fontSize:"20px", color:"gray"}} onClick={Borrar} />
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
                    <ContainerSecundario>
                    {resBusqueda.map((item, i) => (
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
                            <CajaIcono style={{ justifyContent: "end" }}><MdDelete style={{ fontSize: "30px" }}
                            onClick={()=> TabladeleteContacto(item)}
                            /></CajaIcono>
                            <CajaIcono> <BiSolidEditAlt style={{ fontSize: "30px" }} onClick={() => handleEditarClick(item)}/>
                            </CajaIcono>
                        </Caja1>
                    </BodyTabla>
                ))}
            </ContainerSecundario>
                    <FooterTabla>
                        <Boton onClick={() => setActive(!active)}>Crear Contacto</Boton>
                    </FooterTabla>
                    {active && <Retorno4/>}
                    {activeEditar && <ContactoUpdate contacto ={ContactoEditar}></ContactoUpdate>}
                </ContainerPrincipal>
        </>
        )};
        </>
    );
}
export default TablaContacto;   