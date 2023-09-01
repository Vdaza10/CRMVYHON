import React, { useState } from "react";
import { Div1,  Container1, Caja, Parrafo, Img, Parrafo1, Caja1, Input,  Caja2, Boton1, Boton2 , ContactoSelect } from "./styled";
import imagen from "../img/img_x.webp"
import axios from "axios";
import Validator  from "validator";

function Retorno4() {
    const[nombreUsuario, setNombreUsuario] = useState("")
    const[cargo, setCargo]= useState ("")
    const[telefono, setTelefono] = useState("")
    const[email, setEmail]= useState("helena@gmail.com")
    const[empresaContacto, setEmpresaContacto] = useState("")

    const validacion = (e) => {
        let emai = e.target.value;
    
        if (Validator.isEmail(emai)) {
            setEmail(emai);
        } else {
            // setEmail(""); // Establece el email en blanco si no es válido
        }
    }
    
        

;

const datosIngresados = (e) => {
    e.preventDefault();

    if (nombreUsuario && cargo && telefono && empresaContacto) {
        axios.post("http://localhost:3005/contactos",{
            nombreUsuario : nombreUsuario,
            cargo : cargo,
            telefono: telefono,
            email : email,
            empresaContacto : empresaContacto
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        
        })}else{
            alert('ingrese todos los valores')
        };
    }


    // Estado para controlar si el componente está cerrado o abierto
    const [cerrar, setCerrar] = useState(true);

    //funcion para cerrar el componente
    const cerrarcomponente = () => {
        setCerrar(false);
    }

    // Si el estado 'cerrar' es falso, devuelve null para ocultar el componente
    if (!cerrar){
        return null 
    }
    return (
        <Div1 >
            {/* Contenedor principal */}
            <Container1>
                {/* Primera sección */}
                <Caja>
                    <Parrafo><h3>Crear contacto</h3></Parrafo>
                     {/* Imagen para cerrar el componente */}
                    <Img src={imagen} alt="img"  onClick= {cerrarcomponente}/>
                </Caja>
                <hr />
                {/* Segunda sección */}
                <Caja1>
                    <Parrafo1><h3>Nombre</h3></Parrafo1>
                    <Input placeholder="Ingresar el nombre del contacto" onChange={(event)=>{setNombreUsuario(event.target.value)}} type="text"required></Input>
                    <Parrafo1><h3> Cargo</h3></Parrafo1>
                    <Input placeholder="Ingresa el contacto del contacto" onChange={(event)=>{setCargo(event.target.value)}} type="text"required></Input>
                    <Parrafo1><h3>Telefono</h3></Parrafo1>
                    <Input placeholder="Ingresar el telefono del contacto"onChange= {(event)=>{setTelefono(event.target.value)}} type="number"required></Input>
                    <Parrafo1><h3>Email</h3></Parrafo1>
                    <Input placeholder="Ingresar el email del contacto" onChange={validacion}  type = "email"
                    ></Input>
                    <Parrafo1 onChange= {(event)=>{setEmpresaContacto(event.target.value)}}><h3>Empresa del contacto </h3></Parrafo1>
                    <ContactoSelect></ContactoSelect>
                    {/* <Parrafo2><h3>INFORMACION ADICIONAL</h3></Parrafo2> */}
                </Caja1>
                <hr />
                 {/* Tercera sección */}
                <Caja2>
                    {/* Botones para cancelar o crear el contacto */}
                    <Boton2>Cancelar</Boton2>
                    <Boton1 onClick ={datosIngresados}>Crear contacto</Boton1>
                </Caja2>
            </Container1>
        </Div1>

    );
    }
export default Retorno4;