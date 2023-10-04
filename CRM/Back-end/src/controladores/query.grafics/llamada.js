export const Enerollamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-01-01'AND '2023-01-31'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Febrerollamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-02-01'AND '2023-02-28'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Marzollamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-03-01'AND '2023-03-31'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Abrilllamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-04-01'AND '2023-04-30'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Mayollamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-05-01'AND '2023-05-31'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Juniollamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-06-01'AND '2023-06-30'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Juliollamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-07-01'AND '2023-07-31'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Agostollamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-08-01'AND '2023-08-31'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Septiembrellamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-09-01'AND '2023-09-30'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Octumbrellamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-10-01'AND '2023-10-31'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Noviembrellamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-11-01'AND '2023-11-30'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}
export const Diciembrellamada = async(res,req) => {
    try {
        const [row] = await pool.query("SELECT COUNT(cedula) AS cantidad_llamadas FROM llamada WHERE fechaLlamada BETWEEN '2023-12-01'AND '2023-12-31'")
        res.status(202).json(row)
    } catch (error) {
        console.error(error)
        res.status(404).json({message:"error enero"})
    }
}