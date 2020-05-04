import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="login-up">
          <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0b6bb6"
                fillOpacity="1"
                d="M0,32L48,74.7C96,117,192,203,288,234.7C384,267,480,245,576,224C672,203,768,181,864,181.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>

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
            <h1>¡Hola, Nacho!</h1>
          </div>
        </div>
        <div className="wave2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0091ff"
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
          <div className="form-pass">
            <label>
              <i className="fas fa-key"></i> Contraseña
            </label>
            <input className="pass" type="password" placeholder=". . . . . ." />
          </div>
        </div>
        <div className="login-btn">
          <Link to="indice">
            <button className="login-ingresar">Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
