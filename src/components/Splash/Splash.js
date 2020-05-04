import React from "react";
import "./Splash.scss";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <Link to="/Home">
      <div className="splash">
        <img
          alt="logo"
          className="splash-icon"
          src="https://i.imgur.com/xmRRkqT.png"
        />
      </div>
    </Link>
  );
};

export default Splash;
