import { pool } from "../../db.js";

export const crearPedidos = async (req, res) => {
    try {
        const {cliente, producto, monto, fecha, columna } = req.body;
        const [rows] = await pool.query(
            "INSERT INTO pedidos (cliente, producto, monto, fecha, columna) VALUES (?,?,?,?,?)",
            [ cliente, producto, monto, fecha, columna]
        );
        console.log(rows);
        res.send({
            id: rows.insertId,
            cliente: cliente,
            producto: producto,
            monto: monto,
            fecha: fecha,
            columna: columna
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Algo anda mal" });
    }
};

export const getPedidos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pedidos')

        res.json(rows)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Algo anda mal" });
    }
};

export const getPedidosId = async (req, res) => {
    const idPedido = req.params.id;
    try {
        const [row] = await pool.query('SELECT * FROM pedidos WHERE idPedido = ?', [idPedido]);

        res.json(row);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo segmento por ID' });
    }
};

export const updatePedidos = async (req, res) => {
    try {
        const {cliente, producto, monto, fecha } = req.body;

        const updateData = await pool.query(
            'UPDATE pedidos SET cliente = ?, producto = ?, monto = ?, fecha = ? WHERE idPedido = ?',
            [cliente, producto, monto, fecha, req.params.id]
        );
        res.status(200).json({ message: 'A company has been updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error was detected' });
    }
};

export const deletePedidos = async (req, res) => {
    try {
        const deletedata = await pool.query('DELETE FROM pedidos WHERE idPedido = ?',
        [req.params.id]);
        res.status(200).json({ message: 'Empresa eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
};