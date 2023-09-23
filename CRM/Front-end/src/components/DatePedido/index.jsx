/* import React from "react";

const DateSelector = ({ selectedDate, onDateChange }) => {
  // Funciones para generar opciones de días, meses y años
    const generateDayOptions = () => {
        const options = [];
        for (let i = 1; i <= 31; i++) {
        options.push(
            <option key={i} value={i}>
            {i}
            </option>
        );
        }
        return options;
    };

    const generateMonthOptions = () => {
        const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
        ];

        return months.map((month, index) => (
        <option key={index} value={index + 1}>
            {month}
        </option>
        ));
    };

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const options = [];
        for (let i = currentYear; i >= currentYear - 10; i--) {
        options.push(
            <option key={i} value={i}>
            {i}
            </option>
        );
        }
        return options;
    };

    // Manejar cambios en la fecha
    const handleDayChange = (e) => {
        const newDate = { ...selectedDate, day: parseInt(e.target.value) };
        onDateChange(newDate);
    };

    const handleMonthChange = (e) => {
        const newDate = { ...selectedDate, month: parseInt(e.target.value) };
        onDateChange(newDate);
    };

    const handleYearChange = (e) => {
        const newDate = { ...selectedDate, year: parseInt(e.target.value) };
        onDateChange(newDate);
    };

    return (
        <div>
        <select value={selectedDate.day} onChange={handleDayChange}>
            {generateDayOptions()}
        </select>
        <select value={selectedDate.month} onChange={handleMonthChange}>
            {generateMonthOptions()}
        </select>
        <select value={selectedDate.year} onChange={handleYearChange}>
            {generateYearOptions()}
        </select>
        </div>
    );
};

export default DateSelector;
 */