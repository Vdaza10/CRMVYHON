import React, { useState } from "react";
import { Fondo,Contenedor,Titulo,Parrafo,Input, Button, Olvidar , ContainerUltimo, Message  } from "./styled";
import Axios from "axios";
import { Link } from "react-router-dom";


function Principal  () {

    
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState(null)

    const Login = (ev)=>{

                    ev.preventDefault();
                    setError(null);
                    if(email && password){
                    Axios.post("http://localhost:3005/login",{
                    correo : email,
                    contraseña :password
                    })
                    .then((response) => {
                        console.log(response.data);
                        if (response.data === "") {
                        alert("el usuario no existe");
                        } else {
                        window.location.href = "http://localhost:3000/vistaprincipal";
                        //   history.push("/menu");
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        alert("Error en la solicitud");
                });
            }else{
                    (setError(`ingrese tanto el usuario como la contraseña`))
                }
            }
    return(
        <Fondo>
            
            <Contenedor>
                <Titulo>¡Bienvenido a VYHON!</Titulo>
                <Message>{error}</Message>
                
                <Parrafo > 
                    <h4 style={{margin:"0"}}>Correo electronico</h4>
                </Parrafo>

                <Input 
                type="email"
                onChange={e => setEmail(e.target.value)}
                name="email">
                </Input>

                
                <Parrafo>
                    <h4 style={{margin:"0"}}>Contraseña</h4>
                </Parrafo>
                

                <Input 
                type="Password"
                onChange={e => setPassword(e.target.value)}
                name="password">
                </Input>

            <ContainerUltimo>

            <Button  type="submit" onClick={Login}>Iniciar sesión</Button> <br />
            <Link to={"/recuperar"} style={{color:"black"}}><Olvidar style={{margin:"0"}}><h4 style={{margin:"0"}}>Olvidaste tu contraseña?</h4></Olvidar></Link>
                <Olvidar ><Link to={"/registrarse"} style={{color:"black"}}><h4 style={{margin:"0",color:"black", marginTop:""}}>Registrate</h4></Link></Olvidar> <br />
            </ContainerUltimo>
                
                {/* <Button type="submit" onClick={Login}>Iniciar sesión</Button> */}
            </Contenedor>
        </Fondo>
    )
}
export default Principal;

