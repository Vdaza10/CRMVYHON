import React , {useState}from "react";
import { Contenedor, ContenedorCampañas, ContenedorCampañas1, Campañas, ContenedorCampañaImagen } from "./styled";
import Menu from "../menu/principal";
import imagen from "../img/inicio1.avif"
import markenting from "../img/comunicacion.png"
import promocion from "..//img/promocion.jpg"
import pedidos from "../img/pedidos.jpg"
import campañasms from "../img/campañaSMS.png"
import campañacorreo from "../img/campañaCorreo.jpg"
import llamadaaudio from "../img/llamadaAudio.jpg"
import { Link } from "react-router-dom";
import Audiollamada from "../llamadaAudioModal";


const Campaña = () => {

    const [modalAbierta, setModalAbierta] = useState(false);
    return (
        <>
        <Audiollamada 
            estado={modalAbierta}
            cambiarEstado={setModalAbierta}
            ></Audiollamada>
            <Menu />
            <Contenedor>
                <ContenedorCampañas>
                    <Campañas>COMUNICACIÓN
                        <Link to="/camunicacion"><ContenedorCampañaImagen src={markenting}></ContenedorCampañaImagen></Link>
                    </Campañas>                        
                    <Campañas>
                    <Link to="/promocion"><ContenedorCampañaImagen src={promocion}></ContenedorCampañaImagen></Link>PROMOCIÓN
                    </Campañas>                        

                </ContenedorCampañas>
                
                <ContenedorCampañas1 >
                    <Campañas >CAMPAÑA DE CORREO
                    <Link to="/campañacorreo"><ContenedorCampañaImagen src={campañacorreo}></ContenedorCampañaImagen></Link>
                    </Campañas>

                    <Campañas className="center" style={{  alignConten: "center", justifyContent: 'center' }}>
                    <ContenedorCampañaImagen src={imagen} />
                    </Campañas>                    

                    <Campañas >
                    <Link to="/pedidos"><ContenedorCampañaImagen src={pedidos}></ContenedorCampañaImagen></Link>PEDIDOS
                    </Campañas>                    

                </ContenedorCampañas1>
                <ContenedorCampañas>
                    <Campañas onClick={() =>{ setModalAbierta(!modalAbierta)} }>
                    LLAMADA DE AUDIO <ContenedorCampañaImagen src={llamadaaudio}></ContenedorCampañaImagen>
                    </Campañas>                    

                    <Campañas>
                    <Link to="/camapañasms"><ContenedorCampañaImagen src={campañasms}></ContenedorCampañaImagen></Link>CAMPAÑA SMS
                    </Campañas>                    

                </ContenedorCampañas>
            </Contenedor>
            
        </>
    )
}
export default Campaña
