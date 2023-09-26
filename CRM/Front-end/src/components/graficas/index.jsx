import React from "react";
import { Caja, CajaFooter, CajaGraficaDeElMedio, Color, ContenedorColorYLetra, ContenedorDeBarras, ContenedorDeCajas, ContenedorDeElMedio, ContenedorFooter, ContenedorLetrasCajas, ContenedorVerificacion, Fondo, Icono, LetrasCajas, LetrasDeVerificacion, NumerosCajas, } from "./styled.jsx";
import Menu from "../menu/principal";
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, AreaChart, Area, PieChart, Pie, Cell } from 'recharts'


function Grafica() {
    const data = [
        {nombre: "elias", edad: 12, peso: 20 },
        {nombre: "luis", edad: 25, peso: 63 },
        {nombre: "kendry", edad: 12, peso: 30 },
        {nombre: "arianis", edad: "23", peso: 80 },
    ]

    const torta = [
        {nombre: "grupo A", valor: 4350 },
        {nombre: "grupo B", valor: 7600 },
        {nombre: "grupo C", valor: 5400 },
        {nombre: "grupo D", valor: 2200 },
    ]
    const COLORES = [ '#f00', '#fff', '#000', '#366212']

    return (
        <>
        <Menu/>
        
            <Fondo>
                <ContenedorDeCajas>

                    <Caja>
                        <ContenedorLetrasCajas>
                            <LetrasCajas></LetrasCajas>
                            <Icono></Icono>
                        </ContenedorLetrasCajas>
                        <NumerosCajas>777</NumerosCajas>
                    </Caja>
                    <Caja>
                        <ContenedorLetrasCajas>
                            <LetrasCajas></LetrasCajas>
                            <Icono></Icono>
                        </ContenedorLetrasCajas>
                        <NumerosCajas>888</NumerosCajas>
                    </Caja>
                    <Caja>
                        <ContenedorLetrasCajas>
                            <LetrasCajas></LetrasCajas>
                            <Icono></Icono>
                        </ContenedorLetrasCajas>
                        <NumerosCajas>999</NumerosCajas>
                    </Caja>
                </ContenedorDeCajas>
                    {/* ================================contenedorDe1 */}
                    {/* =====================================letraDe1 */}
                    {/* =====================================colorDe1 */}
                <ContenedorDeElMedio>

                    <CajaGraficaDeElMedio>
                    <ContenedorVerificacion>
                        <ContenedorColorYLetra className="contenedor1de1">
                            <LetrasDeVerificacion className="letra1de1"></LetrasDeVerificacion>
                            <Color className="color1de1"></Color>
                        </ContenedorColorYLetra>
                        <ContenedorColorYLetra className="contenedor2de1">
                            <LetrasDeVerificacion className="letra2de1"></LetrasDeVerificacion>
                            <Color className="color2de1"></Color>
                        </ContenedorColorYLetra>
                        <ContenedorColorYLetra className="contenedor3de1">
                            <LetrasDeVerificacion className="letra3de1"></LetrasDeVerificacion>
                            <Color className="color3de1"></Color>
                        </ContenedorColorYLetra>
                        <ContenedorColorYLetra className="contenedor4de1">
                            <LetrasDeVerificacion className="letra4de1"></LetrasDeVerificacion>
                            <Color className="color4de1"></Color>
                        </ContenedorColorYLetra>
                        </ContenedorVerificacion>
                        <ContenedorDeBarras>
                        <ResponsiveContainer width="100%" aspect={2}>
                                <BarChart 
                                
                                data={data}
                                width={400}
                                height={250}
                                margin={{
                                    top:5,
                                    right:30,
                                    left:20,
                                    bottom:5
                                }}
                                >

                            <CartesianGrid strokeDasharray="4 1 2" />
                            <XAxis dataKey="nombre" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="peso" fill="#fff" />
                            <Bar dataKey="edad" fill="#2b4df2" />
                            
                                </BarChart>
                            </ResponsiveContainer>
                        </ContenedorDeBarras>

                    </CajaGraficaDeElMedio>
                        {/*==================================contenedorDe2*/}
                        {/* =====================================letraDe2 */}
                        {/* =====================================colorDe2 */}

                    <CajaGraficaDeElMedio>
                        <ContenedorVerificacion>
                            <ContenedorColorYLetra className="contenedor1de2">
                                <LetrasDeVerificacion className="letra1de2"></LetrasDeVerificacion>
                                <Color className="color1de2"></Color>
                            </ContenedorColorYLetra>
                            <ContenedorColorYLetra className="contenedor2de2">
                                <LetrasDeVerificacion className="letra2de2"></LetrasDeVerificacion>
                                <Color className="color2de2"></Color>
                            </ContenedorColorYLetra>
                            <ContenedorColorYLetra className="contenedor3de2">
                                <LetrasDeVerificacion className="letra3de2"></LetrasDeVerificacion>
                                <Color className="color3de2"></Color>
                            </ContenedorColorYLetra>
                            <ContenedorColorYLetra className="contenedor4de2">
                                <LetrasDeVerificacion className="letra4de2"></LetrasDeVerificacion>
                                <Color className="color4de2"></Color>
                            </ContenedorColorYLetra>
                        </ContenedorVerificacion>
                          
                        <ContenedorDeBarras>
                            <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                    dataKey="valor"
                                    data={torta}
                                    innerRadius={70}
                                    outerRadius={120}
                                    
                                    >
                                            {torta.map((entrada, index)=> (
                                        <Cell key={`cell-${index}`} fill={COLORES[index % COLORES.length]} />
                                    ))}
                                    </Pie>
                                
                                    <Tooltip/>
                                </PieChart>
                            </ResponsiveContainer>
                            </div>
                        </ContenedorDeBarras >
                    </CajaGraficaDeElMedio>

                </ContenedorDeElMedio>
                        {/*==================================contenedorDe3*/}
                        {/* =====================================letraDe3 */}
                        {/* =====================================colorDe3 */}
                <ContenedorFooter>
                    <CajaFooter>
                        <ContenedorVerificacion>
                            <ContenedorColorYLetra className="contenedor1de3">
                                <LetrasDeVerificacion className="letra1de3"></LetrasDeVerificacion>
                                <Color className="color1de3"></Color>
                            </ContenedorColorYLetra>
                            <ContenedorColorYLetra className="contenedor2de3">
                                <LetrasDeVerificacion className="letra2de3"></LetrasDeVerificacion>
                                <Color className="color2de3"></Color>
                            </ContenedorColorYLetra>
                            <ContenedorColorYLetra className="contenedor3de3">
                                <LetrasDeVerificacion className="letra3de3"></LetrasDeVerificacion>
                                <Color className="color3de3"></Color>
                            </ContenedorColorYLetra>
                            <ContenedorColorYLetra className="contenedor4de3">
                                <LetrasDeVerificacion className="letra4de3"></LetrasDeVerificacion>
                                <Color className="color4de3"></Color>
                            </ContenedorColorYLetra>
                        </ContenedorVerificacion>
                        <ContenedorDeBarras>
                                    <ResponsiveContainer width="100%" aspect={3.5}>
                                    <AreaChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    margin={{
                                        top:10,
                                        right:30,
                                        left:0,
                                        bottom:0
                                    }}
                                    >

                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey= "nombre" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="peso" stackId="1" stroke="#fff" fill="#f00"/>
                                        <Area type="monotone" dataKey="edad" stackId="1" stroke="#14da2f" fill="#240303"/>
                                    </AreaChart>
                                    </ResponsiveContainer>
                                </ContenedorDeBarras>
                    </CajaFooter>
                </ContenedorFooter>
            </Fondo>
        </>
    );
}

export default Grafica;
