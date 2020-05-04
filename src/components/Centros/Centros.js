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
      <div className="centros-titulo">
        <h3>Centros de Atención, Puntos Sube y Terminales Automáticas.</h3>
      </div>
      <div className="centros-buscar">
        <label>Buscar:</label>
        <div className="buscar-input">
          <i class="fas fa-search"></i>
          <input placeholder="Ciudad" />
        </div>
      </div>
      <div className="map">
        <img src="https://i.imgur.com/xuo6Jmw.png" />
      </div>
      <div className="centros-info">
        <div className="centros-data">
          <img src="https://tarjetasube.sube.gob.ar/SubeWeb/Content/Images/PinpuntoSUBE.SVG" />
          <details>
            <summary>
              <span>Puntos SUBE</span>
            </summary>
            <p>
              Son locales comerciales, estaciones de tren y subte, agencias de
              lotería y correos en donde podés conseguir o cargar tu tarjeta.
            </p>
          </details>
        </div>
        <div className="centros-data">
          <img src="https://tarjetasube.sube.gob.ar/SubeWeb/Content/Images/PinCentrodeatencion.svg" />
          <details>
            <summary>
              <span>Centros de Atención</span>
              <p>Allí, podrás realizar algunas de estas gestiones:</p>
            </summary>
            <ul>
              <li>Conseguir tu SUBE.</li>
              <li>Registrarla.</li>
              <li>Aplicar la Tarifa Social en caso de ser beneficiario.</li>
              <li>
                Solicitar la baja de tu tarjeta por pérdida, robo o rotura.
              </li>
              <li>Recuperar tu saldo.</li>
              <li>Recibir asesoramiento sobre el servicio.</li>
              <li>
                Cargar tu SUBE con tarjeta de débito o crédito (solo en AMBA).
              </li>
              <li>Informarte sobre el estado de gestiones en curso.</li>
              <li>Actualizar tus datos.</li>
              <li>Asentar reclamos.</li>
              <li>Denunciar un Punto SUBE por cobro adicional.</li>
            </ul>
          </details>
        </div>
        <div className="centros-data">
          <img src="https://tarjetasube.sube.gob.ar/SubeWeb/Content/Images/PinTerminalesAutomaticas.svg" />
          <details>
            <summary>
              <span>Terminales Automáticas</span>
              <p>Allí, vas a poder:</p>
            </summary>
            <ul>
              <li>Acreditar cargas electrónicas.</li>
              <li>Aplicar la Tarifa Social.</li>
              <li>Consultar y recuperar tu saldo.</li>
            </ul>
          </details>
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
