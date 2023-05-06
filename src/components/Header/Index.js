import React from 'react'

const Header = () => {
  return (
    <div>
      <header id="header">
        <div class="center">
          {/*LOGO*/}  
          <div id="logo">
            <img src="assets/images/react.svg" class="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Curso</strong>React
            </span>
          </div>
            {/*MENU*/} 
          <nav id="menu">
            <ul>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="formulario.html">Formulario</a>
              </li>
              <li>
                <a href="#">Pagina 1</a>
              </li>
              <li>
                <a href="#">Pagina 2</a>
              </li>
            </ul>
          </nav>
            {/*LIMPIAR FLOTADOS*/} 
          <div class="clearfix"></div>
        </div>
      </header>
    </div>
  )
}

export default Header



