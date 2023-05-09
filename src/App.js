import './App.css';


//Components
import Header from './components/Header';
import Slider from './components/Slider';
import Adverstiment from './components/Adverstiment';
import Pot from './components/Pot';
import Plantone from './components/Plantone';
import Planttwo from './components/Planttwo';
import Plantthree from './components/Plantthree';
import Footer from './components/Footer/Index'


function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header/>


      {/*Slider*/}
      <Slider/>

      {/*Home*/}
      <Adverstiment/>


      {/*Pot*/}
      <Pot/>

      {/*Selection1*/}
      <Plantone/>

      {/*Selection2*/}
      <Planttwo/>

      {/*Selection3*/}
      <Plantthree/>

      {/*Commerce*/}
      

      {/*Footer*/}
      <Footer/>

      
    </div>
  );
}

export default App;
