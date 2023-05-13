import React from 'react';
import pot from "../assets/images/pot.jpg"

const Pot = () => {
  return (
    <div id='suculentas'>
      <div className='center-suculentas'>
        <div className='mostrario'>
          <img src={pot} alt='matera' className=''/>
        </div>

        <div className='seleccion'>
          <span><b>Seleccione el tamaño de matera</b></span>
          <div>
            1
          </div>
          <div>
            2
          </div>

        </div>
      </div>

    </div>
  )
}

export default Pot
