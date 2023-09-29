import {Router} from "express";
import * as tablaEmpresa from "../controladores/Tablas/empresa.js"
import * as tablaContacto from "../controladores/Tablas/contacto.js"
import * as tablaNegocio from "../controladores/Tablas/negocio.js"
import * as tablaTarea from "../controladores/Tablas/tareas.js"


export const routers = Router();

//tabla empresa
routers.get('/companytabla',tablaEmpresa.getTablaEmpresa)
routers.patch('/companytabla/:idEmpresa',tablaEmpresa.updatetablaEmpresa)
// router.delete('/companytabla/:idEmpresa', tablaEmpresa.deleteTablaEmpresa)
routers.put('/companytabla/desactivar/:idEmpresa', tablaEmpresa.desactivarTablaEmpresa);

//tabla contacto
routers.get('/contactotabla/',tablaContacto.getTablaContacto);
routers.patch('/contactotabla/:idContacto',tablaContacto.updatetablaContacto)
// router.delete('/contactotabla/:idContacto',tablaContacto.deleteTablaContacto);
routers.put('/contactotabla/desactivar/:idContacto', tablaContacto.desactivarTablaContacto);

//tabla negocio
routers.get('/negociotabla', tablaNegocio.getTablaNegocio);
routers.patch('/negociotabla/:idNegocio',tablaNegocio.updatetablaNegocio)
routers.put('/negociotabla/desactivar/:idNegocio',tablaNegocio.desactivarTablaNegocio);

//tabla tarea
routers.get('/tareastabla',tablaTarea.getTablaTarea)
routers.patch('/tareastabla/:idTareas',tablaTarea.updatetablaTareas)
routers.put('/tareastabla/desactivar/:idTareas',tablaTarea.desactivarTablaTarea)