import React from "react";
import "./Perfil.scss";
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <div className="perfil">
      <div className="tarjetas-menu-up">
        <div>
          <i className="fas fa-bars"></i>
        </div>
        <div className="tarjetas-title">
          <span>Perfil</span>
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
        <div className="menu-icon-active">
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

export default Perfil;
