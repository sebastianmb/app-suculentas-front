import React from 'react'
import potgra from "../assets/images/potgra.svg";

const Plantone = () => {
  return (
    <div id='suculentas'>
      <div className='center-suculentas'>
        <div className='mostrario'>
          <div>
            <button>
              <img src={potgra}/>
            </button>
            <button>
              2
            </button>
            <button>
              3
            </button>
            <button>
              4
            </button>
          </div>
        </div>
        <div className='seleccion'>
          <span className='suculentas-base'><b>Seleccione suculentas base</b></span>
        </div>
      </div>


    </div>
  )
}

export default Plantone
