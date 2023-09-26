import React, { useState, useEffect} from 'react';
import { Div1, Container1, Caja, Parrafo, Img, Parrafo1, Caja1, Input, Caja2, Boton1, Boton2, Select } from './styled';
import imagen from "../../img/img_x.webp";
import Axios from 'axios';
import swal from "sweetalert";

function Retorno4({setContactoCreado}) {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [empresaContacto, setEmpresaContacto] = useState('');
  const [empresa, setEmpresa] = useState([]);

  const fetchEmpresa = async () => {
    try {
      const response = await Axios.get('http://localhost:3005/company');
      setEmpresa(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error al obtener segmentos:', error);
    }
  };

  useEffect(() => {
    fetchEmpresa();
  }, []);

  const createContacto = (e) => {
    e.preventDefault();

    if (nombreUsuario&&cargo&&telefono&&email) { 
      const elegir = empresa.find((n) => n.idEmpresa === parseInt(empresaContacto))
      if (!elegir) {
        swal({
          title: "La empresa selecionada no es valida",
          text: "Porfavor seleccionar empresa",
          icon: "warning",
        });
        return
      }} else {
        swal({
          text: "Porfavor llenar todo",
          icon: "error",
        });
      }

      Axios.post('http://localhost:3005/contacto', {
        nombreContacto: nombreUsuario,
        cargo: cargo,
        telefono: telefono,
        correo:email,
        contactoEmpresa: empresaContacto,
      })
        .then((response) => {
          console.log(response.data);
          const contactoCreado = {
            nombreContacto: nombreUsuario,
            cargo: cargo,
            telefono: telefono,
            correo: email,
          };
          setTimeout(() => {
            window.location.href = "/contactos"  
          },0)
          setContactoCreado(contactoCreado);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  // Estado para controlar si el componente está cerrado o abierto
  const [cerrar, setCerrar] = useState(true);

  // Función para cerrar el componente
  const cerrarcomponente = () => {
    setCerrar(false);
  };

  // Si el estado 'cerrar' es falso, devuelve null para ocultar el componente
  if (!cerrar) {
    return null;
  }

  return (
    <Div1>
      {/* Contenedor principal */}
      <Container1>
        {/* Primera sección */}
        <Caja>
          <Parrafo>
            <h3>Crear contacto</h3>
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
          <Input placeholder="Ingresar el nombre del contacto" 
          onKeyPress={(event) => {
            const inputValue = event.key;
            const regex = /[a-zA-Z ]/; // Expresión regular que permite letras y números
            if (!regex.test(inputValue)) {
              event.preventDefault(); // Evita que se ingrese el carácter si no cumple con la expresión regular
            }
          }}
          onChange={(e) => setNombreUsuario(e.target.value)}></Input>
          <Parrafo1>
            <h3> Cargo</h3>
          </Parrafo1>
          <Input placeholder="Ingresa el contacto del contacto"
          onKeyPress={(event) => {
            const inputValue = event.key;
            const regex = /[a-zA-Z ]/; 
            if (!regex.test(inputValue)) {
              event.preventDefault(); 
            }
          }}
          onChange={(e) => setCargo(e.target.value)}></Input>
          <Parrafo1>
            <h3>Telefono</h3>
          </Parrafo1>
          <Input placeholder="Ingresar el telefono del contacto" 
          onKeyPress={(event) => {
            const inputValue = event.key;
            const regex = /[0-9]/; 
            if (!regex.test(inputValue)) {
              event.preventDefault();
            }
          }}
          onChange={(e) => setTelefono(e.target.value)}></Input>
          <Parrafo1>
            <h3>Email</h3>
          </Parrafo1>
          <Input placeholder="Ingresar el email del contacto" 
          onKeyPress={(event) => {
            const inputValue = event.key;
            const regex = /[_.@a-zA-Z0-9]/;
            if (!regex.test(inputValue)) {
              event.preventDefault(); 
            }
          }}
          onChange={(e) => setEmail(e.target.value)}></Input>
          <Parrafo1>
            <h3>Empresa del contacto </h3>
          </Parrafo1>
          <Select value={empresaContacto} onChange={(e) => setEmpresaContacto(e.target.value)}>
            <option value="option"></option>
            {empresa.map((empresa) => (
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
          <Boton2 onClick={cerrarcomponente}>Cancelar</Boton2>
          <Boton1 onClick={createContacto}>Crear contacto</Boton1>
        </Caja2>
      </Container1>
    </Div1>
  );
}

export default Retorno4;