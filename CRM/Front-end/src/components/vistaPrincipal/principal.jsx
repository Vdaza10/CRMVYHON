import { ConInformacion, Contenedor, ContenedorCarruzel, ContenedorTarjeta, Tarjeta2 } from "./styled";
import Menu from "../menu/principal"
import { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"

const Vistaprincipal = () => {
    // Datos de las tarjetas a mostrar en el carrusel
    const tarjetas = [
        {titulo: "Negocios", informacion: "informacion de negocio"},
        {titulo: "Empresas", informacion: "informacion de empresa"},
        {titulo: "Contactos", informacion: "informacion de contactos"},
        {titulo: "Tareas",informacion: "informacion de tareas"},
        {titulo: "Analisis", informacion: "informacion de analisis"},
        {titulo: "Markenting", informacion: "informacion de markenting"},
    ];
     // Estado para almacenar la tarjeta actualmente visible en el carrusel
    const [informacion, setInformacion] = useState(tarjetas[2]);
    // Función para mostrar una tarjeta específica en el carrusel
    const mostar = (index) => {
        setInformacion(tarjetas[index])
    }
    return(
        <>
        <Menu/>
        <Contenedor >
            <ContenedorTarjeta>
                <Carousel showThumbs={false} showStatus={false} selectedItem={tarjetas.indexOf(informacion)} onChange={mostar} autoPlay interval={3000} stopOnHover={true} axis="horizontal" infiniteLoop = {true}
                style={{ display: "flex", flexDirection: "column", maxWidth: "100%" }}>
                {/* Mapeo de las tarjetas para crear elementos en el carrusel */}
                {tarjetas.map((tarjetas)=>{
                    return(
                        <Tarjeta2 key={informacion}>  
                        <ContenedorCarruzel>
                            <h1>{tarjetas.titulo}</h1>
                            <p>{tarjetas.informacion}</p>
                            <p>aqui en este contendor va la informacion</p>
                        </ContenedorCarruzel>
                        </Tarjeta2>
                    )})}
                </Carousel>
                
            </ContenedorTarjeta>
            {/* Contenedor para la información adicional */}
            <ConInformacion>
            </ConInformacion>
        </Contenedor>
        </>
    )
}
export default Vistaprincipal;
