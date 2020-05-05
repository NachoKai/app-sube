import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Splash from "./components/Splash/Splash";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Indice from "./components/Indice/Indice";
import Tarjetas from "./components/Tarjetas/Tarjetas";
import Perfil from "./components/Perfil/Perfil";
import Centros from "./components/Centros/Centros";
import Registro from "./components/Registro/Registro";

function App() {
  return (
    <div className="App">
      <Router basename="/app-sube">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/indice">
            <Indice />
          </Route>
          <Route path="/tarjetas">
            <Tarjetas />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/centros">
            <Centros />
          </Route>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
