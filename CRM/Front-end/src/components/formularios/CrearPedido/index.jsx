import React, { useState } from "react";
import { FormGroup, FormularioContainer, SubmitButton } from "./style.jsx";
import axios from "axios";

const FormularioPedido = ({ addPedido }) => {
    const [cliente, setCliente] = useState("");
    const [monto, setMonto] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cliente.trim() === "" || monto.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const fechaActual = new Date().toLocaleDateString(); // Obtener la fecha actual

            const response = await axios.post("http://localhost:3005/pedidos", {
                cliente: cliente,
                monto: monto,
                fecha: fechaActual, // Usar la fecha actual
            });

            const nuevoPedido = response.data;

            addPedido(nuevoPedido);

            setCliente("");
            setMonto("");
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error al crear el pedido.");
        }
    };

    return (
        <FormularioContainer>
            <h3>Formulario de Pedido</h3>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="cliente">Cliente:</label>
                    <input
                        type="text"
                        id="cliente"
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="monto">Monto:</label>
                    <input
                        type="number"
                        id="monto"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        required
                    />
                </FormGroup>
                <SubmitButton type="submit">Agregar Pedido</SubmitButton>
            </form>
        </FormularioContainer>
    );
};

export default FormularioPedido;
