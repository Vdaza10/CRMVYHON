import React from "react";
import {
    ContainerPrincipal,
    Heder,
    ContainerInput,
    Input,
    HederTabla,
    Caja1,
    Parrafo,
    ContainerSecundario,
    BodyTabla,
    CajaIcono,
    Boton,
    FooterTabla,
    CajaContenido,
    HederCaja1 ,HederCaja2,
    BarraNavegacion,
    CajaIconos,
    HederContenido,
    Checkbox,
    ImagenUser
} from "./styled";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiSettings3Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Retorno4 from "../../formularios/crearContacto";
import Axios from "axios";
import ContactoUpdate from "../../formularios/updateContacto";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import imagenUser from "../../img/perfil.jpg"

function TablaContacto() {
    const [active, setActive] = useState(false);
    const [activeEditar, setActiveEditar] = useState(false);
    const [ContactoEditar, setContactoEditar] = useState(false);
    const [contacto, setContacto] = useState([]);

    const [empresaUpdateAbierto, setEmpresaUpdateAbierto] = useState(true);

    const [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        const userToken = localStorage.getItem("user");
        if (userToken) {
            try {
                jwt_decode(userToken);
                setLoading(false);
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                navigate("/");
            }
        } else {
            navigate("/");
        }
    }, [navigate]);
    // barra de busqueda
    const [buscar, setBuscar] = useState("");

    //Funcion para traer los datos de la tabla, a buscar

    //Inicio, Función de busqueda
    const BarraDeBusqueda = (e) => {
        setBuscar(e.target.value);
    };

    //Metodo de filtrado tabla empresa
    let resBusqueda = [];

    if (!buscar) {
        resBusqueda = contacto || [];
    } else {
        resBusqueda = contacto.filter(
            (dato) =>
                (dato.nombreContacto &&
                    dato.nombreContacto.toLowerCase().includes(buscar.toLowerCase())) ||
                (dato.cargo &&
                    dato.cargo.toLowerCase().includes(buscar.toLowerCase())) ||
                (dato.telefono &&
                    dato.telefono
                        .toString()
                        .toLowerCase()
                        .includes(buscar.toLowerCase())) ||
                (dato.correo &&
                    dato.correo.toLowerCase().includes(buscar.toLowerCase())) ||
                (dato.nombreEmpresa &&
                    dato.nombreEmpresa.toLowerCase().includes(buscar.toLowerCase()))
        );
    }

    const handleEditarClick = (item) => {
        setContactoEditar(item); // Cuando se hace clic en Editar, almacena el negocio a editar en el estado
        setActiveEditar(true); // Activa el componente de edición
    };

    const TablagetContacto = async () => {
        const token = localStorage.getItem("user");
        const tokensincomillas = token.replace(/"/g, "");
        try {
            const contactos = await Axios.get(
                `${process.env.REACT_APP_URL_BACKEND}/contactotabla`,
                {},
                {
                    headers: {
                        Authorization: tokensincomillas,
                    },
                }
            );
            setContacto(contactos.data);
        } catch {
            console.log("error de axio en la query");
        }
    };

    const TabladeleteContacto = async (item) => {
        try {
            const token = localStorage.getItem("user");
            const tokensincomillas = token.replace(/"/g, "");
            await Axios.put(
                `${process.env.REACT_APP_URL_BACKEND}/contactotabla/desactivar/${item.idContacto}`,
                {},
                {
                    headers: {
                        Authorization: tokensincomillas,
                    },
                }
            );
            console.log("Contacto desactivado con éxito.");
        } catch (error) {
            console.log("Error al desactivar el contacto", error);
        }
        setTimeout(() => {
            window.location.href = "/contactos";
        }, 0);
    };

    useEffect(() => {
        TablagetContacto();
    }, []);

    useEffect(() => {
        TablagetContacto();
    }, []);

    const Borrar = () => {
        setBuscar("");
    };

    return (
        <>
            {loading ? (
                <>
                    <h1>cargando.....</h1>-
                </>
            ) : (
                <>
                    <ContainerPrincipal>
                        <CajaContenido>
                            <Heder>
                                <HederCaja1>
                                    <BarraNavegacion></BarraNavegacion>
                                </HederCaja1>
                                <HederCaja2>
                                    <HederContenido>
                                    <h1>Contactos  <HiUsers className="EstiloIconos"></HiUsers></h1>
                                    <Boton
                                        onClick={() => {
                                            setActive(!active);
                                            // Cierra EmpresaUpdate si está abierto al hacer clic en "Crear Empresa"
                                            if (activeEditar) {
                                                setActiveEditar(false);
                                            }
                                            if (empresaUpdateAbierto) {
                                                setEmpresaUpdateAbierto();
                                            }
                                        }}
                                    >
                                        Crear
                                    </Boton>
                                    <ContainerInput>
                                        <Input
                                            placeholder="Look for ..."
                                            value={buscar}
                                            onChange={BarraDeBusqueda}
                                        ></Input>
                                        <AiOutlineSearch className="EstiloIconos" />
                                    </ContainerInput>
                                    </HederContenido>
                                    <CajaIconos>
                                        <RiSettings3Line className="EstiloIconos"></RiSettings3Line>
                                    </CajaIconos>
                                </HederCaja2>
                            </Heder>
                            <div className="Tabla">
                            <HederTabla>
                                <Caja1 className="CajaCheckbox">
                                    <Checkbox type="checkbox"></Checkbox>
                                </Caja1>
                                <Caja1>
                                    <Parrafo className="Parrafo">Contact name</Parrafo>
                                </Caja1>
                                <Caja1>
                                    <Parrafo className="Parrafo">Position</Parrafo>
                                </Caja1>
                                <Caja1>
                                    <Parrafo className="Parrafo">Phone</Parrafo>
                                </Caja1>
                                <Caja1>
                                    <Parrafo className="Parrafo">Email</Parrafo>
                                </Caja1>
                                <Caja1>
                                    <Parrafo className="Parrafo">Company contact</Parrafo>
                                </Caja1>
                                <Caja1>
                                    <Parrafo>
                                    <RiSettings3Line style={{fontSize:"35px", color:"white"}}></RiSettings3Line>
                                    </Parrafo>
                                </Caja1>
                            </HederTabla>
                            <ContainerSecundario>
                                {resBusqueda.map((item, i) => (
                                    <BodyTabla key={i}>
                                        <Caja1 className="CajaCheckbox">
                                        <Checkbox type="checkbox"></Checkbox>
                                        </Caja1>
                                        <Caja1>
                                            <ImagenUser src={imagenUser}></ImagenUser>
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
                                            <CajaIcono style={{ justifyContent: "end" }}>
                                                <MdDelete
                                                    style={{ fontSize: "30px" }}
                                                    onClick={() => TabladeleteContacto(item)}
                                                />
                                            </CajaIcono>
                                            <CajaIcono>
                                                {" "}
                                                <BiSolidEditAlt
                                                    style={{ fontSize: "30px" }}
                                                    onClick={() => handleEditarClick(item)}
                                                />
                                            </CajaIcono>
                                        </Caja1>
                                    </BodyTabla>
                                ))}
                            </ContainerSecundario>
                            <FooterTabla></FooterTabla>
                            {active && <Retorno4 />}
                            {activeEditar && (
                                <ContactoUpdate
                                    contacto={ContactoEditar}
                                    setEmpresaUpdateAbierto={setEmpresaUpdateAbierto}
                                ></ContactoUpdate>
                            )}
                            </div>
                        </CajaContenido>
                    </ContainerPrincipal>
                </>
            )}
            ;
        </>
    );
}
export default TablaContacto;
