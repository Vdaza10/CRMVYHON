import React , {useState}from "react";
import { Contenedor, ContenedorCampañas, ContenedorCampañas1, Campañas, ContenedorCampañaImagen } from "./styled";
import imagen from "../../img/inicio1.avif"
import markenting from "../../img/comunicacion.png"
import promocion from "../../img/promocion.jpg"
import pedidos from "../../img/pedidos.jpg"
import campañasms from "../../img/campañaSMS.png"
import campañacorreo from "../../img/campañaCorreo.jpg"
import llamadaaudio from "../../img/llamadaAudio.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import jwt_decode from "jwt-decode";
import Audiollamada from "../markenting/llamadaAudioModal";

const Campaña = () => {
    const [modalAbierta, setModalAbierta] = useState(false);
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

    return (
        <>
        {loading ? (
            <>
            <h1>cargando.....</h1>
            </>
        ):(
        <>
        <Audiollamada 
            estado={modalAbierta}
            cambiarEstado={setModalAbierta}
            ></Audiollamada>
            <Contenedor>
                <ContenedorCampañas>
                    <Campañas>COMMUNICATION
                        <Link to="/camunicacion"><ContenedorCampañaImagen src={markenting}></ContenedorCampañaImagen></Link>
                    </Campañas>                        
                    <Campañas>
                    <Link to="/promocion"><ContenedorCampañaImagen src={promocion}></ContenedorCampañaImagen></Link> MEMBERSHIP
                    </Campañas>                        

                </ContenedorCampañas>
                
                <ContenedorCampañas1 >
                    <Campañas >
                        MAIL CAMPAIGN
                    <Link to="/campañacorreo"><ContenedorCampañaImagen src={campañacorreo}></ContenedorCampañaImagen></Link>
                    </Campañas>

                    <Campañas className="center" style={{  alignConten: "center", justifyContent: 'center' }}>
                    <ContenedorCampañaImagen src={imagen} />
                    </Campañas>                    

                    <Campañas >
                    <Link to="/pedidos"><ContenedorCampañaImagen src={pedidos}></ContenedorCampañaImagen></Link> ORDERS
                    </Campañas>                    

                </ContenedorCampañas1>
                <ContenedorCampañas>
                    <Campañas onClick={() =>{ setModalAbierta(!modalAbierta)} }>
                    AUDIO CALL <ContenedorCampañaImagen src={llamadaaudio}></ContenedorCampañaImagen>
                    </Campañas>                    

                    <Campañas>
                    <Link to="/camapañasms"><ContenedorCampañaImagen src={campañasms}></ContenedorCampañaImagen></Link> SMS CAMPAIGN
                    </Campañas>                    

                </ContenedorCampañas>
            </Contenedor>
            
        </>
        )}
        </>
    )
}

export default Campaña ;
