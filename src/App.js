import './App.css';


//Components
import Header from './components/Header';
import Slider from './components/Slider';
import Adverstiment from './components/Adverstiment';
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

      {/*Commerce*/}
      

      {/*Footer*/}
      <Footer/>

      
    </div>
  );
}

export default App;
