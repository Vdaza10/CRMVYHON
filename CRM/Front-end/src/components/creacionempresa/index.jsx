import React,{useState} from "react";
import { Div1 , Container1 , Caja , Parrafo, Img , Parrafo1 , Caja1 , Input , Caja2 , Boton1 ,Boton2 , App, Area } from "./styled.jsx";
import imagen from "../img/img_x.webp"


function Retorno8() {


    const [cerrar, setCerrar] = useState(true); // Estado para controlar la visibilidad del componente Retorno8
    
    // Función para cerrar el componente al hacer clic en la imagen
    const cerrarcomponente = () => {
        setCerrar(false);
    }
    // Si cerrar es falso, no se renderiza el componente
    if (!cerrar){
        return null 
    }
    return (
        
            <Div1>
                <Container1>
                    {/* Sección de encabezado */}
                    <Caja>
                        <Parrafo><h3>Crear empresa</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick= {cerrarcomponente}/>
                    </Caja>
                    <hr />
                    {/* Formulario para crear una empresa */}
                    <Caja1>
                        <Parrafo1><h3>Nombre de la empresa</h3></Parrafo1>
                        <Input placeholder="Ingresar el nombre de la empresa"></Input>
                        <Parrafo1 ><h3> Segmento</h3></Parrafo1>
                        <App></App>
                        <Parrafo1><h3>URL</h3></Parrafo1>
                        <Input placeholder="Introduce la dirrección web de la empresa" ></Input>
                        <Parrafo1><h3>Resumen</h3></Parrafo1>
                        <Area placeholder="Describe la empresa" ></Area>
                    </Caja1>
                    <hr />
                    {/* Botones para cancelar o crear la empresa */}
                    <Caja2>
                        <Boton2>Cancelar</Boton2>
                        <Boton1 >Crear empresa</Boton1>
                    </Caja2>
                </Container1> 
            </Div1>
        
    );
}
export default Retorno8;
