import React from 'react'
import CheckboxList from './CheckboxList';



const Plantthree = () => {
  return (
    <div id='suculentas'>
      <div className='center-suculentas'>
        <div className='mostrario'>
          <div>
            <span>
              <CheckboxList />
            </span>


          </div>
        </div>
        <div className='seleccion'>
          <span className='suculentas-base'><b>Seleccione suculentas altas</b></span>
          
        </div>
      </div>


    </div>
  )
}

export default Plantthree
