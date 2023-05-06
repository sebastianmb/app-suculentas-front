import './App.css';


//Components
import Header from './components/Header/Index';
import Slider from './components/Slider/Index';
import Home from './components/Home/Index';
import Ecommerce from './components/Ecommerce/Index';
import Footer from './components/Footer/Index'


function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header/>


      {/*Slider*/}
      <Slider/>

      {/*Home*/}
      <Home/>

      {/*Commerce*/}
      <Ecommerce/>

      {/*Footer*/}
      <Footer/>

      
    </div>
  );
}

export default App;
