import React, { useState } from "react";
import axios from "axios";
import {
    FormContainer,
    FormGroup,
    Label,
    Input,
    Select,
    ConvertButton,
    ButtonState,
    CloseOpen,
} from "./style";

const FormularioPedido = ({ onSave }) => { // Recibe la función onSave como prop
    const [cliente, setCliente] = useState("");
    const [producto, setProducto] = useState("");
    const [monto, setMonto] = useState("");
    const [moneda, setMoneda] = useState("pesos");

    const handleConvert = () => {
        const tasaDolar = 0.045;

        if (moneda === "dolares") {
            const montoPesos = parseFloat(monto) / tasaDolar;
            setMonto(montoPesos.toFixed(2));
        } else if (moneda === "pesos") {
            const montoDolares = parseFloat(monto) * tasaDolar;
            setMonto(montoDolares.toFixed(2));
        }
    };

    const handleSave = async () => {
        try {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`;

            const response = await axios.post("http://localhost:3005/pedidos", {
                cliente: cliente,
                producto: producto,
                monto: monto,
                moneda: moneda,
                fecha: formattedDate,
            });

            console.log(response.data);

            // Llama a la función onSave con los datos ingresados
            onSave({
                cliente: cliente,
                producto: producto,
                monto: monto,
            });

            // Resto del código para limpiar los campos del formulario
            setCliente("");
            setProducto("");
            setMonto("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormContainer>
            <FormGroup>
                <Label>Cliente:</Label>
                <Input
                    type="text"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label>Producto:</Label>
                <Input
                    type="text"
                    value={producto}
                    onChange={(e) => setProducto(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label>Monto:</Label>
                <Input
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                />
                <Select
                    value={moneda}
                    onChange={(e) => setMoneda(e.target.value)}
                >
                    <option value="pesos">Pesos Colombianos</option>
                    <option value="dolares">Dólares</option>
                </Select>

                <ConvertButton onClick={handleConvert}>Convertir</ConvertButton>
            </FormGroup>

            <CloseOpen>
                <ButtonState onClick={handleSave}>Guardar</ButtonState>
            </CloseOpen>
        </FormContainer>
    );
};

export default FormularioPedido;
