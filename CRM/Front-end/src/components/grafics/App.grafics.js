import React from 'react';
import { Container } from './styles';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';

const pieChartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
        {
            data: [30, 40, 30],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

const barChartData = {
    labels: ['Label A', 'Label B', 'Label C'],
    datasets: [
        {
        label: 'Sample Data',
        data: [50, 70, 45],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

function App() {
    return (
        <div>
        <h1>Gráficas</h1>
        <Container>
            <PieChart data={pieChartData} />
            <BarChart data={barChartData} />
        </Container>
        </div>
    );
}

export default App;
