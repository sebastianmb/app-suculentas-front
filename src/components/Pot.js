import React from 'react';
import pot from "../assets/images/pot.jpg";
import potpeq from "../assets/images/potpeq.svg";
import potmed from "../assets/images/potmed.svg";
import potgra from "../assets/images/potgra.svg";

const Pot = () => {
  return (
    <div id='suculentas'>
      <div className='center-suculentas'>
        <div className='mostrario'>
          <img src={pot} alt='matera' className='' />
        </div>

        <div className='seleccion'>
          <span><b>Seleccione el tamaño de matera</b></span>
          <div id='size-pot'>
            <button>
              <img src={potpeq} alt='potpeq' />
            </button>
            <button>
              <img src={potmed} alt='potpeq' />
            </button>
            <button>
              <img src={potgra} alt='potgra' />
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Pot
