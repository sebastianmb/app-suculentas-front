import React from 'react';
import mosaico from "../assets/images/mosaico.jpg"
import paso1 from "../assets/images/paso1.svg"
import paso2 from "../assets/images/paso2.svg"
import paso3 from "../assets/images/paso3.svg"

const Adverstaiment = () => {
  return (
    <div id="adverstiment">
      <div className='adverstiment-center'>
        <div className='img-guia'>
          <img src={mosaico} className='img-mosaico' alt='mosaico-plantas' />
        </div>
        <div className='img-paso'>
          <ul>
            <li>
              <img src={paso1} className='img-pasos' alt='mosaico-plantas' />
            </li>
            <li>
              <img src={paso2} className='img-pasos' alt='seleccion' />
            </li>

            <li>
              <img src={paso3} className='img-pasos' alt='envio' />
            </li>
          </ul>

        </div>
      </div>

    </div>
  )
}

export default Adverstaiment
