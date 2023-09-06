import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
    return (
        <div>
            <h2>Gráfica de Barras</h2>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
