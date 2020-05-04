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
      <div className="perfil-avatar">
        <img
          alt="avatar"
          className="indice-avatar"
          src="https://ca.slack-edge.com/TNG5KKB2P-UNWP3HYKY-0b015efda2a9-512"
        />
      </div>
      <div className="perfil-datos">
        <h3>Tus datos</h3>
        <div className="perfil-datos-form">
          <div className="form-documento">
            <label>
              <i className="fas fa-user"></i> Documento
            </label>
            <input className="documento" type="number" placeholder="00000000" />
          </div>
          <div className="form-tipo">
            <label>
              <i className="fas fa-id-card"></i> Tipo
            </label>
            <select>
              <option>DNI</option>
            </select>
          </div>
          <div className="form-name">
            <label>
              <i class="fas fa-user-edit"></i> Nombre y apellido
            </label>
            <input
              className="name"
              type="text"
              placeholder="Ingresa nombre y apellido"
            />
          </div>
          <div className="form-pass">
            <label>
              <i className="fas fa-key"></i> Contraseña
            </label>
            <input className="pass" type="password" placeholder=". . . . . ." />
          </div>
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
