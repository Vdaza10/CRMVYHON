import React from 'react';
import { Container , ContenedorModal , Contenido , ContainerBoton } from './styled';
import { FcOk } from "react-icons/fc";
import { Link } from 'react-router-dom';


const VentanaModal1 = ({estado,cambiarEstado}) => {

  const cerrarModalYRedirigir = () => {
    // Cerrar el modal (cambiar estado)
    cambiarEstado(false);

    // Redirigir a una nueva ruta después de 2 segundos
    setTimeout(() => {

      // Redirige a la página de inicio
      window.location.href = "/"  
      
    }, 1000);
    };


  return (
    <>
      {estado && 
        <Container>
            <ContenedorModal>
                <Contenido>
                    <h2 style={{fontSize:"80px"}}><FcOk></FcOk></h2>
                    <p>¡Saludos! Queremos extenderte una cálida bienvenida a nuestra página Vyhon. Estamos encantados de tenerte como parte de nuestra comunidad.</p>
                </Contenido>
                <ContainerBoton>
                  <button onClick={cerrarModalYRedirigir}><Link to={"/"} style={{color:"white",textDecoration:"none"}}>OK</Link></button>
                </ContainerBoton>
            </ContenedorModal>
        </Container>
        }
    </>
  );
};

export default VentanaModal1;