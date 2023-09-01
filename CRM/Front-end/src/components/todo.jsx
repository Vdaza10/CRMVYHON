import { Routes, Route, BrowserRouter } from "react-router-dom"

import Retorno2 from "./vista_negocios"
import Retorno3 from "./contacto"
import Retorno5 from "./tarea"
import Retorno4 from "./crearcontacto"
import Retorno6 from "./creacionTareasOpciones"
import Retorno7 from "./Vistaempresas"
import PerfilUsuario from "./Perfilusuario"
import Retorno9 from "./integracionMarkenting"
import CrearTarea from "./CreacionTarea"
import Principal from "./login"
import Registrarse from "./Registro/Fondo/registroPrincipal"
import Registro from "./Registro/Fondo/registroPrincipal"
import Recuperar from "./recuperarContraseña"
import TablaContacto from "./tablaContacto"
import TablaEmpresa from "./tablaEmpresa"
import TablaNegocio from "./tablaNegocio"
import TablaTarea from "./tablaTarea"
import Vistaprincipal from "./vistaPrincipal/principal"
import Inicio from "./vistaInicialvyhon/inicio"

const Todo = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* Rutas para el menu principal */}
                <Route path="/" element = {<Inicio/>}> </Route>
                <Route path="/registrarse" element = {<Registrarse/>}> </Route>
                <Route path="/registro" element = {<Registro/>}> </Route>
                <Route path="/principal" element = {<Principal/>}> </Route>
                <Route path="/vistaprincipal" element = {<Vistaprincipal/>}></Route>     
                <Route path="/recuperar" element = {<Recuperar/>}> </Route>
                <Route path="/menu" element = {<Vistaprincipal/>}> </Route>
                {/* Rutas para diferentes sesiones */}
                <Route path="/negocios" element = {<Retorno2/>}></Route>
                <Route path="/contactos" element = {<Retorno3/>}></Route>
                <Route path="/crearcontacto" element = {<Retorno4/>}></Route>
                <Route path="/tareas" element = {<Retorno5/>}></Route>
                <Route path="/creaciontareas" element = {<Retorno6/>}></Route>
                <Route path="/empresas" element = {<Retorno7/>}></Route>
                <Route path="/perfilusuario" element = {<PerfilUsuario/>}></Route>
                <Route path="/markenting" element = {<Retorno9/>}></Route>
                <Route path="/creartarea" element = {<CrearTarea/>}></Route>
                <Route path="/tablaContacto" element = {<TablaContacto/>}></Route>
                <Route path="/tablaEmpresa" element = {<TablaEmpresa/>}></Route>
                <Route path="/tablaNegocio" element = {<TablaNegocio/>}></Route>
                <Route path="/tablaTarea" element = {<TablaTarea/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Todo;