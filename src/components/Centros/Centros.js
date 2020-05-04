import React from "react";
import "./Centros.scss";
import { Link } from "react-router-dom";

const Centros = () => {
  return (
    <div className="centros">
      <div className="tarjetas-menu-up">
        <div>
          <i className="fas fa-bars"></i>
        </div>
        <div className="tarjetas-title">
          <span>Centros de carga</span>
        </div>
        <div>
          <i className="fas fa-bell"></i>
        </div>
      </div>

      <div className="indice-menu-down">
        <div className="menu-icon">
          <Link to="./indice">
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="./tarjetas">
            <i className="fas fa-wallet"></i>
          </Link>
        </div>
        <div className="menu-icon">
          <Link to="./perfil">
            <i className="fas fa-user"></i>
          </Link>
        </div>
        <div className="menu-icon-active">
          <Link to="./centros">
            <i className="fas fa-map-marker-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Centros;
