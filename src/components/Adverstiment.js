import React from 'react';
import mosaico from "../assets/images/mosaico.jpg"

const Adverstaiment = () => {
  return (
    <div id="adverstiment">
      <div className='adverstiment-center'>
        <div className='img-guia'>
          <img src= {mosaico} className='img-mosaico' alt='mosaico-plantas' />       
        </div>
        <div className='img-paso'>
          <ul>
            <li>imagen1</li>
            <li>imagen2</li>
            <li>imagen3</li>
          </ul>

        </div>
      </div>

    </div>
  )
}

export default Adverstaiment
