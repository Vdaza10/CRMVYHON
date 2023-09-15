import React, { useState, useEffect } from "react";
import Menu from "../menu/principal";
import { Container2, Container1, Caja, Cajita, Caja1, Cajita1, Cajita2, Container3, Caja2, Cajita3, Boton1, Boton2 } from "./styled";
import imagen from "../img/listado.png"
import icono from "../img/icono.png"
import CrearNegocios from "../crearNegocios";
import TablaNegocio from "../tablaNegocio";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Retorno2() {
    const [active, setActive] = useState(false); //Estado para controlar la visualización del componente CrearNegocios
    const [negocios, setNegocios] = useState([]);
    
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

    const ReflejarDatos = async () => {
        // ev.preventDefault();
        const negociar = await Axios.get("http://localhost:3005/negociotabla");
        console.log(negociar.data);
        setNegocios(negociar.data);
    };
    useEffect(() => {
        ReflejarDatos();
    }, [setNegocios]);

    return (
        <>
       {loading ? (
        <>
         <h1>Cargando......</h1>
        </>
       ):(

        <>
            {negocios.length <= 0 ? (
                <>
                <Menu />
                    <Container1>
                        <Caja1>
                            <p style={{ fontStyle: "italic", fontSize: "20px", marginLeft: "20px" }}> Negocios </p>
                            <img src={icono} alt="img" style={{ width: '20px', height: '20px', marginTop: "25px" }} />
                        </Caja1>
                        <Caja1>
                            {/* Opciones de filtro */}
                            <Cajita1>
                                <img src={imagen} alt="img" style={{ width: '20px', height: '20px', marginLeft: "110px" }} />
                                <p style={{ fontStyle: "italic", fontSize: "17px", marginLeft: "10px" }}> Listado </p>
                            </Cajita1>
                            <Cajita2>
                                <p style={{ fontStyle: "italic", fontSize: "17px", color: "gray", marginLeft: "50px" }}> responsable </p>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray", marginLeft: "50px", marginTop: "-15px" }}> mi negocio </p>
                            </Cajita2>
                            <Cajita2>
                                <p style={{ fontStyle: "italic", fontSize: "17px", color: "gray", marginLeft: "10px" }}> estado del negocio </p>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray", marginLeft: "10px", marginTop: "-15px" }}> en curso  </p>
                            </Cajita2>
                        </Caja1>
                    </Container1>
                    <Container2>
                        {/* Sección de estadísticas */}
                        <Caja>
                            <p style={{ fontStyle: "italic", fontSize: "20px", marginLeft: "10px" }}> Sin contacto </p>
                            <Cajita>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray", marginLeft: "10px" }}> 0 negocios </p>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray" }}> COP 0.00 </p>
                            </Cajita>
                        </Caja>
                        <Caja>
                            <p style={{ fontStyle: "italic", fontSize: "20px", marginLeft: "10px" }}> Contacto hecho </p>
                            <Cajita>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray", marginLeft: "10px" }}> 0 negocios </p>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray" }}> COP 0.00 </p>
                            </Cajita>
                        </Caja>
                        <Caja>
                            <p style={{ fontStyle: "italic", fontSize: "20px", marginLeft: "10px" }}> Identificacíon de interés </p>
                            <Cajita>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray", marginLeft: "10px" }}> 0 negocios </p>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray" }}> COP 0.00 </p>
                            </Cajita>
                        </Caja>
                        <Caja>
                            <p style={{ fontStyle: "italic", fontSize: "20px", marginLeft: "10px" }}> Presentación</p>
                            <Cajita>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray", marginLeft: "10px" }}> 0 negocios </p>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray" }}> COP 0.00 </p>
                            </Cajita>
                        </Caja>
                        <Caja>
                            <p style={{ fontStyle: "italic", fontSize: "20px", marginLeft: "10px" }}> Propuesta enviada</p>
                            <Cajita>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray", marginLeft: "10px" }}> 0 negocios </p>
                                <p style={{ fontStyle: "italic", fontSize: "20px", color: "gray" }}> COP 0.00 </p>
                            </Cajita>
                        </Caja>
                    </Container2>
                    <Container3>
                        {/* ... Repite el patrón para las otras categorías */}
                        <Caja2>
                            <p style={{ fontStyle: "italic", fontSize: "20px", marginLeft: "12%", marginTop: "5%" }}> Crea un nuevo negocio sin importar sus contactos, empresas y negocios existentes.</p>
                            <Cajita3>
                                <Boton2>Datos de importancia </Boton2>
                                <Boton1 onClick={() => setActive(!active)}>Crear un negocio</Boton1>
                                {/* Muestra el componente CrearNegocios cuando active es true */}
                                {active && <CrearNegocios></CrearNegocios>}
                            </Cajita3>
                        </Caja2>
                    </Container3>
                </>
            ) : (
                <>
                    <TablaNegocio />
                </>
            )}
        </>
    )}
    </>
    )
}
export default Retorno2;