import { Router } from "express";
import * as userCrtl from "../controladores/Formularios/user.controllers.js";//registro//
import * as empresaCrtl from "../controladores/Formularios/empresa.js";//empresa//
import * as contactoCrtl from "../controladores/Formularios/contacto.js"; //contacto//
import * as negocioCrtl from "../controladores/Formularios/negocio.js"; //negocio//
import * as segmentoCrtl from "../controladores/Formularios/segmento.js"; //segmento//
import * as tareaCrtl from "../controladores/Formularios/tarea.js"; //tareas// */
import * as logincrtl from "../controladores/Formularios/login.js"
import * as tablaEmpresa from "../controladores/Tablas/empresa.js"
import * as tablaContacto from "../controladores/Tablas/contacto.js"
import * as tablaNegocio from "../controladores/Tablas/negocio.js"
import * as tablaTarea from "../controladores/Tablas/tareas.js"
import * as pedidosCrtl from "../controladores/Formularios/pedidos.js"//pedidos

export const router = Router();

//registro

router.get('/users', userCrtl.getUsers);
router.post('/users', userCrtl.createUsers);
router.patch('/users', userCrtl.updateUsers);
router.delete('/users', userCrtl.deleteUsers);


//Login
router.post('/login',  logincrtl.Login);


//empresa// 
router.post('/company', empresaCrtl.createEmpresa);
router.get('/company', empresaCrtl.getEmpresas);
router.get('/company/:id', empresaCrtl.getEmpresaId);
router.patch('/company/:id', empresaCrtl.updateEmpresas)
router.delete('/company/:id', empresaCrtl.deleteEmpresas);

//contacto//
router.post('/contacto', contactoCrtl.crearContacto)
router.get('/contacto', contactoCrtl.getContacto);
router.get('/contacto/:id', contactoCrtl.getContactoId);
router.patch('/contacto/:id', contactoCrtl.updateContacto);
router.delete('/contacto/:id', contactoCrtl.deleteContacto);

//negocio//
router.post('/negocio', negocioCrtl.crearNegocio)
router.get('/negocio', negocioCrtl.getNegocio)
router.get('/negocio/:id', negocioCrtl.getNegocioId);
router.patch('/negocio/:id', negocioCrtl.updateNegocio);
router.delete('/negocio/:id', negocioCrtl.deleteNegocio); 


//segmento//
router.get('/segmento', segmentoCrtl.getSegmento)

//tareas//
router.get('/tareas', tareaCrtl.getTareas);
router.get('/tareastabla',tablaTarea.getTablaTarea)
router.post('/tareas', tareaCrtl.createTarea);
router.patch('/tareas', tareaCrtl.updateTarea);
router.delete('/tareas', tareaCrtl.deleteTarea);


//tabla contacto
router.get('/contactotabla',tablaContacto.getTablaContacto);
router.patch('/contactotabla/:idContacto',tablaContacto.updatetablaContacto)
router.delete('/contactotabla/:idContacto',tablaContacto.deleteTablaContacto);


//tabla empresa
router.get('/companytabla',tablaEmpresa.getTablaEmpresa)
router.patch('/companytabla/:idEmpresa',tablaEmpresa.updatetablaEmpresa)
router.delete('/companytabla/:idEmpresa', tablaEmpresa.deleteTablaEmpresa)


//tabla negocio
router.get('/negociotabla', tablaNegocio.getTablaNegocio);
router.patch('/negociotabla/:idNegocio',tablaNegocio.updatetablaNegocio)
router.delete('/negociotabla/:idNegocio', tablaNegocio.deleteTablaNegocio);


//tabla tarea
router.get('/tareastabla',tablaTarea.getTablaTarea)
router.patch('/tareastabla/:idTareas',tablaTarea.updatetablaTareas)
router.delete('/tareastabla/:idTareas',tablaTarea.deleteTablaTareas)


//pedidos
router.post('/pedidos', pedidosCrtl.crearPedidos);
router.get('/pedidos', pedidosCrtl.getPedidos);
router.get('/pedidos/:id', pedidosCrtl.getPedidosId);
router.patch('/pedidos/:id', pedidosCrtl.updatePedidos);
router.delete('/pedidos/:id', pedidosCrtl.deletePedidos);