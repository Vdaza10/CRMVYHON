import { useState } from "react";
import React  from "react";
import {FormContainer, Form,   } from "./style";

const Formulario = () => {
        const [boton, setBoton] = useState('');
        const [nombre, setNombre] = useState('');
        const [email, setEmail] = useState('');
        const [segundoNombre, setSegundoNombre] = useState('');
        const [montoPesos, setMontoPesos] = useState('');
        const [montoDolares, setMontoDolares] = useState('');
        const [contacto, setContacto] = useState('');
        const [accionContacto, setAccionContacto] = useState('');

        const opcion = () => {
            setBoton(!boton)
        };
    
        // Tasa de cambio
        const tasaCambio = 0.00026; // 1 Peso Colombiano (COP) = 0.00026 Dólar (USD)
    
        // Manejar cambios en el campo de monto en pesos colombianos
        const handleMontoPesosChange = (event) => {
        const valor = event.target.value;
        setMontoPesos(valor);
        const valorDolares = (parseFloat(valor) * tasaCambio).toFixed(2);
        setMontoDolares(valorDolares);
        };
    
        // Manejar cambios en el campo de contacto
        const handleContactoChange = (event) => {
        setContacto(event.target.value);
        };
    
        // Manejar cambios en la acción del contacto (crear/llamar/asignar)
        const handleAccionContactoChange = (event) => {
        setAccionContacto(event.target.value);
        };
    
        // Manejar el envío del formulario
        const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o realizar otras operaciones.
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Segundo Nombre:', segundoNombre);
        console.log('Monto en Pesos:', montoPesos);
        console.log('Monto en Dólares:', montoDolares);
        console.log('Contacto:', contacto);
        console.log('Acción de Contacto:', accionContacto);
        };
    
        return (
        <FormContainer>
            <h2>Formulario</h2>
            <Form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Segundo Nombre:</label>
                <input
                type="text"
                value={segundoNombre}
                onChange={(e) => setSegundoNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Monto en Pesos:</label>
                <input
                type="number"
                value={montoPesos}
                onChange={handleMontoPesosChange}
                />
            </div>
            <div>
                <label>Monto en Dólares:</label>
                <input type="text" value={montoDolares} readOnly />
            </div>
            <div>
                <label>Contacto:</label>
                <input
                type="text"
                value={contacto}
                onChange={handleContactoChange}
                />
            </div>
            <div>
                <label>Acción de Contacto:</label>
                <select
                value={accionContacto}
                onChange={handleAccionContactoChange}
                >
                <option value="crear">Crear</option>
                <option value="llamar">Llamar</option>
                <option value="asignar">Asignar</option>
                </select>
            </div>
            <div>
                <button type="submit" onClick={opcion}>Enviar</button>
                {opcion && <viewPedidos></viewPedidos>}
            </div>
            </Form>
        </FormContainer>
        );
    };

    export default Formulario;