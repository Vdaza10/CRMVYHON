import React, { useState, useEffect } from 'react';
import { Div1, Container1, Caja, Parrafo, Img, Parrafo1, Caja1, Input, Caja2, Boton1, Boton2, Select } from './styled';
import imagen from '../../img/img_x.webp';
import Axios from 'axios';
import Validator from 'validator';

function Retorno4({contacto}) {
  const [cerrar, setCerrar] = useState(true);
  const [nombreContacto,setNombreContacto ] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [selectContactoEmpresa, setSelectContactoEmpresa] = useState('');
  const [contactoEmpresa, setContactoEmpresa] = useState([]);
  // const [empresaContacto, setEmpresaContacto] = useState('');

  const validacion = (e) => {
    let emai = e.target.value;

    if (Validator.iscorreo(emai)) {
      setCorreo(emai);
    } 
  };


  useEffect(() => {

  const fetchEmpresa = async () => {
    try {
      const response = await Axios.get('http://localhost:3005/contactotabla');
      setContactoEmpresa(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error al obtener empresa:', error);
    }
  };


    fetchEmpresa();
  }, []);


  useEffect(() => {
    if (contacto) {
      // Verifica si hay un negocio para editar
      setNombreContacto(contacto.nombreEmpresa);
      setCargo(contacto.cargo);
      setTelefono(contacto.telefono);
      setCorreo(contacto.correo);
      setSelectContactoEmpresa(setContactoEmpresa.contactoEmpresa);
    }
  }, [contacto]);


  // Función para cerrar el componente
  const cerrarcomponente = () => {
    setCerrar(false);
    setTimeout(() => {
      window.location.href = "/contactos";
    }, 1000)
  };

  // Si el estado 'cerrar' es falso, devuelve null para ocultar el componente
  if (!cerrar) {
    return null;
  }

  const actualizarContacto = async () => {
    try {
      const res = await Axios.patch(
        `http://localhost:3005/contactotabla/${contacto.idContacto}`,
        {
          nombreContacto,
          cargo,
          telefono,
          correo,
          contactoEmpresa:selectContactoEmpresa
        }
      );
      console.log("Contacto actualizado.", res.data);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      window.location.href = "/contactos";
    }, 1000);
  };


  return (
    <Div1>
      {/* Contenedor principal */}
      <Container1>
        {/* Primera sección */}
        <Caja>
          <Parrafo>
            <h3>Actualizar contacto</h3>
          </Parrafo>
          {/* Imagen para cerrar el componente */}
          <Img src={imagen} alt="img" onClick={cerrarcomponente} />
        </Caja>
        <hr />
        {/* Segunda sección */}
        <Caja1>
          <Parrafo1>
            <h3>Nombre</h3>
          </Parrafo1>
          <Input placeholder="Ingresar el nombre del contacto" value={nombreContacto}  onChange={(e) => setNombreContacto(e.target.value)}></Input>
          <Parrafo1>
            <h3> Cargo</h3>
          </Parrafo1>
          <Input placeholder="Ingresa el contacto del contacto" value={cargo} onChange={(e) => setCargo(e.target.value)}></Input>
          <Parrafo1>
            <h3>Telefono</h3>
          </Parrafo1>
          <Input placeholder="Ingresar el telefono del contacto" value={telefono} onChange={(e) => setTelefono(e.target.value)}></Input>
          <Parrafo1>
            <h3>Email</h3>
          </Parrafo1>
          <Input placeholder="Ingresar el email del contacto" value={correo} onChange={validacion} type="email"></Input>
          <Parrafo1>
            <h3>Empresa del contacto </h3>
          </Parrafo1>
          <Select  value={selectContactoEmpresa} onChange={(e) => setSelectContactoEmpresa(e.target.value)}
          >
            <option value="">Ingrese la empresa</option>
            {contactoEmpresa.map((empresa) => (
              <option key={empresa.idEmpresa} value={empresa.idEmpresa}>
                {empresa.nombreEmpresa}
              </option>
            ))}
          </Select>
        </Caja1>
        <hr />
        {/* Tercera sección */}
        <Caja2>
          {/* Botones para cancelar o crear el contacto */}
          <Boton2 onClick={cerrarcomponente} >Cancelar</Boton2>
          <Boton1 onClick={actualizarContacto}>Actualizar </Boton1>
        </Caja2>
      </Container1>
    </Div1>
  );
}

export default Retorno4;