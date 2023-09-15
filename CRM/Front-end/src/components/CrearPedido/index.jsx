import React, { useState } from "react";
import {FormContainer,FormGroup,Label,Input,Select,ConvertButton,ButtonState,CloseOpen,} from "./style";
// import Axios from "axios";
import DateSelector from "../DatePedido/index.jsx";

const FormularioPedido = () => {
    const [cliente, setCliente] = useState("");
    const [negocio, setNegocio] = useState("");
    const [monto, setMonto] = useState("");
    const [moneda, setMoneda] = useState("pesos");
    // const [fecha, setFecha] = useState("");

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

    // const createPedidos = async (e) => {
    //     try {
    //         const response = await Axios.post("http://localhost:3005/pedidos", {
    //             cliente
    //         })
    //     } catch (error) {
            
    //     }
    // }

//const de la fecha 
const [selectedDate, setSelectedDate] = useState({
    day: "",
    month: "",
    year: "",
});

const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
};

    return (
        <FormContainer>
        <FormGroup>
            <Label>Comerciante:</Label>
            <Input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            />
        </FormGroup>

        <FormGroup>
            <Label>cliente:</Label>
            <Input
            type="text"
            value={negocio}
            onChange={(e) => setNegocio(e.target.value)}
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

        <FormGroup>
            <Label>fecha:</Label>
            <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />
        </FormGroup>

        <FormGroup>
            <Input></Input>
        </FormGroup>

        <CloseOpen>
            <ButtonState>save</ButtonState>
        </CloseOpen>
        </FormContainer>
    );
};

export default FormularioPedido;
