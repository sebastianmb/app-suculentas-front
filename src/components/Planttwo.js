import React from 'react'
import CheckboxList from './CheckboxList';
const Planttwo = () => {
  return (
    <div id='suculentas'>
      <div className='center-suculentas'>
        <div className='mostrario'>
          <div>
            <CheckboxList />
          </div>
        </div>
        <div className='seleccion'>
          <span className='suculentas-base'><b>Seleccione suculentas</b></span>
        </div>
      </div>


    </div>
  )
}

export default Planttwo
