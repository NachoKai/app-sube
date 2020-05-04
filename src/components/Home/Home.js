import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div>
          <img
            className="home-icon"
            alt="logo"
            src="https://i.imgur.com/xmRRkqT.png"
          />
        </div>
        <div className="home-title">¡Hola! Bienvenido/a</div>
        <div className="home-subtitle">
          Ingresá para ver tus últimos movimientos, actualizar los datos de
          contacto, denunciar un Punto SUBE, iniciar gestiones para recuperar tu
          saldo en caso de robo, pérdida o rotura, y saber si te corresponde
          Tarifa Social.
        </div>
      </div>
      <div className="home-down">
        <Link to="/login">
          <button className="btn-ingresar">Ingresar</button>
        </Link>
        <button className="btn-crear">Crear Cuenta</button>
        <a href="/" className="home-forget">
          ¿Olvidaste la contraseña?
        </a>
      </div>
    </div>
  );
};

export default Home;
