import React from 'react'
import CheckboxList from './CheckboxList';
import ConfirmButton from './ConfirmButton';

const handleConfirm = () => {
  // Lógica a ejecutar cuando se confirma
  console.log('Confirmado');
};


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
          <h3>Confirmación</h3>
          <ConfirmButton message="¿Estás seguro?" onConfirm={handleConfirm} />

        </div>
      </div>


    </div>
  )
}

export default Plantthree
