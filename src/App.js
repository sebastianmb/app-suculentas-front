import './App.css';


//Components
import Header from './components/Header';
import Slider from './components/Slider';
import Adverstiment from './components/Adverstiment';
import Pot from './components/Pot';
import Footer from './components/Footer'
import CheckboxList from './components/CheckboxList';
import ConfirmButton from './components/ConfirmButton';

const handleConfirm = () => {
  // Lógica a ejecutar cuando se confirma
  console.log('Confirmado');
};

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header />


      {/*Slider*/}
      <Slider />

      {/*Home*/}
      <Adverstiment />


      {/*Pot*/}
      <Pot />
      {/*plants 1- 2- 3*/}
      <div id='suculentas'>
        <div className='center-suculentas'>
          <div className='mostrario'>
            <div >
              <CheckboxList />
            </div>
          </div>
          <div className='seleccion'>
            <span className='suculentas-base'><b>Seleccione suculentas base</b></span>
            <div>
              <h3>Confirmación</h3>
              <ConfirmButton message="¿Estás seguro?" onConfirm={handleConfirm} />
            </div>
          </div>
        </div>


      </div>

      <div id='suculentas'>
      <div className='center-suculentas'>
        <div className='mostrario'>
          <div >
            <CheckboxList />
          </div>
        </div>
        <div className='seleccion'>
          <span className='suculentas-base'><b>Seleccione suculentas base</b></span>
          <div>
            <h3>Confirmación</h3>
            <ConfirmButton message="¿Estás seguro?" onConfirm={handleConfirm} />
          </div>
        </div>
      </div>


    </div>
    <div id='suculentas'>
      <div className='center-suculentas'>
        <div className='mostrario'>
          <div >
            <CheckboxList />
          </div>
        </div>
        <div className='seleccion'>
          <span className='suculentas-base'><b>Seleccione suculentas base</b></span>
          <div>
            <h3>Confirmación</h3>
            <ConfirmButton message="¿Estás seguro?" onConfirm={handleConfirm} />
          </div>
        </div>
      </div>


    </div>

      {/*Commerce*/}


      {/*Footer*/}
      <Footer />



    </div>
  );
}

export default App;
