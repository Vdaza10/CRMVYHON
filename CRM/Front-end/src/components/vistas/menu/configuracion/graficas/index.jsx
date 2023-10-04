import React, { useEffect } from "react";
import Chart from "chart.js/auto"; // Importar Chart.js
import { Boxgrafica, ChartContainer, Container } from "./styled";

function Grafica() {
  useEffect(() => {
    // Datos para el gráfico de barras
    const dataBar = {
      labels: ["Cotizados", "Cancelados", "En proceso", "Vendidos"],
      datasets: [
        {
          label: "Pedidos",
          data: [20, 63, 30, 80],
          backgroundColor: "#18eb05",
          borderColor: "#f9f9f9",
          borderWidth: 1,
        },
      ],
    };

    // Datos para el gráfico de tarta
    const dataPie = {
      labels: ["Cotizados", "Cancelados", "En proceso", "Vendidos"],
      datasets: [
        {
          data: [4350, 7600, 5400, 2200],
          backgroundColor: ["#f00", "#04f61c", "#000000", "#0546f9"],
          
        },
      ],
    };

    // Datos para el gráfico de línea
    const dataLine = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [
        {
          label: "pedios",
          data: [50, 65, 70, 80, 95],
          borderColor: "#2b4df2",
          fill: false,
        },
      ],
    };

    // Datos para el gráfico de área
    const dataArea = {
      labels: ["Cotizados", "Cancelados", "En proceso", "Vendidos"],
      datasets: [
        {
          label: "Pedidos",
          data: [50, 65, 70, 80, 95],
          backgroundColor: "rgba(43, 77, 242, 0.2)",
          borderColor: "#2b4df2",
          borderWidth: 1,
          fill: true,
        },
      ],
    };

    // Configuración común para todos los gráficos
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Crear el gráfico de barras
    const barChart = new Chart(document.getElementById("barChart"), {
      type: "bar",
      data: dataBar,
      options: chartOptions,
    });

    // Crear el gráfico de tarta
    const pieChart = new Chart(document.getElementById("pieChart"), {
      type: "pie",
      data: dataPie,
      options: chartOptions,
    });

    // Crear el gráfico de línea
    const lineChart = new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: dataLine,
      options: chartOptions,
    });

    // Crear el gráfico de área
    const areaChart = new Chart(document.getElementById("areaChart"), {
      type: "line",
      data: dataArea,
      options: chartOptions,
    });

    // Limpia los gráficos al desmontar el componente
    return () => {
      barChart.destroy();
      pieChart.destroy();
      lineChart.destroy();
      areaChart.destroy();
    };
  }, []);

  return (
    <Container>

      <Boxgrafica>
        <ChartContainer>
          {/* Gráfico de Barras */}
          <canvas id="barChart" width="400" height="250"></canvas>
        </ChartContainer>
        
        <ChartContainer>
          {/* Gráfico de Área */}
          <canvas id="areaChart" width="400" height="250"></canvas>
        </ChartContainer>

      </Boxgrafica>

      <Boxgrafica>
        <ChartContainer>
          {/* Gráfico de Línea */}
          <canvas id="lineChart" width="400" height="250"></canvas>
        </ChartContainer>

        <ChartContainer>
          {/* Gráfico de Tarta */}
          <canvas id="pieChart" width="400" height="250"></canvas>
        </ChartContainer>
      </Boxgrafica>
    </Container>
  );
}

export default Grafica;
