import React from "react";
import "./Indice.scss";
import { Link } from "react-router-dom";

const Indice = () => {
  return (
    <div className="indice">
      <div className="indice-menu-up">
        <div className="menu-up">
          <div>
            <i className="fas fa-bars"></i>
          </div>
          <div className="indice-user">
            <span>
              <img
                alt="avatar"
                className="indice-avatar"
                src="https://ca.slack-edge.com/TNG5KKB2P-UNWP3HYKY-0b015efda2a9-512"
              />
            </span>
            <span>Nacho Caiafa</span>
          </div>
          <div>
            <i className="fas fa-bell"></i>
          </div>
        </div>
      </div>
      <div className="indice-dashboard">
        <div className="dashboard-top">
          <div className="dashboard-viajes">
            <span className="dashboard-num">2</span>
            <span className="dashboard-inf">Viajes</span>
          </div>
          <div className="dashboard-cargas">
            <span className="dashboard-num">$44</span>
            <span className="dashboard-inf">Gastos</span>
          </div>
          <div className="dashboard-gastos">
            <span className="dashboard-num">0</span>
            <span className="dashboard-inf">Cargas</span>
          </div>
        </div>
        <div className="dashboard-down">
          <div className="dashboard-down-opt-active">Día</div>
          <div className="dashboard-down-opt">Mes</div>
          <div className="dashboard-down-opt">Año</div>
        </div>
      </div>
      <div className="indice-formato">
        <div className="formato-titulo">
          <h3>Formato de uso</h3>
        </div>
        <div className="formato-container">
          <div className="formato-activo">
            <i className="fas fa-bus"></i>
            <span>Colectivo</span>
          </div>
          <div className="formato">
            <i className="fas fa-subway"></i>
            <span>Subte</span>
          </div>
          <div className="formato">
            <i className="fas fa-train"></i>
            <span>Tren</span>
          </div>
          <div className="formato">
            <i className="fas fa-car"></i>
            <span>Telepase</span>
          </div>
          <div className="formato">
            <i className="fas fa-percentage"></i>
            <span>Beneficios</span>
          </div>
        </div>
      </div>
      <div className="indice-historial">
        <div className="historial-titulo">
          <h3>Historial de uso</h3>
        </div>
        <div className="historial-dashboard">
          <ul className="historial-dashboard-list">
            <li className="list-row">
              <div className="linea">64</div>
              <div className="nombre">
                <span>Colectivo Linea 64</span>
                <span>18 de Septiembre, 18:45pm</span>
              </div>
              <div className="gasto">$22</div>
            </li>
            <li className="list-row">
              <div className="linea">64</div>
              <div className="nombre">
                <span>Colectivo Linea 64</span>
                <span>18 de Septiembre, 18:45pm</span>
              </div>
              <div className="gasto">$22</div>
            </li>
            <li className="list-row">
              <div className="linea">64</div>
              <div className="nombre">
                <span>Colectivo Linea 64</span>
                <span>18 de Septiembre, 18:45pm</span>
              </div>
              <div className="gasto">$22</div>
            </li>
            <li className="list-row">
              <div className="linea">64</div>
              <div className="nombre">
                <span>Colectivo Linea 64</span>
                <span>18 de Septiembre, 18:45pm</span>
              </div>
              <div className="gasto">$22</div>
            </li>
            <li className="list-row">
              <div className="linea">64</div>
              <div className="nombre">
                <span>Colectivo Linea 64</span>
                <span>18 de Septiembre, 18:45pm</span>
              </div>
              <div className="gasto">$22</div>
            </li>
            <li className="list-row">
              <div className="linea">64</div>
              <div className="nombre">
                <span>Colectivo Linea 64</span>
                <span>18 de Septiembre, 18:45pm</span>
              </div>
              <div className="gasto">$22</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="indice-menu-down">
        <div className="menu-icon-active">
          <i className="fas fa-home"></i>
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
        <div className="menu-icon">
          <Link to="./centros">
            <i className="fas fa-map-marker-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Indice;
