import React from "react";
import "./Tarjetas.scss";
import { Link } from "react-router-dom";

const Tarjetas = () => {
  return (
    <div className="tarjetas">
      <div className="tarjetas-menu-up">
        <div>
          <i className="fas fa-bars"></i>
        </div>
        <div className="tarjetas-title">
          <span>Tarjetas</span>
        </div>
        <div>
          <i className="fas fa-bell"></i>
        </div>
      </div>
      <div className="tarjetas-saldo">
        <span className="saldo-title">Saldo Actual</span>
        <span className="saldo">$356</span>
      </div>
      <div className="tarjetas-container">
        <div className="agregar-tarjeta">+</div>
        <div className="tarjeta">
          <img
            alt="logo"
            className="home-icon"
            src="https://i.imgur.com/xmRRkqT.png"
          />
          <span>0000 0000 0000 0000</span>
        </div>
        <div className="tarjeta">
          <img
            alt="logo"
            className="home-icon"
            src="https://i.imgur.com/xmRRkqT.png"
          />
          <span>0000 0000 0000 0000</span>
        </div>
        <div className="tarjeta">
          <img
            alt="logo"
            className="home-icon"
            src="https://i.imgur.com/xmRRkqT.png"
          />
          <span>0000 0000 0000 0000</span>
        </div>
      </div>
      <div className="tarjetas-cantidad">
        <div className="cantidad-titulo">
          <h3>Cantidad de viajes</h3>
        </div>
        <div className="dashboard-down">
          <div className="dashboard-down-opt">Día</div>
          <div className="dashboard-down-opt">Mes</div>
          <div className="dashboard-down-opt-active">Año</div>
        </div>
        <div className="chart"></div>
      </div>
      <div className="indice-menu-down">
        <div className="menu-icon">
          <Link to="./indice">
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div className="menu-icon-active">
          <Link to="./tarjetas">
            <i className="fas fa-wallet"></i>
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="./perfil">
            <i className="fas fa-user"></i>
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="./centros">
            <i className="fas fa-map-marker-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
