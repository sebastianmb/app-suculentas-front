import React from 'react';
import plant from "../assets/images/potted-plant.svg";

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="center">
          {/*LOGO*/}  
          <div id="logo">
            <img src={plant} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Gop</strong>
            </span>
          </div>
            {/*MENU*/} 
          <nav id="menu">
            <ul>
              <li>
                <a >Arma tu mosaico</a>
              </li>
              <li>
                <a >Pantas</a>
              </li>
              <li>
                <a >Fertilizantes</a>
              </li>
             
            </ul>
          </nav>
            {/*LIMPIAR FLOTADOS*/} 
          <div className="clearfix"></div>
        </div>
      </header>
    </div>
  )
}

export default Header



