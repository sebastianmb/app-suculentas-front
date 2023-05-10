import React from 'react';
import plant from "../assets/images/potted-plant.svg";
import clock from "../assets/images/clock-time.svg";
import call from "../assets/images/call.svg";


const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="center">
          {/*LOGO*/}
          <div id="logo">
            <img src={plant} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Pot</strong>
            </span>
          </div>
          {/*MENU*/}
          <nav id="menu">
            <ul>
              <li>
                <img src={clock} className="clock-call" alt="clock" />
                <span>LUN - VIE 7:00 A.M - 5:00 P.M</span>
              </li>
              <li>
                <img src={call} className="clock-call" alt="call" />
                <span>+57 3196418371</span>
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



