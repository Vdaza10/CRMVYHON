import { ConInformacion, Contenedor, ContenedorTarjeta, Tarjeta2 } from "./styled";
import Menu from "../menu/principal"
import prueba from "../img/carruzel1.avif"
import prueba1 from "../img/carruzel2.jpg"
import prueba2 from "../img/carruzel3.avif"
import { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"

const Vistaprincipal = () => {
    // Datos de las tarjetas a mostrar en el carrusel
    const tarjetas = [
        {titulo: "Negocios", informacion: "helena", imagen: prueba},
        {titulo: "Empresas", informacion: "helena", imagen: prueba1},
        {titulo: "Contactos", informacion: "helena", imagen: prueba2},
        {titulo: "Tareas", informacion: "helena", imagen: prueba},
        {titulo: "Analisis", informacion: "helena", imagen: prueba},
        {titulo: "Markenting", informacion: "helena", imagen: prueba},
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
                        <h1>{tarjetas.titulo}</h1>
                        <p>{tarjetas.informacion}</p>
                        <img src={tarjetas.imagen} alt="" style={{width:"60%", height:"100%"}}></img>
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
