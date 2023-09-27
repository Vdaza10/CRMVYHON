import { Routes, Route, BrowserRouter} from "react-router-dom";

import Inicio from "../src/components/vistas/Inicialvyhon/inicio";
import Registro from "./components/vistas/Registro/Fondo/registroPrincipal";
import Recuperar from "./components/vistas/recuperarContraseña/index";
import Vistaprincipal from "./components/vistas/carrusel/principal";
import Retorno7 from "../src/components/vistas/empresa";
import Retorno3 from "../src/components/vistas/contacto";
import Retorno2 from "../src/components/vistas/negocio";
import Retorno5 from "../src/components/vistas/tarea";
import PerfilUsuario from "../src/components/vistas/Perfilusuario/perfil/index";
import Login from "./components/vistas/login/index";
import Campaña from "../src/components/vistas/markenting/markentingp";
import Comunucacion from "./components/vistas/markenting/comunicacion/comunicacion";
import Promocion from "./components/vistas/markenting/promocion/promocion";
import Pedidos from "./components/vistas/markenting/pedidos/pedidos";
import Campañasms from "./components/vistas/markenting/campañasms/campaña";
import Grafica from "./components/vistas/menu/configuracion/graficas/index";
import CampañaCorreo from "./components/vistas/markenting/campañacorreo/campaña";
import "./App.css"
import Menu from "../src/components/vistas/menu/principal"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas pricipales*/}
        <Route path="/" element={<Inicio />}>
          {" "}
        </Route>
        <Route path="/registrarse" element={<Registro />}>
          {" "}
        </Route>
        <Route path="/recuperar" element={<Recuperar />}>
          {" "}
        </Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        {/* Rutas del menu*/}
        <Route element={<Menu/>}>
          <Route path="/vistaprincipal" element={<Vistaprincipal />}></Route>
          <Route path="/empresas" element={<Retorno7 />}></Route>
          <Route path="/contactos" element={<Retorno3 />}></Route>
          <Route path="/negocios" element={<Retorno2 />}></Route>
          <Route path="/tareas" element={<Retorno5 />}></Route>
          <Route path="/Marketing" element={<Campaña />}></Route>
          <Route path="/perfilusuario" element={<PerfilUsuario />}></Route>          
        </Route>
        {/* Rutas de marketeting*/}
        <Route path="/camunicacion" element={<Comunucacion />}></Route>
        <Route path="/campañacorreo" element={<CampañaCorreo />}></Route>
        <Route path="/promocion" element={<Promocion />}></Route>
        <Route path="/camapañasms" element={<Campañasms />}></Route>
        <Route path="/pedidos" element={<Pedidos />}></Route>
        <Route path="/grafica" element={<Grafica />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;