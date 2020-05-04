import React from "react";
import "./Registro.scss";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="login-up">
          <div className="login-back">
            <Link to="home">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
          <div className="login-icon">
            <img
              alt="logo"
              className="home-icon"
              src="https://i.imgur.com/xmRRkqT.png"
            />
          </div>
          <div className="login-title">
            <h1>Creá tu cuenta</h1>
            <p>
              Creá tu cuenta para consultar y recuperar tu saldo, ver tus
              movimientos, recibir información de transporte público o denunciar
              un Punto SUBE. Si sos beneficiario de la Tarifa Social generá el
              PIN SUBE en la web de <b>MI ANSES</b> desde el apartado "Programas
              y Beneficios".
            </p>
          </div>
        </div>
        <div className="wave2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0b6bb6"
              fillOpacity="1"
              d="M0,288L48,266.7C96,245,192,203,288,208C384,213,480,267,576,256C672,245,768,171,864,160C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="login-down">
        <div className="login-form">
          <div className="form-documento">
            <label>
              <i className="fas fa-credit-card"></i> Nº de Tarjeta
            </label>
            <input
              className="documento"
              type="number"
              placeholder="6061 0000 0000 0000"
            />
          </div>
          <div className="form-documento">
            <label>
              <i className="fas fa-user"></i> Nº de Documento
            </label>
            <input className="documento" type="number" placeholder="00000000" />
          </div>
          <div className="form-tipo">
            <label>
              <i className="fas fa-id-card"></i> Tipo
            </label>
            <select>
              <option>DNI - Documento Nacional de Identidad</option>
              <option>LE - Libreta Enrolamiento</option>
              <option>LC - Libreta Cívica</option>
              <option>DE - Documento Extranjero</option>
            </select>
          </div>
          <div className="form-pass">
            <label>
              <i className="fas fa-key"></i> Clave
            </label>
            <input className="pass" type="password" placeholder=". . . . . ." />
            <label>Repetir Clave</label>
            <input className="pass" type="password" placeholder=". . . . . ." />
          </div>
        </div>
        <div className="login-btn">
          <Link to="indice">
            <button className="login-ingresar">Registrar</button>
          </Link>
          <Link to="/login">
            <div className="login-registrar">Ingresar ahora</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registro;
