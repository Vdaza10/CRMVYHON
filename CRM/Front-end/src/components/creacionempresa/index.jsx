import React, { useState, useEffect } from "react";
import { Div1, Container1, Caja, Parrafo, Img, Parrafo1, Caja1, Input, Caja2, Boton1, Boton2, Area, SelectEmpresa } from "./styled.jsx";
import imagen from "../img/img_x.webp";
import axios from 'axios'
import swal from "sweetalert";

function Retorno8() {
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [selectedSegmento, setSelectedSegmento] = useState(""); // Estado para el segmento seleccionado
    const [url, setUrl] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [segmento, setSegmento] = useState([]);

    // Función para obtener los segmentos desde la base de datos
    const fetchSegmentos = async () => {
        try {
            const response = await axios.get("http://localhost:3005/segmento");
            setSegmento(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al obtener segmentos:", error);
        }
    };

    useEffect(() => {
        fetchSegmentos();
    }, []);

    const [cerrar, setCerrar] = useState(true); // Estado para controlar la visibilidad del componente Retorno8

    // Función para cerrar el componente al hacer clic en la imagen
    const cerrarcomponente = () => {
        setCerrar(false);
    };

    // Si cerrar es falso, no se renderiza el componente
    if (!cerrar) {
        return null;
    };

    // Función para crear una empresa
    const createEmpresa = async (e ) => { 
         e.preventDefault(); 
        
        if (nombreEmpresa&&url&&descripcion) {
            const elegirSegmento = segmento.find((n) => n.idSegmento === parseInt(selectedSegmento))
            if (!elegirSegmento) {
                swal({
                    title: "El segmento selecionado no es valido",
                    text: "Porfavor seleccionar segmento",
                    icon: "warning",
                });
                return
            }
        
        try {
            const token = localStorage.getItem("user");
            console.log(localStorage.getItem("user", '💕💕'));
            
            if(!token){
                console.log("Token no encontrado")
            }
            const response = await axios.post("http://localhost:3005/company", {
                nombreEmpresa,
                segmento: selectedSegmento,
                url,
                descripcion
              }, {
                header: {
                    accessToken: token
                }
            });
            // setTimeout(() => {
            //     window.location.href = "/empresas"
            // }, 0);
            console.log("Empresa creada:", response.data);
        } catch (error) {
            console.log("Error al crear empresa:", error);
        }
        
    }else{
        swal({
            text: "Porfavor llenar todo",
            icon: "error",
        });
    }
    };



    return (
        <Div1>
            <Container1>
                {/* Sección de encabezado */}
                <Caja>
                    <Parrafo><h3>Crear empresa</h3></Parrafo>
                    <Img src={imagen} alt="img" onClick={cerrarcomponente} />
                </Caja>
                <hr />
                {/* Formulario para crear una empresa */}
                <Caja1>
                    <Parrafo1><h3>Nombre de la empresa</h3></Parrafo1>
                    <Input
                        placeholder="Ingresar el nombre de la empresa"
                        onKeyPress={(event) => {
                            const inputValue = event.key;
                            const regex = /[a-zA-Z0-9& ]/;
                            if (!regex.test(inputValue)) {
                              event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                            }
                        }}
                        onChange={(e) => setNombreEmpresa(e.target.value)} />

                    <Parrafo1><h3> Segmento</h3></Parrafo1>
                    <SelectEmpresa value={selectedSegmento} onChange={(e) => setSelectedSegmento(e.target.value)}>
                        <option value="">Seleccionar segmento...</option>
                        {segmento.map(segmento => (
                            <option key={segmento.idSegmento} value={segmento.idSegmento}>
                                {segmento.segmento}
                            </option>
                        ))}
                    </SelectEmpresa>

                    <Parrafo1><h3>URL</h3></Parrafo1>
                    <Input placeholder="Introduce la dirección web de la empresa" onChange={(e) => setUrl(e.target.value)} />

                    <Parrafo1><h3>Resumen</h3></Parrafo1>
                    <Area 
                    placeholder="Describe la empresa"
                    onKeyPress={(event) => {
                        const inputValue = event.key;
                        const regex = /[a-zA-Z0-9 ]/; // Expresión regular que permite letras y números
                        if (!regex.test(inputValue)) {
                          event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
                        }
                    }}
                        onChange={(e) => setDescripcion(e.target.value)} />
                </Caja1>
                <hr />
                <Caja2>
                    <Boton2 onClick={cerrarcomponente}>Cancelar</Boton2>
                    <Boton1 onClick={createEmpresa}>Crear empresa</Boton1>
                </Caja2>
                
            </Container1>
        </Div1>
    );
}

export default Retorno8;


